import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Pressable,
  Alert,
  ImageBackground,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const {height} = Dimensions.get('window');
// create a component
const DetailsVideo = props => {
  let tempV=[];
  let tempP=[];
  const [slider1ActiveSlide, setslider1ActiveSlide] = useState(null);
  const [carousel, setcarousel] = useState(null);
  const [Mute, setMute] = useState(1);
  const data=props.data;
  let ImagesAndVideos=data?.fields?.image_or_video.split(',')
  ImagesAndVideos.forEach(i => {
    let ext = i.split('.').pop();
    if (ext === 'jpeg' || ext === 'jpg' || ext === 'png'){
      tempP.push(i);
    }else if (ext === 'mp4')
    tempV.push(i);
});

  const Play = (index) => {
    props.navigation.navigate('VideoScrool',{data,index})
  };
  const For = () => {
    carousel._snapToItem(slider1ActiveSlide + 1);
  };
  const Pre = () => {
    carousel._snapToItem(slider1ActiveSlide - 1);
  };

  const _renderItemA = ({item, index}) => {
    let ext = item.split('.').pop();
    if (ext === 'jpeg' || ext === 'jpg' || ext === 'png') {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={props.pressed}>
            <ImageBackground
              source={{uri: item}}
              style={{width: '100%', height: 450}}>
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  top: 30,
                  right: 17,
                }}>
                <Icon name="heart-outline" style={{color: 'white'}} size={24} />
              </View>
              <Icon2
                name="chevron-left"
                style={[styles.Iconz, {left: 17}]}
                size={35}
                onPress={() => {
                  Pre();
                }}
              />
              <Icon2
                name="chevron-right"
                style={styles.Iconz}
                size={35}
                onPress={() => {
                  For();
                }}
              />
              <View style={{top:windowWidth/1.30}}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:'white',marginHorizontal: 15,}}>
              ${data.fields.price}
          </Text>
                <View
          style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            marginHorizontal: 15,
            top: 15,
          }}>
       
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/BedW.png')} style={{color:'white'}}/>
            <Text style={{fontWeight: 'bold',color:'white'}}> {data.fields.beds} Bed</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/BathW.png')} />
            <Text style={{fontWeight: 'bold',color:'white'}}>  {data.fields.baths} Bath</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/sqfW.png')} style={{color:'white'}}/>
            <Text style={{fontWeight: 'bold',color:'white'}}> {data.fields.area}sqft</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            paddingVertical: 20,
            color:'white',
            marginHorizontal: 15,
          }}>
         {data.fields.home_address}
        </Text>
        </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
          <View style={styles.New}>
            <Text>New</Text>
          </View>
        </View>
      );
    } else if (ext === 'mp4') {
      return (
        <>
            <Video
              paused={true}
              resizeMode="cover"
            source={{uri: item}}
              repeat
              style={styles.mediaPlayer}
              volume={Mute}
            />
 
          <View
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              top: 17,
              right: 17,
            }}>
            <Icon name="heart-outline" style={{color: 'white'}} size={24} />
          </View>
          <View style={styles.New}>
            <Text>New</Text>
          </View>
           <Icon3
                name="playcircleo"
                style={[styles.Iconz, {left:windowWidth/2.25, top: windowWidth / 2.3,width:50}]}
                size={50}
                onPress={() => {
                  Play(index);
                }} 
              /> 
              <View style={[styles.Iconz, {left: 17, top: windowWidth / 2.2}]}>
          <Icon2
                name="chevron-left"
                size={35}
                style={{color:'white'}}
                onPress={() => {
                  Pre();
                }}
              />
              </View>
              <Icon2
                name="chevron-right"
                style={[styles.Iconz,{top: windowWidth / 2.2,}]}
                size={35}
                onPress={() => {
                  For();
                }}
              />
          <View style={{top:windowWidth/1.38}}>
              <Text style={{fontSize: 16, fontWeight: 'bold',color:'white',marginHorizontal: 15,}}>
              ${data.fields.price}
          </Text>
                <View
          style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            marginHorizontal: 15,
            top: 15,
          }}>
       
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/BedW.png')} style={{color:'white'}}/>
            <Text style={{fontWeight: 'bold',color:'white'}}> {data.fields.beds} Bed</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/BathW.png')} />
            <Text style={{fontWeight: 'bold',color:'white'}}> {data.fields.baths} Bath</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
            <Image source={require('../assets/sqfW.png')} style={{color:'white'}}/>
            <Text style={{fontWeight: 'bold',color:'white'}}> {data.fields.area} sqft</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            paddingVertical: 20,
            color:'white',
            marginHorizontal: 15,
          }}>
          {data.fields.home_address} 
        </Text>
        </View>
        </>
      );
    }
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        marginBottom: 20,
      }}>
      <View
        style={{
          height: windowWidth,
          width: '100%',
          backgroundColor: '#fff',
        }}>
        <Carousel
          ref={c => {
            setcarousel(c);
          }}
          data={tempV.length > 0  ? tempV : tempP }
          renderItem={_renderItemA}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          onSnapToItem={i => {
            setslider1ActiveSlide(i);
          }}
          pagingEnabled
          bounces={false}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  paginationContainer: {
    top: -40,
    paddingVertical: -3,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: windowWidth / 1.2,
    right: 17,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 50,
  },
  New: {
    position: 'absolute',
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: 'white',
    width: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 17,
    left: 17,
  },
  Iconz: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: windowWidth / 2,
    right: 17,
    color: 'white',
    width:30
  },
});

//make this component available to the app
export default DetailsVideo;
