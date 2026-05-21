import { Product } from "../../entities";
import { ProductRepository } from "../../repositories";

const ProductService = {
    create: (product: Product): Product => {
        const id = ProductRepository.create(product);
        return { ...product, id };
    },

    getAll: (): Product[] => {
        return ProductRepository.findAll();
    },

    search: (nombre: string): Product[] => {
        return ProductRepository.findByName(nombre);
    },

    delete: (id: number): void => {
        ProductRepository.delete(id);
    },
};

export default ProductService;
