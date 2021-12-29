//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
const ChatCard = ({name, Pro, mes, Pic, id, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1.5,
          borderBottomColor: '#EBEBEB',
          paddingVertical: 25,
          paddingHorizontal: 15,
        }}
        onPress={() => {
          navigation.navigate('Chatroom', {
            name: name,
            Pro: Pro,
            Pic: Pic,
            id: id,
          });
        }}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'gray',
            borderRadius: 10,
          }}>
          <Image source={{uri:Pic}} style={{width: '100%', height: '100%',borderRadius:10}} />
        </TouchableOpacity>
        <View style={{justifyContent: 'space-around'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 5,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              {name}
            </Text>
            <View
              style={{
                backgroundColor: '#EBEBEB',
                alignItems: 'center',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 15,
                marginLeft: 15,
              }}>
              <Text style={{fontSize: 12}}>{Pro}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: 16, paddingHorizontal: 5, marginLeft: 5}}
              numberOfLines={1}>
              {mes}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#0042CC',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginLeft: 15,
            height: 25,
            width: 25,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ChatCard;
