import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import TextInputC from '../Components/TextInputC';
import NextButton from '../Components/NextButton';
const Name = props => {
  return (
    <View style={{flex: 1}}>
      <BackArrow onPressBack={() => props.navigation.goBack()} />
      <View
        style={{
          marginTop: '20%',
          marginLeft: '5%',
        }}>
        <Information
          firstText="Whats the code?"
          secondText="Enter the code sent to your phone number"
        />
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            marginTop: '3%',
            marginRight: '5%',
          }}>
          <TextInputC
            Id="Enter Your Code"
            Label="Enter Your Code"
            onError="Your email is invalid"
          />
        </View>

        <NextButton onNextPress={() => console.log('Pressed')} />
        <View style={{flexDirection: 'row', marginLeft: '3%'}}>
          <Text style={{color: '#828282'}}>Didn't received any code?</Text>
          <Text style={{left: 5, color: 'blue', fontWeight: 'bold'}}>
            Resend code
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Name;
