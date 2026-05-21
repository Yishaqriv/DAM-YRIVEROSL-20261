import { StyleSheet } from "react-native";

export const DashboardHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    welcome: {
        fontSize: 22,
        fontWeight: "800",
        color: "#007680",
    },
    username: {
        fontSize: 22,
        fontWeight: "800",
        color: "#222",
    },
    logoutBtn: {
        backgroundColor: "#ef7f00",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    logoutText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
});
