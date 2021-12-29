// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Alert,
//   ActivityIndicator,
//   FlatList,
// } from "react-native";
// import { StatusBar } from "react-native";
// import { SearchBar, Overlay } from "react-native-elements";
// import MapView, {
//   PROVIDER_GOOGLE,
//   Marker,
//   MapViewAnimated,
// } from "react-native-maps";
// import AsyncStorage from "@react-native-community/async-storage";
// import { Ionicons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import BottomSheet from "react-native-js-bottom-sheet";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// // import GooglePlacesInput from "../Components/SearchBar";
// import Geocoder from "react-native-geocoding";
// const Place_key = "AIzaSyA77waAqxXcvPERkxjhGwLltEEmcMcQb5k";
// Geocoder.init(Place_key);
// export default class SuggestionBuses extends Component {
//   _isMounted = false;
//   constructor(props) {
//     super(props);
//     this.state = {
//       station: "",
//       station2: "",
//       isLoading: true,
//       status1: "",
//       busesDetails: [],
//       search: "",
//       data: [],
//       value: "",
//       latitude: 29.378586,
//       longitude: 47.990341,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//       busId: "",
//       visible: false,
//     };

//     this.saveStation();
//   }
//   toggleOverlay = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };
//   saveStation = () => {
//     this.setState({
//       station: this.props.route.params.Stations,
//     });

//     var requestOptions = {
//       method: "POST",
//     };

//     fetch(
//       "https://muhtat-app.herokuapp.com/buses/busdetails/" +
//         this.props.route.params?.Stations?.id +
//         "/",
//       requestOptions
//     )
//       .then((response) => response.json())

//       .then((result) => {
//         // AsyncStorage.setItem("id", JSON.stringify(result.id));
//         const { station } = result;

//         for (const iterator of station) {
//           this.setState({
//             busId: JSON.stringify(iterator.id),
//           });
//         }
//         console.log("BusID==============>", this.state.busId);
//         if (this._isMounted) {
//           this.setState({
//             isLoading: false,
//             busesDetails: result.station,
//           });
//         }
//       })

//       .catch((error) => console.log("error", error));
//   };
//   bookTicket = async () => {
//     const { busId } = this.state;
//     let userID = await AsyncStorage.getItem("stsUser_id");
//     console.log("UserId===================>", userID);
//     console.log("BusId===================>", busId);

//     var requestOptions = {
//       method: "POST",
//       headers: {
//         Accept: "application/json, text/plain",
//         "Content-Type": "application/json",
//       },
//     };

//     await fetch(
//       "https://muhtat-app.herokuapp.com/buses/booking/" +
//         userID +
//         "/" +
//         busId +
//         "/",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.status == "Not Enough Cash") {
//           Alert.alert(
//             "Oops!?",
//             "You have insufficient balance,Please recharge your account from nearest office."
//           );
//           console.log("status==>", result);
//         } else {
//           this.setState({
//             status1: result,
//           });
//           this.createTwoButtonAlert();
//         }
//       })

