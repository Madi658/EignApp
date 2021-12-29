import React, {Component, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import BackArrow from '../Components/BackArrow';
import BlogComponent from '../Components/BlogComponent';
import {useDispatch, useSelector} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {BlogsAction} from '../../redux/actions/Blogs_Action';
import {FlatList} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
const BlogScreen = props => {
  const dispatch = useDispatch();
  const {BlogData, isLoading, isSuccess, isError, errMsg} = useSelector(
    state => state.BlogReducer,
  );
  console.log(
    'Blogggggg Dataaa',
    BlogData,
    isLoading,
    isSuccess,
    isError,
    errMsg,
  );
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };
  useEffect(() => {
    dispatch(BlogsAction());
  }, []);
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View>
          <BackArrow />
          <View style={{marginTop: '4%', marginLeft: '5%'}}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
              Blog and Stories
            </Text>
            <Text style={{color: '#000', fontSize: 14}}>
              Stay on top of announcements and research, find media assets, and
              learn about our experts.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 40,
            alignSelf: 'center',
            marginTop: '40%',
            flexDirection: 'row',
            width:'90%',
            position: 'absolute',
            alignItems:'center',
            borderRadius:5,
            borderWidth:1
          }}>
       
            <Back
              name="search"
              size={30}
              color="black"
              style={{marginLeft: '2%', color: 'grey'}}
            />
            <TextInput placeholder="search" style={{height: 45,marginLeft: '2%'}} />
        </View>
        <View>
          <FlatList
            data={BlogData}
            keyExtractor={i => i.id}
            renderItem={({item, index}) => {
              return <BlogComponent img={item.picture} title={item.title} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BlogScreen;
