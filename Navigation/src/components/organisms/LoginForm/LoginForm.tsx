import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";


interface LoginFormProps{
    onSubmit: () => void;
    disableAction: boolean;
}

const LoginForm = (
    {
        onSubmit,
        disableAction
    }:LoginFormProps
) => {
    return(
        <View>
            <Text>Formulario Login</Text>
            <Button title="Iniciar Sesion" onSubmit={onSubmit} disabled={disableAction}></Button>
        </View>
    )
}

export default LoginForm;