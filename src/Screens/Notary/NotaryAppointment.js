import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import Wallet from '../../components/Wallet'
import AppointmentCards from '../../components/AppointmentCards'

import * as Progress from 'react-native-progress';
import SearchBar from '../../components/SearchBar'

export default function NotaryAppointment() {


    return (
        <View style={STYLES.container}>
            <HeaderWithArrow title={"Appointment"} />
            <SearchBar
                placeholder={"Search Here..."}
                placeholderTextColor={COLORS.gray}
            />
            <AppointmentCards
                dateShow
            />
            <Wallet />
        </View>
    )
}

const styles = StyleSheet.create( {

} )