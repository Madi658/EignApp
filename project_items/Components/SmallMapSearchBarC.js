import React, {Component, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBarC = props => {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <View
      style={{
        height: 55,
        width: '90%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        left: -3,
        marginTop: '2%',
        flexDirection: 'row',
      }}>
      <Searchbar
        style={{
          borderWidth: 1,
          borderColor: '#0042CC',
          width: '80%',
          height: '100%',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        placeholder="search on map"
        placeholderTextColor="#A1A1A1"
        onChangeText={updateSearch}
        value={search}
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
