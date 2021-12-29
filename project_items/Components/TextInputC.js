import React, {Component} from 'react';
import {View} from 'react-native';
import Input from 'react-native-input-style';
const TextInputC = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Input
        id={props.Id}
        label={props.Label}
        keyboardType="default"
        required
        contain=" "
        autoCapitalize="none"
        onInputChange={() => console.log('Done')}
        outlined
        borderColor="blue"
        inputStyle={{color: 'blue'}}
        labelStyle={{backgroundColor: '#fff'}}
        secureTextEntry={props.Entry}
        minLength={props.minL}
        maxLength={props.maxL}
      />
    </View>
  );
};
export default TextInputC;
