import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,

  TouchableOpacity,

} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  COLORS,

  FONTS,

  STYLES,
  SIZES,

  SCREENS,
} from '../constants';
import CircularImage from './CircularImage';


import LinearGradient from 'react-native-linear-gradient';
import Icon, { IconType } from './Icons';

import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';


const OrderHistoryComponent = props => {

  const { role, accessToken, user } = useSelector(
    ( state

    ) => ( {
      role: state.UserType,
      accessToken: state.Auth.accessToken,
      user: state?.Auth?.user
    } )
  );



  const [cardshadow, setcardshadow] = useState( true );
  const [backgroundShadow, setBackgroundShadow] = useState( false );
  const navigation = useNavigation()
  const leftSwipe = ( progress, dragX ) => {
    return (
      <LinearGradient
        start={{ x: 0, y: 2 }}
        end={{ x: 5, y: 1 }}
        colors={['#FCF6BA', COLORS.primary, '#BF953F']}
        style={styles.deletButton}>
        <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.7}>
          <Icon
            type={IconType.Ionicons}
            name="ios-trash-outline"
            style={{
              color: COLORS.black,
              alignSelf: 'center',
              fontSize: SIZES.twentyFive,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  };
  return (
    <View>
      {props?.data?.order?.order_status === "done" && props?.data?.order?.user?.id === user?.id &&
        <Swipeable
          renderRightActions={leftSwipe}
          childrenContainerStyle={{}}
          containerStyle={{
            position: 'relative',
            overflow: 'scroll',
            paddingVertical: SIZES.ten,
            borderRadius: SIZES.fifteen,
          }}
          onSwipeableWillClose={() => {
            setcardshadow( true );
          }}
          onSwipeableRightWillOpen={() => {
            setcardshadow( false );
          }}>
          <View style={[cardshadow ? styles.card : styles.shadow, {}]}>
            <TouchableOpacity
              onPressIn={() => {
                setBackgroundShadow( props.data?.name );
              }}
              onPressOut={() => {
                setBackgroundShadow( '' );
              }}
              style={{
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,

                borderRadius: SIZES.fifteen,
                borderColor: COLORS.gray,
                paddingVertical: SIZES.ten,
       
              }}>
              <CircularImage image={{ uri: props?.data?.products?.[0]?.thumbnail_image }} />
              <View style={{ flex: 1, marginHorizontal: SIZES.ten, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={[FONTS.boldFont16]} numberOfLines={2}>
                  {"#"}{props.data?.order?.is_group === 1 ? props.data?.products[0]?.id : props.data?.order?.id}
                </Text>
                <View style={{ flexDirection: "row" }}>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate( SCREENS.reviewRefund, { order_id: props.data?.order?.order_details[0]?.order_id, seller_id: props.data?.order?.seller_id, } )
                    }}
                    style={{
                      borderRadius: 3,
                      alignItems: "center",
                      paddingHorizontal: SIZES.ten,
                      marginLeft: SIZES.ten,
                      paddingVertical: SIZES.five * .5,
                      backgroundColor: COLORS.primary + 50
                    }}
                  >
                    <Text
                      style={[FONTS.mediumFont12, { color: COLORS.primary }]}
                      numberOfLines={2}>
                      Refund
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate( SCREENS.review,
                        {
                          product_id: props.data?.products[0]?.id,
                          seller_id: props.data?.order?.seller_id,
                          order_id: props.data?.order?.order_details[0]?.order_id
                        } )
                    }}

                    style={{
                      borderRadius: 3,
                      alignItems: "center",
                      paddingHorizontal: SIZES.ten,
                      marginLeft: SIZES.ten,
                      paddingVertical: SIZES.five * .5,
                      backgroundColor: COLORS.black
                    }}
                  >
                    <Text
                      style={[FONTS.mediumFont12, { color: COLORS.white }]}
                      numberOfLines={2}>

                      Review
                    </Text>
                  </TouchableOpacity>

                </View>

              </View>
            </TouchableOpacity>
          </View>
        </Swipeable >
      }

      <View style={[STYLES.horLine, { marginVertical: 0 }]} />
    </View >
  );
};

export default OrderHistoryComponent;

const styles = StyleSheet.create( {
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.fifteen,
  },
  shadow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.ten,
  },
  deletButton: {
    paddingHorizontal: SIZES.fifteen,
    marginVertical: SIZES.fifteen,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: SIZES.fifteen,
    borderTopLeftRadius: SIZES.fifteen,
    backgroundColor: COLORS.secondary,
  },
} );
