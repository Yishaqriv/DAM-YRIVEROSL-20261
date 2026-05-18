import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepositiry from "../../repositories/AuthRepository/AuthRepository";


const AuthService = {

    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);

        if(userExist){
            console.error(`Usuarion con username: ${user.username}, ya existe `);
            throw new Error ('El usuario ya existe')
        }

        const id = UserRepository.create(user);
        const newUser = {...user, id};

        await AuthRepositiry.save(user);

        return newUser;
    }
 

}

export default AuthService;