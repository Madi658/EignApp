//import liraries
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    StyleSheet
  } from 'react-native';
import BottomSheet from 'react-native-js-bottom-sheet';

// create a component
const ButtomSheet = ({BottomOpen}) => {
    let bottomSheet;

   
    return (
        <View style={styles.container}>
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
        isOpen={BottomOpen}>
        <View
          style={{
            height: '75%',
            width: '100%',
            // backgroundColor: 'red',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            top: 55,
          }}>
          <Image
            source={require('../assets/deluxeroom.png')}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
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
            $1,150,000
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
              <Text style={{left: 10}}>3 bed</Text>
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
              <Text style={{left: 10}}>2 Bath</Text>
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
              <Text style={{left: 10}}>1500 sqft</Text>
            </View>
          </View>
          <Text style={{opacity: 0.5, right: '7%', top: '4%'}}>
            914 Edgemont Avenue Elk River, chaykot.
          </Text>
        </View>
      </BottomSheet>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ButtomSheet;
