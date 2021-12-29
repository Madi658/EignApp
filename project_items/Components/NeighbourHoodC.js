import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NeighbourhoodFeatures from '../Components/NeighbourhoodFeatures';
const NeighbourHoodC = props => {
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
          Neighbourhood
        </Text>
        <Icon
          onPress={Showing}
          name="keyboard-arrow-down"
          size={30}
          color="#000"
          style={{paddingRight: 10}}
        />
      </View>
      <Text style={{paddingHorizontal: 10, fontSize: 20, color: '#4F4F4F'}}>
        Charlotte Hall, MD
      </Text>
      {shouldShow ? (
        <View style={{flexDirection: 'row'}}>
          <NeighbourhoodFeatures
            price="$399k"
            title="Median Price"
            title2="for sale"
          />
          <NeighbourhoodFeatures
            price="$150"
            title="Median Price"
            title2="per sq.ft"
          />
          <NeighbourhoodFeatures
            price="$48"
            title="Median Price"
            title2="on Market"
          />
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
export default NeighbourHoodC;
