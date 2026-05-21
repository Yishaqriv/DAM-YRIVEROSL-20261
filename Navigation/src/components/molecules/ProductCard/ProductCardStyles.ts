import { StyleSheet } from "react-native";

export const ProductCardStyles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1.5,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    info: {
        flex: 1,
    },
    nombre: {
        fontSize: 15,
        fontWeight: "700",
        color: "#222",
        marginBottom: 2,
    },
    detail: {
        fontSize: 13,
        color: "#666",
    },
    ganancia: {
        fontSize: 13,
        color: "#444",
        marginTop: 2,
    },
    venderBtn: {
        backgroundColor: "#007680",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 14,
        marginLeft: 12,
    },
    venderBtnPressed: {
        opacity: 0.75,
    },
    venderText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0.8,
    },
});
