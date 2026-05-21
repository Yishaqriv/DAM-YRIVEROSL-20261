import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthStackParamList, AppStackParamList } from "./routes";
import { LoginPage, RegisterPage, DashboardPage, RegisterProductPage } from "./screens";
import { AuthService } from "./components/core/services";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkSession = async () => {
        try {
            const user = await AuthService.getSession();
            setIsLoggedIn(!!user);
        } catch {
            setIsLoggedIn(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#007680" }}>
                <ActivityIndicator size="large" color="#ef7f00" />
            </View>
        );
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {isLoggedIn ? (
                    <AppStack.Navigator screenOptions={{ headerShown: false }}>
                        <AppStack.Screen name="Dashboard">
                            {() => <DashboardPage onLogout={() => setIsLoggedIn(false)} />}
                        </AppStack.Screen>
                        <AppStack.Screen name="RegisterProduct" component={RegisterProductPage} />
                    </AppStack.Navigator>
                ) : (
                    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                        <AuthStack.Screen name="Login">
                            {() => <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />}
                        </AuthStack.Screen>
                        <AuthStack.Screen name="Register" component={RegisterPage} />
                    </AuthStack.Navigator>
                )}
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;