import React from "react";
import { View, Text, Pressable } from "react-native";
import { DashboardHeaderStyles } from "./DashboardHeaderStyles";

interface DashboardHeaderProps {
    username: string;
    onLogout: () => void;
}

const DashboardHeader = ({ username, onLogout }: DashboardHeaderProps) => {
    return (
        <View style={DashboardHeaderStyles.container}>
            <View>
                <Text style={DashboardHeaderStyles.welcome}>Bienvenido,</Text>
                <Text style={DashboardHeaderStyles.username}>{username}</Text>
            </View>
            <Pressable onPress={onLogout} style={DashboardHeaderStyles.logoutBtn}>
                <Text style={DashboardHeaderStyles.logoutText}>Cerrar Sesión</Text>
            </Pressable>
        </View>
    );
};

export default DashboardHeader;
