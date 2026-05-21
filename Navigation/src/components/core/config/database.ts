// Base de datos simulada en memoria + AsyncStorage
// Reemplaza react-native-quick-sqlite por compatibilidad con RN 0.85

import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@db_users';
const PRODUCTS_KEY = '@db_products';

// Simulación de la interfaz de quick-sqlite para no cambiar los repositorios
const createDb = () => {
    let users: any[] = [];
    let products: any[] = [];
    let initialized = false;

    const loadFromStorage = async () => {
        if (initialized) return;
        try {
            const usersData = await AsyncStorage.getItem(USERS_KEY);
            const productsData = await AsyncStorage.getItem(PRODUCTS_KEY);
            users = usersData ? JSON.parse(usersData) : [];
            products = productsData ? JSON.parse(productsData) : [];
        } catch (e) {
            users = [];
            products = [];
        }
        initialized = true;
    };

    const saveUsers = async () => {
        await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    };

    const saveProducts = async () => {
        await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    };

    return {
        _load: loadFromStorage,
        execute: (query: string, params: any[] = []): any => {
            const q = query.trim().toUpperCase();

            // INSERT INTO users
            if (q.startsWith('INSERT INTO USERS')) {
                const [nombre, username, correo, fechaNacimiento, contrasena] = params;
                const id = users.length > 0 ? Math.max(...users.map((u: any) => u.id)) + 1 : 1;
                const newUser = { id, nombre, username, correo, fechaNacimiento, contrasena };
                users.push(newUser);
                saveUsers();
                return { insertId: id };
            }

            // SELECT users WHERE username
            if (q.startsWith('SELECT') && q.includes('USERS') && q.includes('USERNAME')) {
                const username = params[0];
                const found = users.find((u: any) => u.username === username) ?? null;
                return { rows: { _array: found ? [found] : [] } };
            }

            // DELETE FROM users
            if (q.startsWith('DELETE') && q.includes('USERS')) {
                const id = params[0];
                users = users.filter((u: any) => u.id !== id);
                saveUsers();
                return {};
            }

            // INSERT INTO products
            if (q.startsWith('INSERT INTO PRODUCTS')) {
                const [nombre, sku, cantidadStock, costoCompra, precioVenta, descripcion] = params;
                const id = products.length > 0 ? Math.max(...products.map((p: any) => p.id)) + 1 : 1;
                const newProduct = { id, nombre, sku, cantidadStock, costoCompra, precioVenta, descripcion };
                products.push(newProduct);
                saveProducts();
                return { insertId: id };
            }

            // SELECT all products
            if (q.startsWith('SELECT') && q.includes('PRODUCTS') && !q.includes('WHERE')) {
                const sorted = [...products].reverse();
                return { rows: { _array: sorted } };
            }

            // SELECT products WHERE nombre LIKE
            if (q.startsWith('SELECT') && q.includes('PRODUCTS') && q.includes('LIKE')) {
                const search = (params[0] as string).replace(/%/g, '').toLowerCase();
                const filtered = products.filter((p: any) =>
                    p.nombre.toLowerCase().includes(search)
                ).reverse();
                return { rows: { _array: filtered } };
            }

            // DELETE FROM products
            if (q.startsWith('DELETE') && q.includes('PRODUCTS')) {
                const id = params[0];
                products = products.filter((p: any) => p.id !== id);
                saveProducts();
                return {};
            }

            // CREATE TABLE (ignorar, no se necesita)
            if (q.startsWith('CREATE TABLE')) {
                return {};
            }

            return { rows: { _array: [] } };
        }
    };
};

export const db = createDb();

export const setupDatabase = async () => {
    await db._load();
};