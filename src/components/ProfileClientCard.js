import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, width } from '../constants'
import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';

export default function ProfileClientCard() {
    const navigation = useNavigation()
    return (



        <View style={styles.Container}>
            <View>
                <Image source={IMAGES.user3} style={styles.profileImage} />
                <Image source={IMAGES.camera} style={styles.camerIcon} />

            </View>
            <View style={{ paddingHorizontal: SIZES.ten, width: width * .6, }}>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.twenty }}>
                        Martin Canelo
                    </Text>
                    <TouchableOpacity
                        style={{ padding: SIZES.ten, borderColor: COLORS.secondary + 40, borderWidth: 1, borderRadius: SIZES.ten }}
                        onPress={() => {

                        }}
                    >
                        <Image source={IMAGES.pencilIcon} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { marginTop: SIZES.ten }]}>
                    <Image source={IMAGES.mailIcon} />
                    <Text style={styles.contactInfoText}>
                        Martincanelo@gmail.com
                    </Text>
                </View>
                <View style={[styles.row, { marginTop: SIZES.ten }]}>
                    <Image source={IMAGES.phoneIcon} />
                    <Text style={styles.contactInfoText}>
                        +1-235-453-3425
                    </Text>
                </View>



            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        marginBottom: SIZES.twenty
    },
    profileImage: {
        width: width * .3,
        height: width * .3,
        borderRadius: SIZES.twenty,
        resizeMode: "cover"
    },
    camerIcon: {
        position: "absolute",
        bottom: -SIZES.twenty,
        right: SIZES.ten,
        width: 40,
        height: 40

    },
    row: {
        flexDirection: "row",
        alignItems: "center",

    },
    contactInfoText: {
        color: COLORS.white,
        marginLeft: SIZES.five,

    },
    progressBar: {
        marginTop: SIZES.fifteen,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.ten,
        height: SIZES.fifteen,
        justifyContent: "center",

    },
    progressBarGradient: {
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.ten,
        paddingRight: SIZES.ten,
        height: SIZES.fifteen
    },
    starStyling: {
        marginHorizontal: 0,
        margin: 0
    }
})