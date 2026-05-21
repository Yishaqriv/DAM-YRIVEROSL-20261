import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ButtonStyles } from "./ButtonStyles";

interface ButtonProps {
    title: string;
    disabled?: boolean;
    onSubmit: () => void;
    variant?: "primary" | "secondary" | "outline" | "danger";
    fullWidth?: boolean;
}

const Button = ({ title, disabled = false, onSubmit, variant = "primary", fullWidth = true }: ButtonProps) => {
    return (
        <Pressable
            onPress={onSubmit}
            disabled={disabled}
            style={({ pressed }) => [
                ButtonStyles.base,
                ButtonStyles[variant],
                fullWidth && ButtonStyles.fullWidth,
                pressed && ButtonStyles.pressed,
                disabled && ButtonStyles.disabled,
            ]}
        >
            <Text style={[ButtonStyles.text, ButtonStyles[`${variant}Text`]]}>{title}</Text>
        </Pressable>
    );
};

export default Button;
