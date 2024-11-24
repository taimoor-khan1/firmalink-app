import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, FONTS, height, IMAGES, SCREENS, SIZES, STYLES, width } from '../constants'
import Row from '../components/Row'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { CONSTANTS } from '../constants'



export default function ProductCard( props ) {
    const { item, index, } = props
  
    const navigation = useNavigation()
    const [like, setLike] = useState( item?.is_favorited );
    const [productId, setProductId] = useState( null )

    const { user, accessToken } = useSelector(
        ( state ) => ( {
            user: state?.Auth?.user?.id,
            accessToken: state?.Auth?.accessToken,
        } )
    );

    const postLike = async () => {
        let data = {
            user_id: user.id,
            product_id: productId
        }


        try {
            let res = await axios.post( CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.AddToWishList, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            } )
            console.log( res, "res" )
        } catch ( error ) {
            console.log( error, 'ERROR' )
        }
    }
    useEffect( () => {
        if ( productId !== null ) {
            postLike()
        }
        //    navigation.navigate(SCREENS.favourite)

    }, [productId] )
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate( SCREENS.singleProduct, { productId: item.id } )}
            style={{ width: "50%", marginRight: '3%' }}
        >
            <View style={styles.productImageContainer}>
                <Image source={{ uri: item.thumbnail_image }} resizeMode={"cover"} style={styles.image} />
                <TouchableOpacity
                    onPress={() => {
                        setLike( !like );

                        setProductId( item.id )

                    }}
                    style={{
                        position: "absolute",
                        bottom: 5,
                        right: SIZES.ten,
                        backgroundColor: COLORS.white,
                        padding: SIZES.ten,
                        borderRadius: SIZES.twentyFive,
                        overflow: 'hidden'
                    }}>
                    <Image
                        source={!like ? IMAGES.heartIcon : IMAGES.fillHeart}
                        resizeMode={"contain"} />
                </TouchableOpacity>
            </View>
            <View>
                <Row style={{ alignItems: "center", marginTop: SIZES.five }}>
                    <Image source={IMAGES.star} />
                    <Text style={[FONTS.boldFont18, { marginHorizontal: SIZES.ten }]}>
                        {item.rating}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                        {"|"}
                    </Text>
                    <Text style={[{
                        marginHorizontal: SIZES.ten,
                        color: "#00D1A3",
                        backgroundColor: "#00D1A3" + 50,
                        paddingHorizontal: SIZES.ten,
                        borderRadius: SIZES.five
                    }]}>
                        {item.sold_count}{" sold"}
                    </Text>
                </Row>
                <Text style={[FONTS.boldFont18, { marginTop: SIZES.five, width: "90%" }]}>
                    {item.name}
                </Text>
                <Row style={{ alignItems: "center", marginTop: SIZES.five }}>
                    <Text
                        style={[FONTS.boldFont16,
                        {
                            textDecorationLine: "line-through",
                            color: COLORS.gray
                        }]}>
                        {/* {"$"} */}
                        {item.stroked_price}
                    </Text>
                    <Text
                        style={[FONTS.boldFont18, { color: COLORS.primary, marginLeft: SIZES.ten }]}>
                        {/* {"$"} */}
                        {item.main_price}
                    </Text>
                </Row>
            </View>

        </TouchableOpacity >
    )
}

const styles = StyleSheet.create( {
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    productImageContainer: {
        backgroundColor: '#F8F8F8',
        width: width * .4,
        height: width * .4,
        borderRadius: SIZES.twenty,
        alignItems: "center",
        justifyContent: "center",
        marginTop: SIZES.twenty
    }
} )