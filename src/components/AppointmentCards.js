import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { COLORS, IMAGES, SIZES, width } from '../constants';
import Icon, { IconType } from './Icons';

export default function AppointmentCards( props ) {
    const { title, } = props
    const colorScheme = useColorScheme();


    const placeholder = {
        label: 'Sort by',
        value: null,
        color: colorScheme === 'dark' ? COLORS.white : COLORS.black,

    };
    const RenderCard = () => {
        return (
            <View style={styles.CardConatiner}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: .8, borderBottomColor: COLORS.gray1, paddingBottom: SIZES.fifteen }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={IMAGES.user} style={styles.img} />
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, marginLeft: SIZES.ten }}>Martin Edward</Text>
                    </View>
                    <TouchableOpacity style={{ borderColor: COLORS.red, borderWidth: .8, borderStyle: "solid", paddingHorizontal: SIZES.fifteen, paddingVertical: SIZES.ten, borderRadius: SIZES.ten }}>
                        <Text style={{ color: COLORS.red }}>
                            Cancel Appointment
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.fifteen }}>
                    <Icon
                        name={"clock"}
                        type={IconType.MaterialCommunityIcons}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.fifteen, marginLeft: SIZES.five }}>12:00 PM</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.fifteen }}>
                    <Icon
                        name={"calendar"}
                        type={IconType.Ionicons}
                        color={COLORS.white}
                        size={SIZES.twentyFive}
                    />
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.fifteen, marginLeft: SIZES.five }}>April-24-2024</Text>
                </View>
                <TouchableOpacity style={styles.downloadBtn}>
                    <Image source={IMAGES.downloadIcon} style={{ width: SIZES.twentyFive, height: SIZES.twentyFive, position: "absolute", left: SIZES.twenty }} resizeMode="contain" />
                    <Text style={{ color: "#1877F2", textAlign: "center", fontWeight: "600", fontSize: SIZES.fifteen }}>
                        Document.pdf
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
    return (
        <View style={{ flex: 1 }} >
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
                                style={styles.icon}

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
            <View>
                <FlatList
                    data={[1, 2, 3, 45, 5, 6, 7, 7]}
                    keyExtractor={item => item.id}
                    renderItem={RenderCard}

                />
            </View>
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
    icon: {
        margin: 10,

    },
    heading: {
        color: COLORS.white,
        fontSize: SIZES.fifteen,

    },
    CardConatiner: {
        backgroundColor: "#092C47",
        padding: SIZES.ten,
        borderRadius: SIZES.ten,
        marginBottom: SIZES.twenty
    },
    img: {
        width: SIZES.fifty * .7,
        height: SIZES.fifty * .7,
        resizeMode: "cover"
    },
    downloadBtn: {
        justifyContent: "center",
        backgroundColor: "#1877F2" + 50,
        padding: SIZES.fifteen,
        borderRadius: SIZES.ten,
        marginTop: SIZES.twenty,
        borderWidth: 1,
        borderColor: "#1877F2",
        borderStyle: "dashed"
    }
} )