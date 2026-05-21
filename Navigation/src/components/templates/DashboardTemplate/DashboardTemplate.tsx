import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { DashboardTemplateStyles } from "./DashboardTemplateStyles";

interface DashboardTemplateProps {
    header: React.ReactNode;
    actions: React.ReactNode;
    children: React.ReactNode;
}

const DashboardTemplate = ({ header, actions, children }: DashboardTemplateProps) => {
    return (
        <SafeAreaView style={DashboardTemplateStyles.safe}>
            <View style={DashboardTemplateStyles.headerContainer}>
                {header}
                {actions}
            </View>
            <ScrollView
                style={DashboardTemplateStyles.scroll}
                contentContainerStyle={DashboardTemplateStyles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export default DashboardTemplate;
