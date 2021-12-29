import React, {Component} from 'react';
import {View, Text} from 'react-native';

const PropertyTaxesFeatures = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 10,
        margin: '2%',
      }}>
      <Text
        style={{
          paddingHorizontal: 10,
          fontSize: 16,
          color: '#272C37',
          fontWeight: '500',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#272C37',
          fontWeight: '500',
          left: props.align,
        }}>
        :
      </Text>
      <Text
        style={{
          paddingRight: 20,
          fontSize: 16,
          color: '#272C37',
          fontWeight: '500',
        }}>
        {props.value}
      </Text>
    </View>
  );
};

export default PropertyTaxesFeatures;
