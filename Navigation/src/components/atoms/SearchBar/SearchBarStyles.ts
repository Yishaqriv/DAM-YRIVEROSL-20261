import { StyleSheet } from "react-native";

export const SearchBarStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#ddd",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 14,
        height: 44,
        marginBottom: 16,
    },
    icon: {
        fontSize: 16,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "#222",
    },
});
