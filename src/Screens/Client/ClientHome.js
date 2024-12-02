import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES, width } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import SearchBar from '../../components/SearchBar'
import { Icon } from '../../components'
import AppointmentCards from '../../components/AppointmentCards'
import AppointmentClientCards from '../../components/AppointmentClientCards'
import Wallet from '../../components/Wallet'

export default function ClientHome() {

    const Services = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    marginLeft: SIZES.fifteen,
                    borderRadius: SIZES.fifteen,
                    borderWidth: 1,
                    borderColor: COLORS.secondary + 50,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: SIZES.ten,
                    width: width * .3
                }}
            >
                <Image source={IMAGES.RealState} />
                <Text style={{ color: COLORS.secondary, marginLeft: SIZES.ten }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={STYLES.container}>
            <CustomHeader title={"Home"} />

            <SearchBar
                placeholder={"Search here"}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.twenty }}>
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>
                    Provided Services
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.secondary }}>
                        See all

                    </Text>
                    <Image source={IMAGES.forwardArrow}
                        resizeMode={"contain"}
                        style={{
                            width: SIZES.twenty, height: SIZES.twenty, marginLeft: SIZES.ten
                        }} />
                </View>

            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={["Real Estate ", "Wills and Trusts", "Power Of Attorney"]}
                    renderItem={Services}
                />
            </View>
            <AppointmentClientCards

            />
            <Wallet />
        </View>
    )
}

const styles = StyleSheet.create({})