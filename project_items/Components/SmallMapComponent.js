import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { customStyle } from './Styles/MapStyle';

const SmallMapComponent = ({_mapRef,region,onMarkerDragEnd}) => {
  return (
    <View style={{height: 200, margin: '5%', marginTop: '2%'}}>
       <MapView
        clusterColor="#0042CC"
        provider={PROVIDER_GOOGLE}
        ref = {_mapRef}
        initialRegion={region}
        zoomEnabled
        style={{height: '100%',}}
        zoomControlEnabled={true}
        scrollEnabled
        customMapStyle={customStyle}
        style={{height: '100%', borderRadius: 30}}
        
      >
        <Marker
              draggable={true}
              coordinate={region}
              onDragEnd={LatLng => onMarkerDragEnd(LatLng)}
            />
      </MapView>
    </View>
  );
};
export default SmallMapComponent;
