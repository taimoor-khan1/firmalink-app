import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONSTANTS, SCREENS } from '../constants';

import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import welcome from '../Screens/Auth/welcome';
import Login from '../Screens/Auth/Login';
import UserSelection from '../Screens/Auth/UserSelection';
import Register from '../Screens/Auth/Register';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import BottomTabNavigation from './BottomBar/BottomTabNavigation';
import NotaryHome from '../Screens/Notary/NotaryHome';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export default function ( props ) {


  const [appLoading, setAppLoading] = useState( true );




  useEffect( () => {

  }, [] );

  const Home = () => {
    return (
      <View style={{ flex: 1 }}>

      </View>
    )
  }

  return (
    <>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName={SCREENS.NotaryHome}
        >
          <Stack.Screen name={SCREENS.welcomeScreen} component={welcome} />
          <Stack.Screen name={SCREENS.UserSelection} component={UserSelection} />
          <Stack.Screen name={SCREENS.login} component={Login} />
          <Stack.Screen name={SCREENS.signUp} component={Register} />
          <Stack.Screen name={SCREENS.forget} component={ForgetPassword} />
          <Stack.Screen name={SCREENS.NotaryHome} component={NotaryHome} />




        </Stack.Navigator>

        <Loader />

      </NavigationContainer >
    </>
  );
}

const styles = StyleSheet.create( {} );