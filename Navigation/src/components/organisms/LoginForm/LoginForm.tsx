import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Button, Input } from "../../atoms";
import { LoginFormStyles } from "./LoginFormStyles";

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
    onSignUp: () => void;
    disableAction: boolean;
}

const LoginForm = ({ onSubmit, onSignUp, disableAction }: LoginFormProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        onSubmit(username, password);
    };

    return (
        <View style={LoginFormStyles.container}>
            <Input
                label="Username"
                placeholder="johndoe"
                value={username}
                onChangeText={setUsername}
            />
            <Input
                label="Password"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={LoginFormStyles.forgotBtn}>
                <Text style={LoginFormStyles.forgotText}>FORGOT PASSWORD?</Text>
            </Pressable>
            <Button
                title="LOGIN"
                onSubmit={handleSubmit}
                disabled={disableAction}
                variant="primary"
            />
            <View style={LoginFormStyles.signupRow}>
                <Text style={LoginFormStyles.signupText}>Don't have an account? </Text>
                <Pressable onPress={onSignUp}>
                    <Text style={LoginFormStyles.signupLink}>SIGN UP</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginForm;
