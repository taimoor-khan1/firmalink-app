import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, STYLES, width } from '../constants'
import HeaderWithArrow from '../components/HeaderWithArrow'
import CustomButton from '../components/CustomButton'
import CustomModal from '../components/Modals/CustomModal'
import ReactNativeModal from 'react-native-modal'

import SlotSheet from '../components/Modals/SlotSheet'

export default function AppointmentDetail( props ) {
    const { navigation } = props
    const [isVisible, setIsvisible] = useState( false )
    const [confirmModal, setConfirmModal] = useState( false )
    const ServicesList = [
        {
            id: 1,
            title: "Affidavits",
            price: "12.00"
        },
        {
            id: 2,
            title: "Real Estate Documents ",
            price: "10.00"
        },

    ]

    const Documents = () => {
        return (
            <View style={styles.docContainer}>
                <Image source={IMAGES.dummyDoc} style={styles.dummyDoc} />
                <View style={{ width: "70%", marginLeft: SIZES.ten }}>
                    <Text style={styles.docContent}>
                        Document.pdf
                    </Text>
                    {/* <Text style={styles.docContent}>
                        Notary Commission Document
                    </Text> */}
                </View>
                <TouchableOpacity>
                    <Image source={IMAGES.downloadIcon} />
                </TouchableOpacity>


            </View>
        )
    }
    const Heading = ( { title, onPress } ) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.fifteen }}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {/* <View style={{ flex: 1, height: 1, backgroundColor: "#ccc", marginHorizontal: 10 }} /> */}

            </View>
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow title={"Appointment Details"} />

            {/* ====================Profile bar==================== */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: SIZES.twenty }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={IMAGES.user3} style={styles.profile} />
                    <View style={{ marginLeft: SIZES.ten, }}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen + 2 }}>
                            Martin Canelo
                        </Text>
                        <View style={{
                            marginTop: SIZES.five,
                            backgroundColor: COLORS.gray,
                            borderRadius: SIZES.twentyFive,
                            padding: SIZES.five,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                color: COLORS.white,
                            }}>
                                Real Estate
                            </Text>

                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setIsvisible( !isVisible )} style={{ backgroundColor: COLORS.red, paddingHorizontal: SIZES.fifteen, paddingVertical: SIZES.ten, borderRadius: SIZES.twentyFive }}>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>
                        Cancel Appointment
                    </Text>
                </TouchableOpacity>
            </View>

            {/* ====================Icon bar==================== */}
            <ScrollView horizontal contentContainerStyle={{ alignItems: "center", }}>
                <View style={styles.IconContainer}>
                    <Image source={IMAGES.dollarIcon} style={styles.icon} />
                    <Text style={{ color: COLORS.white, fontSize: SIZES.twenty, marginLeft: SIZES.five }}>$80.00</Text>
                </View>
                <View style={styles.IconContainer}>
                    <Image source={IMAGES.phoneIcon} style={styles.icon} />
                </View>
                <View style={styles.IconContainer}>
                    <Image source={IMAGES.mailIcon} style={styles.icon} />
                </View>
            </ScrollView>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: SIZES.twenty }}>
                <View>
                    <Text style={{ color: COLORS.gray }}>
                        Date & Time
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        12/02/2024 - 02:20 AM
                    </Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.ligthBlue, paddingHorizontal: SIZES.fifteen,
                    paddingVertical: SIZES.ten, borderRadius: SIZES.twenty

                }}>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>
                        Reschedule Appointment
                    </Text>
                </TouchableOpacity>
            </View>

            {/* ==================Description================== */}
            <Heading title={"Description"} />
            <Text style={{ color: COLORS.white, lineHeight: 22 }}>
                A notary is an official authorized to verify the identity of signers, witness signatures, and certify documents, ensuring they are authentic and legally binding.
            </Text>
            {/* ==================Services================== */}
            <View>

                <Heading title={"Services"} />
                <FlatList

                    data={ServicesList}
                    keyExtractor={item => item.id}
                    renderItem={( { item } ) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: SIZES.fifteen, alignItems: "center" }}>
                                <Text style={{ color: COLORS.white }}>
                                    {`\u2022 ${item.title}`}
                                </Text>
                                <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" + 50, marginHorizontal: 10 }} />
                                <Text style={{ color: COLORS.white }}>
                                    ${item.price}/hr
                                </Text>

                            </View>
                        )
                    }}
                />
            </View>
            <Documents />
            <Documents />
            <CustomButton
                onPress={() => setConfirmModal( !confirmModal )}
                btnStyle={{ marginVertical: SIZES.fifteen }}
                title={"Mark As Complete"}
            />
            {/* =======================Cancel Modal============================ */}
            <CustomModal isVisible={isVisible}>
                <Image source={IMAGES.gradientCross} style={{ width: width * .2, height: width * .2, alignSelf: "center", marginTop: SIZES.twentyFive }} />
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, textAlign: "center", margin: SIZES.twenty }}>Are you sure you want to cancel this appointment?</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.twenty }}>
                    <TouchableOpacity onPress={() => setIsvisible( !isVisible )} style={[styles.btnStyle, { borderColor: COLORS.gray, backgroundColor: COLORS.primaryLight }]}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsvisible( !isVisible )} style={styles.btnStyle}>
                        <Text style={{ color: COLORS.secondary, fontSize: SIZES.fifteen }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>
            {/* =======================Confirm Modal============================ */}

            <CustomModal isVisible={confirmModal}>
                <Image source={IMAGES.gradientquestionMark} style={{ width: width * .2, height: width * .2, alignSelf: "center", marginTop: SIZES.twentyFive }} />
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, textAlign: "center", margin: SIZES.twenty }}>Are you sure you want to cancel this appointment?</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.twenty }}>
                    <TouchableOpacity onPress={() => setConfirmModal( !confirmModal )} style={[styles.btnStyle, { borderColor: COLORS.gray, backgroundColor: COLORS.primaryLight }]}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setConfirmModal( !confirmModal )
                        navigation.navigate( SCREENS.NotaryDetail )
                    }
                    } style={styles.btnStyle}>
                        <Text style={{ color: COLORS.secondary, fontSize: SIZES.fifteen }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </CustomModal>


        </View>
    )
}

const styles = StyleSheet.create( {
    profile: {
        width: SIZES.fifty,
        height: SIZES.fifty,
        borderWidth: 1,
        backgroundColor: "red",
        borderRadius: SIZES.ten,
        borderColor: COLORS.white,
        resizeMode: "cover"
    },
    IconContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.ligthBlue + 50,
        paddingHorizontal: SIZES.twenty,
        paddingVertical: SIZES.fifteen,
        borderRadius: SIZES.fifty,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.ten
    },
    icon: {
        width: SIZES.fifty * .6,
        height: SIZES.fifty * .6,
        resizeMode: "contain"

    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.fifteen * 1.1

    },
    docContainer: {
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        padding: SIZES.fifteen,
        borderRadius: SIZES.fifteen,
        borderColor: COLORS.secondary + 50,
        borderStyle: "dashed",
        marginTop: SIZES.fifteen
    },
    dummyDoc: {

        width: width * .12,
        height: width * .12,
        borderRadius: SIZES.ten,
        resizeMode: "contain"
    },
    docContent: {
        color: COLORS.white,
    },
    btnStyle: {
        width: "45%",
        padding: SIZES.ten,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.twentyFive
    }
} )