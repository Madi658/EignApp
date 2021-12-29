import React, {Component, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import NextButton from '../Components/NextButton';
import Input from 'react-native-input-style';
import {TextInput} from 'react-native-paper';

const Name = props => {
  const [setFName, setsFName] = useState('');
  const [setLName, setsLName] = useState('');
  const [setEmail, setsEmail] = useState('');
  const [setPhon, setsPhon] = useState('');
  const [setValid, setsValid] = useState(0);

  const onHandleFName = text => {
    setsFName(text);
  };
  const onHandleLName = text => {
    setsLName(text);
  };
  const onHandlePhon = text => {
    setsPhon(text);
  };
  const onHandleEmail = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setsEmail(text);
    } else {
      setsEmail(text);
      console.log('Email is Correct');
      setsValid(1);
    }
  }

  const validatingEmptyFields = () => {
    if (setFName === '' || setLName === '' || setEmail === '') {
      Alert.alert('Please Enter required field');
      // props.navigation.navigate('Password');
    } else if (setValid === 0) {
      Alert.alert('Sorry', 'Please Enter valid Email');
    } else {
      props.navigation.navigate('Password', {
        name: setFName,
        SName: setLName,
        emailValue: setEmail,
        setPhon: setPhon.toString(),

      });
      setsValid(0);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{backgroundColor: '#fff', justifyContent: 'center'}}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <ScrollView>
          <View style={{flex: 1}}>
            <BackArrow onPressBack={() => props.navigation.goBack()} />
            <View
              style={{
                marginTop: '20%',
                marginLeft: '5%',
              }}>
              <Information
                firstText="What’s your Name?"
                secondText="Write your full name and email"
              />
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: '5%',
                  marginRight: '5%',
                }}>
                <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="First Name"
                  onChangeText={text => onHandleFName(text)}
                  value={setFName}
                  mode={'outlined'}
                  placeholder={'Enter Your First Name'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
                <TextInput
                  autoCapitalize='none'
                  label="Last Name"
                  onChangeText={text => onHandleLName(text)}
                  value={setLName}
                  mode={'outlined'}
                  placeholder={'Enter Your Last Name'}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                    top: 5,
                  }}
                />
                <TextInput
                  autoCapitalize='none'
                  keyboardType="email-address"
                  label="Email"
                  onChangeText={text => onHandleEmail(text)}
                  value={setEmail}
                  mode={'outlined'}
                  placeholder={'Enter Your Email'}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                    top: 10,
                  }}
                />
              <TextInput
                  autoCapitalize='none'
                  keyboardType='phone-pad'
                  label="Phon Number"
                  onChangeText={text => onHandlePhon(text)}
                  value={setPhon}
                  mode={'outlined'}
                  placeholder={'Enter Your Phone Number'}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                    top: 10,
                  }}
                />
              </View>
              <View
                style={{
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  marginTop: '10%',
                  marginRight: '5%',
                }}>
                <Button title="Next" onPress={validatingEmptyFields} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Name;