import React, {Component, useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import axios from 'axios';
import ImagePicker from 'react-native-customized-image-picker';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
const Place_key = 'AIzaSyCINbYXVulbSiJtl9-0kpWxykAHomB-JwE';
import Feather from 'react-native-vector-icons/Feather';
import Textt from '../Components/Textt';
import SubmitPropertyPrice from '../Components/SubmitPropertyPrice';
import SmallMapComponent from '../Components/SmallMapComponent';
import CheckButtons from '../Components/CheckButtons';
import houseImage from '../assets/house.png';
import condoImage from '../assets/condo.png';
import useForceUpdate from 'use-force-update';
import townHouseImage from '../assets/townhouse.png';
import multiImage from '../assets/multifamily.png';
import land from '../assets/land.png';
import other from '../assets/otherhouse.png';
import {FlatList} from 'react-native-gesture-handler';
import _ from 'lodash';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RNS3} from 'react-native-aws3';
import RNFetchBlob from 'rn-fetch-blob';
import {customStyle} from '../Components/Styles/MapStyle';
import {Submit} from '../../redux/actions/SubmitProperty_action';

let temp = [];
const SubmitProperty = props => {
  Geocoder.init(Place_key);
  const _mapRef = useRef(null);
  const dispatch = useDispatch();
  const {uploads, isLoading,isSuccess,isError,errMsg} = useSelector(state => state.LinkData);
  const {token} = useSelector(state => state.LogicData);

  console.log('Uploads.........', uploads, isLoading,isSuccess,isError,errMsg);
  const forceUpdate = useForceUpdate();
  const [SelectIndexB, setSelectIndexB] = useState([]);
  const [SelectIndexC, setSelectIndexC] = useState([]);
  const [SelectIndexH, setSelectIndexH] = useState([]);
  const [SelectIndexF, setSelectIndexF] = useState([]);
  const [SelectIndexE, setSelectIndexE] = useState([]);
  const [SelectIndexO, setSelectIndexO] = useState([]);
  const [SelectIndexP, setSelectIndexP] = useState([]);

  const [load, setload] = useState(false);

  const [homeAdress, sethomeAdress] = useState('');
  const [SelectIndex, setSelectIndex] = useState([]);
  const [tempPic, settempPic] = useState([]);
  const [tempVid, settempVid] = useState([]);
  const [cord, setcord] = useState({});
  const [price, setprice] = useState(0);
  const [Estpyment, setEstPyment] = useState(0);
  const [sqf, setsqf] = useState(0);
  const [lot, setlot] = useState(0);
  const [PropertyDetail, setPropertyDetail] = useState(null);
  const [community, setcommunity] = useState(null);
  const [stories, setstories] = useState(0);
  const [Interests, setInterests] = useState(0);
  const [Taxes, setTaxes] = useState(0);
  const [YaerBuilt, setYaerBuilt] = useState(null);
  const [HOA, setHOA] = useState(null);
  const [Website, setWebsite] = useState("https://www.linkedin.com/feed/");
  const [PropertyType, setPropertyType] = useState(null);
  const [park, setpark] = useState(0);
  const [bedV, setbedV] = useState(0);
  const [bathV, setbathV] = useState(0);
  const [AppliancesD, setAppliancesD] = useState([]);
  const [BasementD, setBasementD] = useState([]);
  const [CoolingTypeD, setCoolingTypeD] = useState([]);
  const [HeatingTypeD, setHeatingTypeD] = useState([]);
  const [FloorCoveringD, setFloorCoveringD] = useState([]);
  const [ExteriorD, setExteriorD] = useState([]);
  const [OUTDOORAMENITIESD, setOUTDOORAMENITIESD] = useState([]);
  const [ParkingD, setParkingD] = useState([]);
 


  const [region, setregion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  });
  const [beds, setBeds] = useState([
    {
      digit: 'Any',
      select: false,
      margining: '5%',
      width: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    {
      digit: '1',
      select: false,
      width: 1,
    },
    {
      digit: '2',
      select: false,
      width: 1,
    },
    {
      digit: '3',
      select: false,
      width: 1,
    },
    {
      digit: '4',
      select: false,
      width: 1,
    },
    {
      digit: '5',
      select: false,
      width: 1,
    },
    {
      digit: '6+',
      select: false,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  ]);
  const [baths, setBaths] = useState([
    {
      digit: 'Any',
      selects: false,
      margining: '5%',
      width: 1,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    {
      digit: '1',
      selects: false,
      width: 1,
    },
    {
      digit: '2',
      selects: false,
      width: 1,
    },
    {
      digit: '3',
      selects: false,
      width: 1,
    },
    {
      digit: '4',
      selects: false,
      width: 1,
    },
    {
      digit: '5',
      selects: false,
      width: 1,
    },
    {
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

  const [Appliances, setAppliances] = useState([
    {
      id: 1,
      nameM: 'Dishwasher',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Range/Oven',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Dryer',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Rafrigerator', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Freezer', selecting: false, directory: land},
    {id: 6, nameM: 'Trash Compactor', selecting: false, directory: other},
    {id: 7, nameM: 'Microwave', selecting: false, directory: other},
    {id: 8, nameM: 'Washer', selecting: false, directory: other},
  ]);
  const [Basement, setBasement] = useState([
    {
      id: 1,
      nameM: 'Finished',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Unfinished',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Partially Finished',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'None', selecting: false, directory: multiImage},
  ]);
  const [CoolingType, setCoolingType] = useState([
    {
      id: 1,
      nameM: 'Central',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Solar',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Evaporative',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Wall', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Geothermal', selecting: false, directory: multiImage},
    {id: 6, nameM: 'Other', selecting: false, directory: multiImage},
    {id: 7, nameM: 'Rafrigration', selecting: false, directory: multiImage},
    {id: 8, nameM: 'None', selecting: false, directory: multiImage},
  ]);
  const [HeatingType, setHeatingType] = useState([
    {
      id: 1,
      nameM: 'Baseboard',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Radiant',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Forced Air',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Stove', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Geothermal', selecting: false, directory: multiImage},
    {id: 6, nameM: 'Wall', selecting: false, directory: multiImage},
    {id: 7, nameM: 'Heat Pump', selecting: false, directory: multiImage},
    {id: 8, nameM: 'Other', selecting: false, directory: multiImage},
  ]);
  const [FloorCovering, setFloorCovering] = useState([
    {
      id: 1,
      nameM: 'Carpet',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Radiant',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Forced Air',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Stove', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Geothermal', selecting: false, directory: multiImage},
    {id: 6, nameM: 'Wall', selecting: false, directory: multiImage},
    {id: 7, nameM: 'Heat Pump', selecting: false, directory: multiImage},
    {id: 8, nameM: 'Other', selecting: false, directory: multiImage},
  ]);
  const [Exterior, setExterior] = useState([
    {
      id: 1,
      nameM: 'Bric',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Stuco',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Cement / Concrete',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Vinyl', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Composition', selecting: false, directory: multiImage},
    {id: 6, nameM: 'Wood', selecting: false, directory: multiImage},
    {id: 7, nameM: 'Metal', selecting: false, directory: multiImage},
    {id: 8, nameM: 'Wood Products', selecting: false, directory: multiImage},
    {id: 9, nameM: 'Shingle', selecting: false, directory: multiImage},
    {id: 10, nameM: 'Stone', selecting: false, directory: multiImage},
    {id: 11, nameM: 'Other', selecting: false, directory: multiImage},
  ]);
  const [OUTDOORAMENITIES, setOUTDOORAMENITIES] = useState([
    {
      id: 1,
      nameM: 'Balcony/patio',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Lawn',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Barbecue area',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'Pond', selecting: false, directory: multiImage},
    {id: 5, nameM: 'Deck', selecting: false, directory: multiImage},
    {id: 6, nameM: 'Pool', selecting: false, directory: multiImage},
    {id: 7, nameM: 'Dock', selecting: false, directory: multiImage},
    {id: 8, nameM: 'Porch', selecting: false, directory: multiImage},
    {id: 9, nameM: 'Fenced yard', selecting: false, directory: multiImage},
    {id: 10, nameM: 'RV parking', selecting: false, directory: multiImage},
    {id: 12, nameM: 'Garden', selecting: false, directory: multiImage},
    {id: 13, nameM: 'Sauna', selecting: false, directory: multiImage},
    {id: 14, nameM: 'Greenhouse', selecting: false, directory: multiImage},
    {id: 15, nameM: 'Greenhouse', selecting: false, directory: multiImage},
    {
      id: 16,
      nameM: 'Sprinkler system',
      selecting: false,
      directory: multiImage,
    },
    {id: 17, nameM: 'Hot tub/spa', selecting: false, directory: multiImage},
    {id: 18, nameM: 'Waterfront', selecting: false, directory: multiImage},
  ]);
  const [Parking, setParking] = useState([
    {
      id: 1,
      nameM: 'Carport',
      selected: false,
      directory: houseImage,
    },
    {
      id: 2,
      nameM: 'Off-street',
      selected: false,
      directory: condoImage,
    },
    {
      id: 3,
      nameM: 'Garage - Attached',
      selected: false,
      directory: townHouseImage,
    },
    {id: 4, nameM: 'On-street', selecting: false, directory: multiImage},
    {
      id: 5,
      nameM: 'Garage - Detached',
      selecting: false,
      directory: multiImage,
    },
    {id: 6, nameM: 'None', selecting: false, directory: multiImage},
  ]);
  const [image, setImage] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const onMarkerDragEnd = coord => {
    const {latLng} = coord.nativeEvent.coordinate;
    console.log('coord', coord.nativeEvent.coordinate);
    const lat = JSON.stringify(coord.nativeEvent.coordinate.latitude);
    const lng = JSON.stringify(coord.nativeEvent.coordinate.longitude);
    setcord({lat: lat, lng: lng});
    Geocoder.from(lat, lng)
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        sethomeAdress(addressComponent);
      })
      .catch(error => console.warn(error));
  };
  const getCoords = async place => {
    await Geocoder.from(place)
      .then(json => {
        var location = json.results[0].geometry.location;
       let tempCoords = {
          latitude: parseFloat(location?.lat),
          longitude: parseFloat(location?.lng),
          latitudeDelta: 8.5,
          longitudeDelta: 8.5,
        };

        setTimeout(() => {
          _mapRef?.current?.animateToCoordinate(tempCoords, 1000);
        }, 200);
        setregion(tempCoords);
        console.log('location checked----->>>>>', tempCoords);
      })
      .catch(error => console.warn(error));
  };
  const tickShow = () => {
    setImage(true);
  };
  const ImageShow = () => {
    setIsShow(true);
  };
  const ChangeColor = index => {
    Array.map((data, index) => {
      data.selected = false;
    });

    let temp = Array;
    temp[index].selected = true;
    setPropertyType(temp[index].nameM);
    setArray(temp);
    forceUpdate();
    tickShow();
    ImageShow();
  };

  const ChangeBedColor = index => {
    beds.map((data, index) => {
      data.select = false;
    });
    let temps = beds;
    temps[index].select = true;
    setbedV(temps[index].digit);
    forceUpdate();
    setBeds(temps);
  };
  const ChangeBathColor = index => {
    baths.map((data, index) => {
      data.selects = false;
    });
    let temps = baths;
    temps[index].selects = true;
    setbathV(temps[index].digit);
    forceUpdate();
    setBaths(temps);
  };
  const MultiPic = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      settempPic([...images, ...tempPic]);
    });
  };
  const MultiVid = () => {
    ImagePicker.openPicker({
      multiple: true,
      isVideo: true,
    }).then(videos => {
      settempVid([...videos, ...tempVid]);
    });
  };

  const uploadMedia = async () => {
    setload(true);
    let temp = [];
    const baseURL = 'http://3.97.204.51:8030/property/vid/';
    let random = Math.floor(Math.random() * 9999999999) + 1;
    const fd = new FormData();
    tempPic?.forEach(e => {
      fd.append('vid', {
        uri: e?.path,
        name: `FileName${random}.png`,
        filename: `FileName${random}.png`,
        type: 'image/png',
      });
    });
    try {
      await axios
        .post(baseURL, fd)
        .then(res => {
          const listdata = res.data.urls;
          listdata.forEach(e=>{
            temp.push(e)
          })
        })

        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  
    for (let i = 0; i < tempVid.length; i++) {
      console.log(i);
      await RNFetchBlob.fetch(
        'POST',
        'http://3.97.204.51:8030/property/vid/',
        {
          'content-type': 'multipart/form-data',
          Accept: '*/*',
        },
        [
          {
            name: 'vid',
            filename: tempVid[i].fileName,
            data: RNFetchBlob.wrap(tempVid[i].path),
          },
        ],
      )
        .uploadProgress((written, total) => {
          console.log('uploaded', written / total);
        })
        .then(response => response.json())
        .then(response => {
          const VideoRes=response.urls;
          VideoRes.forEach(e=>{
            temp.push(e)
          })  
          console.log('response....', i);
        })
        .catch(err => {
          alert(err);
        });
    }
    const temp2=temp.join(',');
    console.log('temppppp',temp2);
    const fd2 = new FormData();
    fd2.append('image_or_video', temp2);
    fd2.append('price', price);
    fd2.append('est_payment', Estpyment);
    fd2.append('home_address', homeAdress);
    fd2.append('community', community);
    fd2.append('beds', bedV);
    fd2.append('baths', bathV);
    fd2.append('property_detail', PropertyDetail);
    fd2.append('area', sqf);
    fd2.append('property_type', PropertyType);
    fd2.append('location_lat', cord.lat);
    fd2.append('location_long', cord.lng);
    fd2.append('HOA', HOA);
    fd2.append('interest', Interests);
    fd2.append('lot', lot);
    fd2.append('stories', stories);  
    fd2.append('tax', Taxes);
    fd2.append('Parking', park);
    fd2.append('user', token.user_id);
       // fd2.append('insurance',insurance)
    // fd2.append('ParkingSpaces', ParkingD);
    // fd2.append('CodingType', CoolingTypeD);
    // fd2.append('HeatingType', HeatingTypeD);
    // fd2.append('FloorCovering', FloorCoveringD);
    // fd2.append('Exterior', ExteriorD);
    // fd2.append('OUTDOOR', OUTDOORAMENITIESD);
    // fd2.append('appliances', AppliancesD);
    // fd2.append('year_built', YaerBuilt);
    // fd2.append('website_url', Website);
    console.log('Foarm dataaaaaaaa', fd2);
    setload(false);
    dispatch(Submit(fd2));
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <BackArrow onPressBack={() => props.navigation.goBack()} />
          <Text style={styles.SubmitProperty}>Submit Property</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {tempPic.length == 0 ? (
          <TouchableOpacity
            onPress={() => {
              MultiPic();
            }}
            style={styles.ImagePic}>
            <Image
              style={{height: '40%', width: '40%', resizeMode: 'contain'}}
              source={require('../assets/cloud.png')}
            />
            <Text style={{top: 7, fontSize: 18}}>Upload images</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Textt
              title="Images"
              styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
            />
            <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
              <FlatList
                data={tempPic}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => {
                  item = item.path;
                }}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Image
                        source={{uri: item.path}}
                        style={styles.PreviewPic}
                      />
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                style={[
                  styles.PreviewPic,
                  {
                    backgroundColor: '#E4E4E4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}
                onPress={() => {
                  MultiPic();
                }}>
                <Image
                  source={require('../assets/MorePic.png')}
                  style={{width: '30%', height: '40%'}}
                />
                <Text style={{fontSize: 10, top: 4}}>Add More</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {tempVid.length == 0 ? (
          <TouchableOpacity
            onPress={() => {
              MultiVid();
            }}
            style={styles.ImagePic}>
            <Image
              style={{height: '40%', width: '40%', resizeMode: 'contain'}}
              source={require('../assets/cloud.png')}
            />
            <Text style={{top: 7, fontSize: 18}}>Upload Videos</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Textt
              title="Videos"
              styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
            />
            <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
              <FlatList
                data={tempVid}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => {
                  item = item.coverUri;
                }}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Image
                        source={{uri: item.coverUri}}
                        style={styles.PreviewPic}
                      />
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                style={[
                  styles.PreviewPic,
                  {
                    backgroundColor: '#E4E4E4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}
                onPress={() => {
                  MultiVid();
                }}>
                <Image
                  source={require('../assets/MorePic.png')}
                  style={{width: '30%', height: '40%'}}
                />
                <Text style={{fontSize: 10, top: 4}}>Add More</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <Textt
          title="Your Home Adress"
          styling={{
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
            marginBottom: 5,
          }}
        />
        <View style={styles.googlePlaces}>
          <GooglePlacesAutocomplete
            placeholder="Search on map"
            renderLeftButton={() => {
              <Feather name="search" size={20} color="#fff" />;
            }}
            onPress={(data, details = null) => {
              getCoords(data?.description);
            }}
            query={{
              key: Place_key,
              language: 'en',
            }}
            styles={{
              textInputContainer: {
                borderRadius: 5,
                borderColor: '#0042CC',
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
              },
              textInput: {
                backgroundColor: '#FFFFFF',
                // backgroundColor: 'red',
                height: 45,
                borderRadius: 5,
              },
            }}
          />
        </View>
        <SmallMapComponent
          region={region}
          _mapRef={_mapRef}
          onMarkerDragEnd={onMarkerDragEnd}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            value={homeAdress}
            placeholder="Area,City,Contry etc"
            placeholderTextColor="#A1A1A1"
            editable={false}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Textt
            title="Price"
            styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
          />
          <Textt
            title="Est.payment"
            styling={{
              marginLeft: '42%',
              right: 30,
              opacity: 0.5,
              marginTop: '2%',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <SubmitPropertyPrice
            placeValue="$1,1150,000"
            onChangeText={setprice}
            value={price}
          />
          <SubmitPropertyPrice
            lefty="15%"
            placeValue="$2,147/mo"
            onChangeText={setEstPyment}
            value={Estpyment}
          />
        </View>
        <Textt
          title="Bed"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
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
          title="Bath"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        {/* <BedScale /> */}
        <View style={{flexDirection: 'row', width: '80%'}}>
          {baths.map((data, index) => {
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
        <View style={{flexDirection: 'row'}}>
          <Textt
            title="sqf"
            styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
          />
          <Textt
            title="lot"
            styling={{
              marginLeft: '46%',
              right: 30,
              opacity: 0.5,
              marginTop: '2%',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <SubmitPropertyPrice
            placeValue="1,321 sqf"
            onChangeText={setsqf}
            value={sqf}
          />
          <SubmitPropertyPrice
            lefty="15%"
            placeValue="3.14 lot"
            onChangeText={setlot}
            value={lot}
          />
        </View>
        <Textt
          title="Property Details"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV2}>
          <TextInput
            style={styles.Input2}
            onChangeText={i => {
              setPropertyDetail(i);
            }}
            value={PropertyDetail}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Textt
            title="Community"
            styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
          />
          <Textt
            title="Stories"
            styling={{
              marginLeft: '43%',
              right: 80,
              opacity: 0.5,
              marginTop: '2%',
            }}
          />
        </View>
        <View style={{flexDirection: 'row', margin: '2%'}}>
          <SubmitPropertyPrice
            placeValue="Benonhurst"
            onChangeText={setcommunity}
            value={community}
          />
          <SubmitPropertyPrice
            lefty="15%"
            placeValue="2"
            onChangeText={setstories}
            value={stories}
          />
        </View>
        <Textt
          title="Property Type"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
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
        <View style={{flexDirection: 'row'}}>
          <Textt
            title="Interests"
            styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
          />
          <Textt
            title="Taxes"
            styling={{
              marginLeft: '43%',
              right: 70,
              opacity: 0.5,
              marginTop: '2%',
            }}
          />
        </View>
        <View style={{flexDirection: 'row', margin: '2%'}}>
          <SubmitPropertyPrice
            placeValue="$24,630"
            onChangeText={setInterests}
            value={Interests}
          />
          <SubmitPropertyPrice
            lefty="15%"
            placeValue="$4,630"
            onChangeText={setTaxes}
            value={Taxes}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Textt
            title="Year Built"
            styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
          />
          <Textt
            title="HOA"
            styling={{
              marginLeft: '43%',
              right: 70,
              opacity: 0.5,
              marginTop: '2%',
            }}
          />
        </View>

        <View style={{flexDirection: 'row', margin: '2%'}}>
          <SubmitPropertyPrice
            placeValue="$630"
            onChangeText={setYaerBuilt}
            value={YaerBuilt}
          />
          <SubmitPropertyPrice
            lefty="15%"
            placeValue="$4,630"
            onChangeText={setHOA}
            value={HOA}
          />
        </View>
        <Textt
          title="Parking"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={{margin: '2%'}}>
          <SubmitPropertyPrice
            placeValue="1"
            onChangeText={setpark}
            value={park}
          />
        </View>
        <Textt
          title="Additional information"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Interior Details
        </Text>
        <View>
          <FlatList
            data={Appliances}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = Appliances;
                      let selectindex = SelectIndex.find(item => item == index);
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndex.filter(
                          item => item !== index,
                        );
                        setSelectIndex(filtered);
                        temps[index].selected = false;
                        let filtered2 = AppliancesD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setAppliancesD(filtered2);
                        forceUpdate();
                        setAppliances(temps);
                      } else {
                        setSelectIndex([...SelectIndex, index]);
                        console.log(SelectIndex);
                        temps[index].selected = true;
                        setAppliancesD([...AppliancesD, temps[index].nameM]);
                        forceUpdate();
                        setAppliances(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Basement
        </Text>
        <View>
          <FlatList
            data={Basement}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      Basement.map((data, index) => {
                        data.selected = false;
                      });
                      let temps = Basement;
                      let selectindex = SelectIndexB.find(
                        item => item == index,
                      );
                      if (selectindex == index) {
                        let filtered = SelectIndexB.filter(
                          item => item !== index,
                        );
                        setSelectIndexB(filtered);
                        temps[index].selected = false;
                        setBasementD([]);
                        forceUpdate();
                        setBasement(temps);
                      } else {
                        setSelectIndexB([index]);
                        temps[index].selected = true;
                        setBasementD([temps[index].nameM]);
                        forceUpdate();
                        setBasement(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Textt
          title="Utility Details"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Cooling Type
        </Text>
        <View>
          <FlatList
            data={CoolingType}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = CoolingType;
                      let selectindex = SelectIndexC.find(
                        item => item == index,
                      );
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndexC.filter(
                          item => item !== index,
                        );
                        setSelectIndexC(filtered);
                        temps[index].selected = false;
                        let filtered2 = CoolingTypeD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setCoolingTypeD(filtered2);
                        forceUpdate();
                        setCoolingType(temps);
                      } else {
                        setSelectIndexC([...SelectIndexC, index]);
                        console.log(SelectIndexC);
                        temps[index].selected = true;
                        setCoolingTypeD([...CoolingTypeD, temps[index].nameM]);
                        forceUpdate();
                        setCoolingType(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Heating Type
        </Text>
        <View>
          <FlatList
            data={HeatingType}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = HeatingType;
                      let selectindex = SelectIndexH.find(
                        item => item == index,
                      );
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndexH.filter(
                          item => item !== index,
                        );
                        setSelectIndexH(filtered);
                        temps[index].selected = false;
                        let filtered2 = HeatingTypeD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setHeatingTypeD(filtered2);
                        forceUpdate();
                        setHeatingType(temps);
                      } else {
                        setSelectIndexH([...SelectIndexH, index]);
                        console.log(SelectIndexH);
                        temps[index].selected = true;
                        setHeatingTypeD([...HeatingTypeD, temps[index].nameM]);
                        forceUpdate();
                        setHeatingType(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Floor Covering
        </Text>
        <View>
          <FlatList
            data={FloorCovering}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = FloorCovering;
                      let selectindex = SelectIndexF.find(
                        item => item == index,
                      );
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndexF.filter(
                          item => item !== index,
                        );
                        setSelectIndexF(filtered);
                        temps[index].selected = false;
                        let filtered2 = FloorCoveringD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setFloorCoveringD(filtered2);
                        forceUpdate();
                        setFloorCovering(temps);
                      } else {
                        setSelectIndexF([...SelectIndexF, index]);
                        console.log(SelectIndexF);
                        temps[index].selected = true;
                        setFloorCoveringD([
                          ...FloorCoveringD,
                          temps[index].nameM,
                        ]);
                        forceUpdate();
                        setFloorCovering(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Textt
          title="Exterior Details"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Exterior
        </Text>
        <View>
          <FlatList
            data={Exterior}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = Exterior;
                      let selectindex = SelectIndexE.find(
                        item => item == index,
                      );
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndexE.filter(
                          item => item !== index,
                        );
                        setSelectIndexE(filtered);
                        temps[index].selected = false;
                        let filtered2 = ExteriorD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setExteriorD(filtered2);
                        forceUpdate();
                        setExterior(temps);
                      } else {
                        setSelectIndexE([...SelectIndexE, index]);
                        temps[index].selected = true;
                        setExteriorD([...ExteriorD, temps[index].nameM]);
                        forceUpdate();
                        setExterior(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          OUTDOOR AMENITIES
        </Text>
        <View>
          <FlatList
            data={OUTDOORAMENITIES}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = OUTDOORAMENITIES;
                      let selectindex = SelectIndexO.find(
                        item => item == index,
                      );
                      if (selectindex == index) {
                        let filtered = SelectIndexO.filter(
                          item => item !== index,
                        );
                        setSelectIndexO(filtered);
                        temps[index].selected = false;
                        let filtered2 = OUTDOORAMENITIESD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setOUTDOORAMENITIESD(filtered2);
                        forceUpdate();
                        setOUTDOORAMENITIES(temps);
                      } else {
                        setSelectIndexO([...SelectIndexO, index]);
                        temps[index].selected = true;
                        setOUTDOORAMENITIESD([
                          ...OUTDOORAMENITIESD,
                          temps[index].nameM,
                        ]);
                        forceUpdate();
                        setOUTDOORAMENITIES(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 12,
            marginLeft: '6%',
            opacity: 0.5,
            marginTop: '2%',
          }}>
          Parking
        </Text>
        <View>
          <FlatList
            data={Parking}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={{width: '50%'}}>
                  <CheckBox
                    title={item.nameM}
                    checked={item.selected}
                    onPress={() => {
                      let temps = Parking;
                      let selectindex = SelectIndexP.find(
                        item => item == index,
                      );
                      console.log(selectindex);
                      if (selectindex == index) {
                        let filtered = SelectIndexP.filter(
                          item => item !== index,
                        );
                        setSelectIndexP(filtered);
                        temps[index].selected = false;
                        let filtered2 = ParkingD.filter(
                          item => item !== temps[index].nameM,
                        );
                        setParkingD(filtered2);
                        forceUpdate();
                        setParking(temps);
                      } else {
                        setSelectIndexP([...SelectIndexP, index]);
                        temps[index].selected = true;
                        setParkingD([...ParkingD, temps[index].nameM]);
                        forceUpdate();
                        setParking(temps);
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>

        <Textt
          title="Related Website"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />

        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setWebsite}
            value={Website}
          />
        </View>

        {/* <View style={{flexDirection: 'row'}}>
          <CheckButtons name="Yes" />
          <CheckButtons name="N/A" />
        </View> */}
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
          onPress={uploadMedia}>
          <View style={{flexDirection: 'row'}}>
            {isLoading ? <ActivityIndicator size='small' color='black' />:
            <Text style={{fontSize: 20, left: 10, color: '#fff'}}>
            Submit Property
          </Text>
            }
            
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
  },
  SubmitProperty: {
    fontSize: 20,
    marginTop: '4%',
    marginLeft: '25%',
    fontWeight: 'bold',
  },
  ImagePic: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '7%',
    borderWidth: 1,
    opacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderStyle: 'dashed',
  },
  InputV1: {
    height: 50,
    width: '87%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '3%',
    marginLeft: '-2%',
    borderRadius: 5,
  },
  Input1: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.4,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  InputV2: {
    height: 200,
    width: '87%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: '3%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '2%',
  },
  Input2: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.4,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    paddingHorizontal: 10,
    textAlign: 'justify',
  },
  Add: {
    height: 45,
    width: ' 87%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
    marginTop: '2%',
    margin: '2%',
    flexDirection: 'row',
  },
  Addimage: {
    resizeMode: 'contain',
    height: '30%',
    width: '30%',
    left: 10,
  },
  AddMore: {
    color: '#272C37',
    fontWeight: '500',
    fontSize: 18,
    left: -25,
  },
  PreviewPic: {
    width: 70,
    height: 50,
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  googlePlaces: {
    width: '90%',
    alignSelf: 'center',
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default SubmitProperty;
