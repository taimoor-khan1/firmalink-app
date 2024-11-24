import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon, { IconType } from './Icons'
import { COLORS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'

export default function HeaderWithArrow( props ) {
    const { title, hasBackArrow } = props
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            {hasBackArrow ?
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Icon
                        name="arrowleft"
                        type={IconType.AntDesign}
                        color={COLORS.white}
                    />
                </TouchableOpacity> :
                <Icon
                    name="arrowleft"
                    type={IconType.AntDesign}
                    color={COLORS.transparent}

                />
            }

            <Text style={styles.text} >
                {title}

            </Text>

            <Icon
                name="arrowleft"
                type={IconType.AntDesign}
                color={COLORS.transparent}
            />

        </View>
    )
}

const styles = StyleSheet.create( {
    Container: {
        marginVertical: SIZES.twenty,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.twenty,
        fontWeight: "500",
        // position: "absolute",
        alignSelf: "center"
    }
} )