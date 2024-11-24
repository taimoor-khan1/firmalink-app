import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from '../../constants';

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};
const Home = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ color: "black" }}>
        test
      </Text>
    </View> )
}
const Home1 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ color: "black" }}>
        test
      </Text>
    </View> )
}
const Home2 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ color: "black" }}>
        test
      </Text>
    </View> )
}
const Home3 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ color: "black" }}>
        test
      </Text>
    </View> )
}




const tabs = [
  {
    id: 0,
    name: "Home",
    component: Home,
    // select: IMAGES.selectOrder,
    // unSelect: IMAGES.unSelectOrder
  },
  {
    id: 1,
    name: "Appointment",
    component: Home1,
    // select: IMAGES.selectLink,
    // unSelect: IMAGES.unSelectLink
  },
  {
    id: 2,
    name: "Profile",
    component: Home2,
    // select: IMAGES.selectShop,
    // unSelect: IMAGES.unSelectShop
  },
  {
    id: 3,
    name: "Notification",
    component: Home3,
    // select: IMAGES.selectWh,
    // unSelect: IMAGES.unSelectWh
  },


];

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.Home}
      screenOptions={{
        // lazy: false,
        // headerShown: false,
        // tabBarShowLabel: false,
        // tabBarActiveTintColor: COLORS.white,
        // tabBarInactiveTintColor: COLORS.halfWhite,
        // tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //   <View
        //     style={[StyleSheet.absoluteFill]}
        //   />
        // ),
      }}>
      <Tab.Screen
        name={"Home"}
        component={Home}
      />
      {/* {tabs.map( ( item, index ) => (
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
      ) )} */}
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
