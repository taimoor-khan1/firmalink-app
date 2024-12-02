import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, STYLES, width } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import SearchBar from '../../components/SearchBar'
import StarRating from 'react-native-star-rating-widget'
import DocSheet from '../../components/Modals/DocSheet'
import SlotSheet from '../../components/Modals/SlotSheet'

export default function ClientServices(props) {
    const { navigation } = props
    const [docSheetModal, setDocSheetModal] = useState(false)
    const [slotSheetModal, setSlotSheetModal] = useState(false)


    const Services = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    marginRight: SIZES.fifteen,
                    borderRadius: SIZES.fifteen,
                    borderWidth: 1,
                    borderColor: COLORS.white,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: SIZES.ten,
                    width: width * .3
                }}
            >
                <Image source={IMAGES.RealState} />
                <Text style={{ color: COLORS.white, marginLeft: SIZES.ten }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }
    const ServicesCard = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(SCREENS.NotaryDetail)
                }}
                style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, paddingBottom: SIZES.ten, marginBottom: SIZES.fifteen, borderBottomColor: COLORS.gray }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>


                        <Image source={IMAGES.user2} style={styles.img} />

                        <View style={{ marginLeft: SIZES.ten }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: COLORS.white }}>
                                    Martin Edward
                                </Text>
                                <Image source={IMAGES.verifiedbadge} style={{ marginLeft: SIZES.ten }} />
                            </View>

                            <StarRating

                                color={"#FF7A00"}
                                style={styles.starStyling}
                                starSize={15}
                                rating={4.5}
                                onChange={() => {

                                }}
                            />
                        </View>



                    </View>
                    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.ten, flexDirection: "row", alignItems: "center", borderRadius: SIZES.fifteen }}>
                        <Image source={IMAGES.routingIcon} style={{ width: SIZES.twentyFive, height: SIZES.twentyFive }} />
                        <View style={{ marginLeft: SIZES.ten }}>
                            <Text style={{ color: COLORS.white }}>
                                12 KM
                            </Text>
                            <Text style={{ color: COLORS.gray }}>
                                Travel Limit
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: SIZES.fifteen }}>
                    <Text style={{ color: COLORS.white }}>
                        {`\u2022 ${"Affidavits"}`}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        ${"10"}/hr
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: SIZES.fifteen }}>
                    <Text style={{ color: COLORS.white }}>
                        {`\u2022 ${"Real Estate Documents "}`}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        ${"10"}/hr
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: SIZES.fifteen }}>
                    <Text style={{ color: COLORS.white }}>
                        {`\u2022 ${"Power of Attorney"}`}
                    </Text>
                    <Text style={{ color: COLORS.white }}>
                        ${"10"}/hr
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setSlotSheetModal(true)
                    }}
                    style={{
                        backgroundColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: SIZES.ten,
                        borderColor: COLORS.gray,
                        alignItems: "center",
                        justifyContent: "center",
                        padding: SIZES.ten

                    }}>
                    <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>Book Appointment</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
    return (
        <View style={STYLES.container}>
            <CustomHeader title={"Services"} />

            <SearchBar
                placeholder={"Search here"}
            />
            <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, marginVertical: SIZES.ten }}>
                Services Type
            </Text>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={["Real Estate ", "Wills and Trusts", "Power Of Attorney"]}
                    renderItem={Services}
                />
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: SIZES.ten }}>
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, }}>
                    Available Notaries
                </Text>
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, }}>
                    20
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                renderItem={ServicesCard}
            />
            {/* ==================Slot sheet modal================= */}
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
            {/* ==================DocSheet modal================= */}

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
    container: {
        padding: SIZES.ten,
        backgroundColor: COLORS.primaryLight,
        borderRadius: SIZES.ten,
        marginBottom: SIZES.twenty
    },
    img: {
        width: SIZES.twentyFive * 1.5,
        height: SIZES.twentyFive * 1.5,
        resizeMode: "cover",
        borderRadius: SIZES.twentyFive * 1.5,
    },
    starStyling: {

        marginHorizontal: 0,


    }
})