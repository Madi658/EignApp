import React, {Component} from 'react';
import {View, Text} from 'react-native';
const PropertyDescriptionC = props => {
  return (
    <View>
      <View
        style={{
          marginTop: '10%',

          justifyContent: 'space-between',
        }}>
        <Text style={{paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold'}}>
          Property Details
        </Text>
      </View>
      <Text style={{fontSize: 14, paddingHorizontal: 10, top: 10}}>
        Spacious two bedroom Duplex Condo. Block away from 69 St. 7 train
        station, many buses in the area. Newly renovated kitchen,heating,gas and
        water are included in common charge.
      </Text>
    </View>
  );
};
export default PropertyDescriptionC;
