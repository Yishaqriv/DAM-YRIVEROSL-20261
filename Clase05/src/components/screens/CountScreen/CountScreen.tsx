import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";
import React from "react";

type CountScreenProps = {
    label: string;
    OnPress: () => void;
}

export const CountScreen: React.FC<CountScreenProps> = (
    { label, OnPress }
) => {
    return(
        <Pressable style={stylesCountScreen.button} onPress={OnPress}>
            <Text style={stylesCountScreen.labelText}>
                {label}
            </Text>
        </Pressable>
    );
};