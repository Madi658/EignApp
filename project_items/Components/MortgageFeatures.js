import React, {Component} from 'react';
import {View, Text} from 'react-native';

const MortgageFeatures = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          backgroundColor: props.color,
          margin: '2%',
          paddingHorizontal: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: '1%'}}>
        <Text style={{fontSize: 16, left: 20}}>{props.title}</Text>
        <Text style={{fontSize: 16, left: props.align}}>{props.value}</Text>
      </View>
    </View>
  );
};
export default MortgageFeatures;
