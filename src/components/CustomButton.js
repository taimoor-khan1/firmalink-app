import React, { useState } from 'react';
import { Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import { COLORS, FONTS, SIZES } from '../constants';
import Icon, { IconType } from './Icons';
import GradientView from './GradientView';

export default function CustomButton( props ) {
  const [buttonBg, setButtonBg] = useState( COLORS.white )
  const {
    title,
    btnStyle,
    titleStyle,
    onPress,
    disabled,
    light
  } = props;

  return (

    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}>
        <GradientView style={[
        styles.container,
        {
      
          borderWidth: light ? 1 : 0

        },
        btnStyle,
      ]} >
      <Text
        style={[
          FONTS.boldFont20,
          styles.textStyle,
          {
            fontWeight: "900",
            color: light ? COLORS.black : COLORS.white,
          },
          titleStyle,


        ]}>
        {title}
      </Text>
      </GradientView>
    </TouchableOpacity>
 
  );
}

const styles = StyleSheet.create( {
  container: {
    height: SIZES.fifty,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
   
    paddingHorizontal: SIZES.twenty,

  },
  textStyle: {
    color: COLORS.black,
  },
  iconStyle: {
    right: SIZES.fifteen,
    position: 'absolute',
  },
} );
