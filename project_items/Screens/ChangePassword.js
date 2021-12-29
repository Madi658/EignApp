import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import BackArrow from '../Components/BackArrow';
import ButtonC from '../Components/ButtonC';
import TextInputC from '../Components/TextInputC';
import UserPicture from '../Components/UserPicture';
import {TextInput} from 'react-native-paper';
const ChangePassword = ({navigation}) => {
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
          <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <BackArrow onPressBack={() => navigation.goBack()} />

            <View style={{alignSelf: 'center', marginTop: '-8%'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                ChangePassword
              </Text>
            </View>
            <View>
              <UserPicture />
              <Text style={{fontSize: 13, opacity: 0.5, top: 10, left: 20}}>
                Password must be at least 8 characters
              </Text>
            </View>
            <View style={{marginTop: '5%'}}>
              <TextInput
                autoCapitalize="none"
                selectionColor="blue"
                label="New Password"
                onChangeText={() => console.log('Done')}
                value=""
                mode={'outlined'}
                placeholder={'Enter Your Password'}
                placeholderTextColor="#B4B4B4"
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  height: 43,
                  backgroundColor: '#fff',
                }}
              />
              <TextInput
                autoCapitalize="none"
                selectionColor="blue"
                label="Confirm Password"
                onChangeText={() => console.log('Done')}
                value=""
                mode={'outlined'}
                placeholder={'Enter Your Password Again'}
                placeholderTextColor="#B4B4B4"
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  height: 43,
                  backgroundColor: '#fff',
                }}
              />
              <ButtonC title="Save" length="95%" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default ChangePassword;