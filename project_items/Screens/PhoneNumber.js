import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import CheckBoxes from '../Components/CheckBoxes';
import {TextInput} from 'react-native-paper';
import Loading from '../Components/Loading';
const PhoneNumber = props => {
  const [setPhone, setsPhone] = useState('');
  const [setCity, setsCity] = useState('');
  const [setCountry, setsCountry] = useState('');
  const [setZip, setsZip] = useState('');
  const [setStates, setsStates] = useState('');
  const [isLoading, setsIsLoading] = useState(false);

  const onHandlePhone = text => {
    setsPhone(text);
  };
  const onHandleCity = text => {
    setsCity(text);
  };
  const onHandleCountry = text => {
    setsCountry(text);
  };
  const onHandleZip = text => {
    setsZip(text);
  };
  const onHandleState = text => {
    setsStates(text);
  };
  const userSignup = async () => {
    setsIsLoading(true);

    if (
      setPhone === '' ||
      setCity === '' ||
      setCountry === '' ||
      setStates === '' ||
      setZip === ''
    ) {
      // setsIsLoading(false);
      // Alert.alert('Please Enter required field');
      props.navigation.navigate('OTP');
    } else {
      let formdata = new FormData();
      formdata.append('email', props?.route?.params?.Emaill);
      formdata.append('password', props?.route?.params?.pass);
      formdata.append('confirm_password', props?.route?.params?.Rpass);
      formdata.append('first_name', props?.route?.params?.FirstN);
      formdata.append('last_name', props?.route?.params?.SecondN);
      formdata.append('phone', setPhone);
      formdata.append('city', setCity);
      formdata.append('country', setCountry);
      formdata.append('state', setStates);
      formdata.append('zip_code', setZip);

      console.log('formdata', formdata);

      setsIsLoading(true);
      await fetch('https://eign-backend.herokuapp.com/user/registration/', {
        method: 'POST',

        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
        body: formdata,
      })
        .then(response => response.json())

        .then(data => {
          if (data.email == 'User with this email already exists.') {
            setsIsLoading(false);
            Alert.alert('Sorry', 'User with this email already exists.');
            console.log('Data', data);
          } else {
            setsIsLoading(false);

            Alert.alert('Registered', ' Go to Login', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Login',
                onPress: () => props.navigation.navigate('Login'),
                style: 'default',
              },
            ]);
          }
        })

        .catch(error => {
          console.error(error);
        });
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
                firstText=" Enter your Information?"
                secondText="Your information is fully protected"
              />
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: '3%',
                  marginRight: '5%',
                }}>
                {/* <TextInput
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
                /> */}
                <TextInput
                  selectionColor="blue"
                  label="City"
                  onChangeText={text => onHandleCity(text)}
                  value={setCity}
                  mode={'outlined'}
                  placeholder={'Enter your city'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
                <TextInput
                  selectionColor="blue"
                  label="Country"
                  onChangeText={text => onHandleCountry(text)}
                  value={setCountry}
                  mode={'outlined'}
                  placeholder={'Enter your country'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
                <TextInput
                  selectionColor="blue"
                  label="State"
                  onChangeText={text => onHandleState(text)}
                  value={setStates}
                  mode={'outlined'}
                  placeholder={'Enter your state'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
                <TextInput
                  keyboardType="numeric"
                  selectionColor="blue"
                  label="Zip Code"
                  onChangeText={text => onHandleZip(text)}
                  value={setZip}
                  mode={'outlined'}
                  placeholder={'Enter your zip'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                  }}
                />
              </View>
            </View>
          </View>
          {/* <CheckBoxes textTitle="Eign can keep me informed with personalized emails about products or services." />
          <CheckBoxes textTitle="I have read and accept the Terms and Conditions and the Privacy Policies." /> */}
          {/* <View style={{height: '15%', width: '95%'}}>
        
            <TouchableOpacity
              onPress={() => props.navigation.navigate('OTP')}
              style={{
                height: 43,
                width: '90%',
                backgroundColor: '#3c40c6',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '1%',
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                {isLoading === false ? (
                  <Text style={{fontSize: 15, left: 8, color: '#fff'}}>
                    Create Account
                  </Text>
                ) : (
                  <Loading ShowLoading={isLoading} clr={'white'} />
                )}
              </View>
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              width: '85%',
              height: '15%',
              alignSelf: 'center',
              marginTop: '10%',
              marginRight: '1%',
            }}>
            <Button
              title="Next"
              onPress={() => props.navigation.navigate('OTP')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default PhoneNumber;