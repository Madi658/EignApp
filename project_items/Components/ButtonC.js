import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const ButtonC = props => {
  return (
    <TouchableOpacity
      onPress={props.onPressB}
      style={{
        height: 45,
        width: props.length,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4BC09E',
        marginTop: '3%',
        borderRadius:props.borderRadius
      }}>
      <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 25}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonC;
