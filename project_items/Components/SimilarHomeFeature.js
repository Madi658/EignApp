import React, {Component, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const SimilarHomeFeature = props => {
  const [img, setImg] = useState([
    {
      image: require('../assets/deluxeroom.png'),
      id: 1,
    },
    {
      image: require('../assets/deluxeroom.png'),
      id: 2,
    },
    {
      image: require('../assets/deluxeroom.png'),
      id: 3,
    },
    {
      image: require('../assets/deluxeroom.png'),
      id: 4,
    },
  ]);

  return (
    <View style={{height: 300, width: '100%'}}>
      <FlatList
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={img}
        renderItem={({item, index}) => (
          <Image
            source={item.image}
            style={{
              height: '70%',
              borderWidth: 2,
              borderColor: '#0042CC',
              borderRadius: 25,
              resizeMode: 'cover',
              margin: 8,
            }}
          />
        )}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#4F4F4F',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginTop: '-19%',
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
            marginTop: '1%',
            right: '3%',
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
            marginTop: '1%',
            right: '-2%',
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
            marginTop: '2%',
            right: '-6%',
          }}>
          <Image
            source={require('../assets/squarefeet.png')}
            style={{marginLeft: '2%', color: 'grey'}}
          />
          <Text style={{left: 10, top: -4}}>1500 sqft</Text>
        </View>
      </View>
      <Text style={{opacity: 0.5, right: '-4%', top: '-1%'}}>
        914 Edgemont Avenue Elk River, chaykot.
      </Text>
    </View>
  );
};
export default SimilarHomeFeature;
