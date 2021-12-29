import React, {Component} from 'react';
import {Text, View} from 'react-native';
const Information = props => {
  return (
    <View style={{marginTop:'30%',left:'5%'}}>
      <Text style={{fontSize: 25, fontWeight: '500'}}>{props.firstText}</Text>
      <Text style={{fontSize: 15, fontWeight: '400', color: '#666666'}}>
        {props.secondText}
      </Text>
    </View>
  );
};
export default Information;
