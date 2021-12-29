import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <View style={{marginTop: '5%'}}>
      <TouchableWithoutFeedback onPress={props.press}>
        <View
          style={{
            height: 50,
            width: '90%',
            backgroundColor: props.color,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            margin: '1%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: props.BorderColor,
            bottom: props.bottoms,
          }}>
          <Text style={{fontSize: 20, color: props.TextColor}}>
            {props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Button;