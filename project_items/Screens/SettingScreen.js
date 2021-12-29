//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions} from 'react-native';
// import { PanoramaView } from 'react-native-360';
const SettingScreen = () => {
  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      {/* <PanoramaView 
    style={{height:200,width:width}}
    image={require('../assets/360.jpg')}
    displayMode={'embedded'}
    enableFullscreenButton
    enableCardboardButton
    enableTouchTracking
    hidesTransitionView
    enableInfoButton={false}              
   />    */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

//make this component available to the app
export default SettingScreen;
