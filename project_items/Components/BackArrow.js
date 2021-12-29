import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
const BackArrow = props => {
  return (
    <View style={{marginTop: '3%'}}>
      <Back
        onPress={props.onPressBack}
        name="arrow-back"
        size={30}
        color="black"
        style={{marginLeft: '2%', color: 'grey'}}
      />
    </View>
  );
};
export default BackArrow;
