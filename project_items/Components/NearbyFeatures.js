import React, {Component} from 'react';
import {View, Text} from 'react-native';

const NearbyFeatures = () => {
  return (
    <View
      style={{
        height: 65,
        width: '90%',
        alignSelf: 'center',
        //   backgroundColor: 'red',
        margin: '2%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 5,
        }}>
        <Text style={{color: '#4F4F4F', fontSize: 16}}>
          Ps 183 Robert L Stevenson
        </Text>
        <Text style={{color: '#828282', fontSize: 16}}>0.1</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 7,
        }}>
        <Text style={{color: '#828282', fontSize: 14}}>Public</Text>
        <Text style={{color: '#828282', fontSize: 14, left: -45}}>
          Grades PK-5
        </Text>
        <Text style={{color: '#828282', fontSize: 16}}>mi</Text>
      </View>
      <View
        style={{
          height: 0.5,
          width: '97%',
          backgroundColor: '#828282',
          alignSelf: 'center',
          top: 15,
        }}
      />
    </View>
  );
};
export default NearbyFeatures;
