import React from "react";
import { View, Text, Pressable } from "react-native";
import { ProductCardStyles } from "./ProductCardStyles";
import { Product } from "../../core/entities";

interface ProductCardProps {
    product: Product;
    onVender: (product: Product) => void;
}

const ProductCard = ({ product, onVender }: ProductCardProps) => {
    const ganancia = product.precioVenta - product.costoCompra;

    return (
        <View style={ProductCardStyles.card}>
            <View style={ProductCardStyles.info}>
                <Text style={ProductCardStyles.nombre}>{product.nombre}</Text>
                <Text style={ProductCardStyles.detail}>SKU {product.sku}</Text>
                <Text style={ProductCardStyles.detail}>Stock: {product.cantidadStock}</Text>
                <Text style={ProductCardStyles.ganancia}>Ganancia: ${ganancia.toFixed(2)}</Text>
            </View>
            <Pressable
                style={({ pressed }) => [ProductCardStyles.venderBtn, pressed && ProductCardStyles.venderBtnPressed]}
                onPress={() => onVender(product)}
            >
                <Text style={ProductCardStyles.venderText}>VENDER</Text>
            </Pressable>
        </View>
    );
};

export default ProductCard;
