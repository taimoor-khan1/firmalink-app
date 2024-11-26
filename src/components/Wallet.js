import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES, SCREENS } from '../constants'
import { useNavigation } from '@react-navigation/native'

export default function Wallet() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate( SCREENS.NotaryWallet )
            }}
            style={styles.container}>
            <Image source={IMAGES.Wallet} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create( {
    container: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
} )