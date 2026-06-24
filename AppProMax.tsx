import React from 'react'

import {
    View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
export default function AppProMax() {
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <FlatCards />
                    <ElevatedCards />
                    <FancyCard />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}