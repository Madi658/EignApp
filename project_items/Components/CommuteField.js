import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
const CommuteField = props => {
  return (
    <View
      style={{
        height: 50,
        width: '90%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: '2%',
      }}>
      <TextInput
        placeholder="Enter your commute address"
        placeholderTextColor="#828282"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#BDBDBD',
          paddingHorizontal: 15,
        }}
      />
    </View>
  );
};
export default CommuteField;
