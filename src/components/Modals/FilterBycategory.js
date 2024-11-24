import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ReactNativeModal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import { COLORS, FONTS, height, IMAGES, SCREENS, SIZES, width } from '../../constants';
import Icon, { IconType } from '../Icons';
import MyTouchableOpacity from '../MyTouchableOpacity';
import CustomButton from '../CustomButton';
import Row from '../Row';
import { useDispatch, useSelector } from 'react-redux';
import { closeFiltersByCategory, startLoading, stopLoading } from '../../redux/Slices/Utiltities';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Utils from '../../Utils/Utils';

export default function FilterBycategory( props ) {
  const navigation = useNavigation()
  const [select, setSelect] = useState( null )
  const [data, setData] = useState( [] )
  const { filterbyCategory } = useSelector( state => state.utiltities );
  const { accessToken } = useSelector(
    ( state ) => ( {
      accessToken: state.Auth.accessToken,
    } )
  );
  const dispatch = useDispatch();
  const RenderItem = ( { item } ) => {
    console.log( { item } )
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect( item.id )

        }}
        style={{
          width: width * .3,
          borderRadius: SIZES.fifteen,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: SIZES.ten
        }}>
        <View
          style={{
            backgroundColor: COLORS.gray + 40,
            borderRadius: SIZES.fifty,
            width: width * .22,
            height: width * .22,
            padding: SIZES.ten,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: select === item.id & 1,
            borderColor: item.id === select && COLORS.primary,

          }}
        >
          <Image
            style={{
              borderRadius: SIZES.fifty,
              width: width * .20,
              height: width * .20,
            }}
            resizeMode={"contain"}
            source={{ uri: item?.icon }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.black, marginHorizontal: SIZES.fifteen,
          }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    )

  }


  const getCategory = async () => {

    try {
      dispatch( startLoading() )
      const myHeaders = new Headers();
      myHeaders.append( "Authorization", `Bearer ${accessToken}` );


      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch( "https://dashboard.wasim-app.com/api/v2/categories", requestOptions )
        .then( ( response ) => response.json() )
        .then( ( result ) => {
          console.log( "get categories", result?.category )
          setData( result?.category )
          dispatch( stopLoading() )

        } )
        .catch( ( error ) => {
          dispatch( stopLoading() )
          console.error( error )
        } );

    } catch ( error ) {

      dispatch( stopLoading() )

    }
  }
  useEffect( () => {
    getCategory()
  }, [] )

  return (
    <ReactNativeModal
      isVisible={filterbyCategory}
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
          backgroundColor: COLORS.white,
          borderTopRightRadius: SIZES.twentyFive,
          borderTopLeftRadius: SIZES.twentyFive,
          height: height * 0.7,
          paddingTop: SIZES.twenty
        }}>
        <View>
          <FlatList
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
            data={data}
            keyExtractor={item => item.id}
            renderItem={RenderItem}
            numColumns={3}
          />
        </View>
        <CustomButton
          onPress={() => {
            if ( select !== null ) {
              navigation.navigate( SCREENS.allProduct, { id: select } )
              dispatch( closeFiltersByCategory() )
            } else {
              Utils.errorAlert( "Please Select Categorys" )
            }

          }}
          title={'Choose'}
          btnStyle={{
            margin: SIZES.twenty,
          }}
        />
      </View>
    </ReactNativeModal>
  );
}


const styles = StyleSheet.create( {

} );
