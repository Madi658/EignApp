import React, {Component, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBarC = props => {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <>
      <SafeAreaView
        style={{backgroundColor: '#F7F7F7', justifyContent: 'center'}}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F7F7F7',
          justifyContent: 'center',
        }}>
        <ScrollView>
          <Text style={{top: '10%', fontSize: 60, fontWeight: 'bold'}}>
            Eign to gain your property deal
          </Text>
          <View
            style={{
              height: 75,
              width: '90%',
              // backgroundColor: 'red',
              alignSelf: 'center',
              marginTop: '50%',
              flexDirection: 'row',
            }}>
            <Searchbar
              style={{
                borderWidth: 1,
                borderColor: '#0042CC',
                width: '70%',
                height: '100%',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
              placeholder="Search"
              onChangeText={updateSearch}
              value={search}
            />
            <TouchableOpacity
              onPress={props.press}
              style={{
                height: '100%',
                width: '30%',
                backgroundColor: '#3454D1',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <Text style={{color: '#fff', fontSize: 22, fontWeight: '500'}}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default SearchBarC;
