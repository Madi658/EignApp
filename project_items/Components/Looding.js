import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet,Dimensions} from 'react-native';
import {Overlay} from 'react-native-elements';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Loading = ({visible}) => (
  <Overlay visible={visible}>
    <View style={loader?.centering}>
      <ActivityIndicator size={'large'} />
      <Text>{'Loading...'}</Text>
    </View>
  </Overlay>
);
const loader = StyleSheet.create({
  centering: {
    width:windowWidth,
    height:windowHeight,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'white',
  },
});

export {Loading};