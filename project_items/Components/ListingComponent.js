import React, {Component} from 'react';
import {Text, View} from 'react-native';

const ListingComponent = props => {
  return (
    <View>
      <Text style={{fontSize: 17, marginTop: '3%'}}>{props.nameA}</Text>
    </View>
  );
};
export default ListingComponent;
