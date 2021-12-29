import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Points = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '10%',
        marginLeft: '5%',
        margin: '2%',
      }}>
      <View
        style={{
          height: 15,
          width: 15,
          backgroundColor: '#C4C4C4',
          borderRadius: 10,
        }}
      />
      <Text style={{left: 10, fontSize: 15, top: -4, color: '#767676'}}>
        {props.title}
      </Text>
    </View>
  );
};
export default Points;
