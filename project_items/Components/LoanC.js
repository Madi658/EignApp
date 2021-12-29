import React, {Component} from 'react';
import {View, Text, Image, ImageStore} from 'react-native';
import BackArrow from './BackArrow';

const LoanC = props => {
  return (
    <View>
       
      <Image
        style={{
          alignSelf: 'center',
          height: 130,
          width: 130,
          resizeMode: 'contain',
          marginTop: '3%',
        }}
        source={require('../assets/triangle.png')}
      />
     
      <Image
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: '8%',
          resizeMode: 'contain',
          height: 70,
          width: 70,
        }}
        source={props.directory}
      />
      <Text
        onPress={props.press}
        style={{
          alignSelf: 'center',
          marginTop: '3%',
          fontWeight: 'bold',
          fontSize: 18,
          textDecorationLine: 'underline',
        }}>
        Mortgage Payment Calculator
      </Text>

      <Text
        style={{
          alignSelf: 'center',
          marginTop: '3%',
          color: '#4F4F4F',
          fontSize: 16,
          marginLeft: '5%',
        }}>
        Check how much you will pay monthly based on current mortgage rates and
        local average taxes.
      </Text>
    </View>
  );
};
export default LoanC;
