import React, {Component, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const Place_key = "AIzaSyCINbYXVulbSiJtl9-0kpWxykAHomB-JwE";

const SearchBarC = props => {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <View
      style={{
        position: 'absolute',
       
        width: '70%',
      //   // backgroundColor: 'red',
        alignSelf: 'center',
        left: 20,
        marginTop: '15%',
        flexDirection: 'row',
      }}
      >
     <GooglePlacesAutocomplete
              placeholder="Search"
              
              onPress={(data, details = null) => {
                // this.getCoords(data?.description);
                console.log('fffffffffffffff',data?.description);
              }}
              query={{
                key: Place_key,
                language: "en",
              }}
              styles={{
                container: {
                  flex: 1,
                },
                textInput: {
                  height: 50,
                  color: '#5d5d5d',
                  fontSize: 16,
                  
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
            />
      <TouchableOpacity
        onPress={props.press}
        style={{
          height: '100%',
          width: '20%',
          backgroundColor: '#3454D1',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <Feather name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBarC;
