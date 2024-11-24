import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  COLORS,
  FONTFAMILY,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants';
import GradientText from '../../components/GradientText';

export default function UserSelection( props ) {
  const { navigation } = props
  const OptionCard = ( { image, title, content, onPress } ) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={image} style={styles.Icon} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <Image
            source={IMAGES.forwardArrow}
            style={{ width: width * 0.1, height: width * 0.1 }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.content}>{content}</Text>

      </TouchableOpacity>
    );
  };


  return (
    <View style={STYLES.container}>
      <Text style={styles.heading}>Select User Type?</Text>

      <OptionCard
        image={IMAGES.NotaryIcon}
        title={'Notary'}
        content={"Get your self register if you want some good clients."}
      />
      <OptionCard
        image={IMAGES.ClientIcon}
        title={'Client'}
        content={"Signup with client user type and get millions of notary option here."}
      />
      <View style={styles.BottamRow}>
        <Text style={[styles.BottamText, { color: COLORS.white }]}>
          Already have an account?{" "}

        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate( SCREENS.login )
        }}>


          <GradientText style={[styles.BottamText, { fontWeight: "600" }]} >
            Login
          </GradientText>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create( {
  heading: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.twentyFive * 1.3,
    color: COLORS.white,
    fontWeight: '600',
    marginVertical: SIZES.twentyFive,
  },
  text: {
    color: COLORS.white,
    marginLeft: SIZES.ten,
  },
  content: {
    fontSize: SIZES.fifteen * 1.1,
    color: COLORS.white,
    marginTop: SIZES.ten,
    lineHeight: SIZES.twentyFive

  },

  card: {
    padding: SIZES.twenty,
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.twenty,
    marginBottom: SIZES.twenty
  },
  Icon: {
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: 'contain',
  },
  BottamText: {

    textAlign: "center",

    fontSize: SIZES.fifteen * 1.2,

  },
  BottamRow: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.twentyFive,
    flexDirection: "row"

  }
} );
