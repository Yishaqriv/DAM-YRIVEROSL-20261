import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { AuthService } from "../../components/core/services";
import { AuthStackParamList } from "../../routes";

type RegisterNavProp = NativeStackNavigationProp<AuthStackParamList>;

const RegisterPage = () => {
    const navigation = useNavigation<RegisterNavProp>();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (nombre: string, username: string, correo: string, contrasena: string) => {
        setLoading(true);
        try {
            await AuthService.register({
                nombre,
                username,
                correo,
                fechaNacimeinto: "",
                contrasena,
            });
            Alert.alert("¡Listo!", "Usuario creado. Ya puedes iniciar sesión.", [
                { text: "OK", onPress: () => navigation.navigate("Login") },
            ]);
        } catch (error: any) {
            Alert.alert("Error", error.message ?? "No se pudo registrar");
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => navigation.navigate("Login");

    return (
        <AuthTemplate title="Register" subtitle="Create a new account">
            <RegisterForm onSubmit={handleRegister} onBack={handleBack} disabledAction={loading} />
        </AuthTemplate>
    );
};

export default RegisterPage;