//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button,SafeAreaView} from 'react-native';
import BackArrow from '../Components/BackArrow';
import {TextInput} from 'react-native-paper';
import Information from '../Components/Information';

// create a component
const OTP = props => {
  const [setPhone, setsPhone] = useState('');
  const onHandlePhone=(text)=>{
    setsPhone(text)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackArrow onPressBack={() => props.navigation.goBack()} />
      <View
        style={{
          marginTop: '20%',
          marginLeft: '5%',
        }}>
        <Information
          firstText=" Enter your Phone number?"
          secondText="We'll sent you OTP "
        />
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            marginTop: '3%',
            marginRight: '5%',
          }}>
          <TextInput
            keyboardType="phone-pad"
            selectionColor="blue"
            label="Phone"
            onChangeText={text => onHandlePhone(text)}
            value={setPhone}
            mode={'outlined'}
            placeholder={'Enter your number'}
            placeholderTextColor="#B4B4B4"
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 43,
            }}
          />
        </View>
        <View
          style={{
            height: 100,
            alignSelf: 'center',
            marginTop: '10%',
            marginRight: '5%',
          }}>
          <Button
            title="Next"
            onPress={() => props.navigation.navigate('ConfirmationCode')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default OTP;