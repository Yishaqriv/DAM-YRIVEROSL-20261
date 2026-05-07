import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes";



const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

const handleLogin = () => {
    console.log("Tap en iniciar sesion")
    navigation.navigate('Register');
}


const LoginPage = () => {
    return (
        <AuthTemplate
            title= "Login">
            <LoginForm onSubmit={handleLogin}/>
            
        </AuthTemplate>

    )
}

export default LoginPage;