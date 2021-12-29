import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

const CheckButtons = props => {
  return (
    <View
      style={{
        height: 55,
        width: '30%',
        marginLeft: '2%',
        //   backgroundColor: 'red',
      }}>
      <CheckBox
        textStyle={{color: '#A1A1A1'}}
        center
        title={props.name}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        // checked={checked}
      />
    </View>
  );
};
export default CheckButtons;
