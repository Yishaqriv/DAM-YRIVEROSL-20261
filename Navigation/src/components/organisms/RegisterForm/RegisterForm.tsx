import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Button, Input } from "../../atoms";

interface RegisterFormProps {
    onSubmit: (nombre: string, username: string, correo: string, contrasena: string) => void;
    onBack: () => void;
    disabledAction: boolean;
}

const RegisterForm = ({ onSubmit, onBack, disabledAction }: RegisterFormProps) => {
    const [nombre, setNombre] = useState("");
    const [username, setUsername] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    return (
        <View>
            <Input label="Nombre" placeholder="Juan Pérez" value={nombre} onChangeText={setNombre} />
            <Input label="Username" placeholder="juanperez" value={username} onChangeText={setUsername} />
            <Input label="Correo" placeholder="juan@email.com" value={correo} onChangeText={setCorreo} keyboardType="email-address" />
            <Input label="Contraseña" placeholder="••••••••" value={contrasena} onChangeText={setContrasena} secureTextEntry />
            <Button title="Registrarme" onSubmit={() => onSubmit(nombre, username, correo, contrasena)} disabled={disabledAction} variant="primary" />
            <View style={{ marginTop: 10 }}>
                <Button title="← Volver al Login" onSubmit={onBack} disabled={false} variant="outline" />
            </View>
        </View>
    );
};

export default RegisterForm;