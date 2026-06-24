import React from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import { SafeAreaView } from "react-native-safe-area-context";

export default function ElevatedCards() {
    return (

        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>
                    ElevatedCards
                </Text>
                <ScrollView horizontal={true} style={styles.container}>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>Tab</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>me</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>to</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>more</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>❤️</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    container: {
        padding: 20
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        
    },
    cardElevated: {
        backgroundColor: 'purple',
        elevation:4,
        
    }
})
