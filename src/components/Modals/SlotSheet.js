import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ReactNativeModal from 'react-native-modal';

import { COLORS, FONTS, height, SIZES, width } from '../../constants';
import Icon, { IconType } from '../Icons';

import CustomButton from '../CustomButton';
import LinearGradient from 'react-native-linear-gradient';



export default function SlotSheet(props) {

  const [dates, setDates] = useState([]);
  const flatListRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);


  useEffect(() => {
    // Generate dates for the current month
    const generateDatesForCurrentMonth = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth(); // 0-indexed (0 = January)
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get total days in the current month

      const generatedDates = [];
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        generatedDates.push({
          day: day.toString().padStart(2, "0"), // Format day as 01, 02, etc.
          label: date.toLocaleDateString("en-US", { weekday: "short" }), // Get short weekday name
        });
      }
      return generatedDates;
    };

    const dates = generateDatesForCurrentMonth();
    setDates(dates);

    // Default to today's date and scroll to it
    const todayDate = new Date().getDate().toString().padStart(2, "0");
    setSelectedDate(todayDate);

    // Focus on today's date
    const todayIndex = dates.findIndex((item) => item.day === todayDate);
    setTimeout(() => {
      if (flatListRef.current && todayIndex >= 0) {
        flatListRef.current.scrollToIndex({ index: todayIndex, animated: true });
      }
    }, 100); // Delay to allow FlatList to render
  }, []);

  const handleDateSelection = (day) => {
    setSelectedDate(day);

    // Scroll to the selected date
    const index = dates.findIndex((item) => item.day === day);
    if (flatListRef.current && index >= 0) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };
  const renderDateItem = ({ item }) => {
    const isSelected = item.day === selectedDate;

    return (
      <TouchableOpacity
        style={styles.dateItemWrapper}
        onPress={() => handleDateSelection(item.day)}
      >
        {isSelected ? (
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}

            colors={["#4BB5FF", COLORS.secondary]}
            style={styles.dateItem}
          >
            <Text style={[styles.dateText, styles.selectedDateText]}>
              {item.day}
            </Text>
            <Text style={[styles.labelText, styles.selectedLabelText]}>
              {item.label}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.dateItem}>
            <Text style={styles.dateText}>{item.day}</Text>
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const timeSlot = [
    {
      id: 1,
      form: "09:00 AM",
      to: "10:00 AM"
    },
    {
      id: 2,
      form: "10:00 AM",
      to: "11:00 AM"
    },
    {
      id: 3,
      form: "11:00 AM",
      to: "12:00 PM"
    },
    {
      id: 4,
      form: "12:00 PM",
      to: "01:00 PM"
    },
  ]

  const handleApply = async () => {
    try {
      props?.onConfirm()

    } catch (error) {

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
          paddingTop: SIZES.twenty,
          backgroundColor: COLORS.primary,
          borderTopRightRadius: SIZES.twentyFive,
          borderTopLeftRadius: SIZES.twentyFive,
          height: height * 0.6,
        }}>
        <TouchableOpacity
          style={{
            zIndex: SIZES.twenty,
            position: "absolute",
            right: SIZES.twentyFive,
            top: SIZES.twenty,
          }}
          onPress={() => props?.onclose()}
        >
          <Icon
            name={"cross"}
            type={IconType.Entypo}
            color={COLORS.white}


          />
        </TouchableOpacity>

        <ScrollView style={{ flex: 1 }}>

          <Text style={[styles.topHeading]}>Select</Text>


          <ScrollView
            style={{}}
            contentContainerStyle={{
              paddingHorizontal: SIZES.fifteen,
              flexGrow: 1,
            }}>
            <View>

              <FlatList
                // ref={flatListRef} // Attach the ref to the FlatList
                data={dates}
                horizontal
                keyExtractor={(item) => item.day}
                renderItem={renderDateItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.dateList}
                getItemLayout={(data, index) => ({
                  length: 70, // Approximate width of each date item
                  offset: 70 * index,
                  index,
                })} // Optimize scrolling
              />
            </View>
            <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, marginBottom: SIZES.twenty }}>
              Available Slots
            </Text>
            <View>
              <FlatList
                data={timeSlot}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => { setSelectedSlot(item?.form) }}
                      style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: SIZES.fifteen }}>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon
                          name={item?.form === selectedSlot ? "circle" : "circle-o"}
                          type={IconType.FontAwesome}
                          color={item?.form === selectedSlot ? COLORS.secondary : COLORS.white}
                        />
                        <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen, marginLeft: SIZES.ten }}>
                          {item?.form}
                        </Text></View>

                      <Text style={{ color: COLORS.gray }}>To</Text>
                      <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>
                        {item?.to}
                      </Text>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>



          </ScrollView>
        </ScrollView>


        <CustomButton
          onPress={() => {
            handleApply()
          }}
          title={'Confirm'}
          btnStyle={{
            margin: SIZES.fifteen,
          }}
        />
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  topHeading: {
    fontSize: SIZES.twenty * 1.1,
    marginVertical: SIZES.ten,
    color: COLORS.white,
    alignSelf: "center"
  },
  heading: {
    fontWeight: SIZES.fifteen,
    color: COLORS.black,
    fontWeight: "600",
    marginVertical: SIZES.fifteen
  },
  dateList: {
    alignItems: "center",
  },
  dateItem: {
    paddingHorizontal: SIZES.ten,
    paddingVertical: SIZES.twenty,
    justifyContent: "space-between",
    alignItems: "center",
    height: height * .1,
    marginHorizontal: 5,
    borderRadius: 30,
    marginVertical: SIZES.twentyFive,
    borderColor: COLORS.gray,
    borderWidth: 1,
    backgroundColor: COLORS.primary
  },
  selectedDateItem: {
    backgroundColor: "linear-gradient(to right, #00FFB9, #4C88FF)", // Simulated gradient

  },
  dateText: {
    fontSize: 16,
    color: "#FFF",
  },
  selectedDateText: {
    fontWeight: "bold",
  },
  labelText: {
    fontSize: 12,
    color: "#999",
  },
  selectedLabelText: {
    color: "#FFF",
  },
});
