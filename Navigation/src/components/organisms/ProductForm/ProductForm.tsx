import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input } from "../../atoms";
import { Product } from "../../core/entities";
import { ProductFormStyles } from "./ProductFormStyles";

interface ProductFormProps {
    onSubmit: (product: Product) => void;
    onBack: () => void;
    disabledAction: boolean;
}

const ProductForm = ({ onSubmit, onBack, disabledAction }: ProductFormProps) => {
    const [nombre, setNombre] = useState("");
    const [sku, setSku] = useState("");
    const [cantidadStock, setCantidadStock] = useState("");
    const [costoCompra, setCostoCompra] = useState("");
    const [precioVenta, setPrecioVenta] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = () => {
        const product: Product = {
            nombre,
            sku,
            cantidadStock: parseInt(cantidadStock) || 0,
            costoCompra: parseFloat(costoCompra) || 0,
            precioVenta: parseFloat(precioVenta) || 0,
            descripcion,
        };
        onSubmit(product);
    };

    return (
        <View style={ProductFormStyles.container}>
            <Input
                label="Nombre del Producto"
                placeholder=""
                value={nombre}
                onChangeText={setNombre}
            />
            <Input
                label="SKU / Código"
                placeholder=""
                value={sku}
                onChangeText={setSku}
            />
            <Input
                label="Cantidad en Stock"
                placeholder=""
                value={cantidadStock}
                onChangeText={setCantidadStock}
                keyboardType="numeric"
            />
            <View style={ProductFormStyles.row}>
                <View style={ProductFormStyles.half}>
                    <Input
                        label="Costo de Compra"
                        placeholder="$"
                        value={costoCompra}
                        onChangeText={setCostoCompra}
                        keyboardType="decimal-pad"
                    />
                </View>
                <View style={ProductFormStyles.spacer} />
                <View style={ProductFormStyles.half}>
                    <Input
                        label="Precio de Venta ($)"
                        placeholder=""
                        value={precioVenta}
                        onChangeText={setPrecioVenta}
                        keyboardType="decimal-pad"
                    />
                </View>
            </View>
            <Input
                label="Descripción"
                placeholder=""
                value={descripcion}
                onChangeText={setDescripcion}
                multiline
                numberOfLines={3}
            />
            <Button
                title="Crear Producto"
                onSubmit={handleSubmit}
                disabled={disabledAction}
                variant="primary"
            />
            <View style={ProductFormStyles.backRow}>
                <Button
                    title="← Back to Catalog"
                    onSubmit={onBack}
                    disabled={false}
                    variant="outline"
                />
            </View>
        </View>
    );
};

export default ProductForm;
