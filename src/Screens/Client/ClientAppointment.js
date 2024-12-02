import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STYLES } from '../../constants'
import AppointmentClientCards from '../../components/AppointmentClientCards'
import CustomHeader from '../../components/CustomHeader'

export default function ClientAppointment() {
    return (
        <View style={STYLES.container}>
            <CustomHeader title={"Appointment"} />
            <AppointmentClientCards
                dateShow
            />
        </View>
    )
}

const styles = StyleSheet.create({})