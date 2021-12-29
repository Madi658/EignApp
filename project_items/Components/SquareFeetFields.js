import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
const SquareFeetFields = props => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
          <TextInput 
          onChangeText={(t)=>props.min(t)}
          value={props.valueMin}
          keyboardType='decimal-pad'
            style={{
              height: 50,
              width: '40%',
              backgroundColor: '#fff',
              marginLeft: '5%',
              marginTop: '3%',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#BDBDBD',
              padding:10,
            }}
          />
          <TextInput
          value={props.valueMax}
          onChangeText={(t)=>props.max(t)}
          keyboardType='decimal-pad'
              style={{
                height: 50,
                width: '40%',
                backgroundColor: '#fff',
                marginLeft: '8%',
                marginTop: '3%',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#BDBDBD',
                padding:10
              }}
          />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginLeft: '8%', marginTop: '1%', color: '#828282'}}>
          Min
        </Text>
        <Text style={{marginLeft: '45%', marginTop: '1%', color: '#828282'}}>
          Max
        </Text>
      </View>
    </View>
  );
};
export default SquareFeetFields;
