import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { Icon, IconType } from '../../components'
import DropdownComponent from '../../components/DropdownComponent'

export default function PriceSetting() {

    const AddRowBtn = () => {
        return (
            <TouchableOpacity style={{
                backgroundColor: "#051E33",
                padding: SIZES.twenty,
                borderRadius: SIZES.fifty,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Icon
                    name={"diff-added"}
                    type={IconType.Octicons}
                    color={COLORS.white}
                />
                <Text style={{ color: COLORS.white, marginLeft: SIZES.ten }}>
                    Add Row
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow hasBackArrow
                title={"Pricing Setting"}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <DropdownComponent />
                <DropdownComponent />
            </View>
            <DropdownComponent />
            <AddRowBtn />

        </View>
    )
}

const styles = StyleSheet.create( {} )