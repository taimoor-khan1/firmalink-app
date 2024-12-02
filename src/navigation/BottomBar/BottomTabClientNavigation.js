import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from '../../constants';
import NotaryHome from '../../Screens/Notary/NotaryHome';
import NotaryAppointment from '../../Screens/Notary/NotaryAppointment';
import NotaryNotification from '../../Screens/Notary/NotaryNotification';
import NotaryProfile from '../../Screens/Notary/NotaryProfile';
import ClientServices from '../../Screens/Client/ClientServices';
import ClientHome from '../../Screens/Client/ClientHome';
import ClientProfile from '../../Screens/Client/ClientProfile';
import ClientAppointment from '../../Screens/Client/ClientAppointment';

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};



const tabs = [
  {
    id: 0,
    name: "Home",
    component: ClientHome,
    select: IMAGES.TabSelectedHome,
    unSelect: IMAGES.TabUnSelectedHome
  },


  {
    id: 3,
    name: "Services",
    component: ClientServices,
    select: IMAGES.TabSelectedServiceIcon,
    unSelect: IMAGES.TabUnSelectedServiceIcon
  },
  {
    id: 1,
    name: "Appointment",
    component: ClientAppointment,
    select: IMAGES.TabSelectedAppointmentIcon,
    unSelect: IMAGES.TabUnSelectedAppointmentIcon
  },
  {
    id: 2,
    name: "Profile",
    component: ClientProfile,
    select: IMAGES.TabSelectedProfile,
    unSelect: IMAGES.TabUnSelectedProfile
  },


];

const Tab = createBottomTabNavigator();
export default function BottomTabClientNavigation() {
  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={{
          lazy: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        {tabs.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Image source={focused ? item.select : item.unSelect} />
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primary, // Dark purple
    overflow: 'hidden', // Ensure rounded corners are respected
  },

  tabBarStyle: {
    borderTopRightRadius: SIZES.twentyFive,
    borderTopLeftRadius: SIZES.twentyFive,
    height: SIZES.fifty * 1.5,
    borderColor: COLORS.black,
    backgroundColor: COLORS.primary, // Matches dark purple

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

    paddingBottom: SIZES.ten,
    paddingTop: SIZES.ten,


    overflow: 'hidden', // Prevent white background showing
  },

  iconContainer: {
    marginTop: SIZES.twentyFive,
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Center content
  },
});
