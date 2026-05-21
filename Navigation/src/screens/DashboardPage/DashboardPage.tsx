import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DashboardTemplate } from "../../components/templates";
import { DashboardHeader, ProductList } from "../../components/organisms";
import { Button, SearchBar } from "../../components/atoms";
import { AuthService, ProductService } from "../../components/core/services";
import { Product, User } from "../../components/core/entities";
import { AppStackParamList } from "../../routes";
import { DashboardPageStyles } from "./DashboardPageStyles";

type DashboardNavProp = NativeStackNavigationProp<AppStackParamList>;

interface DashboardPageProps {
    onLogout: () => void;
}

const DashboardPage = ({ onLogout }: DashboardPageProps) => {
    const navigation = useNavigation<DashboardNavProp>();
    const [user, setUser] = useState<User | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        AuthService.getSession().then(setUser);
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadProducts();
        }, [])
    );

    const loadProducts = () => {
        const all = ProductService.getAll();
        setProducts(all);
    };

    const handleSearch = (text: string) => {
        setSearch(text);
        if (text.trim() === "") {
            setProducts(ProductService.getAll());
        } else {
            setProducts(ProductService.search(text));
        }
    };

    const handleLogout = async () => {
        Alert.alert("Cerrar sesión", "¿Estás seguro?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Sí, salir",
                onPress: async () => {
                    await AuthService.logout();
                    onLogout();
                },
            },
        ]);
    };

    const handleNuevoProducto = () => {
        navigation.navigate("RegisterProduct");
    };

    const handleVender = (product: Product) => {
        Alert.alert("Venta", `Vender: ${product.nombre}`);
    };

    return (
        <DashboardTemplate
            header={
                <DashboardHeader
                    username={user?.nombre ?? "Usuario"}
                    onLogout={handleLogout}
                />
            }
            actions={
                <View>
                    <Button
                        title="Nuevo Producto"
                        onSubmit={handleNuevoProducto}
                        disabled={false}
                        variant="secondary"
                    />
                    <View style={DashboardPageStyles.searchWrapper}>
                        <SearchBar
                            value={search}
                            onChangeText={handleSearch}
                        />
                    </View>
                </View>
            }
        >
            <Text style={DashboardPageStyles.sectionTitle}>RECENT PRODUCTS</Text>
            <ProductList products={products} onVender={handleVender} />
        </DashboardTemplate>
    );
};

export default DashboardPage;
