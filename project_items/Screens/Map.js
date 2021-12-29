import React, {Component, useEffect, useState, useRef, useMemo, useCallback, memo} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import BottomSheet from 'react-native-js-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {customStyle} from '../Components/Styles/MapStyle';
const Map = props => {
  const {ListData} = useSelector(state => state.ListData);
  const [buttomi, setbuttomi] = useState(0);
  // console.log(currentLatitude,currentLongitude);
  let bottomSheet;
  let temp = '';
  temp = ListData[buttomi]?.fields?.image_or_video?.split(',');

  const CustomMarker = () => (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#eee',
        borderRadius: 5,
        elevation: 10,
      }}>
      <Image source={require('../assets/Marker.png')} />
    </View>
  );
  const CustomMarkerCurrentLocation = () => (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#eee',
        borderRadius: 5,
        elevation: 10,
      }}>
      <Image
        source={require('../assets/Group2.png')}
        style={{width: 40, height: 40}}
      />
    </View>
  );

  const _onPressButton = i => {
    setbuttomi(i);
    bottomSheet.open();
  };

  const _generateMarkers = count => {
    const markers = [];
    if (ListData.status == 'Empty') {
      // alert('No Houses Found On This Location')
      null;
    } else if (ListData.status == undefined) {
      ListData?.forEach((e, i) => {
        markers.push(
          <Marker
            onPress={() => {
              _onPressButton(i);
            }}
            key={i}
            coordinate={{
              latitude: e.fields.location_lat ? parseFloat(e.fields.location_lat) :0,
              longitude: e.fields.location_long ? parseFloat(e.fields.location_long):0,
            }}>
            <CustomMarker />
          </Marker>,
        );
      });
    }

    return markers;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        clusterColor="#0042CC"
        provider={PROVIDER_GOOGLE}
        ref={props._mapRef}
        initialRegion={props.region}
        zoomEnabled
        style={{height: '100%'}}
        zoomControlEnabled={true}
        scrollEnabled
        customMapStyle={customStyle}
        >
        {/* { ListData.status == undefined &&  ListData?.map((item,index) => {
         return   <Marker  
                trackViewChanges={false}
                onPress={() => {
                setbuttomi(index)
                 bottomSheet.open();
              }}
              key={index}
              coordinate={{
                latitude: item.fields.location_lat ? item.fields.location_lat : 0,
                longitude: item.fields.location_long ? item.fields.location_long :0,
              }}>
              <CustomMarker />
            </Marker>
          } 
          )
          } */}
        <Marker
          key={99998774}
          coordinate={props.currentCords}>
          <CustomMarkerCurrentLocation />
        </Marker>
    
      
        {_generateMarkers()}
      </MapView>
      {temp == undefined ? (
        <BottomSheet
          ref={ref => {
            bottomSheet = ref;
          }}
          height="40%"
          styleContainer={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          openDuration={250}
          closeOnDragDown={true}
          itemDivider={3}
          backButtonEnabled={true}
          coverScreen={true}
          isOpen={false}>
          <ActivityIndicator />
        </BottomSheet>
      ) : (
        <BottomSheet
          ref={ref => {
            bottomSheet = ref;
          }}
          height="40%"
          styleContainer={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          openDuration={250}
          closeOnDragDown={true}
          itemDivider={3}
          backButtonEnabled={true}
          coverScreen={true}
          isOpen={false}>
          <TouchableOpacity
            style={{
              height: '75%',
              width: '100%',
              // backgroundColor: 'red',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              top: 55,
            }}
            onPress={() => {
              props.navigation.navigate('VideoDetails', {
                item: ListData[buttomi],
              });
              bottomSheet.close();
            }}>
            <ImageBackground
              source={{uri: temp[0]}}
              style={{
                height: '100%',
                width: '95%',
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#4F4F4F',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                marginLeft: '12%',
                marginTop: '1%',
              }}>
              $ {ListData[buttomi].fields.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: '7%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '5%',
                  right: '15%',
                }}>
                <Image
                  source={require('../assets/bed.png')}
                  style={{marginLeft: '2%', color: 'grey'}}
                />
                <Text style={{left: 10}}>
                  {ListData[buttomi].fields.beds} bed
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '5%',
                  right: '5%',
                }}>
                <Image
                  source={require('../assets/bath.png')}
                  style={{marginLeft: '2%', color: 'grey'}}
                />
                <Text style={{left: 10}}>
                  {ListData[buttomi].fields.baths} Bath
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '5%',
                  right: '-5%',
                }}>
                <Image
                  source={require('../assets/squarefeet.png')}
                  style={{marginLeft: '2%', color: 'grey'}}
                />
                <Text style={{left: 10}}>
                  {ListData[buttomi].fields.area} sqft
                </Text>
              </View>
            </View>
            <Text style={{opacity: 0.5, right: '7%', top: '4%'}}>
              {ListData[buttomi].fields.home_address}
            </Text>
          </TouchableOpacity>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default React.memo(Map);
