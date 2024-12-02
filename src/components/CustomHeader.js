import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES, width } from "../constants";
import Icon, { IconType } from "./Icons";
import MyTouchableOpacity from "./MyTouchableOpacity";

export default function CustomHeader(props) {
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
          source={IMAGES.user4}
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
      <MyTouchableOpacity
        activeOpacity={0.85}
        style={styles.logo}
        onPress={() => navigation.navigate(SCREENS.NotaryNotifications)}
      >

        <Image
          source={IMAGES.notification}

          resizeMode="contain"
        />

      </MyTouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.fifteen,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    width: width * .12,
    height: width * .12,

  },
  logo: {
    borderColor: COLORS.secondary + 50,
    borderWidth: 1,
    borderRadius: SIZES.fifteen,
    padding: SIZES.five
  },
  titleStyle: {
    fontSize: SIZES.twenty,
    fontWeight: "500",
    color: COLORS.white,
  },


});
