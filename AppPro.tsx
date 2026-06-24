import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function AppPro() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello World Vishwatma
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // alignItems:'flex-start',
        // alignItems:'stretch',
        // alignItems:'flex-end',
        // alignItems:'baseline',
        justifyContent: 'center',
        // justifyContent:'flex-start',/
        // justifyContent:'flex-end',
        // justifyContent:'space-evenly',

    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});

