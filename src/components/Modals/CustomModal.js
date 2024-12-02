import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import { COLORS, SIZES } from '../../constants'

export default function CustomModal(props) {
    const { isVisible, title } = props
    return (
        <ReactNativeModal isVisible={isVisible}>
            <View style={styles.container}>

                {props.children}
            </View>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.fifteen,
        borderRadius: SIZES.twenty
    },
    title: {
        color: COLORS.white
    }
})