//       .catch((error) => console.log("error", error));
//   };
//   getCoords = async (place) => {
//     await Geocoder.from(place)
//       .then((json) => {
//         var location = json.results[0].geometry.location;
//         console.log("location checked----->>>>>", location);
//         let tempCoords = {
//           latitude: parseFloat(location?.lat),
//           longitude: parseFloat(location?.lng),
//         };
//         this._map.animateToCoordinate(tempCoords, 1);
//         this.setState({
//           latitude: location?.lat,
//           longitude: location?.lng,
//         });
//       })
//       .catch((error) => console.warn(error));
//   };
//   componentDidMount() {
//     StatusBar.setHidden(true);
//     this._isMounted = true;
//     this.saveStation();
//   }
//   componentDidUpdate = () => {
//     if (this.props.route.params != this.props.route.params) {
//       console.log("in update");
//       this.saveStation();
//     }
//   };
//   componentWillUnmount() {
//     this._isMounted = false;
//   }
//   bottomSheet;
//   _onPressButton = () => {
//     this.bottomSheet.open();
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   createTwoButtonAlert = () => {
//     Alert.alert("Are you sure?", this.state.status1.status, [
//       {
//         text: "No",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel",
//       },
//       {
//         text: "Yes",
//         onPress: () =>
//           this.props.navigation.navigate("QRCodeScreen", {
//             qr: this.state.status1.qrcode,
//           }),
//       },
//     ]);
//   };

//   searchData(text) {
//     if (text.length <= 0) {
//       this.setState({
//         searchCon: false,
//       });
//     } else {
//       this.setState({
//         searchCon: true,
//       });
//     }
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <ActivityIndicator size="large" color="#B6B7B7" />
//         </View>
//       );
//     }
//     const { station, busesDetails } = this.state;
//     const { search } = this.state;
//     console.log("station in render", busesDetails);

//     return (
//       <View style={{ height: "100%" }}>
//         <MapView.Animated
//           loadingEnabled={true}
//           style={{ height: "50%" }}
//           ref={(component) => (this._map = component)}
//           provider={PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state?.longitude,
//             longitudeDelta: this.state?.longitudeDelta,
//             latitudeDelta: this.state?.latitudeDelta,
//           }}
//         >
//           <Marker.Animated
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state?.longitude,
//               longitudeDelta: this.state?.longitudeDelta,
//               latitudeDelta: this.state?.latitudeDelta,
//             }}
//             title={this.state.textValue}
//           />
//         </MapView.Animated>

//         <View
//           style={{
//             position: "absolute",
//             top: 12,
//             width: "100%",
//           }}
//         >
//           <View style={{ flexDirection: "row", marginTop: "6%" }}>
//             <Ionicons
//               onPress={() => this.props.navigation.goBack()}
//               name="arrow-back"
//               size={28}
//               color="black"
//               style={{ marginLeft: "1%", color: "grey", marginTop: "-1%" }}
//             />
//           </View>
//           <View
//             style={{
//               position: "absolute",
//               top: 12,
//               width: "80%",
//               alignSelf: "center",
//             }}
//           >
//             <GooglePlacesAutocomplete
//               placeholder="Search"
//               onPress={(data, details = null) => {
//                 this.getCoords(data?.description);
//               }}
//               query={{
//                 key: Place_key,
//                 language: "en",
//               }}
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             backgroundColor: "#fff",

//             height: "50%",
//             width: "100%",
//           }}
//         >
//           <ScrollView showsVerticalScrollIndicator={true}>
//             {this.state.busesDetails.map((data, index) => {
//               return (
//                 <View>
//                   <TouchableOpacity
//                     style={{
//                       backgroundColor: "#3FA62F",
//                       paddingHorizontal: 10,
//                       paddingVertical: 7,
//                       color: "#fff",
//                       fontSize: 20,
//                       marginLeft: "2%",
//                       borderRadius: 35,
//                       height: 35,
//                       width: "20%",
//                       marginTop: "5%",
//                     }}
//                   >
//                     <Text
//                       style={{
//                         justifyContent: "center",
//                         color: "#fff",
//                         fontSize: 16,
//                         alignSelf: "center",
//                       }}
//                     >
//                       {data?.tprice}
//                     </Text>
//                   </TouchableOpacity>
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       marginTop: "3%",
//                       justifyContent: "space-between",
//                       paddingHorizontal: 23,
//                     }}
//                   >
//                     <View
//                       style={{
//                         flexDirection: "row",
//                         justifyContent: "flex-start",
//                         alignItems: "flex-start",
//                         marginLeft: "-4%",
//                       }}
//                     >
//                       <Icon
//                         name="bus"
//                         size={18}
//                         color="black"
//                         style={{ marginLeft: "-2%", color: "grey" }}
//                       />
//                       <Text
//                         style={{
//                           fontSize: 15,
//                           color: "#6A6A6A",
//                         }}
//                       >
//                         {data?.name}
//                       </Text>
//                     </View>

//                     <Text
//                       style={{
//                         fontSize: 20,
//                         fontWeight: "200",
//                         marginTop: "-13%",
//                       }}
//                     >
//                       {data?.start_time} - {data?.end_time}
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       justifyContent: "flex-start",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <Icon
//                       name="seat"
//                       size={18}
//                       color="black"
//                       style={{ marginLeft: "2%", color: "grey" }}
//                     />
//                     <Text
//                       style={{
//                         fontSize: 15,
//                         color: "#6A6A6A",
//                         alignSelf: "flex-start",
//                         marginHorizontal: "2%",
//                       }}
//                     >
//                       {data?.remaining_seats} seats
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       justifyContent: "flex-start",
//                       alignItems: "flex-start",
//                       flexDirection: "row",
//                     }}
//                   >
//                     <Icon
//                       name="map-marker-radius-outline"
//                       size={18}
//                       color="black"
//                       style={{ marginLeft: "2%", color: "grey" }}
//                     />
//                     <Text
//                       style={{
//                         fontSize: 15,
//                         color: "#6A6A6A",
//                         alignSelf: "flex-start",
//                         marginHorizontal: "2%",
//                       }}
//                     >
//                       {data?.destination}
//                     </Text>
//                   </View>
//                   <View style={{ alignItems: "flex-end" }}>
//                     <TouchableOpacity
//                       style={{
//                         backgroundColor: "#FCB408",
//                         paddingHorizontal: 12,
//                         paddingVertical: 10,
//                         color: "#fff",
//                         fontSize: 20,
//                         marginRight: "15%",
//                         borderRadius: 20,
//                         height: 40,
//                         width: "25%",
//                         marginTop: "-8%",
//                         // marginTop: -30,
//                       }}
//                       onPress={this._onPressButton}
//                     >
//                       <Text
//                         style={{
//                           alignSelf: "center",
//                           justifyContent: "center",
//                           color: "#fff",
//                           fontSize: 13,
//                         }}
//                       >
//                         Buy Ticket
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View>
//                     <View
//                       style={{
//                         height: 1,
//                         width: "100%",
//                         backgroundColor: "#95a5a6",
//                         marginTop: "2%",
//                       }}
//                     />
//                   </View>
//                 </View>
//               );
//             })}
//             <BottomSheet
//               ref={(ref) => {
//                 this.bottomSheet = ref;
//               }}
//               height={"70%"}
//               openDuration={250}
//               closeOnDragDown={true}
//               itemDivider={3}
//               backButtonEnabled={true}
//               coverScreen={true}
//               isOpen={false}
//             >
//               <View>
//                 <Image
//                   source={require("../assets/wallet.png")}
//                   style={{
//                     height: "40%",
//                     width: "40%",
//                     marginTop: "2%",
//                     alignSelf: "center",
//                     resizeMode: "contain",
//                   }}
//                 />

//                 <Text
//                   style={{
//                     fontSize: 22,
//                     marginTop: "4%",
//                     alignSelf: "center",
//                     color: "#FCB408",
//                   }}
//                 >
//                   Account Balance
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     marginTop: "1%",
//                     alignSelf: "center",
//                     color: "#000",
//                   }}
//                 >
//                   3.35 KWD
//                 </Text>

//                 <TouchableOpacity
//                   style={{
//                     height: "12%",
//                     width: "80%",
//                     borderRadius: 35,
//                     backgroundColor: "#FCB408",
//                     alignSelf: "center",
//                     marginTop: "5%",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                   onPress={() => this.bookTicket()}
//                 >
//                   <Text
//                     style={{
//                       color: "#fff",
//                       fontSize: 18,
//                     }}
//                   >
//                     Buy Ticket
//                   </Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={{
//                     height: "12%",
//                     width: "80%",
//                     borderRadius: 35,
//                     backgroundColor: "#fff",
//                     borderWidth: 1,
//                     borderColor: "#FCB408",
//                     alignSelf: "center",
//                     marginTop: "5%",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                   // onPress={() => this.props.navigation.navigate("TopUpScreen")}
//                   onPress={() => this.props.navigation.navigate("TopUpScreen")}
//                 >
//                   <Text
//                     style={{
//                       color: "#FCB408",
//                       fontSize: 18,
//                     }}
//                   >
//                     Top-Up
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </BottomSheet>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }
// }






