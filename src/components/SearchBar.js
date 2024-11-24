import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES } from '../constants'

export default function SearchBar( props ) {
    return (
        <View style={styles.container}>
            <Image source={IMAGES.searchIcon} />
            <TextInput style={styles.textInput}
                placeholderTextColor=''
                {...props} />
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: COLORS.primaryLight,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.fifteen,
        borderRadius: SIZES.twentyFive
    },
    textInput: {

        flex: 1,
        paddingHorizontal: SIZES.ten

    }
} )