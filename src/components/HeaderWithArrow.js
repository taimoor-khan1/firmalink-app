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
            {hasBackArrow &&
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
                </TouchableOpacity>
            }

            <Text style={styles.text} >
                {title}

            </Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    Container: {
        marginTop: SIZES.twenty
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.twenty,
        fontWeight: "500",
        // position: "absolute",
        alignSelf: "center"
    }
} )