import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants';
const GradientView = props => {
  return (
    <LinearGradient

      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={props.style}

      colors={["#4BB5FF", COLORS.secondary]}
    >
      {props.children}
    </LinearGradient>
  );
};

export default GradientView;
