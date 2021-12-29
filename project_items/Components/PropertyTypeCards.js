import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const PropertyTypeCards = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 100,
        width: '25%',
        marginTop: '5%',
        marginLeft: '5%',
        borderRadius: 15,
        backgroundColor: 'yellow',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center', top: 14}}>
        <Image style={{resizeMode: 'contain'}} source={props.directory} />

        <Text style={{fontSize: 15, top: 20, color: props.Color}}>
          {props.nameM}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default PropertyTypeCards;
