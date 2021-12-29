//import liraries
import React, { Component, useState } from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { View, Text, StyleSheet,Image,TouchableOpacity,SafeAreaView } from 'react-native';
// create a component
const PicViewer = (props) => {
    let temp=[];
    const links =props.route?.params.data;
    const [images,setimages]=useState([]);
    // console.log('linksssssss',links);
    links.forEach(i => {
        let ext = i.split('.').pop();
        if (ext === 'jpeg' || ext === 'jpg' || ext === 'png'){
           let temp1={url:i};
           temp.push(temp1);
        }
        
    });
    return (
        <SafeAreaView style={styles.container}>
           
            <ImageViewer imageUrls={temp}/>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
});

//make this component available to the app
export default PicViewer;
