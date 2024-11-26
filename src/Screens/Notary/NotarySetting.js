import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import CustomButton from '../../components/CustomButton'

export default function NotarySetting( props ) {
    const { navigation } = props
    const Data = [
        {
            id: 1,
            title: "Pricing Setting",
            des: "Set your Price while its for long terms services or short term its up to you!",
            icon: IMAGES.dollarIcon,
            screen: SCREENS.PriceSettings
        },
        {
            id: 2,
            title: "Calendar Setting",
            des: "Set your Availability for clients so they  books appointment according to your schedule",
            icon: IMAGES.calendarIcon,
            screen: SCREENS.CalenderSettings

        },
        {
            id: 3,
            title: "Travel Limit Setting",
            des: "Set your limit for travel to provide your services.",
            icon: IMAGES.routingIcon,
            screen: SCREENS.TravelSettings

        },
    ]

    const Options = ( { item } ) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate( item?.screen )
                }}
                style={styles.container}>
                <Image source={item?.icon} />
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {item?.title}
                    </Text>
                    <Text style={styles.des}>
                        {item?.des}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                hasBackArrow
                title={"Setting"}
            />
            <FlatList
                data={Data}
                renderItem={Options}
                keyExtractor={item => item.id}
            />

            <CustomButton
                btnStyle={{ margin: SIZES.twenty }}
                title={"Save"}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flexDirection: "row",
        margin: SIZES.ten,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray1 + 50,
        paddingVertical: SIZES.fifteen,
        alignItems: "center"
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.twenty * .9
    },
    innerContainer: {
        marginLeft: SIZES.fifteen
    },
    des: {
        color: COLORS.gray1 + 80,
        fontSize: 12,
        flex: 1,
        marginTop: SIZES.five
    }
} )