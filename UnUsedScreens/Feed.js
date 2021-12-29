import React, {useCallback, useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import BackArrow from '../project_items/Components/BackArrow';
import FilterScreenButton from '../project_items/Components/FilterScreenButton';
import Textt from '../project_items/Components/Textt';
import Slider from '../project_items/Components/Slider';
import BedScale from '../UnuseableComponents/BedScale';
import SquareFeetFields from '../project_items/Components/SquareFeetFields';
import PropertyTypeCards from '../project_items/Components/PropertyTypeCards';
import CommuteField from '../project_items/Components/CommuteField';
import ListingComponent from '../project_items/Components/ListingComponent';
import {Switch} from 'react-native-paper';

const FilterScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <BackArrow />
          <Text style={{marginLeft: '75%', marginTop: '5%', fontSize: 15}}>
            Reset
          </Text>
        </View>
        <FilterScreenButton
          styling={{top: '8%', marginLeft: '15%', flexDirection: 'row'}}
        />
        <Textt
          title="Price"
          styling={{top: '15%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <View
          style={{
            height: 100,
            width: '100%',
            // backgroundColor: 'red',
            marginTop: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../assets/mountain.png')}
          />
          <Image
            style={{resizeMode: 'contain', position: 'absolute', top: '2%'}}
            source={require('../assets/Intersect.png')}
          />
        </View>
        <Slider />
        <Textt
          title="Beds"
          styling={{marginLeft: '5%', flexDirection: 'row'}}
        />
        <BedScale />
        <Textt
          title="Bathrooms"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <BedScale />
        <Textt
          title="Square Feet"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <SquareFeetFields />
        <Textt
          title="Property Type"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <PropertyTypeCards
              nameM="House"
              directory={require('../assets/house.png')}
            />
            <PropertyTypeCards
              nameM="Condo"
              directory={require('../assets/condo.png')}
            />
            <PropertyTypeCards
              nameM="TownHouse"
              directory={require('../assets/townhouse.png')}
            />
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <PropertyTypeCards
              nameM="MultiFamily"
              directory={require('../assets/multifamily.png')}
            />
            <PropertyTypeCards
              nameM="Land"
              directory={require('../assets/land.png')}
            />
            <PropertyTypeCards
              nameM="OtherHouse"
              directory={require('../assets/otherhouse.png')}
            />
          </View>
        </View>
        <Textt
          title="Commute"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <CommuteField />
        <Textt
          title="Listing Type"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="New Construction" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Must have Garage" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Accessible Only" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Must have Pool" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Have Basement" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <Textt
          title="Shows Only"
          styling={{marginLeft: '5%', flexDirection: 'row'}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Open House" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Price Reduced" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            // backgroundColor: 'red',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '4%',
          }}>
          <ListingComponent nameA="Include Estimates" />
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color="blue"
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: '90%',
            backgroundColor: '#0042CC',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: '5%',
            marginBottom: '3%',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, left: 10, color: '#fff'}}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default FilterScreen;
