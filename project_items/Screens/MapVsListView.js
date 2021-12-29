import React, {Component, useEffect, useState, useRef} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,SafeAreaView,KeyboardAvoidingView,ActivityIndicator,Pressable,Modal} from 'react-native';
import FilterButton from '../Components/FilterButton';
import ListView from './ListView';
import Map from './Map';
import useForceUpdate from 'use-force-update';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import {Get_ListView} from '../../redux/actions/ListView_action';
import Geocoder from 'react-native-geocoding';
import {GetFavourite} from '../../redux/actions/Fav_action';
const Place_key = 'AIzaSyCINbYXVulbSiJtl9-0kpWxykAHomB-JwE';
import Geolocation from '@react-native-community/geolocation';
import ActionButton from 'react-native-action-button';
import { Get_ListViewP, ListPemptysuccess, ListPsuccess } from '../../redux/actions/ListViewP_action';
import { set } from 'lodash';
import { useNavigation } from '@react-navigation/core';
import FilterScreen from './FilterScreen';
import NetInfo from '@react-native-community/netinfo';


const MapVsListView = props => {
  const _mapRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  Geocoder.init(Place_key);
  const {isLoadingP,ListDataP,isSuccessP,errMsgP} = useSelector(state => state.ListDataP);
  const {token} = useSelector(state => state.LogicData);
  // console.log('Pageee',isLoadingP,ListDataP,isSuccessP,errMsgP);
  const forceUpdate = useForceUpdate();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading , setloadin]=useState(false)
  const [listdatanew, setnewlistdata]=useState([])
  const [page, setpage] = useState(1);
  const IsNetCheck1 = () => {
    NetInfo.fetch().then(networkState => {
      networkState.isConnected === true ? Servises1() :null;
    });
  };
  const IsNetCheck = () => {
    NetInfo.fetch().then(networkState => {
      networkState.isConnected === true ? Servises() : alert("NO Internet");
    });
  };
  const Servises1=()=>{
    setnewlistdata(ListDataP);
  }
  const Servises=()=>{
    CurrentLocation();
    listdata();
    dispatch(ListPsuccess([]));
    setTimeout(() => {
     listdataP();
    }, 50);
  }
  useEffect(()=>{
    IsNetCheck1();
  },[ListDataP]);
  useEffect(()=>{
    dispatch(ListPemptysuccess());
    IsNetCheck();
  },[]);
  const [currentCords, setCurrentcords] = useState({
    latitude: 56.130366,
    longitude: -106.346771,
    latitudeDelta: 0.015*5,
    longitudeDelta: 0.0121*5,
  });
  const [Swich, setSwich] = useState(true);
  const [buttonView, setButtonView] = useState([
    {
      name: 'Map View',
      press: false,
    },
    {
      name: 'List View',
      press: false,
      margin: '5%',
    },
  ]);
 
  const [region, setregion] = useState({
    latitude: 43.45758313013431,
    longitude: -80.47666029628787,
    latitudeDelta: 8.5,
      longitudeDelta: 8.5
  });
  const ButtonView = index => {
    buttonView.map((data, index) => {
      data.press = false;
    });

    let tempings = buttonView;
    tempings[index].press = true;
    if (index == 0) {
      setSwich(true);
    }
    if (index == 1) {
      setSwich(false);
    }
    setButtonView(tempings);
    forceUpdate();
  };
  const Search = search => {
    setpage(1);
    let page=1
    setloadin(true)
    const cbSuccess=()=>{
      setloadin(false)
    }
    dispatch(Get_ListView(search));
    dispatch(Get_ListViewP(search,page,listdatanew,cbSuccess));
  };
  const CurrentLocation = async () => {
   
      Geolocation.getCurrentPosition(data => {
        console.log(data);
        let tempCoords = {
          latitude: parseFloat(data.coords.latitude),
          longitude: parseFloat(data.coords.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        setCurrentcords(tempCoords);
        setregion(tempCoords);
        setTimeout(() => {
          _mapRef?.current?.animateToRegion(tempCoords, 2000);
        }, 200);
      });
   
  };
  const listdata = () => {
  
    dispatch(Get_ListView());
    dispatch(GetFavourite(token.user_id));
  };
  const listdataP = () => {
   let data= null
    setloadin(true)
    const cbSuccess=()=>{
      setloadin(false)
    }
    dispatch(Get_ListViewP(data,page,listdatanew,cbSuccess));
  };
  const getCoords = async place => {
    await Geocoder.from(place)
      .then(json => {
        var location = json.results[0].geometry.location;
       let tempCoords = {
          latitude: parseFloat(location?.lat),
          longitude:parseFloat(location?.lng),
          latitudeDelta: 12,
          longitudeDelta: 12,
        };
        setTimeout(() => {
          _mapRef?.current?.animateToRegion(tempCoords, 1000);
        }, 200);
        setregion(tempCoords);
      })
      .catch(error => console.warn(error));
  };
  const OnReachHandel=()=>{
    setpage(page+1);
    listdataP();
  }
  const ListFooter=()=>{
    if(loading == true){
      return(
        <ActivityIndicator size='small' color='blue' />
      )
    }
    else return <TouchableOpacity style={{width:'50%',height:55,alignSelf:'center',alignItems:'center'}} onPress={OnReachHandel}>
      <Text style={{color:'blue'}}>Load more..</Text>
    </TouchableOpacity>
  }
  return (
    <SafeAreaView style={styles.container}>
      {Swich ? (
        <Map
          navigation={props.navigation}
          region={region}
          _mapRef={_mapRef}
          currentCords={currentCords}
        />
      ) :(
        <ListView navigation={props.navigation} loading={loading} ListFooter={ListFooter}/>
      )}
      <View
        style={{
          width: '70%',
          position: 'absolute',
          marginTop: '15%',
          marginLeft: '3%',
        }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
           let Fd = new FormData()
           Fd.append('search',data?.description);
            Search(Fd);
            getCoords(data?.description);
          }}
          query={{
            key: Place_key,
            language: 'en',
          }}
          styles={{
            container: {
              flex: 1,
            },
            textInputContainer: {
              flexDirection: 'row',
              borderRadius: 5,
              borderColor: '#0042CC',
              borderWidth: 2,
              backgroundColor: '#FFFFFF',
            },
            textInput: {
              backgroundColor: '#FFFFFF',
              // backgroundColor: 'red',

              height: 50,
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 17,
              flex: 1,
            },
            poweredContainer: {
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderColor: '#c8c7cc',
              borderTopWidth: 0.5,
            },
            powered: {},
            listView: {},
            row: {
              backgroundColor: '#FFFFFF',
              padding: 13,
              height: 30,
              flexDirection: 'row',
            },
            separator: {
              height: 0.5,
              backgroundColor: '#c8c7cc',
            },
            description: {},
            loader: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 20,
            },
          }}
        />
        <View
          style={{
            top: 10,
            marginLeft: '7%',
            flexDirection: 'row',
          }}>
          {buttonView.map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() => ButtonView(index)}
                style={{
                  height: 35,
                  width: '40%',
                  backgroundColor: data.press ? '#0042CC' : '#DFE9FF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  marginLeft: data.margin,
                }}>
                <Text style={{color: data.press ? '#F6F9FF' : '#0042CC'}}>
                  {data.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <FilterButton press={() => setModalVisible(true)} />
      {Swich == true &&
      <ActionButton
      buttonColor="white"
      size={70}
      renderIcon={()=>{
        return <View style={{justifyContent:'space-between', alignItems:'center', height:45}}>
          <Image source={require("../assets/direction.png")} style={{width:25, height:25}} />
          <Text style={{fontSize:12, textAlign:'center', fontWeight:'500'}} >{"Nearby"} </Text>
        </View>
      }}
       onPress={() => {CurrentLocation()}}
      />
    }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
      <FilterScreen  search={Search} setModalVisible={setModalVisible}/>
           
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius:10,
    padding:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

});

//make this component available to the app
export default MapVsListView;
