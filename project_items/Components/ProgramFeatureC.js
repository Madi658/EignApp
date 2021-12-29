import {set} from 'lodash';
import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgramFeature from './ProgramFeature';
const ProgramFeatureC = (props) => {
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
          Property Feature
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
          <ProgramFeature title="Price/Sq.Ft." value="$725/Sq.Ft." />
          <ProgramFeature title="Baths" value={props.Baths} />
          <ProgramFeature title="Community" value={props.community} />
          <ProgramFeature title="Stories" value={props.stories} />
          <ProgramFeature title="Property Type" value={props.property_type} />
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
export default ProgramFeatureC;
