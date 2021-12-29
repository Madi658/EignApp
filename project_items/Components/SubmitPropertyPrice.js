import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
const SquareFeetFields = props => {
  return (
    <View
      style={{
        height: 50,
        width: '40%',
        marginLeft: '5%',
        marginTop: '3%',
        borderRadius: 10,
        left: props.lefty,
      }}>
      <TextInput
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          opacity: 0.4,
          borderWidth: 1,
          borderColor: '#B0B0B0',
          paddingHorizontal: 10,
        }}
        value={props.value}
        placeholder={props.placeValue}
        placeholderTextColor="#A1A1A1"
        onChangeText={(i)=>{props.onChangeText(i)}}
      />
    </View>
  );
};
export default SquareFeetFields;
