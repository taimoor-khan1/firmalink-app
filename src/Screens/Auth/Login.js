import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, STYLES } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import EditText from '../../components/EditText'
import CustomButton from '../../components/CustomButton'
import GradientText from '../../components/GradientText'
import { Icon, IconType } from '../../components'

export default function Login() {
  const [email, setEmail] = useState( "" )
  return (
    <View style={STYLES.container}>
      <CustomHeader title={"Login "} />

      <EditText
        value={email}
        onChangeText={setEmail}
        placeHolderValue={"Email Address"}
      />
      <EditText
        value={email}
        onChangeText={setEmail}
        password
        placeHolderValue={"Password"}
      />
      <View style={styles.row}>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Icon
            name={"checksquare"}
            type={IconType.AntDesign}
            color={COLORS.white}
          />
          <Text style={{ marginLeft: SIZES.ten, color: COLORS.white }}>
            Remember Me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: COLORS.secondary, textDecorationLine: "underline" }}>
            Forget Password
          </Text>
        </TouchableOpacity>

      </View>

      <CustomButton
        title={"Log in"}
      />
      <Text style={{ fontSize: SIZES.fifteen, color: COLORS.white, textAlign: "center", marginTop: SIZES.fifty }}>

        Don’t have an account? {" "}
        <Text style={{ color: COLORS.secondary }}>
          Sign Up
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  row: {
    marginTop: SIZES.ten,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.fifty
  }
} )