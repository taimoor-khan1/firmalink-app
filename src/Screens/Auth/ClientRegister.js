import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SCREENS, SIZES, STYLES } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import EditText from '../../components/EditText'
import CustomButton from '../../components/CustomButton'
import GradientText from '../../components/GradientText'
import { Icon, IconType } from '../../components'
import CustomAuthHeader from '../../components/CustomAuthHeader'

export default function ClientRegister( props ) {
  const { navigation } = props
  const [email, setEmail] = useState( "" )
  const [name, setName] = useState( "" )
  const [password, setPassword] = useState( "" )
  const [confirmPassword, setConfirmPassword] = useState( "" )
  const [phoneNo, setPhoneNo] = useState( "" )
  return (
    <View style={STYLES.container}>
      <CustomAuthHeader title={"FirmaLink Sign Up "} />

      <EditText
        value={name}
        onChangeText={setName}
        placeHolderValue={"Enter name"}
      />
      <EditText
        value={email}
        onChangeText={setEmail}
        placeHolderValue={"Email Address"}
      />
      <EditText
        value={phoneNo}
        onChangeText={setPhoneNo}

        placeHolderValue={"Phone Number"}
      />
      <EditText
        value={password}
        onChangeText={setPassword}
        password
        placeHolderValue={"Password"}
      />
      <EditText
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        password
        placeHolderValue={"Confirm Password"}
      />


      <CustomButton
        onPress={() => navigation.navigate( SCREENS.SignUpSkill )}
        title={"Sign Up"}
      />
      <Text style={{ fontSize: SIZES.fifteen, color: COLORS.white, textAlign: "center", marginTop: SIZES.fifty }}>

        Already Have an account !{" "}
        <Text onPress={() => navigation.navigate( SCREENS.login )} style={{ color: COLORS.secondary }}>
          Login
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