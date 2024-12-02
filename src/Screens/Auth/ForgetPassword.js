import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, STYLES } from '../../constants'
import CustomHeader from '../../components/CustomHeader'
import EditText from '../../components/EditText'
import CustomButton from '../../components/CustomButton'
import GradientText from '../../components/GradientText'
import { Icon, IconType } from '../../components'
import CustomAuthHeader from '../../components/CustomAuthHeader'

export default function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <View style={STYLES.container}>
      <View style={{ flex: 1 }}>


        <CustomAuthHeader title={"Forget Password "} />

        <EditText
          value={password}
          onChangeText={setPassword}
          placeHolderValue={"New Password "}
        />
        <EditText
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeHolderValue={"Confirm Password"}
        />


      </View>
      <CustomButton
        btnStyle={{ marginBottom: SIZES.twentyFive }}
        title={"Update"}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    marginTop: SIZES.ten,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.fifty
  }
})