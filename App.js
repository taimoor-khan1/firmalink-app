import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import MainNavigation from './src/navigation/MainNavigation';
import { Icon, IconType } from './src/components';
import { COLORS, FONTS, IMAGES, SIZES } from './src/constants';
import { store } from './src/redux/store';
import AnimatedSplash from './src/components/AnimatedSplash/AnimatedSplash';

const App = () => {
  const [networkState, setNetworkState] = useState( true );
  const [isLoaded, setIsLoaded] = useState( false );

  useEffect( () => {
    LogBox.ignoreAllLogs();
    setTimeout( () => {
      setIsLoaded( true );
    }, 1500 );
  }, [] );

  useEffect( () => {
    const unsubscribe = NetInfo.addEventListener( async state => {


      setTimeout( () => {
        setNetworkState( state.isInternetReachable );
      }, 1000 );
    } );

    return () => unsubscribe();
  } );

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={IMAGES.logo}
      backgroundColor={COLORS.primary}
      logoHeight={SIZES.fifty * 3.5}
      logoWidth={SIZES.fifty * 3.5}>
      <StatusBar
        backgroundColor={COLORS.primary}
        translucent={Platform.OS === 'android'}
        barStyle={'light-content'}
      />
      <View style={styles.safeAreaView}>


        {networkState ? (
          <Provider store={store}>

            <MainNavigation />
          </Provider>
        ) : (
          <View style={styles.noInternetView}>
            <View style={styles.imgStyle}>
              <Icon
                name={'wifi-off'}
                type={IconType.Feather}
                size={SIZES.fifty * 1.75}
                color={COLORS.purple}
              />
            </View>
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              No Internet
            </Text>
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              Connection Available
            </Text>
            <View style={{ marginTop: SIZES.twenty }}>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Your device is not connected to internet
              </Text>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Please make sure your connection is working
              </Text>
            </View>
          </View>
        )}
      </View>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create( {
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  noInternetView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.twentyFive,
  },
  imgStyle: {
    marginBottom: SIZES.twentyFive,
  },
  textStyle: {
    textAlign: 'center',
    color: COLORS.textGrey,
  },
  headingStyle: {
    color: COLORS.white,
  },
} );

export default App;