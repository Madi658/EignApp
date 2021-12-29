import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import PieChart from './PieChart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MortgageFeatures from '../Components/MortgageFeatures';
const MortageC = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const Showing = () => {
    setShouldShow(!shouldShow);
  };
  return (
    <View>
      <View
        style={{
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold'}}>
          Monthly Mortgage
        </Text>
        <Icon
          onPress={Showing}
          name="keyboard-arrow-down"
          size={30}
          color="#000"
          style={{paddingRight: 10}}
        />
      </View>
      {shouldShow ? (
        <View>
          <PieChart />
          <MortgageFeatures
            title="Principal & Interest"
            value="$24,630"
            color="#0042CC"
            align={150}
          />
          <MortgageFeatures
            title="Property Taxes"
            value="$4,630"
            color="#3CD7E1"
            align={180}
          />
          <MortgageFeatures
            title="Home Insurance"
            value="$730"
            color="#FECA7A"
            align={180}
          />
          <MortgageFeatures
            title="HOA"
            value="$354"
            color="#F2994A"
            align={260}
          />
          <MortgageFeatures
            title="Mortgage Insurance"
            value="$290"
            color="#C1DAFF"
            align={150}
          />
        </View>
      ) : null}
      <View
        style={{
          height: 0.5,
          width: '97%',
          backgroundColor: '#828282',
          alignSelf: 'center',
          top: 15,
        }}
      />
    </View>
  );
};
export default MortageC;
