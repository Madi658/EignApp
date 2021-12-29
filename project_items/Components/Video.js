import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const {height} = Dimensions.get('window');
// create a component
const NewsFeed = props => {
  const [Progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);

  const [slider1ActiveSlide, setslider1ActiveSlide] = useState(null);
  const [carousel, setcarousel] = useState(null);
  const [duration, setDuration] = useState(0);
  const [Mute, setMute] = useState(1);
  const [paused, setPaused] = useState(true);
  const [Positon, setPositon] = useState({start: null, end: null});

  const Arr=[ 
 
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    user: [
      {
        pic: 'https://i.imgur.com/lceHsT6l.jpg',
      },
      {pic: 'https://i.imgur.com/2nCt3Sbl.jpg'},
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {pic: 'https://i.imgur.com/2nCt3Sbl.jpg'},
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {pic: 'https://i.imgur.com/lceHsT6l.jpg'},
    ]
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    user: [
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {pic: 'https://i.imgur.com/lceHsT6l.jpg'},
    ],
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    user: [
      {pic: 'https://i.imgur.com/2nCt3Sbl.jpg'},
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {pic: 'https://i.imgur.com/2nCt3Sbl.jpg'},
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
    ],
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    user: [
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {pic: 'https://i.imgur.com/2nCt3Sbl.jpg'},
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {pic: 'https://i.imgur.com/lceHsT6l.jpg'},
    ],
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    user: [
      {
        pic: 'https://i.imgur.com/2nCt3Sbl.jpg',
      },
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {
        pic: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
    ],
  },
]

 

  const _renderItemA = ({item, index}) => {

    let ext = item.pic.split('.').pop();
    if (ext === 'jpeg' || ext === 'jpg' || ext === 'png') {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={props.pressed}>
          <Image
            source={{uri: item.pic}}
            style={{width: '100%', height: 450}}
          />
          </TouchableWithoutFeedback>
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
        </View>
      );
    } else if (ext === 'mp4') {
    return (
      <>
      <TouchableWithoutFeedback onPress={props.pressed}>
        <Video
          onLoadStart={() => <ActivityIndicator color="blue" />}
          paused={paused}
          resizeMode="cover"
          source={item.pic}
          repeat
          style={styles.mediaPlayer}
          volume={Mute}
        />
        </TouchableWithoutFeedback>
        {Mute == 1 ? (
          <View style={styles.icon}>
            <Icon
              name="md-volume-high"
              onPress={() => {
                setMute(0);
              }}
              style={{color: 'white', fontSize: 18}}
            />
          </View>
        ) : (
          <View style={styles.icon}>
            <Icon
              name="md-volume-mute"
              onPress={() => {
                setMute(1);
              }}
              style={{color: 'white', fontSize: 18}}
            />
          </View>
        )}
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
    
      </>
    );
    }
  };
  return (
    <View>
      <FlatList
        data={Arr}
        bounces={false}
        renderItem={({item, index}) => {
          console.log(item.user.length);
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
                    data={item.user}
                    renderItem={_renderItemA}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    onSnapToItem={i => {
                      setslider1ActiveSlide(i);
                    }}
                    pagingEnabled
                    bounces={false}
                  />
                  <Pagination
                    dotsLength={item.user.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotStyle={{borderWidth: 2, borderColor: 'white'}}
                    inactiveDotColor={'white'}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1.5}
                    dotColor={'white'}
                    carouselRef={carousel}
                    tappableDots={!carousel}
                  />
                </View>

              <View
                style={{
                  height: windowWidth / 5,
                  width: '100%',
                  backgroundColor: '#fff',
                  top: -5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 15,
                    top: 15,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', flex: 2}}>
                    $1,150,000
                  </Text>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <Image source={require('../assets/bed.png')} />
                    <Text style={{fontWeight: 'bold'}}> 3 Bed</Text>
                  </View>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <Image source={require('../assets/bath.png')} />
                    <Text style={{fontWeight: 'bold'}}> 2 Bath</Text>
                  </View>
                </View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    paddingVertical: 15,
                  }}>
                  914 Edgemont Avenue Elk River, MN 55
                </Text>
              </View>
            </View>
          );
        }}
      />
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
});

//make this component available to the app
export default NewsFeed;