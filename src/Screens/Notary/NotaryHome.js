import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import Wallet from '../../components/Wallet'
import AppointmentCards from '../../components/AppointmentCards'

export default function NotaryHome() {
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow hasBackArrow title={"Home"} />
            <AppointmentCards />
            <Wallet />
        </View>
    )
}

const styles = StyleSheet.create( {} )