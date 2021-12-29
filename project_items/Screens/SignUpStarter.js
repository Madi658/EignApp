import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../Components/BackArrow';
const SignUpStarter = props => {
  return (
    <>
      <SafeAreaView
        style={{backgroundColor: '#F7F7F7', justifyContent: 'center'}}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F7F7F7',
          justifyContent: 'center',
        }}>
        <ScrollView>
          <BackArrow onPressBack={() => props.navigation.goBack()} />
          <View style={{marginLeft: '5%', marginTop: '2%'}}>
            <Text
              onPress={() => props.navigation.navigate('Name')}
              style={{
                fontSize: 25,
                left: 8,
                fontWeight: 'bold',
                color: 'blue',
              }}>
              Register now
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginLeft: '6%', marginTop: '2%'}}>
            <Text style={{fontSize: 18, color: '#828282', fontWeight: '700'}}>
              Do you already have an account?
            </Text>
            <Text
              onPress={() => props.navigation.navigate('Login')}
              style={{
                fontSize: 18,
                left: 8,
                fontWeight: 'bold',
                color: 'blue',
                textDecorationLine: 'underline',
              }}>
              Log in
            </Text>
          </View>
          <View style={{height: '15%', width: '100%', marginTop: '20%'}}>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                backgroundColor: '#F6F6F6',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '1%',
                borderRadius: 5,
                borderWidth: 1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/google.png')} />
                <Text style={{fontSize: 15, left: 10, color: '#272C37'}}>
                  SignUp with Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '90%',
                backgroundColor: '#3B5998',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '3%',
                borderRadius: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/Vector.png')} />
                <Text style={{fontSize: 15, left: 10, color: '#fff'}}>
                  SignUp with facebook
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'blue',
                  right: 73,
                  fontSize: 18,
                }}>
                or sign up with your
              </Text>
              <Text
                onPress={() => props.navigation.navigate('Name')}
                style={{
                  color: 'blue',
                  right: 63,
                  fontSize: 18,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                email
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default SignUpStarter;
