import { StyleSheet } from "react-native";

export const LoginFormStyles = StyleSheet.create({
    container: {
        width: "100%",
    },
    forgotBtn: {
        alignSelf: "flex-end",
        marginBottom: 16,
        marginTop: -4,
    },
    forgotText: {
        fontSize: 11,
        color: "#007680",
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    signupRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    signupText: {
        fontSize: 13,
        color: "#666",
    },
    signupLink: {
        fontSize: 13,
        color: "#ef7f00",
        fontWeight: "700",
    },
});
