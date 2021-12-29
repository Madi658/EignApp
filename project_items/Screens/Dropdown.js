import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MortageC from '../Components/MortageC';
import ProgramFeatureC from '../Components/ProgramFeatureC';
import PropertyHistoryC from '../Components/PropertyHistoryC';
import NearbyC from '../Components/NearbyC';
import PropertyTaxesC from '../Components/PropertyTaxesC';
import SurroundingC from '../Components/SurroundingC';
import NeighbourHoodC from '../Components/NeighbourHoodC';
import SimilarHomeC from '../Components/SimilarHomeC';
import Button from '../Components/Button';
import PropertyDescriptionC from '../Components/PropertyDescriptionC';
import PropertyTypeCardsAgain from '../Components/PropertyTypeCardsAgain';
const Dropdown = () => {
  return (
    <ScrollView
      style={{
        height: '80%',
        width: '100%',
        //   backgroundColor: 'red',
      }}>
      <View style={{flexDirection: 'row'}}>
        <PropertyTypeCardsAgain
          nameM="3 Bed"
          Color="#0042CC"
          directory={require('../assets/bed.png')}
        />
        <PropertyTypeCardsAgain
          nameM="1 Bath"
          Color="#0042CC"
          directory={require('../assets/bath.png')}
        />
        <PropertyTypeCardsAgain
          nameM="1,321 sqf"
          Color="#0042CC"
          directory={require('../assets/squarefeet.png')}
        />
        <PropertyTypeCardsAgain
          nameM="3.14 lot"
          Color="#0042CC"
          directory={require('../assets/lot.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <PropertyTypeCardsAgain
          nameM="Liability"
          Color="#0042CC"
          directory={require('../assets/liability.png')}
          directoryStar={require('../assets/star.png')}
          rating="4.5"
        />
        <PropertyTypeCardsAgain
          nameM="School"
          Color="#0042CC"
          directory={require('../assets/school.png')}
          directoryStar={require('../assets/star.png')}
          rating="4.5"
        />
        <PropertyTypeCardsAgain
          nameM="Crime"
          Color="#0042CC"
          directory={require('../assets/crime.png')}
          directoryStar={require('../assets/star.png')}
          rating="4.5"
        />
        <PropertyTypeCardsAgain
          nameM="Noise"
          Color="#0042CC"
          directory={require('../assets/torch.png')}
          directoryStar={require('../assets/star.png')}
          rating="4.5"
        />
      </View>

      <PropertyDescriptionC />
      <ProgramFeatureC />
      <MortageC />
      <PropertyHistoryC />
      <NearbyC />
      <PropertyTaxesC />
      <SurroundingC />
      <NeighbourHoodC />
      <SimilarHomeC />
      <Button
        title="Send message to seller"
        color="#FFFFFF"
        TextColor="#2FC89B"
        BorderColor="#2FC89B"
      />
      <Button
        title="Submit property"
        color="#0042CC"
        TextColor="#fff"
        BorderColor="#0042CC"
      />
    </ScrollView>
  );
};
export default Dropdown;
