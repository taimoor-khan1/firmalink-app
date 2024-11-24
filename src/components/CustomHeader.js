import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES, width } from "../constants";
import Icon, { IconType } from "./Icons";
import MyTouchableOpacity from "./MyTouchableOpacity";

export default function CustomHeader( props ) {
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
          style={styles.logo}
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

const styles = StyleSheet.create( {
  container: {
    marginVertical: SIZES.fifteen,
  },
  logo: {
    width: width * .15,
    height: width * .15,

  },

  titleStyle: {
    fontSize: SIZES.twentyFive,
    fontWeight: "500",
    color: COLORS.white,
  },


} );
