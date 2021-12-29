import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import LoanC from '../Components/LoanC';
import BackArrow from '../Components/BackArrow';
const LoanScreen = props => {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: 350}}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              source={require('../assets/loanbox.png')}
            />
            <View
              style={{position: 'absolute', marginTop: '2%', marginLeft: '2%'}}>
              <BackArrow onPressBack={() => props.navigation.goBack()} />
            </View>
            <Image
              style={{position: 'absolute', left: 250, top: 20}}
              source={require('../assets/line.png')}
            />
            <Text
              style={{
                position: 'absolute',
                marginTop: '20%',
                marginLeft: '12%',

                fontSize: 35,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Need a Loan?
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginTop: '30%',
                marginLeft: '12%',
                fontSize: 35,

                fontWeight: 'bold',
                color: '#fff',
              }}>
              Get pre-approved
            </Text>
            <View
              style={{
                height: 10,
                width: '70%',
                // backgroundColor: 'red',
                alignSelf: 'center',
                marginTop: '45%',
                flexDirection: 'row',
                position: 'absolute',
                left: 48,
              }}>
              <Searchbar
                icon={() => <Icon name="map-pin" size={20} color="#0042CC" />}
                style={{
                  borderWidth: 1,
                  borderColor: '#0042CC',
                  width: '70%',
                  height: '100%',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
                placeholder="Search"
                onChangeText={updateSearch}
                value={search}
              />
              <TouchableOpacity
                onPress={props.press}
                style={{
                  height: '100%',
                  width: '30%',
                  backgroundColor: '#2EC397',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}>
                <Text style={{color: '#fff', fontSize: 22, fontWeight: '500'}}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                position: 'absolute',
                top: '85%',
                left: '15%',
              }}
              source={require('../assets/BoxDesign.png')}
            />
          </View>
          <LoanC
            directory={require('../assets/moneybox.png')}
            press={() => props.navigation.navigate('CalculatorScreen')}
          />
          <LoanC
            directory={require('../assets/housee.png')}
            press={() => props.navigation.navigate('CalculatorScreen')}
          />
          <LoanC
            directory={require('../assets/moneybox.png')}
            press={() => props.navigation.navigate('CalculatorScreen')}
          />
          <LoanC
            directory={require('../assets/housee.png')}
            press={() => props.navigation.navigate('CalculatorScreen')}
          />
          <LoanC
            directory={require('../assets/moneybox.png')}
            press={() => props.navigation.navigate('CalculatorScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    
  );
};
export default LoanScreen;