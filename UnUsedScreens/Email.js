import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import TextInputC from '../Components/TextInputC';
import NextButton from '../Components/NextButton';
export default class Name extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <BackArrow onPressBack={() => this.props.navigation.goBack()} />
        <View
          style={{
            marginTop: '20%',
            marginLeft: '5%',
          }}>
          <Information
            firstText="What’s your Email?"
            secondText="We won’t share your informatin or sam you"
          />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              marginTop: '3%',
              marginRight: '5%',
            }}>
            <TextInputC
              Id="Email"
              Label="Email"
              onError="Your email is invalid"
            />
          </View>
          <NextButton
            onNextPress={() => this.props.navigation.navigate('Password')}
          />
        </View>
      </View>
    );
  }
}
