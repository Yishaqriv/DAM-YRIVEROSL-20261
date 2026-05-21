import React, { useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import { InputStyles } from "./InputStyles";

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "numeric" | "email-address" | "decimal-pad";
    multiline?: boolean;
    numberOfLines?: number;
    leftIcon?: string;
}

const Input = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = "default",
    multiline = false,
    numberOfLines = 1,
    leftIcon,
}: InputProps) => {
    const [isSecure, setIsSecure] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={InputStyles.container}>
            {label && <Text style={InputStyles.label}>{label}</Text>}
            <View style={[InputStyles.inputWrapper, isFocused && InputStyles.inputWrapperFocused]}>
                {leftIcon && <Text style={InputStyles.leftIcon}>{leftIcon}</Text>}
                <TextInput
                    style={[InputStyles.input, multiline && InputStyles.multiline]}
                    placeholder={placeholder}
                    placeholderTextColor="#aaa"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {secureTextEntry && (
                    <Pressable onPress={() => setIsSecure(!isSecure)} style={InputStyles.eyeButton}>
                        <Text style={InputStyles.eyeIcon}>{isSecure ? "👁" : "🙈"}</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default Input;
