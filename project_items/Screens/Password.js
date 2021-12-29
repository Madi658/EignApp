import React, {Component, useEffect, useState} from 'react';
import {Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import {TextInput} from 'react-native-paper';
import NextButton from '../Components/NextButton';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Rejister } from '../../redux/actions/Rejister_action';
const Password = props => {
  const dispatch=useDispatch();
  const [setPassword, setsPassword] = useState('');
  const [setRPassword, setsRPassword] = useState('');
  const [isValid, setsIsValid] = useState(null);
  const [isLoading, setsisLoading] = useState(false);
  const onHandlePassword = text => {
    setsPassword(text);
  };
  const onHandleRPassword = text => {
    setsRPassword(text);
  };
  const passwordValidation = () => {
    if (setPassword !== setRPassword) {
      setsisLoading(false);
      Alert.alert('Sorry', "Your Password doesn't match");
    } else if (setRPassword === '' || setPassword === '') {
      setsisLoading(false);
      Alert.alert('Sorry', 'Please Enter required field ');
    } else if (setPassword.length < 6){
      Alert.alert('Your Password length should be minimum 6');
    }
     else {
      let formdata = new FormData();
      formdata.append('email', props?.route?.params?.emailValue);
      formdata.append('password', setPassword);
      formdata.append('confirm_password',setPassword);
      formdata.append('first_name', props?.route?.params?.name);
      formdata.append('last_name', props?.route?.params?.SName);
      formdata.append('phone', props?.route?.params?.setPhon);
      props.navigation.navigate('ConfirmationCode', {
        email: props?.route?.params?.emailValue,
      });
      dispatch(Rejister(formdata))
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
                firstText="Your Password"
                secondText="Your information is fully protected"
              />
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: '3%',
                  marginRight: '5%',
                }}>
                <TextInput
                  secureTextEntry={true}
                  selectionColor="blue"
                  label="Password"
                  onChangeText={text => onHandlePassword(text)}
                  value={setPassword}
                  mode={'outlined'}
                  placeholder={'Enter Your Password'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />

                <TextInput
                  secureTextEntry={true}
                  selectionColor="blue"
                  label="Repeat Password"
                  onChangeText={text => onHandleRPassword(text)}
                  value={setRPassword}
                  mode={'outlined'}
                  placeholder={'Confirm Your Password'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
              </View>
              <NextButton onNextPress={passwordValidation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 48,
    width: '80%',
    padding: 8,
    margin: 16,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});
export default Password;