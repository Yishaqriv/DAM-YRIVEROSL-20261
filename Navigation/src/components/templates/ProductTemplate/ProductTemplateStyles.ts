import { StyleSheet } from "react-native";

export const ProductTemplateStyles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    topBar: {
        backgroundColor: "#007680",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 24,
    },
    accent: {
        width: 32,
        height: 4,
        backgroundColor: "#ef7f00",
        borderRadius: 2,
        marginBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "900",
        color: "#fff",
        letterSpacing: -0.5,
        lineHeight: 30,
    },
    subtitle: {
        fontSize: 13,
        color: "rgba(255,255,255,0.7)",
        marginTop: 6,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
});
