import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const FilterButton = props => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 20,
        marginTop:"10%",

        marginLeft: '76%',
      }}>
      <TouchableOpacity
        onPress={props.press}
        style={{
          height: 60,
          width: '90%',
          backgroundColor: '#3454D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: '#FFFFFF'}}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilterButton;
