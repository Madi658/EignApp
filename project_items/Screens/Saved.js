import React, {useEffect, useState} from 'react';
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
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import BackArrow from '../Components/BackArrow';
import Button from '../Components/Button';
import { GFavsuccess, setFavourite } from '../../redux/actions/Fav_action';
const windowHeight = Dimensions.get('window').height;
const {height} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;

// create a component
const Saved = props => {
  let temp = [];
  const [slider1ActiveSlide, setslider1ActiveSlide] = useState(null);
  const [carousel, setcarousel] = useState(null);
  const {Fav,isSuccess,isError,errMsg} = useSelector(state => state.setFav);
  const {ListData} = useSelector(state => state.ListData);
  const {token} = useSelector(state => state.LogicData);
  const dispatch=useDispatch();

     console.log('Apiiiii Favv',Fav,isSuccess,isError,errMsg)


  const {GFav, GisLoading, GisSuccess, GisError, GerrMsg} = useSelector(
    state => state.setFav,
  );
  const Favourite = (item) => {  
      let filtered = GFav.filter(e => e.pk !== item.pk);
      dispatch(GFavsuccess(filtered));
      dispatch(setFavourite(token.user_id,item.pk))
    } 
 const DoTrue=()=>{
   if(token.user_id != undefined)
 {
    GFav.map((item)=>{
    item.fields.is_favourite=true;
  })
 }
}
useEffect(()=>{
  DoTrue();
},[])
  const _renderItemA = ({item}) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={{uri: item}}
          style={{width: '100%', height: windowWidth}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrow onPressBack={() => props.navigation.goBack()} />

      <View style={{alignSelf: 'center', marginTop: '-8%',marginBottom:15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Saved</Text>
      </View>
    {token.user_id == undefined ?  
      <View style={{marginTop:'80%'}}>
      <Text style={{fontWeight:'500',color:'blue',alignSelf:'center'}}>Login is Require To use This Feature</Text>
      <Button
        press={() => props.navigation.navigate('Login')}
        title="Go To Login"
        color="#0042CC"
        TextColor="#fff"
        BorderColor="#0042CC"
        bottoms={20}
      />
      </View> : 
      <View>
      <FlatList
        data={GFav}
        bounces={false}
        keyExtractor={(item, index) => item + index.toString()}
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
                    Favourite(item);
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
      </View>}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default Saved;
