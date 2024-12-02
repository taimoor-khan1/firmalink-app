import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, height, IMAGES, SCREENS, SIZES, STYLES } from '../constants'
import Icon, { IconType } from './Icons'
import { useNavigation } from '@react-navigation/core'

export default function FavouriteItemCard( { data, getProductId } ) {
    const navigation = useNavigation()

    return (
        <View style={[styles.container, STYLES.shadow]}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image source={{ uri: data.product.thumbnail_image }} style={styles.img} resizeMode="contain" />

                <View style={{
                    paddingHorizontal: SIZES.ten,
                    flex: 1,
                }}>
                    <Text style={{
                        color: COLORS.black,
                        fontWeight: "bold",
                        fontSize: SIZES.fifteen + 3
                    }}>
                        {data?.product?.name}
                    </Text>
                    <Text style={{
                        color: COLORS.primary,
                        fontWeight: "bold",
                        fontSize: SIZES.fifteen + 3,
                        marginVertical: 3
                    }}>
                        {data?.product.base_price}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >


                        <TouchableOpacity
                            onPress={() => navigation.navigate( SCREENS.singleProduct, { productId: data?.product?.id } )}
                            style={{
                                backgroundColor: COLORS.green + 50,
                                padding: SIZES.five,
                                borderRadius: SIZES.five,
                                width: height * .12,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <Text
                                style={{ color: COLORS.green }}
                            >
                                Add to Pay
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => getProductId( data.id )}
                        >
                            <Icon
                                name={"trash"}
                                color={COLORS.red}
                                type={IconType.Octicons}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: COLORS.white,
        padding: SIZES.fifteen,
        borderRadius: SIZES.ten,
        marginTop: SIZES.fifteen
    },
    img: {
        width: SIZES.twentyFive * 3,
        height: SIZES.twentyFive * 3,
        backgroundColor: COLORS.gray + 60
    },
} )