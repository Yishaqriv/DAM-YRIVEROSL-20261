import { StyleSheet } from "react-native";

export const AuthTemplateStyles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#007680",
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
    },
    header: {
        marginBottom: 24,
        paddingLeft: 4,
    },
    accent: {
        width: 40,
        height: 4,
        backgroundColor: "#ef7f00",
        borderRadius: 2,
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: "900",
        color: "#fff",
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.7)",
        marginTop: 4,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 8,
    },
});
