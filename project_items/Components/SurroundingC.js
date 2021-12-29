import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SurroundingC = props => {
  const [shouldShow, setShouldShow] = useState(false);
  const Showing = () => {
    setShouldShow(!shouldShow);
  };

  return (
    <View>
      <View
        style={{
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold'}}>
          Surrounding
        </Text>
        <Icon
          onPress={Showing}
          name="keyboard-arrow-down"
          size={30}
          color="#000"
          style={{paddingRight: 10}}
        />
      </View>
      {shouldShow ? (
        <View
          style={{
            height: 100,
            width: '90%',
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#9CB0D9',
            backgroundColor: '#F3F7FF',
            left: -10,
          }}>
          <Text
            style={{
              top: 10,
              fontSize: 16,
              paddingHorizontal: 10,
              color: '#0042CC',
            }}>
            Noise Level
          </Text>
          <Text
            numberOfLines={2}
            style={{
              top: 11,
              fontSize: 25,
              fontWeight: 'bold',
              paddingHorizontal: 10,
            }}>
            N / A noise Level outside the property
          </Text>
        </View>
      ) : null}
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
export default SurroundingC;
