import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import Wallet from '../../components/Wallet'
import ProfileCard from '../../components/ProfileCard'
import LinearGradient from 'react-native-linear-gradient'
import GradientView from '../../components/GradientView'
import ReviewCards from '../../components/ReviewCards'

export default function NotaryProfile() {
    const Heading = ( { title, onPress } ) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: SIZES.fifteen }}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={{ flex: 1, height: 1, backgroundColor: "#ccc", marginHorizontal: 10 }} />
                <TouchableOpacity onPress={onPress}>
                    <Image source={IMAGES.pencilIcon} />
                </TouchableOpacity>
            </View>
        )
    }
    const Options = ( { item } ) => {
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

    const Documents = () => {
        return (
            <View style={styles.docContainer}>
                <Image source={IMAGES.dummyDoc} style={styles.dummyDoc} />
                <View style={{ width: "70%", marginLeft: SIZES.ten }}>
                    <Text style={styles.docContent}>
                        Browse & Upload
                    </Text>
                    <Text style={styles.docContent}>
                        Notary Commission Document
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image source={IMAGES.crossIcon} />
                </TouchableOpacity>


            </View>
        )
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={STYLES.container}>
            <HeaderWithArrow title={"Profile"} />
            <ProfileCard />
            <Heading title={"Experience"} />

            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={["5 Years"]}
                    renderItem={Options}
                />
            </View>

            <Heading title={"Services"} />
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={["Real Estate Documents ", "Affidavits", "Power of Attorney"]}
                    renderItem={Options}
                />
                <Documents />
                <Documents />
            </View>

            <Heading title={"Ratings & Review"} />

            <ReviewCards />


            <Wallet />

            <View style={{ height: SIZES.fifty }} />


        </ScrollView>
    )
}

const styles = StyleSheet.create( {
    title: {
        color: COLORS.white,
        fontSize: SIZES.fifteen * 1.2
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
    docContainer: {
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        padding: SIZES.fifteen,
        borderRadius: SIZES.fifteen,
        borderColor: COLORS.secondary + 50,
        borderStyle: "dashed",
        marginTop: SIZES.fifteen
    },
    dummyDoc: {

        width: width * .15,
        height: width * .18,
        borderRadius: SIZES.ten,
        resizeMode: "contain"
    },
    docContent: {
        color: COLORS.white,

    }
} )