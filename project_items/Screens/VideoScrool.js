//import liraries
import React, {Component, useEffect, useState, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Video from 'react-native-video';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const VideoScrool = props => {
  let temp;
  let temp1 = [];
  const data = props.route?.params.data;
  const indexs = props.route?.params.index;
  console.log('getttt', indexs);
  const _Videoref = useRef(null);
  const [videourl, setvideourl] = useState(temp1);
  const {isLoadingP, ListDataP, isSuccessP, errMsgP} = useSelector(
    state => state.ListDataP,
  );
  console.log('helloooo', videourl);
  const filter = () => {
    let temp3 = [];
    let a = 0;
    let b = 0;
    temp3[0] = {
      ...data,
      isPaused: true,
      id: 0,
    };
    ListDataP?.map((item, index) => {
      temp1 = item?.fields?.image_or_video.split(',');
      temp1?.forEach(i => {
        let ext = i?.split('.').pop();
        if (ext === 'mp4' || ext === 'MOV') {
           b=b+1;
        }
      });
      if (b > 0) {
        a = a + 1;
        temp3?.push({
          ...item,
          isPaused: true,
          id: a,
        });
      }
    });
    setvideourl(temp3);
  };
  const GotoDetails = item => {
    props.navigation.navigate('VideoDetails', {
      item,
    });
    //  videourl.map((item,index)=>{
    //      item.isPaused=true,
    //   });
    // setvideourl(temps);
  };
  useEffect(() => {
    filter();
  }, []);
  const onViewableItemsChanged = item => {
    setvideourl(
      videourl?.map(elem => {
        elem.isPaused = true;
        if (elem.id === item) {
          return {
            ...elem,
            isPaused: !elem.isPaused,
          };
        }
        return elem;
      }),
    );
  };
  console.log('Pageee', isLoadingP, ListDataP, isSuccessP, errMsgP);
  return (
    <View style={styles.container}>
      <FlatList
        data={videourl}
        disableIntervalMomentum
        pagingEnabled={true}
        bounces={false}
        keyExtractor={(item, index) => item + index.toString()}
        onEndReachedThreshold={0}
        onMomentumScrollEnd={i => {
          onViewableItemsChanged(
            Math.ceil(
              i.nativeEvent.contentOffset.y / Dimensions.get('screen').height,
            ),
          );
        }}
        renderItem={({item, index}) => {
          console.log('trueeee', item.id, item.isPaused);
          temp = [];
          let temp1 = item?.fields?.image_or_video.split(',');
          temp1?.forEach(i => {
            let ext = i?.split('.').pop();
            if (ext === 'mp4' || ext === 'MOV') {
              temp?.push(i);
            }
          });

          return (
            <View
              key={index}
              style={{
                width: '100%',
                height: windowHeight,
                backgroundColor: 'transparent',
                borderBottomWidth: 1,
                borderBottomColor: '#EBEBEB',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: windowHeight / 1.2,
                  width: '100%',
                  backgroundColor: 'black',
                  top: 35,
                }}>
                <Video
                  ref={_Videoref}
                  controls={true}
                  paused={item.isPaused}
                  resizeMode="cover"
                  source={item.id == 0 ? {uri: temp[index]} : {uri: temp[0]}}
                  repeat
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  GotoDetails(item);
                }}>
                <View
                  style={{
                    height: windowWidth / 5,
                    width: '100%',
                    backgroundColor: 'transparent',
                    top: -75,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginHorizontal: 15,
                      backgroundColor: 'transparent',
                      top: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        flex: 1.7,
                        color: '#fff',
                      }}>
                      {'$'}
                      {item.fields.price}
                    </Text>
                    <View style={{flexDirection: 'row',flex:1,justifyContent:'space-between'}}>
                      <Image source={require('../assets/bed.png')} />
                      <Text style={{fontWeight: 'bold', color: '#fff'}}>
                        {' '}
                        {item.fields.beds} Bed{' '}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={require('../assets/bath.png')} />
                      <Text style={{fontWeight: 'bold', color: '#fff',right:5}}> {' '}{item.fields.baths} Bath{' '}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                      <Image source={require('../assets/sqfW.png')} />
                      <Text style={{fontWeight: 'bold', color: '#fff'}}>
                      {' '}{item.fields.area}sqft
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 16,
                      paddingVertical: 15,
                      top: 10,
                      color: '#fff',
                    }}>
                    {item.fields.home_address}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
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
  },
});

//make this component available to the app
export default VideoScrool;
