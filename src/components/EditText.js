import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Clipboard } from 'react-native';

import { FONTS, SIZES, COLORS, FONTFAMILY, SCREENS } from '../constants';
import Icon, { IconType } from './Icons';
import MyTouchableOpacity from './MyTouchableOpacity';
import GradientText from './GradientText';

const EditText = React.forwardRef( ( props, ref ) => {
  const { title, ForgetPassword, value, setValue, keyboardType } = props;
  // const navigation = useNavigation();
  const [borderColor, setBorderColor] = useState( COLORS.gray );
  const [show, setshow] = useState( 'eye' );
  const [showText, setShowText] = useState( true );
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText( text );
    Utils.successAlert( "link copied to clipBoard" )
  };
  const passwordShow = () => {
    if ( show === 'eye' ) {
      setshow( 'eye-off' );
      setShowText( false );
    } else {
      setShowText( true );
      setshow( 'eye' );
    }
  };

  return (
    <View>

      {/* EditText  */}
      <View
        style={[
          {

            borderBottomWidth: 2,
            paddingHorizontal: SIZES.ten,
            height: SIZES.fifty,
            borderRadius: SIZES.ten,
            borderColor: borderColor,
            marginBottom: SIZES.twenty
            // marginTop: SIZES.ten,
          },
          props.style,
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>


            {/* {props.value.length === 0 &&
              <View style={{ position: "absolute", left: SIZES.ten, top: SIZES.twenty }}>
                <GradientText >
                  {props.placeHolderValue}
                </GradientText>
              </View>
            } */}


            <TextInput

              editable={props.disabled}
              ref={ref}
              {...props}
              placeholder={props.placeHolderValue}
              secureTextEntry={props.password ? showText : false}
              // selectionColor={COLORS.black}
              placeholderTextColor={borderColor}
              onFocus={() => {
                setBorderColor( COLORS.secondary );
              }}
              onBlur={() => {
                setBorderColor( COLORS.white );
              }}
              style={[
                FONTS.mediumFont14,
                {
                  textAlign: "left",
                  flex: 1,
                  height: SIZES.fifty,
                  color: borderColor,
                  height: SIZES.fifty,



                },
              ]}
              // value={value}

              keyboardType={keyboardType}
            />
            {props.dollarSign && (
              <Icon
                type={IconType.FontAwesome}
                name={"dollar"}
                color={borderColor}
                style={{
                  marginRight: SIZES.ten,
                }}
              />
            )}
          </View>

        </View>
        {props.password ? (
          <MyTouchableOpacity
            style={{ position: 'absolute', right: SIZES.fifteen, top: SIZES.twenty }}
            onPress={() => {
              passwordShow();
            }}>
            <Icon
              name={show}
              type={IconType.Feather}
              size={SIZES.twenty * 1.15}
              color={borderColor}
            />
          </MyTouchableOpacity>
        ) : null}
      </View>
    </View>
  );
} );

export default EditText;
