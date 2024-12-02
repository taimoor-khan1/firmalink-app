import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SCREENS, SIZES, STYLES } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import EditText from '../../components/EditText'
import CustomButton from '../../components/CustomButton'
import GradientText from '../../components/GradientText'
import { Icon, IconType } from '../../components'
import CustomAuthHeader from '../../components/CustomAuthHeader'

export default function Login( props ) {
  const { navigation } = props
  const [email, setEmail] = useState( "" )
  const [password, setPassword] = useState( "" )
  return (
    <View style={STYLES.container}>
      <CustomAuthHeader title={"Login "} />

      <EditText
        value={email}
        onChangeText={setEmail}
        placeHolderValue={"Email Address"}
      />
      <EditText
        value={password}
        onChangeText={setPassword}
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
        <TouchableOpacity onPress={() => navigation.navigate( SCREENS.forget )}>
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

        <Text
          onPress={() => navigation.navigate( SCREENS.signUp )}
          style={{ color: COLORS.secondary }}>
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