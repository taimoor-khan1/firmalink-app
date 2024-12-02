import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTFAMILY, SIZES } from '../constants';



const GradientText = ({ colors, ...rest }) => {
  return (


    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient colors={["#4BB5FF", COLORS.secondary]} start={{ x: 0, y: 1 }} end={{ x: .5, y: 0 }}>
        <Text {...rest} style={[styles.text, rest.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>


  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTFAMILY.Roboto_Medium,
    fontSize: SIZES.fifty,
    fontWeight: "600"

  }
});
export default GradientText;