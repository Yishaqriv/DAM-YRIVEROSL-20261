import { StyleSheet } from "react-native";

export const ButtonStyles = StyleSheet.create({
    base: {
        borderRadius: 8,
        paddingVertical: 13,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    fullWidth: {
        width: "100%",
    },
    primary: {
        backgroundColor: "#007680",
    },
    secondary: {
        backgroundColor: "#ef7f00",
    },
    outline: {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: "#007680",
    },
    danger: {
        backgroundColor: "#c0392b",
    },
    pressed: {
        opacity: 0.8,
    },
    disabled: {
        opacity: 0.4,
    },
    text: {
        fontSize: 14,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    primaryText: {
        color: "#fff",
    },
    secondaryText: {
        color: "#fff",
    },
    outlineText: {
        color: "#007680",
    },
    dangerText: {
        color: "#fff",
    },
});
