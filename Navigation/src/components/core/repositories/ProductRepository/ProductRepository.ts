import { db } from "../../config";
import { Product } from "../../entities";

const ProductRepository = {
    create: (product: Product): number | undefined => {
        const query = `INSERT INTO products (nombre, sku, cantidadStock, costoCompra, precioVenta, descripcion) VALUES(?,?,?,?,?,?)`;
        const result = db.execute(query, [
            product.nombre,
            product.sku,
            product.cantidadStock,
            product.costoCompra,
            product.precioVenta,
            product.descripcion ?? "",
        ]);
        return result.insertId;
    },

    findAll: (): Product[] => {
        const query = `SELECT * FROM products ORDER BY id DESC`;
        const { rows } = db.execute(query, []);
        return rows?._array ?? [];
    },

    findByName: (nombre: string): Product[] => {
        const query = `SELECT * FROM products WHERE nombre LIKE ? ORDER BY id DESC`;
        const { rows } = db.execute(query, [`%${nombre}%`]);
        return rows?._array ?? [];
    },

    delete: (id: number): void => {
        const query = `DELETE FROM products WHERE id = ?`;
        db.execute(query, [id]);
    },
};

export default ProductRepository;
