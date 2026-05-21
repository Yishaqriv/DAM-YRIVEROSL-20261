export interface Product {
    id?: number;
    nombre: string;
    sku: string;
    cantidadStock: number;
    costoCompra: number;
    precioVenta: number;
    descripcion?: string;
}
