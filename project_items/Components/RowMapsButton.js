import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const RowMapsButton = props => {
  return (
    <View style={props.styling}>
      <TouchableOpacity
        onPress={props.onMapViewPress}
        style={{
          height: 35,
          width: '40%',
          backgroundColor: '#3454D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: '#FFFFFF'}}>Map View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onListViewPress}
        style={{
          height: 35,
          width: '40%',
          backgroundColor: '#3454D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginLeft: props.margining,
        }}>
        <Text style={{color: '#FFFFFF'}}>List View</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RowMapsButton;
