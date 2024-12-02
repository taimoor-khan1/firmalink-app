import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES, width } from "../constants";
import Icon, { IconType } from "./Icons";
import MyTouchableOpacity from "./MyTouchableOpacity";

export default function CustomAuthHeader(props) {
  const {
    iconColor,
    title,
    subTitle,
    showSearchIcon,
    onSearchPress,
    showShuffleBtn,
    onShuffleClick,
    hasBackArrow,
    showEditIcon,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.containerStyle]}>


      <MyTouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.goBack()}
      >

        <Image
          source={IMAGES.logo}
          style={styles.img}
          resizeMode="contain"
        />

      </MyTouchableOpacity>



      {title && (

        <Text
          style={[

            styles.titleStyle,

          ]}
        >
          {title}
        </Text>

      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.twentyFive,

  },
  img: {
    width: width * .18,
    height: width * .18,


  },
  logo: {
    borderColor: COLORS.secondary + 50,
    borderWidth: 1,
    borderRadius: SIZES.fifteen,
    padding: SIZES.five
  },
  titleStyle: {
    fontSize: SIZES.twentyFive,
    fontWeight: "500",
    color: COLORS.white,
  },


});
