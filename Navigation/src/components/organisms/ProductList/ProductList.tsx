import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ProductCard } from "../../molecules";
import { Product } from "../../core/entities";
import { ProductListStyles } from "./ProductListStyles";

interface ProductListProps {
    products: Product[];
    onVender: (product: Product) => void;
}

const ProductList = ({ products, onVender }: ProductListProps) => {
    if (products.length === 0) {
        return (
            <View style={ProductListStyles.empty}>
                <Text style={ProductListStyles.emptyText}>No hay productos registrados aún.</Text>
            </View>
        );
    }

    return (
        <View>
            {products.map((product, index) => (
                <ProductCard key={product.id ?? index} product={product} onVender={onVender} />
            ))}
        </View>
    );
};

export default ProductList;
