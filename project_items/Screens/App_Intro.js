import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    image: require('../assets/slide1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 2,
    image: require('../assets/slide2.png'),
    backgroundColor: '#fff',
  },
];

const AppIntro = props => {
  const [showRealApp, setshowRealApp] = useState(false);
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        {item.key == 1 && (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{
              marginLeft: '55%',
              marginTop: '10%',
              opacity: 0.5,
            }}>
            <Text style={{fontSize: 16}}>Skip</Text>
          </TouchableOpacity>
        )}
        {item.key == 2 && (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{
              marginLeft: '60%',
              marginTop: '10%',
              opacity: 0.5,
            }}>
            <Text style={{fontSize: 16}}> Next</Text>
          </TouchableOpacity>
        )}
        {item.key == 2 && (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{
              marginRight: '70%',
              marginTop: '-5%',
              opacity: 0.5,
            }}>
            <Text style={{fontSize: 16}}> Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const _onDone = () => {
    setshowRealApp(true);
  };

  return (
    <AppIntroSlider
      dotStyle={{width: 40, color: '#828282'}}
      activeDotStyle={{width: 50, backgroundColor: 'blue'}}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
    resizeMode: 'contain',
  },
});
export default AppIntro;