// const[marginbottom,setMarginBottom]=useState(1);
// const [currentLongitude,setCurrentLongitude] = useState(0);
// const [currentLatitude,setCurrentLatitude] = useState(0);
// const[mapViews,setMapView]=useState(null)
// const [locationStatus,setLocationStatus] = useState('..')



// const requestLocationPermission = async () => {
//   if (Platform.OS === 'ios') {
//     getOneTimeLocation();
//     subscribeLocationLocation();
//   } else {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Access Required',
//           message: 'This App needs to Access your location',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         //To Check, If Permission is granted
//         getOneTimeLocation();
//         subscribeLocationLocation();
//       } else {
//         setLocationStatus('Permission Denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }
// };
// const getOneTimeLocation = () => {
//   setLocationStatus('Getting Location ...');
//   Geolocation.getCurrentPosition(
//     //Will give you the current location
//     (position) => {
//       setLocationStatus('You are Here');

//       //getting the Longitude from the location json
//       const currentLongitude = 
//         JSON.stringify(position.coords.longitude);

//       //getting the Latitude from the location json
//       const currentLatitude = 
//         JSON.stringify(position.coords.latitude);


//         //Setting Longitude state
//       setCurrentLongitude(position.coords.longitude);
      
//       //Setting Longitude state
//       setCurrentLatitude(position.coords.latitude);
//     },
//     (error) => {
//       setLocationStatus(error.message);
//     },
//     {
//       enableHighAccuracy: false,
//       timeout: 30000,
//       maximumAge: 1000
//     },
//   );
// };

// const subscribeLocationLocation = () => {
//   watchID = Geolocation.watchPosition(
//     (position) => {
//       //Will give you the location on location change
      
//       setLocationStatus('You are Here');
//       console.log(position);

//       //getting the Longitude from the location json        
//       const currentLongitude =
//         JSON.stringify(position.coords.longitude);

//       //getting the Latitude from the location json
//       const currentLatitude = 
//         JSON.stringify(position.coords.latitude);

//       //Setting Longitude state
//       setCurrentLongitude(currentLongitude);

//       //Setting Latitude state
//       setCurrentLatitude(currentLatitude);
//     },
//     (error) => {
//       setLocationStatus(error.message);
//     },
//     {
//       enableHighAccuracy: false,
//       maximumAge: 1000
//     },
//   );
// };

// useEffect(()=>{
  
//   requestLocationPermission();
//   return () => {
//     Geolocation.clearWatch(watchID);
//   };
// },[])

import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
          <View style={{marginTop: 20}}>
            <Button
              title="Button"
              onPress={getOneTimeLocation}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Geolocation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});

export default App;