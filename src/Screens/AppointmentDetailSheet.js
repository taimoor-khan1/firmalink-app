import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, IMAGES, SCREENS, SIZES, STYLES, width } from '../constants'
import HeaderWithArrow from '../components/HeaderWithArrow'
import CustomButton from '../components/CustomButton'
import CustomModal from '../components/Modals/CustomModal'

export default function AppointmentDetailSheet(props) {
    const { navigation } = props
    const [isVisible, setIsvisible] = useState(false)
    const ListItem = ({ name, value, txtStyle, style }) => {
        return (
            <View style={[styles.listContainer, style]}>
                <Text style={{ color: COLORS.gray }}>
                    {name}
                </Text>
                <Text style={[{ color: COLORS.white }, txtStyle]}>
                    {value}
                </Text>

            </View>
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                hasBackArrow
                title={"Appointment Details"}
            />



            <View style={styles.imgContainer}>

                <Image source={IMAGES.logo} style={styles.img} />
            </View>
            <View style={styles.container}>
                <ListItem
                    name={"Notary Name"}
                    value={"Martin Canelo"}
                />
                <ListItem
                    name={"Client Name"}
                    value={"Samantha Grey"}
                />
                <ListItem
                    name={"Service Type"}
                    value={"Real Estate"}
                />
                <ListItem
                    name={"Appointment Type"}
                    value={"Virtual"}
                    txtStyle={styles.btn}

                />
                <ListItem
                    txtStyle={{ color: COLORS.secondary }}
                    name={"Document"}
                    value={"Document Name.pdf"}
                />
                <ListItem
                    name={"Date & Time"}
                    value={"04:00 PM - 12/02/2024"}
                />
                <ListItem
                    name={"Price"}
                    value={"$80.00"}
                />
                <ListItem
                    name={"Tax"}
                    value={"20%"}
                />
                <ListItem
                    name={"Total"}
                    value={"$96.00"}
                    style={{
                        borderBottomWidth: 0,
                        paddingBottom: 0,
                    }}
                />

            </View>
            <CustomModal isVisible={isVisible}>
                <Image source={IMAGES.gradientCheck} style={{ width: width * .2, height: width * .2, alignSelf: "center" }} />
                <Text style={{ color: COLORS.white, fontSize: SIZES.twenty, textAlign: "center", marginVertical: SIZES.ten, marginHorizontal: SIZES.ten }}>Appointment Request has been sent successfully</Text>
                <TouchableOpacity onPress={() => {
                    setIsvisible(!isVisible)
                    navigation.navigate(SCREENS.bottamTabCLient)
                }
                } style={styles.btnStyle}>
                    <Text style={{ color: COLORS.secondary, fontSize: SIZES.fifteen }}>Confirm</Text>
                </TouchableOpacity>
            </CustomModal>
            <CustomButton
                onPress={() => setIsvisible(!isVisible)}
                btnStyle={{ marginVertical: SIZES.twenty }}
                title={"Pay now"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: SIZES.twenty,
        borderRadius: SIZES.ten,
        borderColor: COLORS.gray + 50,
        marginTop: SIZES.twentyFive
    },
    listContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingBottom: SIZES.twenty,
        marginTop: SIZES.twenty,
        borderBottomColor: COLORS.gray + 50
    },
    btn: {
        backgroundColor: COLORS.ligthBlue,
        paddingHorizontal: SIZES.ten,
        paddingVertical: SIZES.five,
        borderRadius: SIZES.twentyFive
    },
    img: {
        width: width * .2,
        height: width * .2,


    },
    imgContainer: {
        borderWidth: 1,
        padding: SIZES.ten,
        borderColor: COLORS.gray + 50,
        alignSelf: "center",
        borderRadius: width * .2,
        marginBottom: - width * .2,
        backgroundColor: COLORS.primary,
        // position: "absolute",
        zIndex: 100
    },
    btnStyle: {
        marginTop: SIZES.ten,
        padding: SIZES.fifteen,
        marginHorizontal: SIZES.twenty,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.twentyFive
    }
})