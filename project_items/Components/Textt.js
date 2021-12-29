import React, {Component} from 'react';
import {Text, View} from 'react-native';
const Textt = props => {
  return (
    <View style={props.styling}>
      <Text style={{color: '#000', fontWeight: 'bold', fontSize: 19}}>
        {props.title}
      </Text>
    </View>
  );
};
export default Textt;
