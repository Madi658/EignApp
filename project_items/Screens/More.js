import React, {Component, useState} from 'react';
import {Text, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import MoreComponent from '../Components/MoreComponents';
import BackArrow from '../Components/BackArrow';
import messageImg from '../assets/Message.png';
import settingImg from '../assets/settings.png';
import submitPropertyImg from '../assets/propertyy.png';
import {useDispatch, useSelector} from 'react-redux';
import { FlatList } from 'react-native';  
import Button from '../Components/Button';

const More = props => {

  const {token} = useSelector(state => state.LogicData);

  const features=[
    {
      directory: messageImg,
      nameM: 'Message',
    },
    {
      directory: settingImg,
      nameM: 'Settings',
    },
    {
      directory: submitPropertyImg,
      nameM: 'Submit Property',
    },
    {
      directory: submitPropertyImg,
      nameM: 'Loan',
    }, 
    {
      directory: submitPropertyImg,
      nameM: 'Calculater',
    },
    {
      directory: submitPropertyImg,
      nameM: 'Blog',
    },
    {
      directory: submitPropertyImg,
      nameM: 'LogOut',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <BackArrow onPressBack={() => props.navigation.goBack()} />

      <View style={{alignSelf: 'center', marginTop: '-8%'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>More</Text>
      </View>
      {token.user_id == undefined ? 
      <View style={{marginTop:'80%'}}>
      <Text style={{fontWeight:'500',color:'blue',alignSelf:'center'}}>Login is Require To use More Features</Text>
      <Button
        press={() => props.navigation.navigate('Login')}
        title="Go To Login"
        color="#0042CC"
        TextColor="#fff"
        BorderColor="#0042CC"
        bottoms={20}
      />
      </View>
       : 
         <>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('UserProfile')}
        style={{
          height: 100,
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#F6F9FF',
          marginTop: '5%',
          borderRadius: 15,
          flexDirection:'row',
          alignItems:'center',
          padding:'5%'
          
        }}>
        <Image
          style={{width:65,height:65,borderRadius:10,backgroundColor:'gray'}}
          source={{uri:token.profile_pic}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            left:'20%'
          }}>
          {token.full_name}
        </Text>
      </TouchableOpacity>
      <View>
        <FlatList
        bounces={false}
        data={features}
        numColumns={2}
        keyExtractor={(i)=>i.nameM}
        renderItem={({item})=>{
          return  <MoreComponent
          navigation={props.navigation}
          directory={item.directory}
          nameM={item.nameM}
        />
        }}
        />
      </View>

      </>
       }
    </SafeAreaView>
  );
};
export default More;
