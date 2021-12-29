import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const BlogComponent = props => {

  return (
    <View>
      <View
        style={{
          height: 250,
          width: '90%',
          alignSelf: 'center',
          marginTop: '30%',
          backgroundColor:'red',
          borderRadius:10
        }}>
        <Image style={{height:'100%',width:'100%',borderRadius:10}} source={{uri:props.img}} />
      </View>
      <View style={{flexDirection: 'row', marginLeft: '10%'}}>
        <View
          style={{
            height: 6,
            width: 6,
            borderRadius: 6,
            backgroundColor: '#2FC89B',
          }}
        />
        <Text style={{fontSize: 14, left: 10, color: '#2FC89B'}}>
          Buy Guide
        </Text>
      </View>
      <Text style={{fontSize: 18, left: 35, color: '#000'}}>
        {props.title}
      </Text>
      <Text style={{fontSize: 16,  left: 35, color: '#2FC89B'}}>
        Read more
      </Text>
    </View>
  );
};
export default BlogComponent;
