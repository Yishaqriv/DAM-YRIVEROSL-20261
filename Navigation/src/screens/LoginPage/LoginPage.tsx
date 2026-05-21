import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { AuthService } from "../../components/core/services";
import { AuthStackParamList } from "../../routes";

type LoginNavProp = NativeStackNavigationProp<AuthStackParamList>;

interface LoginPageProps {
    onLoginSuccess: () => void;
}

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
    const navigation = useNavigation<LoginNavProp>();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username: string, password: string) => {
        setLoading(true);
        try {
            await AuthService.login(username, password);
            onLoginSuccess();
        } catch (error: any) {
            Alert.alert("Error", error.message ?? "No se pudo iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = () => {
        navigation.navigate("Register");
    };

    return (
        <AuthTemplate title="Login">
            <LoginForm
                onSubmit={handleLogin}
                onSignUp={handleSignUp}
                disableAction={loading}
            />
        </AuthTemplate>
    );
};

export default LoginPage;
