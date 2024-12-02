import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import DropdownComponent from '../../components/DropdownComponent'
import GradientText from '../../components/GradientText'
import CustomButton from '../../components/CustomButton'

export default function TravelSettings() {
    const [selected, setSelected] = useState( "" );


    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                hasBackArrow
                title={"Travel Limit Setting"}
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.content}>
                    You can type distance in kilometer  that distance helps to find out your client that how much travel you will able to do  while providing your Services.
                </Text>
                <View style={styles.row}>
                    <TextInput value={selected}
                        onChangeText={setSelected}
                        placeholder='Type Distance '
                        placeholderTextColor={COLORS.secondary}
                        style={styles.textinput}
                    />
                    <GradientText style={styles.text}>
                        KM
                    </GradientText>
                </View>
            </View>
            <CustomButton title={"Save"}
                btnStyle={styles.btnStyle}
            />

        </View>
    )
}

const styles = StyleSheet.create( {
    content: {
        marginTop: SIZES.fifty,
        color: COLORS.gray,
        lineHeight: 25
    },
    row: {
        marginTop: SIZES.twenty,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: COLORS.gray,
        // paddingBottom: SIZES.ten,
        alignItems: "center"
    },
    text: {
        fontWeight: "600",
        fontSize: SIZES.fifteen + 3
    },
    textinput: {
        color: COLORS.white
    },
    btnStyle: {
        marginVertical: SIZES.twentyFive
    }
} )