import React, {Component} from 'react';
import {View, Text} from 'react-native';

const PropertyHistoryFeature = props => {
  return (
    <View
      style={{
        height: 70,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#F3F7FF',
        marginTop: '5%',
        left: -10,
        borderWidth: 1,
        borderColor: '#9CB0D9',
      }}>
      <Text
        style={{
          top: 10,
          fontSize: 12,
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}>
        {props.date}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            top: 15,
            paddingHorizontal: 15,
            fontSize: 16,
            color: '#2FC89B',
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            paddingRight: 15,
            fontSize: 14,
            color: '#000000',
          }}>
          {props.price}
        </Text>
      </View>
    </View>
  );
};
export default PropertyHistoryFeature;
