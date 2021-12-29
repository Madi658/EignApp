import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fill} from 'lodash';
import {GFavsuccess, setFavourite} from '../../redux/actions/Fav_action';
import {useIsFocused} from '@react-navigation/native';
import {InternetValidation} from '../Components/Validation';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const {height} = Dimensions.get('window');
// create a component

const ListView = props => {
  let temp = [];
  const {ListDataP, isSuccessP, errMsgP, isLoadingP} = useSelector(
    state => state.ListDataP,
  );
  const {token} = useSelector(state => state.LogicData);
  const {GFav} = useSelector(state => state.setFav);
  const [slider1ActiveSlide, setslider1ActiveSlide] = useState(null);
  const [carousel, setcarousel] = useState(null);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const FavCheak = () => {
  
        if (ListDataP.status == undefined) {
          ListDataP?.map((item, index) => {
            let f = GFav?.find(i => i?.pk === item?.pk);
            if (f != undefined) {
              item.fields.is_favourite = true;
            } else {
              item.fields.is_favourite = false;
            }
          });
        }
      }
  {
    isFocused == true && token.user_id != undefined ? FavCheak() : null;
  }
  const Favourite = index => {
    InternetValidation().then(async res => {
      if (res.success == true) {
        if (token.user_id != undefined) {
          let f = GFav.find(i => i.pk == ListDataP[index].pk);
          if (f != undefined) {
            let filtered = GFav.filter(e => e.pk !== ListDataP[index].pk);
            ListDataP[index].fields.is_favourite = false;
            dispatch(GFavsuccess(filtered));
            dispatch(setFavourite(token.user_id, ListDataP[index].pk));
          } else {
            ListDataP[index].fields.is_favourite = true;
            dispatch(GFavsuccess([...GFav, ListDataP[index]]));
            dispatch(setFavourite(token.user_id, ListDataP[index].pk));
          }
        } else {
          alert('Please login to save Properties');
        }
      }else alert(res.message) })

  };
  const _renderItemA = ({item}) => {
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={{uri: item}}
          style={{width: '100%', height: windowWidth}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: '35%'}}>
      <FlatList
        data={ListDataP}
        bounces={false}
        keyExtractor={(item, index) => item + index.toString()}
        ListFooterComponent={props.ListFooter}
        onEndReachedThreshold={0}
        renderItem={({item, index}) => {
          temp = [];
          let temp1 = item?.fields?.image_or_video.split(',');
          temp1?.forEach(i => {
            let ext = i?.split('.').pop();
            if (ext === 'jpeg' || ext === 'jpg' || ext === 'png') {
              temp?.push(i);
            }
          });
          return (
            <View
              key={index}
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
                  data={temp}
                  renderItem={_renderItemA}
                  sliderWidth={windowWidth}
                  itemWidth={windowWidth}
                  onSnapToItem={i => {
                    setslider1ActiveSlide(i);
                  }}
                  pagingEnabled
                  bounces={false}
                  loop={true}
                  enableSnap={true}
                  autoplay={false}
                />
                <Pagination
                  dotsLength={temp.length}
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
              {item.fields.is_favourite ? (
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: 17,
                    right: 17,
                  }}
                  onPress={() => {
                    Favourite(index);
                  }}>
                  <Icon name="md-heart" style={{color: 'red'}} size={30} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    marginTop: 17,
                    right: 17,
                  }}
                  onPress={() => {
                    Favourite(index);
                  }}>
                  <Icon
                    name="heart-outline"
                    style={{color: 'white'}}
                    size={30}
                  />
                </TouchableOpacity>
              )}

              <View style={styles.New}>
                <Text>New</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  props.navigation.navigate('VideoDetails', {
                    item,
                  });
                }}>
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
                      {'$'}
                      {item.fields.price}
                    </Text>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <Image source={require('../assets/bed.png')} />
                      <Text style={{fontWeight: 'bold'}}>
                        {' '}
                        {item.fields.beds} Bed
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <Image source={require('../assets/bath.png')} />
                      <Text style={{fontWeight: 'bold'}}>
                        {' '}
                        {item.fields.baths} Bath
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 16,
                      paddingVertical: 15,
                      top: 10,
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
    // position: 'absolute',
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
export default ListView;
