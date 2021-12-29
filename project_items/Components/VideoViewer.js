//import liraries
import React, { Component } from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar } from 'react-native';
import Video from 'react-native-video';
import BackArrow from '../Components/BackArrow';

// create a component
const VideoViewer = (props) => {
  const link =props.route?.params.item;
console.log("dgsdfshs",link);
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
           <View
          style={{
            flexDirection: 'row',
            zIndex:1,
          }}>
          <BackArrow onPressBack={() => props.navigation.goBack()} />
          <Text style={
           styles.SubmitProperty
          }>{"Video Player"}</Text>
        </View>
             <View style={{height:'90%'}}>
             <Video
              controls={true}
              // onLoad={onload}
            //   onLoadStart={() => <ActivityIndicator color="blue" />}
              // onProgress={onProgress}
              paused={false}
              resizeMode="cover"
            //   source={{uri: item.pic}}
            source={{uri:link}}
              repeat
              style={styles.mediaPlayer}
              volume={1}
              // onLayout={onVideoLayout}
            />
             </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius:10,
      },
      SubmitProperty: {
        fontSize: 20,
        marginTop: '4%',
        marginLeft: '25%',
        paddingBottom:'5%',
        color:'white',
        fontWeight: 'bold',
      },
});

//make this component available to the app
export default VideoViewer;
