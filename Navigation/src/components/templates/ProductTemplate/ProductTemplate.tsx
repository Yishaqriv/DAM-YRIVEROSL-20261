import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { ProductTemplateStyles } from "./ProductTemplateStyles";

interface ProductTemplateProps {
    children: React.ReactNode;
}

const ProductTemplate = ({ children }: ProductTemplateProps) => {
    return (
        <SafeAreaView style={ProductTemplateStyles.safe}>
            <View style={ProductTemplateStyles.topBar}>
                <View style={ProductTemplateStyles.accent} />
                <Text style={ProductTemplateStyles.title}>REGISTRAR{"\n"}PRODUCTO</Text>
                <Text style={ProductTemplateStyles.subtitle}>Create a new product listing</Text>
            </View>
            <ScrollView
                style={ProductTemplateStyles.scroll}
                contentContainerStyle={ProductTemplateStyles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductTemplate;
