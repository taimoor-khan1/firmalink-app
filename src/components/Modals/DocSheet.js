import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ReactNativeModal from 'react-native-modal';

import { COLORS, FONTS, height, IMAGES, SIZES, width } from '../../constants';
import Icon, { IconType } from '../Icons';

import CustomButton from '../CustomButton';
import LinearGradient from 'react-native-linear-gradient';



export default function DocSheet(props) {









  const handleApply = async () => {
    try {
      props?.onConfirm()

    } catch (error) {

    }
  }
  return (
    <ReactNativeModal
      isVisible={props?.visible}
      style={{ margin: 0, justifyContent: 'flex-end' }}
      animationIn={'slideInUp'}
      animationInTiming={450}
      animationOutTiming={450}
      hideModalContentWhileAnimating
      deviceHeight={height * height}
      coverScreen
      animationOut={'slideOutDown'}>
      <View
        style={{
          paddingTop: SIZES.twenty,
          backgroundColor: COLORS.primary,
          borderTopRightRadius: SIZES.twentyFive,
          borderTopLeftRadius: SIZES.twentyFive,
          height: height * 0.6,
        }}>
        <TouchableOpacity
          style={{
            zIndex: SIZES.twenty,
            position: "absolute",
            right: SIZES.twentyFive,
            top: SIZES.twenty,
          }}
          onPress={() => props?.onclose()}
        >
          <Icon
            name={"cross"}
            type={IconType.Entypo}
            color={COLORS.white}


          />
        </TouchableOpacity>

        <ScrollView style={{ flex: 1 }}>

          <Text style={[styles.topHeading]}>Select Document</Text>


          <ScrollView
            style={{}}
            contentContainerStyle={{
              paddingHorizontal: SIZES.fifteen,
              flexGrow: 1,
            }}>
            <Text style={{ color: COLORS.white, marginVertical: SIZES.ten }}>Upload document to view and approval for notaries,</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ justifyContent: "center", alignItems: "center", marginRight: SIZES.fifteen }}>
                <Image style={styles.img} source={IMAGES.dummyDoc} />
                <Image style={styles.icon} source={IMAGES.gradientCross} />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center", marginRight: SIZES.fifteen }}>
                <Image style={styles.img} source={IMAGES.dummyDoc} />
                <Image style={styles.icon} source={IMAGES.gradientCross} />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={styles.img} />
                <Image style={styles.icon} source={IMAGES.crossIcon} />
              </View>


            </ScrollView>
            <Text style={{ color: COLORS.secondary, marginVertical: SIZES.ten }}>Document Uploaded!</Text>


            <TextInput
              placeholder='Type Description'
              placeholderTextColor={COLORS.gray}
              style={styles.textInput}
            />

          </ScrollView>
        </ScrollView>


        <CustomButton
          onPress={() => {
            handleApply()
          }}
          title={'Proceed'}
          btnStyle={{
            margin: SIZES.fifteen,
          }}
        />
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  topHeading: {
    fontSize: SIZES.twenty * 1.1,
    marginVertical: SIZES.ten,
    color: COLORS.white,
    alignSelf: "center"
  },
  heading: {
    fontWeight: SIZES.fifteen,
    color: COLORS.black,
    fontWeight: "600",
    marginVertical: SIZES.fifteen
  },
  textInput: {
    width: "100%",
    height: width * .5,
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.ten,
    color: COLORS.white,
    textAlignVertical: "top",
    padding: SIZES.twenty
  },
  img: {
    width: width * .2,
    height: width * .2,
    borderRadius: SIZES.ten,
    borderColor: COLORS.gray,
    borderWidth: 1
  },
  icon: {
    width: SIZES.twentyFive,
    height: SIZES.twentyFive,
    position: "absolute",

  }

});
