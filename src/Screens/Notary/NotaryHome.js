import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import Wallet from '../../components/Wallet'
import AppointmentCards from '../../components/AppointmentCards'

import * as Progress from 'react-native-progress';

export default function NotaryHome() {

    const Profile = () => {
        return (
            <View style={styles.ProfileContainer}>
                <View>

                    <Image source={IMAGES.user2} style={styles.profileImage} />
                    <TouchableOpacity>

                        <Image source={IMAGES.camera} style={styles.camera} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: SIZES.ten, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <Text style={{ color: COLORS.white, fontWeight: "500", fontSize: SIZES.twenty * .8 }}>
                            Martin Canelo
                        </Text>
                        <Image source={IMAGES.verifiedbadge} style={{ marginLeft: SIZES.ten }} />

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "85%" }} >

                        <Progress.Bar progress={0.7} style={{ backgroundColor: COLORS.gray, marginVertical: SIZES.five }} width={width * .58} color={COLORS.white} />
                        <Text style={{ color: COLORS.white }}>
                            70%
                        </Text>
                    </View>

                    <Text style={styles.comText}>
                        Complete Profile
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={STYLES.container}>
            <HeaderWithArrow title={"Home"} />
            <Profile />
            <AppointmentCards />
            <Wallet />
        </View>
    )
}

const styles = StyleSheet.create( {
    ProfileContainer: {
        flexDirection: "row",
        alignItems: "center",

    }, profileImage: {
        width: 80,
        height: 80,
        resizeMode: "cover"
    },
    camera: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    comText: {
        color: COLORS.secondary,
        textDecorationLine: "underline"
    }
} )