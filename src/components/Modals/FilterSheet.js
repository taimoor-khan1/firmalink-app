import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import { COLORS, FONTS, height, SIZES, width } from '../../constants';
import Icon, { IconType } from '../Icons';
import MyTouchableOpacity from '../MyTouchableOpacity';
import CustomButton from '../CustomButton';
import Row from '../Row';
import { useDispatch, useSelector } from 'react-redux';
import { closeFilters } from '../../redux/Slices/Utiltities';
import ProductServices from '../../redux/Services/ProductServices';

export default function FilterSheet( props ) {
  const [value, setValue] = useState( 0 )
  const [rating, setRating] = useState( null )
  const [sortBy, setSortBy] = useState( null )
  const { filterSheet } = useSelector( state => state.utiltities );
  const dispacth = useDispatch();

  const RenderItem = ( { item } ) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSortBy( item?.value )
        }}
        style={{
          flexDirection: "row",
          borderRadius: SIZES.fifteen,
          backgroundColor: sortBy === item?.value ? COLORS.primary : COLORS.white,
          borderWidth: 2,
          borderColor: sortBy === item?.value ? COLORS.primary : COLORS.black,
          paddingVertical: SIZES.five * .3,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.five
        }}>

        <Text
          style={{
            color: sortBy === item?.value ? COLORS.white : COLORS.black, marginHorizontal: SIZES.fifteen,
          }}>
          {item?.key}
        </Text>
      </TouchableOpacity>
    )

  }
  const RenderItem2 = ( { item } ) => {

    return (
      <TouchableOpacity
        onPress={() => {
          setRating( item?.item )
        }}
        style={{
          flexDirection: "row",
          borderRadius: SIZES.fifteen,
          backgroundColor: rating === item?.item ? COLORS.primary : COLORS.white,
          borderColor: rating === item?.item ? COLORS.primary : COLORS.black,
          borderWidth: 2,
          paddingVertical: SIZES.five * .3,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.five
        }}>

        <Icon
          name={"star"}
          type={IconType.AntDesign}
          style={{
            fontSize: SIZES.twenty,
            color: rating === item?.item ? COLORS.white : COLORS.black,
            marginLeft: SIZES.fifteen
          }}
        />

        <Text
          style={{
            color: rating === item?.item ? COLORS.white : COLORS.black, marginHorizontal: SIZES.fifteen,
          }}>
          {item.item}
        </Text>
      </TouchableOpacity>
    )

  }
  const sortData = [
    {
      key: "Popular",
      value: "popularity"
    },
    {
      key: "Most Recent",
      value: "new_arrival"
    },
    {
      key: "Price High",
      value: "price_high_to_low"
    },
  ]

  const handleApply = async () => {
    try {
      const data = {
        ...( value > 1 && { min: value } ),
        ...( rating !== null && { rating: rating } ),
        ...( sortBy !== null && { sort_key: sortBy } )
      };
      props.applyButtonPress( data )
      setValue( 1 )
      setRating( null )
      setSortBy( null )
    } catch ( error ) {

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
          backgroundColor: COLORS.white,
          borderTopRightRadius: SIZES.twentyFive,
          borderTopLeftRadius: SIZES.twentyFive,
          height: height * 0.6,
        }}>
        <TouchableOpacity
          style={{
            zIndex: SIZES.twenty,
            position: "absolute",
            right: SIZES.twentyFive,
            top: SIZES.ten
          }}
          onPress={() => props?.onclose()}
        >
          <Icon
            name={"cross"}
            type={IconType.Entypo}


          />
        </TouchableOpacity>

        <ScrollView style={{ flex: 1 }}>
          <View style={{
            borderBottomWidth: 1,
            marginHorizontal: SIZES.twenty,
            borderColor: COLORS.gray,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={[styles.topHeading]}>Sort & Filter</Text>
          </View>

          <ScrollView
            style={{}}
            contentContainerStyle={{
              paddingHorizontal: SIZES.fifteen,
              flexGrow: 1,
            }}>
            <View style={{ marginVertical: SIZES.twentyFive }}>

              <Text style={[styles.heading]}>
                Price Range
              </Text>
              <View style={{
                justifyContent: "space-between",
                flexDirection: "row"

              }}>
                <Text style={[styles.heading, { marginVertical: SIZES.five }]}>
                  $ {value}
                </Text>
                <Text style={[styles.heading, { marginVertical: SIZES.five }]}>
                  $ 100
                </Text>
              </View>

              <Slider
                value={value}
                step={1}
                maximumValue={100}
                onValueChange={( e ) => {
                  setValue( e )
                }}
                thumbTintColor={COLORS.primary}
                trackStyle={{ backgroundColor: 'red' }}
                style={{ marginVertical: SIZES.twenty }}
              />

            </View>
            <Text style={[styles.heading]}>
              Sort by
            </Text>
            <View>
              <FlatList
                contentContainerStyle={{ flexDirection: 'row' }}
                data={sortData}
                // renderItem={( item ) => {
                //   return (
                //     < RenderItem item={item} />
                //   )
                // }}
                renderItem={RenderItem}
                keyExtractor={( item ) => { item.id }}
              />
            </View>

            <Text style={[styles.heading]}>
              Rating
            </Text>
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                // contentContainerStyle={{ flexDirection: 'row' }}
                data={[1, 2, 3, 4, 5]}

                renderItem={( item ) => {
                  return (

                    < RenderItem2 item={item} star={true} />
                  )
                }}
                keyExtractor={( item ) => { item.id }}
              />
            </View>


          </ScrollView>
        </ScrollView>
        <Row
        // style={{ flex: 1 }}
        >
          <CustomButton
            onPress={() => {

              setRating( null )
              setSortBy( null )
              setValue( 0 )


            }}
            title={'Reset'}
            titleStyle={{
              color: COLORS.primary
            }}
            btnStyle={{
              marginVertical: SIZES.twentyFive,
              width: width * 0.4,
              bottom: 0,
              alignSelf: 'center',
              marginHorizontal: SIZES.fifteen,
              backgroundColor: COLORS.primary + 40
            }}
          />
          <CustomButton
            onPress={() => {
              handleApply()
            }}
            title={'Apply'}
            btnStyle={{
              marginVertical: SIZES.twentyFive,
              width: width * 0.4,
              alignSelf: 'center',
              marginHorizontal: SIZES.fifteen,
            }}
          />

        </Row>

      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create( {
  topHeading: {
    fontSize: SIZES.twenty * 1.1,
    marginVertical: SIZES.ten,
    color: COLORS.black,
    fontWeight: "600"
  },
  heading: {
    fontWeight: SIZES.fifteen,
    color: COLORS.black,
    fontWeight: "600",
    marginVertical: SIZES.fifteen
  }
} );
