import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
const UserPicture = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10%',
      }}>
      <Image source={require('../assets/image.png')} />
      <Text style={{fontSize: 18, fontWeight: 'bold', top: 10}}>
        Raf Redwan
      </Text>
    </View>
  );
};
export default UserPicture;
