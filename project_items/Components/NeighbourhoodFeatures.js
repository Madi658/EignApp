import React, {Component} from 'react';
import {View, Text} from 'react-native';

const NeighbourhoodFeatures = props => {
  return (
    <View style={{flexDirection: 'row', marginTop: '5%', marginLeft: '2%'}}>
      <View
        style={{
          height: 100,
          width: 1,
          backgroundColor: '#A6A6A6',
          marginLeft: '3%',
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingHorizontal: 15,
            top: -5,
          }}>
          {props.price}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#4F4F4F',
            paddingHorizontal: 15,
            marginTop: '15%',
          }}>
          {props.title}
        </Text>
        <Text style={{fontSize: 14, color: '#4F4F4F', paddingHorizontal: 15}}>
          {props.title2}
        </Text>
      </View>
      {/* <View
          style={{
            height: 100,
            width: 1,
            backgroundColor: '#A6A6A6',
            marginLeft: '3%',
          }}
        /> */}
    </View>
  );
};
export default NeighbourhoodFeatures;
