import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const FilterScreenButton = props => {
  return (
    <View style={props.styling}>
      <TouchableOpacity
        //   onPress={        props.onMapViewPress}
        style={{
          height: 35,
          width: '40%',
          backgroundColor: '#3454D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <Text style={{color: '#FFFFFF'}}>For Sale</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onListViewPress}
        style={{
          height: 35,
          width: '40%',
          backgroundColor: '#DFE9FF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,

          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}>
        <Text style={{color: '#000'}}>For Rent</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilterScreenButton;
