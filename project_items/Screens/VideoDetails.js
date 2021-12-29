import React, {Component, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
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
import DetailsVideo from '../Components/DetailsVideo';
import {useDispatch, useSelector} from 'react-redux';
import PicMenu from './PicMenu';
const Dropdown = props => {
    const item =props.route?.params.item;
    let data=item?.fields?.image_or_video.split(',')
    const {token} = useSelector(state => state.LogicData);
const GoToChatroom=() => {
  if(token.user_id !=undefined)
{ 
   props.navigation.navigate('Chatroom',{
  name: item.fields.user_name,
  Pro: '',
  mes: 'Hi',
  id: item.fields.user,
  Pic:item.fields.profile_pic,
});
}else {
  alert('Please Login To message')
}
}
  return (    
    <SafeAreaView style={{flex:1}}>
    <ScrollView>
      <DetailsVideo  navigation={props.navigation} data={item}/>
      <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:15,paddingVertical:20}}>
      <PicMenu  onPressed={()=>{ props.navigation.navigate('PicViewer',{data})}} text='Living Room' />
      <PicMenu onPressed={()=>{ props.navigation.navigate('PicViewer',{data})}} text='Bed Room'/>
      <PicMenu onPressed={()=>{ props.navigation.navigate('PicViewer',{data})}} text='Bath Room'/>
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around',paddingHorizontal:15}}>
        <PropertyTypeCardsAgain
          nameM="Bed"
          Cont={item?.fields?.beds}
          Color="#0042CC"
          directory={require('../assets/bed.png')}
        />
        <PropertyTypeCardsAgain
          nameM="Bath"
          Cont={item?.fields?.baths}
          Color="#0042CC"
          directory={require('../assets/bath.png')}
        />
        <PropertyTypeCardsAgain
          nameM=" sqf"
          Cont={item?.fields?.area}
          Color="#0042CC"
          directory={require('../assets/squarefeet.png')}
        />
        <PropertyTypeCardsAgain
          nameM="lot"
          Cont={item?.fields?.lot}
          Color="#0042CC"
          directory={require('../assets/lot.png')}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around',paddingHorizontal:15}}>
        <PropertyTypeCardsAgain
          nameM="Liability"
          Color="#0042CC"
          Cont={item?.fields?.lot}
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
      <ProgramFeatureC 
       stories={item?.fields?.stories} 
       Baths={item?.fields?.baths} 
       community={item?.fields?.community}
       property_type={item?.fields?.property_type}    
      />
      <MortageC />
      <PropertyHistoryC />
      <NearbyC />
      <PropertyTaxesC />
      <SurroundingC />
      <NeighbourHoodC />
      <SimilarHomeC />
      { token.user_id !== item.fields.user ?
      <Button
        press={GoToChatroom}
        title="Send message to seller"
        color="#FFFFFF"
        TextColor="#2FC89B"
        BorderColor="#2FC89B"
      />:null
      }
      <Button
        press={() => props.navigation.navigate('SubmitAnOffer')}
        title="Submit an Offer"
        color="#0042CC"
        TextColor="#fff"
        BorderColor="#0042CC"
        bottoms={20}
      />
    </ScrollView>
    </SafeAreaView>
  );
};
export default Dropdown;
