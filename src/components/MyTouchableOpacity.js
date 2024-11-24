import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback} from 'react-native';

export default function MyTouchableOpacity(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  );
}
