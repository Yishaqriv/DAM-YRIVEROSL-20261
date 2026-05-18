import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";
import { AuthService } from "../../components/core/services";




const RegisterPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();


    const handleRegister = async () => {
        console.log("Tap en registro");

        const dummyUser = {
            nombre : 'Pepito',
            username : 'Pepito_unbosque',
            correo: 'pepito@unbosque.edu.co',
            fechaNacimeinto: '10/10/2010',
            contrasena: 'seguridad123'
        }

        await AuthService.register(dummyUser);


        navigation.navigate("Login");
    }
    return (
        <AuthTemplate
            title="Register"
            subtitle="Create a new account">
            <RegisterForm 
                onSubmit={handleRegister}
                disabledAction={false}/>
        </AuthTemplate>
    )
}

export default RegisterPage;