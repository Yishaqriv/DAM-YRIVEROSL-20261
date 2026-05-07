import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";


interface LoginFormProps{
    onSubmit: () => void;
}

const LoginForm = (
    {onSubmit}:LoginFormProps
) => {
    return(
        <View>
            <Text>Formulario Login</Text>
            <Button title="Iniciar Sesion" onSubmit={onSubmit}></Button>
        </View>
    )
}

export default LoginForm;