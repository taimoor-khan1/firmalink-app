import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import ReviewCards from '../../components/ReviewCards'
import GradientView from '../../components/GradientView'
import StarRating from 'react-native-star-rating-widget'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton'
import SlotSheet from '../../components/Modals/SlotSheet'
import DocSheet from '../../components/Modals/DocSheet'

export default function NotaryDetail(props) {
    const { navigation } = props
    const [slotSheetModal, setSlotSheetModal] = useState(false)
    const [docSheetModal, setDocSheetModal] = useState(false)


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
        {
            id: 3,
            title: "Power of Attorney",
            price: "15.00"
        },
        {
            id: 4,
            title: "Power of Attorney",
            price: "20.00"
        },
    ]

    const Profile = () => {
        return (
            <View style={styles.Container}>
                <View>
                    <Image source={IMAGES.user3} style={styles.profileImage} />

                </View>
                <View style={{ paddingHorizontal: SIZES.ten, width: width * .6, }}>
                    <View style={[styles.row,]}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.twenty }}>
                            Martin Canelo
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(SCREENS.NotarySettings)
                            }}
                        >
                            <Image source={IMAGES.verifiedbadge}
                                resizeMode="contain"
                                style={{ marginLeft: SIZES.ten, width: SIZES.twenty, height: SIZES.twenty }} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.row,]}>

                        <StarRating
                            color={"#FF7A00"}
                            style={styles.starStyling}
                            starSize={15}
                            rating={4.5}

                        />


                        <Text style={{ color: COLORS.white, fontSize: 10 }}>
                            (4.5)
                        </Text>
                    </View>
                    <View style={[styles.row, { justifyContent: "space-between", marginTop: SIZES.fifteen }]}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, }}>
                            Profile Complete
                        </Text>
                        <Text style={{ color: COLORS.white, fontSize: 12, }}>
                            100%
                        </Text>
                    </View>


                    <LinearGradient start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}

                        style={[styles.progressBarGradient, { width: "100%" }]}
                        colors={["#4BB5FF", COLORS.secondary]}>

                    </LinearGradient>




                </View>
            </View>

        )
    }
    const Options = ({ item }) => {
        return (
            <GradientView
                style={styles.option}
            >
                <View style={styles.dot} />
                <Text style={styles.txt}>
                    {item}
                </Text>
            </GradientView>

        )
    }
    const Heading = ({ title, onPress }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.fifteen }}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={{ flex: 1, height: 1, backgroundColor: "#ccc", marginHorizontal: 10 }} />

            </View>
        )
    }
    return (
        <View style={STYLES.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                <HeaderWithArrow
                    hasBackArrow
                    title={"Notary Details"}
                />
                <Profile />
                <View>
                    <Heading title={"Experience"} />

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={["5 Years"]}
                        renderItem={Options}
                    />
                </View>
                <Heading title={"Description"} />
                <Text style={{ color: COLORS.white, lineHeight: 22 }}>
                    A notary is an official authorized to verify the identity of signers, witness signatures, and certify documents, ensuring they are authentic and legally binding.
                </Text>
                <View>

                    <Heading title={"Services & Price List"} />
                    <FlatList
                        data={ServicesList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: SIZES.fifteen }}>
                                    <Text style={{ color: COLORS.white }}>
                                        {`\u2022 ${item.title}`}
                                    </Text>
                                    <Text style={{ color: COLORS.white }}>
                                        ${item.price}/hr
                                    </Text>

                                </View>
                            )
                        }}
                    />
                </View>



                <View>

                    <Heading title={"Ratings & Review"} />
                    <ReviewCards />
                </View>
                <CustomButton
                    onPress={() => setSlotSheetModal(true)}
                    btnStyle={{ marginVertical: SIZES.fifteen }}
                    title={"Book Appointment"}
                />

            </ScrollView>
            <SlotSheet
                onConfirm={() => {
                    setSlotSheetModal(!slotSheetModal)
                    setDocSheetModal(!docSheetModal)

                }}
                onclose={() => {
                    setSlotSheetModal(!slotSheetModal)
                }}
                visible={slotSheetModal}
            />
            <DocSheet
                onConfirm={() => {
                    navigation.navigate(SCREENS.AppointmentDetailSheet)
                    setDocSheetModal(!docSheetModal)

                }}
                onclose={() => {
                    setDocSheetModal(!docSheetModal)
                }}
                visible={docSheetModal}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: SIZES.fifteen * 1.1
    },

    option: {
        paddingHorizontal: SIZES.fifteen,
        paddingVertical: SIZES.ten,
        borderRadius: SIZES.twentyFive,
        flexDirection: "row",
        alignItems: "center",
        marginRight: SIZES.ten
    },
    dot: {
        width: 20,
        height: 20,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.twenty, marginRight: SIZES.ten,
    },
    txt: {
        color: COLORS.white,
        fontSize: SIZES.fifteen
    },
    Container: {
        flexDirection: "row",
        marginBottom: SIZES.twenty
    },
    profileImage: {
        width: width * .25,
        height: width * .25,
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
        height: SIZES.fifteen,
        marginTop: SIZES.ten
    },
    starStyling: {
        marginHorizontal: 0,
        margin: 0
    }
})