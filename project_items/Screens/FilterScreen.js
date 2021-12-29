import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageStore,
  SafeAreaView
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Textt from '../Components/Textt';
import Slider from '../Components/Slider';
import SquareFeetFields from '../Components/SquareFeetFields';
import CommuteField from '../Components/CommuteField';
import ListingComponent from '../Components/ListingComponent';
import {Switch} from 'react-native-paper';
import houseImage from '../assets/house.png';
import condoImage from '../assets/condo.png';
import townHouseImage from '../assets/townhouse.png';
import useForceUpdate from 'use-force-update';
import multiImage from '../assets/multifamily.png';
import land from '../assets/land.png';
import other from '../assets/otherhouse.png';
import {useDispatch, useSelector} from 'react-redux';
import { Get_ListView } from '../../redux/actions/ListView_action';
import { Get_ListViewP } from '../../redux/actions/ListViewP_action';

const FilterScreen = props => {

  const forceUpdate = useForceUpdate();
  const dispatch=useDispatch();
  const [coloring, setColoring] = useState('black');
  const [button, setButton] = useState([
    {
      nameB: 'For Sale',
      sel: false,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    {
      nameB: 'For Rent',
      sel: false,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  ]);
  const [image, setImage] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [newC, setNewC] = useState(false);
  const [garage, setGarage] = useState(false);
  const [Accessible, setAccessible] = useState(false);
  const [pool, setPool] = useState(false);
  const [MinSquare, setMinSquare] = useState('');
  const [MaxSquare, setMaxSquare] = useState('');
  const [PropertyType, setPropertyType] = useState('');
  const [basement, setBasement] = useState(false);
  const [openHouse, setOpenHouse] = useState(false);
  const [price, setPrice] = useState(false);
  const [estimates, setEstimates] = useState(false);
  const [bedV, setbedV] = useState(0);
  const [bathV, setbathV] = useState(0);
  const [beds, setBeds] = useState([
    {
      value:0,
      digit: 'Any',
      select: false,
      margining: '5%',
      width: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    {
      value:1,
      digit: '1',
      select: false,
      width: 1,
    },
    {
      value:2,
      digit: '2',
      select: false,
      width: 1,
    },
    {
      value:3,
      digit: '3',
      select: false,
      width: 1,
    },
    {
      value:4,
      digit: '4',
      select: false,
      width: 1,
    },
    {
      value:5,
      digit: '5',
      select: false,
      width: 1,
    },
    {
      value:6,
      digit: '6+',
      select: false,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  ]);
  const [baths, setBaths] = useState([
    {
      value:0,
      digit: 'Any',
      selects: false,
      margining: '5%',
      width: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    {
      value:1,
      digit: '1',
      selects: false,
      width: 1,
    },
    {
      value:2,
      digit: '2',
      selects: false,
      width: 1,
    },
    {
      value:3,
      digit: '3',
      selects: false,
      width: 1,
    },
    {
      value:4,
      digit: '4',
      selects: false,
      width: 1,
    },
    {
      value:5,
      digit: '5',
      selects: false,
      width: 1,
    },
    {
      value:5,
      digit: '6+',
      selects: false,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  ]);
  const [Array, setArray] = useState([
    {
      nameM: 'House',
      selected: false,
      directory: houseImage,
    },
    {
      nameM: 'Condo',
      selected: false,
      directory: condoImage,
    },
    {
      nameM: 'TownHouse',
      selected: false,
      directory: townHouseImage,
    },
    {
      nameM: 'MultiFamily',
      selecting: false,
      directory: multiImage,
    },
    {
      nameM: 'Land',
      selecting: false,
      directory: land,
    },
    {
      nameM: 'OtherHouse',
      selecting: false,
      directory: other,
    },
  ]);

  const tickShow = () => {
    setImage(true);
  };
  const ImageShow = () => {
    setIsShow(!isShow);
  };
  const ChangeColor = index => {
    console.log('change colr', index);
    Array.map((data, index) => {
      data.selected = false;
    });
    console.log('array', Array);
    let temp = Array;
    temp[index].selected = true;
    setPropertyType(temp[index].nameM)
    setArray(temp);
    forceUpdate();
    console.log('temp array', Array);
    tickShow();
    ImageShow();
  };

  const ChangeBedColor = index => {
    // console.log('change colr', index);
    beds.map((data, index) => {
      data.select = false;
    });
    // console.log('array', Array);
    let temps = beds;
    temps[index].select = true;
    setbedV(temps[index].value);
    setBeds(temps);
    forceUpdate();
    // console.log('temp array', Array);
  };
  const ChangeBathColor = index => {
    // console.log('change colr', index);
    baths.map((data, index) => {
      data.selects = false;
    });
    // console.log('array', Array);
    let choose = beds;
    choose[index].selects = true;
    setbathV(choose[index].value);
    setBaths(choose);
    forceUpdate();
    // console.log('temp array', Array);
  };
  const ChangeButtonColor = index => {
    button.map((data, index) => {
      data.sel = false;
    });

    let temping = button;
    temping[index].sel = true;
    setButton(temping);
    forceUpdate();
  };
  const Refresh = () => {
    setImage(false);
    setNewC(false);
    setIsShow(false);
    setGarage(false);
    setAccessible(false);
    setPool(false);
    setBasement(false);
    setOpenHouse(false);
    setPrice(false);
    setEstimates(false);
    setMaxSquare('');
    setMinSquare('')
    setbedV(0);
    setbathV(0);
    setPropertyType('')
    setBaths([
      {
        value:0,
        digit: 'Any',
        selects: false,
        margining: '5%',
        width: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      {
        value:1,
        digit: '1',
        selects: false,
        width: 1,
      },
      {
        value:2,
        digit: '2',
        selects: false,
        width: 1,
      },
      {
        value:3,
        digit: '3',
        selects: false,
        width: 1,
      },
      {
        value:4,
        digit: '4',
        selects: false,
        width: 1,
      },
      {
        value:5,
        digit: '5',
        selects: false,
        width: 1,
      },
      {
        value:5,
        digit: '6+',
        selects: false,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
    ]);
    setBeds([
      {
        value:0,
        digit: 'Any',
        select: false,
        margining: '5%',
        width: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      {
        value:1,
        digit: '1',
        select: false,
        width: 1,
      },
      {
        value:2,
        digit: '2',
        select: false,
        width: 1,
      },
      {
        value:3,
        digit: '3',
        select: false,
        width: 1,
      },
      {
        value:4,
        digit: '4',
        select: false,
        width: 1,
      },
      {
        value:5,
        digit: '5',
        select: false,
        width: 1,
      },
      {
        value:6,
        digit: '6+',
        select: false,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
    ]);
    setArray([
      {
        nameM: 'House',
        selected: false,
        directory: houseImage,
      },
      {
        nameM: 'Condo',
        selected: false,
        directory: condoImage,
      },
      {
        nameM: 'TownHouse',
        selected: false,
        directory: townHouseImage,
      },
      {
        nameM: 'MultiFamily',
        selecting: false,
        directory: multiImage,
      },
      {
        nameM: 'Land',
        selecting: false,
        directory: land,
      },
      {
        nameM: 'OtherHouse',
        selecting: false,
        directory: other,
      },
    ]);
    setButton([
      {
        nameB: 'For Sale',
        sel: false,
      },
      {
        nameB: 'For Rent',
        sel: false,
      },
    ]);
    colorings();
  };
  const colorings = () => {
    setColoring('#0042CC');
  };
console.log('seee',bedV,bathV,PropertyType);
  const ApplyFilter=()=>{
    let data = new FormData()
    data.append('search','');
    data.append('area_min',MinSquare);
    data.append('area_max',MaxSquare);
    data.append('beds',bedV);
    data.append('baths',bathV);
    data.append('property_type',PropertyType);
    // let data = {
    //   search:null,
    //   area_min:MinSquare,
    //   area_max:MaxSquare,
    //   beds:bedV,
    //   baths:bathV,
    //   property_type:PropertyType,  
    // };
    props.search(data);  
    props.setModalVisible(false);
  }
  const onToggle1Switch = () => setNewC(!newC);
  const onToggle2Switch = () => setGarage(!garage);
  const onToggle3Switch = () => setAccessible(!Accessible);
  const onToggle4Switch = () => setPool(!pool);
  const onToggle5Switch = () => setBasement(!basement);
  const onToggle6Switch = () => setOpenHouse(!openHouse);
  const onToggle7Switch = () => setPrice(!price);
  const onToggle8Switch = () => setEstimates(!estimates);
  return (
    <View style={{flex: 1}}>
           <View style={{flexDirection: 'row'}}>
          <BackArrow onPressBack={() =>props.setModalVisible(false)} />
          <Text
            onPress={Refresh}
            style={{
              marginLeft: '75%',
              marginTop: '5%',
              fontSize: 15,
              color: coloring,
            }}>
            Reset
          </Text>
        </View>
    <ScrollView showsVerticalScrollIndicator={false} >
     
   
        <View style={{top: '8%', marginLeft: '15%', flexDirection: 'row'}}>
          {button.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => ChangeButtonColor(index)}
                style={{
                  height: 35,
                  width: '40%',
                  backgroundColor: data.sel ? '#0042CC' : '#DFE9FF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  borderTopRightRadius: data.borderTopRightRadius,
                  borderBottomRightRadius: data.borderBottomRightRadius,
                  borderTopLeftRadius: data.borderTopLeftRadius,
                  borderBottomLeftRadius: data.borderBottomLeftRadius,
                }}>
                <Text style={{color: data.sel ? '#F6F9FF' : '#0042CC'}}>
                  {data.nameB}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

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
        {/* <BedScale /> */}
        <View style={{flexDirection: 'row', width: '80%'}}>
          {beds.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => ChangeBedColor(index)}
                style={{
                  height: 50,
                  width: '15%',
                  backgroundColor: data.select ? '#0042CC' : '#DFE9FF',
                  marginTop: '2%',
                  marginLeft: data.margining,
                  borderTopLeftRadius: data.borderTopLeftRadius,
                  borderBottomLeftRadius: data.borderBottomLeftRadius,
                  borderTopRightRadius: data.borderTopRightRadius,
                  borderBottomRightRadius: data.borderBottomRightRadius,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderEndWidth: data.width,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: data.select ? 'white' : 'black',
                  }}>
                  {data.digit}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Textt
          title="Bathrooms"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        {/* <BedScale /> */}
        <View style={{flexDirection: 'row', width: '80%'}}>
          {beds.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => ChangeBathColor(index)}
                style={{
                  height: 50,
                  width: '15%',
                  backgroundColor: data.selects ? '#0042CC' : '#DFE9FF',
                  marginTop: '2%',
                  marginLeft: data.margining,
                  borderTopLeftRadius: data.borderTopLeftRadius,
                  borderBottomLeftRadius: data.borderBottomLeftRadius,
                  borderTopRightRadius: data.borderTopRightRadius,
                  borderBottomRightRadius: data.borderBottomRightRadius,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderEndWidth: data.width,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: data.selects ? 'white' : 'black',
                  }}>
                  {data.digit}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Textt
          title="Square Feet"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <SquareFeetFields min={setMinSquare} max={setMaxSquare} valueMin={MinSquare} valueMax={MaxSquare}/>
        <Textt
          title="Property Type"
          styling={{marginTop: '4%', marginLeft: '5%', flexDirection: 'row'}}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              flexWrap: 'wrap',
            }}>
            {Array.map((data, index) => {
              return (
                <TouchableOpacity
                  onPress={() => ChangeColor(index)}
                  style={{
                    height: 100,
                    width: '25%',
                    marginTop: '5%',

                    marginLeft: '5%',
                    borderRadius: 15,

                    backgroundColor: data.selected ? '#0042CC' : '#F6F9FF',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: 14,
                    }}>
                    <View>
                      {image && (
                        <Image
                          style={{
                            resizeMode: 'contain',
                            top: -8,
                            right: 35,
                            tintColor: data.selected ? 'white' : '#fff',
                            opacity: data.selected ? 1 : 0.1,
                          }}
                          source={require('../assets/tick.png')}
                        />
                      )}
                    </View>

                    <Image
                      style={{
                        resizeMode: 'contain',
                        tintColor: data.selected ? '#F6F9FF' : '#0042CC',
                      }}
                      source={data.directory}
                    />

                    <Text
                      style={{
                        fontSize: 15,
                        top: 20,
                        color: data.selected ? '#F6F9FF' : '#0042CC',
                      }}>
                      {data.nameM}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
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
          <Switch value={newC} onValueChange={onToggle1Switch} color="blue" />
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
          <Switch value={garage} onValueChange={onToggle2Switch} color="blue" />
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
            value={Accessible}
            onValueChange={onToggle3Switch}
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
          <Switch value={pool} onValueChange={onToggle4Switch} color="blue" />
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
            value={basement}
            onValueChange={onToggle5Switch}
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
            value={openHouse}
            onValueChange={onToggle6Switch}
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
          <Switch value={price} onValueChange={onToggle7Switch} color="blue" />
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
            value={estimates}
            onValueChange={onToggle8Switch}
            color="blue"
          />
        </View>
    </ScrollView>
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
          }}
          onPress={ApplyFilter}
          >
            <Text style={{fontSize: 20,color: '#fff'}}>Apply</Text>
        </TouchableOpacity>
    </View>
  );
};
export default FilterScreen;