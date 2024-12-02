import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, width } from '../constants'
import StarRating from 'react-native-star-rating-widget'

export default function ReviewCards() {
    const RenderItem = () => {
        return (
            <ImageBackground
                imageStyle={{
                    borderRadius: SIZES.fifteen,
                    width: width * .89,
                }}
                resizeMode="cover"
                source={IMAGES.reviewCardBg}
                style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <Image source={IMAGES.user} style={styles.img} />
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen * 1.2 }}>
                                Martin Edward
                            </Text>
                            <View style={[{ marginTop: -SIZES.five, flexDirection: "row", alignItems: "center" }]}>

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
                        </View>
                    </View>

                    <Text
                        style={{ color: COLORS.gray, fontSize: 12 }}
                    >
                        02:00 PM -02/12/2024
                    </Text>
                </View>
                <Text style={styles.content}>
                    A notary is an official authorized to verify the identity of signers, witness signatures, and certify documents, ensuring they are authentic and legally binding.
                </Text>

            </ImageBackground>
        )
    }
    return (

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={RenderItem}
            data={[1, 2, 3, 4]}

        />

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.twenty,
        paddingHorizontal: SIZES.fifteen,
        borderColor: COLORS.secondary + 50,
        borderWidth: 1,
        width: width * .9,
        borderRadius: SIZES.fifteen,
        marginRight: SIZES.fifteen

    },
    content: {
        color: COLORS.white,
        marginTop: SIZES.ten
    },
    img: {
        width: width * .13,
        height: width * .13,
        resizeMode: "cover"
    }
})