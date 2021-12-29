import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TextInputC from '../Components/TextInputC';
import CheckBoxes from '../Components/CheckBoxes';
import ButtonC from '../Components/ButtonC';
export default class SignUp extends Component {
  render() {
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
            <View style={{marginLeft: '5%', marginTop: '2%'}}>
              <Text
                onPress={() => this.props.navigation.navigate('Name')}
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
                // onPress={() => this.props.navigation.navigate('Login')}
                style={{
                  fontSize: 18,
                  left: 8,
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Log in
              </Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: '5%'}}>
              <TextInputC
                Id="firstName"
                Label="First Name"
                onError="Please write your name."
              />
              <TextInputC
                Id="lastName"
                Label="Last Name"
                onError="Please write your name."
              />
              <TextInputC
                Id="email"
                Label="Email"
                onError="Your email is invalid"
              />
              <TextInputC
                Id="password"
                Label="Password"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="repeatPassword"
                Label="Repeat Password"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="phone"
                Label="Phone"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="city"
                Label="City"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="country"
                Label="Country"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="state"
                Label="State"
                onError="Please Enter Required Field"
              />
              <TextInputC
                Id="zipCode"
                Label="Zip Code"
                onError="Please Enter Required Field"
              />
            </View>
            <CheckBoxes textTitle="Eign can keep me informed with personalized emails about products or services." />
            <CheckBoxes textTitle="I have read and accept the Terms and Conditions and the Privacy Policies." />
            <View style={{height: '15%', width: '95%'}}>
              <TouchableOpacity
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
                  <Text style={{fontSize: 15, left: 8, color: '#fff'}}>
                    Create Account
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 43,
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
                  height: 43,
                  width: '90%',
                  backgroundColor: '#3B5998',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: '1%',
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
                  marginTop: '1%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'blue',
                    right: 73,
                    fontSize: 18,
                  }}>
                  or sign up with your email
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
