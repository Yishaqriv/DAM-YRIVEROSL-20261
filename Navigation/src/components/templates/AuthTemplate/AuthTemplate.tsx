import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { AuthTemplateStyles } from "./AuthTemplateStyles";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
    return (
        <SafeAreaView style={AuthTemplateStyles.safe}>
            <ScrollView contentContainerStyle={AuthTemplateStyles.scroll} keyboardShouldPersistTaps="handled">
                <View style={AuthTemplateStyles.header}>
                    <View style={AuthTemplateStyles.accent} />
                    <Text style={AuthTemplateStyles.title}>{title}</Text>
                    {subtitle && <Text style={AuthTemplateStyles.subtitle}>{subtitle}</Text>}
                </View>
                <View style={AuthTemplateStyles.card}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AuthTemplate;
