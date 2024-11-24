import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'

export default function NotaryWallet() {
    const renderItem = () => {
        return (
            <View style={styles.innerContainer}>
                <Image source={IMAGES.transIcon} />
                <View style={{ marginLeft: SIZES.ten, flex: 1, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <Text style={{ color: COLORS.white }}>
                            Recived Amount
                        </Text>
                        <Text style={{ color: COLORS.gray1, fontSize: 12 }}>
                            24-Jan-2024 - 03:00 PM
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: SIZES.five }}>
                        <Text style={{
                            color: COLORS.gray, fontWeight: "600", fontSize: SIZES.fifteen + 2
                        }}>
                            $100.00
                        </Text>
                        <View style={{ flexDirection: "row" }}>

                            <Image source={IMAGES.user4} style={styles.img} />
                            <Text style={{
                                color: COLORS.white, fontWeight: "600", fontSize: SIZES.fifteen,
                                marginLeft: 10,
                                verticalAlign: "bottom"
                            }}>
                                Jon Doe
                            </Text>
                        </View>
                    </View>

                </View>


            </View >
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                hasBackArrow
                title={"Wallet"}
            />
            <Text style={styles.heading}>
                Transaction History
            </Text>
            <FlatList
                data={[1, 2, 3, 4, 4, 5, 5, 67, 7, 8, 9, 232, 23, 2323, 23, 334,]}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
    heading: {
        color: COLORS.white,
        fontSize: SIZES.fifteen + 2,
        fontWeight: "500"
    },
    innerContainer: {
        flexDirection: "row",
        margin: SIZES.ten,
        borderBottomWidth: 1,
        paddingBottom: SIZES.twenty,
        borderColor: COLORS.gray1 + 50
    },
    img: {
        width: SIZES.twentyFive,
        height: SIZES.twentyFive,
        resizeMode: "cover"
    }
} )