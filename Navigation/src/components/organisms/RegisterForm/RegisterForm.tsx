import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";

interface RegisterFormProps{
    onSubmit: () => void;
    disabledAction: boolean,
}


const RegisterForm = (
    {
        onSubmit,
        disabledAction

    }: RegisterFormProps
) => {
    return(
        <View>
            <Text>Formulario Registro</Text>
            <Button
                title="Registrarme"
                onSubmit={onSubmit}
                disabled={disabledAction}>
                
            </Button>
        </View>
    )
}

export default RegisterForm