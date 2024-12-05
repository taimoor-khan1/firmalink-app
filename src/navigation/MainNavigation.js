import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONSTANTS, SCREENS } from '../constants';

import Loader from '../components/Loader';

import welcome from '../Screens/Auth/welcome';
import Login from '../Screens/Auth/Login';
import UserSelection from '../Screens/Auth/UserSelection';

import ForgetPassword from '../Screens/Auth/ForgetPassword';
import BottomTabNavigation from './BottomBar/BottomTabNavigation';

import NotaryWallet from '../Screens/Notary/NotaryWallet';
import NotarySetting from '../Screens/Notary/NotarySetting';
import PriceSetting from '../Screens/Notary/PriceSetting';
import ClientHome from '../Screens/Client/ClientHome';
import ClientServices from '../Screens/Client/ClientServices';
import ClientAppointment from '../Screens/Client/ClientAppointment';
import ClientProfile from '../Screens/Client/ClientProfile';
import NotaryDetail from '../Screens/Client/NotaryDetail';
import AppointmentDetail from '../Screens/AppointmentDetail';
import BottomTabClientNavigation from './BottomBar/BottomTabClientNavigation';
import NotaryNotification from '../Screens/Notary/NotaryNotification';
import AppointmentDetailSheet from '../Screens/AppointmentDetailSheet';
import SignUpSkill from '../Screens/Auth/SignUpSkill';
import TravelSettings from '../Screens/Notary/TravelSettings';
import CalenderSettings from '../Screens/Notary/CalenderSettings';
import ClientRegister from '../Screens/Auth/ClientRegister';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export default function ( props ) {


  const [appLoading, setAppLoading] = useState( true );



  return (
    <>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={SCREENS.welcomeScreen}
        >
          <Stack.Screen name={SCREENS.welcomeScreen} component={welcome} />
          <Stack.Screen name={SCREENS.UserSelection} component={UserSelection} />
          <Stack.Screen name={SCREENS.login} component={Login} />
          <Stack.Screen name={SCREENS.ClientRegister} component={ClientRegister} />
          <Stack.Screen name={SCREENS.SignUpSkill} component={SignUpSkill} />
          <Stack.Screen name={SCREENS.forget} component={ForgetPassword} />
          <Stack.Screen name={SCREENS.bottamTab} component={BottomTabNavigation} />
          <Stack.Screen name={SCREENS.bottamTabCLient} component={BottomTabClientNavigation} />

          <Stack.Screen name={SCREENS.NotaryWallet} component={NotaryWallet} />
          <Stack.Screen name={SCREENS.NotarySettings} component={NotarySetting} />
          <Stack.Screen name={SCREENS.PriceSettings} component={PriceSetting} />
          <Stack.Screen name={SCREENS.ClientHome} component={ClientHome} />
          <Stack.Screen name={SCREENS.ClientService} component={ClientServices} />
          <Stack.Screen name={SCREENS.ClientAppointment} component={ClientAppointment} />
          <Stack.Screen name={SCREENS.ClientProfile} component={ClientProfile} />
          <Stack.Screen name={SCREENS.AppointmentDetails} component={AppointmentDetail} />
          <Stack.Screen name={SCREENS.NotaryNotifications} component={NotaryNotification} />
          <Stack.Screen name={SCREENS.NotaryDetail} component={NotaryDetail} />
          <Stack.Screen name={SCREENS.AppointmentDetailSheet} component={AppointmentDetailSheet} />
          <Stack.Screen name={SCREENS.TravelSettings} component={TravelSettings} />
          <Stack.Screen name={SCREENS.CalenderSettings} component={CalenderSettings} />




        </Stack.Navigator>

        <Loader />

      </NavigationContainer >
    </>
  );
}

const styles = StyleSheet.create( {} );
