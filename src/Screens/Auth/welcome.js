import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES, SCREENS, SIZES, STYLES} from '../../constants';
import CustomButton from '../../components/CustomButton';

export default function welcome(props) {
  const {navigation} = props;
  const [index, setIndex] = useState(0);
  const onPressHandle = () => {
    if (index === 2) {
      navigation.navigate(SCREENS.UserSelection);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <ImageBackground
      resizeMode={'contain'}
      source={
        index === 0
          ? IMAGES.welcomeScreen1
          : index === 1
          ? IMAGES.welcomeScreen2
          : index === 2 && IMAGES.welcomeScreen3
      }
      style={[STYLES.container, styles.container]}>
        {index===0?
        <>
           <Text style={styles.heading}>Welcome to FirmaLink</Text>
           <Text style={styles.subHeading}>Your trusted partner for secure and convenient notarization services.</Text>
        </>
  :
     index===1?
     <>
         <Text style={styles.heading}>Are You a Client or Notary?</Text>
         <Text style={styles.subHeading}>Sign up as a client to book FirmaLink services or join as a notary to offer your expertise.</Text>
     </>
 :
     index===2 &&
     <>
     <Text style={styles.heading}>Stay on Top of Your Schedule</Text>
     <Text style={styles.subHeading}>Book, track, and manage all your notary appointments in one place.</Text>
     </>
     
        }
 
      <CustomButton onPress={onPressHandle} title={index===2?"Get Started":'Next'} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBottom: SIZES.twentyFive,
  },
  heading: {
    color: COLORS.white,
    fontSize: SIZES.twentyFive * 1.3,
    fontWeight: '500',
    marginBottom:SIZES.fifteen
  },
  subHeading:{
    color: COLORS.white,
    fontSize: SIZES.fifteen ,
    marginBottom:SIZES.twentyFive,
    lineHeight:SIZES.twentyFive
 
  }
});
