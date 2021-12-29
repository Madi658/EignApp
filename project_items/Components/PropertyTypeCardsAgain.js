import React, {Component, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-elements';
const PropertyTypeCardsAgain = props => {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        width: 80,
        marginTop: '5%',
        // marginLeft: '5%',
        borderRadius: 10,
        opacity: 3,
        justifyContent:'center',
        backgroundColor: '#F3F7FF',
        borderWidth: 1,
        alignItems:'center',
        borderColor: '#9CB0D9',
      }}>
        <Image style={{resizeMode: 'contain'}} source={props.directory} style={{margin:5}} />
        <View style={{flexDirection: 'row',left:3,alignItems:'center'}}>
          <Image
            style={{resizeMode: 'contain',right:3}}
            source={props.directoryStar}
          />
          <Text>{props.rating}</Text>
        </View>
        <Text style={{fontSize: 15, color: props.Color}}>
         {props.Cont} {props.nameM}
        </Text>
    </TouchableOpacity>
  );
};
export default PropertyTypeCardsAgain;
