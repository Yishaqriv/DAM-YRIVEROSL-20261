import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { NewAppScreen } from '@react-native/new-app-screen';
import CountScreen from './Components/screens/CountScreen/CountScreen';

class App extends React.Component {
    private label: String = "Hello";
    private count: number = 0;

    handleOnPress = () => {
        console.log('Press button');
        this.count++;
        console.log(this.count);
    };

    render() {
        return (
            <SafeAreaProvider>
                <StatusBar barStyle='light-content' backgroundColor={colors.white} />
                <SafeAreaProvider style={appStyles.safeaArea}>
                    <view>
                    </view>
                </SafeAreaProvider>
                <CountScreen label="Press" OnPress={this.handleOnPress} />
                <AppContent />
            </SafeAreaProvider>
        );
    }
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <NewAppScreen
                templateFileName="App.tsx"
                safeAreaInsets={safeAreaInsets}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;