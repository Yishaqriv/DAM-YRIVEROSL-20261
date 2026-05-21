import React from "react";
import { View, TextInput, Text } from "react-native";
import { SearchBarStyles } from "./SearchBarStyles";

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar = ({ placeholder = "Buscar productos...", value, onChangeText }: SearchBarProps) => {
    return (
        <View style={SearchBarStyles.container}>
            <Text style={SearchBarStyles.icon}>🔍</Text>
            <TextInput
                style={SearchBarStyles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default SearchBar;
