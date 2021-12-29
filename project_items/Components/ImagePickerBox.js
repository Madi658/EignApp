import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ImagePickerBox = props => {
  const [response, setResponse] = useState([]);

  return (
    <View>
      <TouchableOpacity
          onPress={() =>props.PicImage}
        style={{
          height: 100,
          width: '90%',
          alignSelf: 'center',
          marginTop: '7%',
          borderWidth: 1,
          opacity: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: '40%', width: '40%', resizeMode: 'contain'}}
          source={require('../assets/cloud.png')}
        />
        <Text
    
          style={{top: 7, fontSize: 18}}>
          {props.innerText}
        </Text>
      </TouchableOpacity>
  
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: '2%',
    marginLeft: '4%',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
export default ImagePickerBox;
