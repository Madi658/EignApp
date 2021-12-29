import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const Loading = props => {
  return (
    <View>
      {props.ShowLoading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            height:'100%'
          }}>
          <ActivityIndicator color={props.clr} size={'small'} />
          <Text style={{color: 'white', fontSize: 12,}}>
            Please Wait...
          </Text>
        </View>
      ) : null}
    </View>
  );
};
export default Loading;
