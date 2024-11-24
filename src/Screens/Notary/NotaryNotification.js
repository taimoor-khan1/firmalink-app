import { FlatList, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import SearchBar from '../../components/SearchBar'
import RNPickerSelect from 'react-native-picker-select';
import { Icon, IconType } from '../../components'

export default function NotaryNotification() {
    const colorScheme = useColorScheme();

    const data = [
        {
            id: 1,
            image: IMAGES.user4,
            title: "Appointment Received!",
            des: "Appointment Request Received from martin calesto about affidavit.",
            icon: IMAGES.callRecevied
        },
        {
            id: 2,
            image: IMAGES.user4,
            title: "Appointment Canceled",
            des: "Appointment Request Received from martin calesto about affidavit.",
            icon: IMAGES.callMissed
        },
        {
            id: 3,
            image: IMAGES.user4,
            title: "Appointment Received!",
            des: "Appointment Request Received from martin calesto about affidavit.",
            icon: IMAGES.callRecevied
        },
        {
            id: 4,
            image: IMAGES.user4,
            title: "Appointment Canceled",
            des: "Appointment Request Received from martin calesto about affidavit.",
            icon: IMAGES.callMissed
        },
    ]


    const RenderItem = ( { item } ) => {
        return (
            <View style={styles.containerRow}>
                <View>
                    <Image source={item.image} style={styles.img} />
                    <Image source={item?.icon} style={styles.icon} />
                </View>
                <View style={{ justifyContent: "center", paddingLeft: SIZES.ten }}>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={{ color: COLORS.gray1, fontSize: 12 }}>
                            12:30 AM - 12/02/2024
                        </Text>
                    </View>
                    <Text
                        numberOfLines={2}
                        style={{ color: COLORS.white, fontSize: 12, width: "90%" }}>
                        {item?.des}
                    </Text>
                </View>
            </View>
        )
    }
    const placeholder = {
        label: 'Sort by',
        value: null,
        color: colorScheme === 'dark' ? COLORS.white : COLORS.black,

    };
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow title={"Notification"} />
            <SearchBar
                placeholder={"Search Here..."}
                placeholderTextColor={COLORS.gray}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.twenty }}>
                <Text style={styles.heading}>
                    Todays Appointment!
                </Text>

                <RNPickerSelect

                    onValueChange={( value ) => console.log( value )}
                    items={[
                        { label: 'Sort by ', value: 'name' },
                        { label: 'Sort by Price (Low to High)', value: 'priceAsc' },
                        { label: 'Sort by Price (High to Low)', value: 'priceDesc' },
                    ]}
                    Icon={() => {
                        return (
                            <Icon
                                name="chevron-down-outline"
                                size={24}
                                type={IconType.Ionicons}
                                color={COLORS.white}
                                style={{ margin: 10 }}

                            />
                        );
                    }}
                    placeholder={placeholder}
                    style={{


                        inputAndroid: {
                            color: colorScheme === 'dark' ? COLORS.white : COLORS.black,

                        },
                        inputIOS: {

                            color: colorScheme === 'dark' ? COLORS.white : COLORS.black,
                        },
                        ...pickerSelectStyles,// Merges input styles
                        modalViewBottom: {
                            backgroundColor: COLORS.black, // Popup background color (Android)
                        },
                    }}
                    useNativeAndroidPickerStyle={false}
                />
            </View>

            <FlatList
                data={data}
                renderItem={
                    RenderItem
                }
            />
        </View>
    )
}

const pickerSelectStyles = {
    inputIOS: {

        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: COLORS.primary,

    },
    inputAndroid: {

        fontSize: SIZES.fifteen * .9,
        paddingVertical: SIZES.five,
        paddingHorizontal: SIZES.twenty,
        borderWidth: 1,
        borderColor: COLORS.white,

        borderRadius: SIZES.twentyFive,
        // color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingRight: SIZES.twentyFive * 1.5,

    },
};
const styles = StyleSheet.create( {
    heading: {
        color: COLORS.white,
        fontSize: SIZES.fifteen,

    },
    icon: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    containerRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingBottom: SIZES.fifteen,
        borderColor: COLORS.gray + 50,
        marginVertical: SIZES.fifteen
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.fifteen + 1,
        fontWeight: "500"
    },
    img: {
        width: SIZES.fifty - 10,
        height: SIZES.fifty - 10,
        resizeMode: "cover"
    }
} )