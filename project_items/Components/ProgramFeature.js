import React, {Component} from 'react';
import {View, Text} from 'react-native';

const ProgramFeature = props => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          fontSize: 16,
          color: '#828282',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          paddingRight: 10,
          paddingVertical: 20,
          fontSize: 16,
          color: '#4F4F4F',
        }}>
        {props.value}
      </Text>
    </View>
  );
};
export default ProgramFeature;
