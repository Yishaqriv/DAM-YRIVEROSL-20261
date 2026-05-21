import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    label: {
        fontSize: 11,
        fontWeight: "700",
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        marginBottom: 6,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#fafafa",
        paddingHorizontal: 12,
    },
    inputWrapperFocused: {
        borderColor: "#007680",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 14,
        color: "#222",
    },
    multiline: {
        height: 80,
        textAlignVertical: "top",
        paddingTop: 10,
    },
    leftIcon: {
        marginRight: 8,
        fontSize: 16,
    },
    eyeButton: {
        padding: 4,
    },
    eyeIcon: {
        fontSize: 16,
    },
});
