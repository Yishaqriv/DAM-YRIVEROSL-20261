import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductTemplate } from "../../components/templates";
import { ProductForm } from "../../components/organisms";
import { ProductService } from "../../components/core/services";
import { Product } from "../../components/core/entities";
import { AppStackParamList } from "../../routes";

type RegisterProductNavProp = NativeStackNavigationProp<AppStackParamList>;

const RegisterProductPage = () => {
    const navigation = useNavigation<RegisterProductNavProp>();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (product: Product) => {
        if (!product.nombre || !product.sku) {
            Alert.alert("Error", "Nombre y SKU son obligatorios");
            return;
        }
        setLoading(true);
        try {
            ProductService.create(product);
            Alert.alert("¡Éxito!", "Producto registrado correctamente", [
                { text: "OK", onPress: () => navigation.navigate("Dashboard") },
            ]);
        } catch (error: any) {
            Alert.alert("Error", error.message ?? "No se pudo registrar el producto");
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigation.navigate("Dashboard");
    };

    return (
        <ProductTemplate>
            <ProductForm
                onSubmit={handleSubmit}
                onBack={handleBack}
                disabledAction={loading}
            />
        </ProductTemplate>
    );
};

export default RegisterProductPage;
