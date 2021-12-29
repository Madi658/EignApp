import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import PropertyHistoryFeature from '../Components/PropertyHistoryFeature';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PropertyHistoryC = () => {
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
          Property History
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
        <View>
          <PropertyHistoryFeature
            date="  Jun 9, 2020"
            title="     Listed Active"
            price=" $565,630"
          />
          <PropertyHistoryFeature
            date="Apr 7, 2012"
            title="Sold"
            price="$340,000"
          />
        </View>
      ) : null}
      <View
        style={{
          height: 0.5,
          width: '97%',
          backgroundColor: '#828282',
          alignSelf: 'center',
          top: 20,
        }}
      />
    </View>
  );
};
export default PropertyHistoryC;
