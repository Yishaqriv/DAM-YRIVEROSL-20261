import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {
    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);
        if (userExist) {
            console.error(`Usuario con username: ${user.username}, ya existe`);
            throw new Error("El usuario ya existe");
        }
        const id = UserRepository.create(user);
        const newUser = { ...user, id };
        await AuthRepository.save(user);
        return newUser;
    },

    login: async (username: string, contrasena: string): Promise<User> => {
        const user = UserRepository.findByUsername(username);
        if (!user) throw new Error("Usuario no encontrado");
        if (user.contrasena !== contrasena) throw new Error("Contraseña incorrecta");
        await AuthRepository.save(user);
        return user;
    },

    logout: async (): Promise<void> => {
        AuthRepository.delete();
    },

    getSession: async (): Promise<User | null> => {
        return AuthRepository.get();
    },
};

export default AuthService;
