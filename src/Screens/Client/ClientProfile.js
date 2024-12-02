import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES, STYLES } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import ProfileClientCard from '../../components/ProfileClientCard'

export default function ClientProfile() {
    const Option = ({ icon, title, des, style, activteBtn }) => {
        return (
            <View style={[{
                flexDirection: "row", alignItems: "center",
                paddingVertical: SIZES.fifteen,
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1
            }, style]}>
                <Image source={icon} style={{ width: SIZES.fifty * .8, height: SIZES.fifty * .8 }} />
                <View style={{ width: "60%", marginLeft: SIZES.ten }}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: SIZES.fifteen + 2,
                    }}>
                        {title}
                    </Text>
                    <Text numberOfLines={2} style={{
                        color: COLORS.gray,
                        fontSize: 13,
                        width: activteBtn ? "80%" : "100%"
                    }}>
                        {des}
                    </Text>
                </View>
                {activteBtn && <TouchableOpacity style={{ backgroundColor: COLORS.gray + 50, paddingHorizontal: SIZES.fifteen, paddingVertical: SIZES.ten, borderRadius: SIZES.twenty }}>
                    <Text style={{ color: COLORS.gray }}>
                        Activate
                    </Text>
                </TouchableOpacity>}

            </View>
        )
    }
    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                title={"Profile"}
            />
            <ProfileClientCard />
            <Option
                icon={IMAGES.profileIcon}
                title={"Account Setting"}
                des={"You can make activate or de activate your account form here"}
                activteBtn
            />
            <Option
                icon={IMAGES.lock}
                title={"Account Setting"}
                des={"You can make activate or de activate your account form here"}
                style={{ borderBottomWidth: 0, }}
            />

        </View>
    )
}

const styles = StyleSheet.create({})