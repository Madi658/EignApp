import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Back from 'react-native-vector-icons/Ionicons';
import ChatCard from '../Components/ChatCard';
import {db} from './config/FirebaseConfig';
import {useDispatch, useSelector} from 'react-redux';

const ChatCardScreen = ({navigation}) => {
  const [userCard, setuserCard] = useState();
 
  const {token} = useSelector(state => state.LogicData);
  const get = async () => {
    const myid = token.user_id.toString();
    db.collection('Users')
      .doc(myid)
      .collection('Info')
      .onSnapshot(documentSnapshot => {
        const res = documentSnapshot.docs.map(docsnap => {
          return {
            ...docsnap.data(),
          };
        });
        setuserCard(res);
      });
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingTop: 30,
        }}>
        <BackArrow onPressBack={() => navigation.goBack()} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Message</Text>
        <Back
          name="search"
          size={30}
          color="black"
          style={{marginLeft: '2%', color: 'grey'}}
        />
      </View>
      <FlatList
        data={userCard}
        renderItem={({item}) => {
          return (
            <ChatCard
              id={item.id}
              name={item.name}
              Pro={''}
              Pic={item.pic}
              mes={item.mes}
              navigation={navigation}
            />
          );
        }}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ChatCardScreen;
