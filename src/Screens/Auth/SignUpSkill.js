import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomAuthHeader from '../../components/CustomAuthHeader'
import { COLORS, SCREENS, SIZES, STYLES } from '../../constants'
import CustomButton from '../../components/CustomButton'
import GradientText from '../../components/GradientText'
import { Icon, IconType } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

export default function SignUpSkill( props ) {
    const { navigation } = props
    const [selectedYear, setSelectedYear] = useState( null )
    const [selectedExperience, setSelectedExperience] = useState( null )

    const RenderYear = ( { item } ) => {
        return (
            <TouchableOpacity onPress={() => setSelectedYear( item )} >
                {selectedYear === item ?
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}

                        colors={["#4BB5FF", COLORS.secondary]}
                        style={[styles.YearContainer, { borderWidth: 0 }]}
                    >
                        <Icon
                            name={"circle"}
                            type={IconType.FontAwesome}
                            color={COLORS.white}
                        />
                        <Text style={styles.txt}>
                            {item} year
                        </Text>
                    </LinearGradient> :
                    <View style={styles.YearContainer}>
                        <Icon
                            name={"circle"}
                            type={IconType.FontAwesome}
                            color={COLORS.white}
                        />
                        <Text style={styles.txt}>
                            {item} year
                        </Text>
                    </View>
                }




            </TouchableOpacity>
        )
    }
    const RenderExperince = ( { item } ) => {
        return (
            <TouchableOpacity onPress={() => setSelectedExperience( item )} >
                {selectedExperience === item ?
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}

                        colors={["#4BB5FF", COLORS.secondary]}
                        style={[styles.YearContainer, { borderWidth: 0 }]}
                    >
                        <Icon
                            name={"circle"}
                            type={IconType.FontAwesome}
                            color={COLORS.white}
                        />
                        <Text style={styles.txt}>
                            {item}
                        </Text>
                    </LinearGradient> :
                    <View style={styles.YearContainer}>
                        <Icon
                            name={"circle"}
                            type={IconType.FontAwesome}
                            color={COLORS.white}
                        />
                        <Text style={styles.txt}>
                            {item} year
                        </Text>
                    </View>
                }




            </TouchableOpacity>
        )
    }

    return (
        <View style={STYLES.container}>

            <CustomAuthHeader title={"FirmaLink Sign Up "} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                <GradientText style={styles.heading}>
                    Select no of Experience
                </GradientText>
                <Text style={styles.subHeading}>
                    Single Entity Will Selected
                </Text>

                <GradientText style={styles.heading2}>
                    Type here if more than above
                </GradientText>

                <View style={{ marginVertical: SIZES.twenty }}>
                    <FlatList
                        contentContainerStyle={{
                            flexWrap: "wrap",
                            flexDirection: "row"
                        }}

                        data={["less then year", 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={RenderYear}
                    />

                </View>




                <GradientText style={styles.heading}>
                    Select Area Of Expertise
                </GradientText>
                <Text style={styles.subHeading}>
                    Single Entity Will Selected
                </Text>

                <View style={{ marginVertical: SIZES.twenty }}>
                    <FlatList
                        contentContainerStyle={{
                            flexWrap: "wrap",
                            flexDirection: "row"
                        }}

                        data={["Real Estate Documents ", "Wills and Trusts", "Wills and Trusts", "Affidavits", "Loan Signing "]}
                        renderItem={RenderExperince}
                    />

                </View>
                <GradientText style={styles.heading2}>
                    Type here if more than above
                </GradientText>
            </ScrollView>
            <CustomButton
                onPress={() => {
                    navigation.navigate( SCREENS.bottamTab )
                }}
                btnStyle={{ marginVertical: SIZES.fifteen }}
                title={"Next"}
            />
        </View>
    )
}

const styles = StyleSheet.create( {
    heading: {
        color: COLORS.secondary,
        fontSize: SIZES.fifteen + 2
    },
    subHeading: {
        marginTop: SIZES.five,
        color: COLORS.gray
    },
    heading2: {
        borderBottomWidth: 1,
        paddingBottom: SIZES.ten,
        borderColor: COLORS.gray,
        fontSize: SIZES.fifteen
    },
    YearContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: SIZES.ten,
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: SIZES.fifty,
        marginRight: SIZES.ten,
        marginBottom: SIZES.ten
    },
    txt: {
        color: COLORS.white,
        marginLeft: SIZES.ten
    },


} )