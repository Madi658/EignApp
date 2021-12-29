import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
const NextButton = props => {
  return (
    <View
      style={{
        // width: '90%',
        height: 100,
        alignSelf: 'center',
        marginTop: '10%',
        marginRight: '5%',
      }}>
      <Button title="Next" onPress={props.onNextPress} />
    </View>
  );
};
export default NextButton;
