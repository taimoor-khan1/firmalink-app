import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../constants'

export default function Wallet() {

    return (
        <TouchableOpacity style={styles.container}>
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