import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from '../../constants';
import NotaryHome from '../../Screens/Notary/NotaryHome';
import NotaryAppointment from '../../Screens/Notary/NotaryAppointment';
import NotaryNotification from '../../Screens/Notary/NotaryNotification';
import NotaryProfile from '../../Screens/Notary/NotaryProfile';

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};



const tabs = [
  {
    id: 0,
    name: "Home",
    component: NotaryHome,
    // select: IMAGES.selectOrder,
    // unSelect: IMAGES.unSelectOrder
  },
  {
    id: 1,
    name: "Appointment",
    component: NotaryAppointment,
    // select: IMAGES.selectLink,
    // unSelect: IMAGES.unSelectLink
  },
  {
    id: 2,
    name: "Profile",
    component: NotaryProfile,
    // select: IMAGES.selectShop,
    // unSelect: IMAGES.unSelectShop
  },
  {
    id: 3,
    name: "Notification",
    component: NotaryNotification,
    // select: IMAGES.selectWh,
    // unSelect: IMAGES.unSelectWh
  },


];

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator

      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.halfWhite,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <View
            style={[StyleSheet.absoluteFill]}
          />
        ),
      }}
    >


      {tabs.map( ( item, index ) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={( { } ) => ( {
            tabBarIcon: ( { focused, color } ) => (
              <View
                style={[
                  { alignItems: "center" }
                ]}
              >
                <Image
                  source={focused ? item.select : item.unSelect}
                />
                <Text style={[FONTS.semiBoldFont18, { color: focused ? COLORS.primary : COLORS.black + 99 }]}>
                  {item.name}</Text>
              </View>
            ),
          } )}

        />
      ) )}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create( {
  tabBarStyle: {
    borderTopWidth: 0,
    height: SIZES.fifty * 1.1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 0 : SIZES.fifteen,
  },
  centertab: {
    height: SIZES.twentyFive * 1.8,
    width: SIZES.twentyFive * 1.8,
    borderWidth: 1,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
