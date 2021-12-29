import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropertyTaxesFeatures from '../Components/PropertyTaxesFeatures';

const PropertyTaxesC = () => {
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
          Property Taxes
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
          <PropertyTaxesFeatures title="Tax Amount" value="$55,630" />
          <PropertyTaxesFeatures title="Land" value="$3,694,000" align={35} />
          <PropertyTaxesFeatures title="Improvements" value="$2,148,100" />
          <PropertyTaxesFeatures title="Total" value="$5,842,100" align={35} />
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
export default PropertyTaxesC;
