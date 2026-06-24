import React from "react";

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>
                    FlatCards
                </Text>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardone]}>
                        <Text>
                            Red
                        </Text>
                    </View>

                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>
                            Red
                        </Text>
                    </View>

                    <View style={[styles.card, styles.cardthree]}>
                        <Text>
                            Red
                        </Text>
                    </View>

                    <View style={[styles.card, styles.cardone]}>
                        <Text>
                            Red
                        </Text>
                    </View>


                </View>
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
        flex: 1,
        flexDirection: 'row',
        padding: 28,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardone: {
        backgroundColor: 'red',
    },

    cardTwo: {
        backgroundColor: 'green',
    },

    cardthree: {
        backgroundColor: 'blue',
    },
})