import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function FancyCard() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>
                    Hello world
                </Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{
                            uri: 'https://media.istockphoto.com/id/1494262028/vector/fashion-runway-stage-background-with-light-effect.jpg?s=1024x1024&w=is&k=20&c=SQiXqkX4fGwcABYTBREvBd4cLcZeeFNc0pXpZDPWsdw='
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Fancy Place1</Text>
                        <Text style={styles.cardLable}>Fancy Place2</Text>
                        <Text style={styles.cardDescription}> Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Voluptate corrupti voluptatum velit ratione vero suscipit
                            illum maxime nesciunt neque quis? Placeat dolores aliquid enim cumque labore
                            excepturi asperiores quos aperiam! </Text>

                        <Text style={styles.cardFooter}>12 mins away </Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 20,
        fontWeight: 'bold',
    },
    card: {
        width: 360,
        height: 360,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        // elevation:3,
        shadowOffset: {
            width: 1,
            height: 1,
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 26,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: { color: '#000000', fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
    cardLable: { color: '#000000', fontSize: 14, marginBottom:10, },
    cardDescription: { color: '#ffa502', fontSize: 12, marginBottom:12 },
    cardFooter: {
        color: '#000000'
    },
})

