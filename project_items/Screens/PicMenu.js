//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

// create a component
const PicMenu = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={props.onPressed}
             style={{width:110,height:70,borderRadius:10}}>
            <Image
            
            source={require('../assets/deluxeroom.png')}
            style={{width:'100%',height:'100%',borderRadius:5}}
            />
            <Text style={{top:5}}>
                {props.text}
            </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
       
    },
});

//make this component available to the app
export default PicMenu;
