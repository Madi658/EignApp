import React, {Component, useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image,SafeAreaView} from 'react-native';
import {GiftedChat,Bubble, Time} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import BackArrow from '../Components/BackArrow';
import {db} from './config/FirebaseConfig';
// firebase.firestore().settings();
let QS;
const Chatroom = ({navigation, route}) => {
const {token} = useSelector(state => state.LogicData);
  const myid = token.user_id.toString();
  const {name, Pro, id, mes, Pic} = route.params;
  const OwnerId = id.toString();

  const [chatMessages, SetchatMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const SetMYUserCard= async(Messages)=>{
    if(messages.length == 0)
   
   { 
      await db.collection('Users')
    .doc(myid)
    .collection('Info')
    .doc(OwnerId)
    .set({
      name:name,
      id:OwnerId,
      pic:Pic == undefined ? '' : Pic,
      mes:Messages[0].text
    })
  }else{
    await db.collection('Users')
    .doc(myid)
    .collection('Info')
    .doc(OwnerId)
    .update({
      name:name,
      id:OwnerId,
      pic:Pic == undefined ? '' : Pic,
      mes:Messages[0].text
    })
  }
  
  };
  const SetUserCard=async(Messages)=>{
   if(messages.length == 0)
  { 
       await db.collection('Users')
    .doc(OwnerId)
    .collection('Info')
    .doc(myid)
    .set({
      name:token.full_name,
      id:myid,
      pic:token.profile_pic == undefined ? '': token.profile_pic,
      mes:Messages[0].text
    })
  }else {
    await db.collection('Users')
    .doc(OwnerId)
    .collection('Info')
    .doc(myid)
    .update({
      name:token.full_name,
      id:myid,
      pic:token.profile_pic == undefined ? '': token.profile_pic,
      mes:Messages[0].text
    })
  }
  
  }
  const get = async () => {
    const docid = OwnerId > myid ? myid + '-' +  OwnerId: OwnerId + '-' +myid ;
    console.log('Docccc',docid);
    db
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(documentSnapshot => {
       const res = documentSnapshot.docs.map(docsnap => {
          return {
            ...docsnap.data(),
            createdAt: new Date(),
          };
        });
        setMessages(res);
      });
  };
  useEffect(() => {
    get();
  }, []);
  const onSend = useCallback(messages => {
   
    const msg = messages[0];
    const mymsg = {
      ...msg,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
    const docid = OwnerId > myid ? myid + '-' +  OwnerId: OwnerId + '-' +myid ;      
    db.collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({
        ...mymsg,
        // createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(ref => {
        
        console.log(ref);
      });
  }, []);
  const renderBubble=(props)=> {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'blue',
            left:-45

          },
          right: {
            backgroundColor: '#F9F9F9',
          },
        }}
        textStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: 'black', 
          },
        }}
        style={styles.container}
       />
    );
  }
  const renderTime = (props) => {
    return (
      <Time
      {...props}
        timeTextStyle={{
          left: {
            color: 'white',
          },
          right: {
            color: 'black',
          },
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: 15,
          paddingTop: 30,
          paddingBottom: 5,
        }}>
        <BackArrow onPressBack={() => navigation.goBack()} />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'gray',
              borderRadius: 10,
            }}>
            <Image
              source={{uri:Pic}}
              style={{width: '100%', height: '100%',borderRadius:10}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                paddingHorizontal: 5,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              {name}
            </Text>
            <Text style={{paddingHorizontal: 5}}>{Pro}</Text>
          </View>
        </View>
      </View>
      <GiftedChat
        alwaysShowSend
        messages={messages}
        onSend={Messages => {
          onSend(Messages);
          SetMYUserCard(Messages);
          SetUserCard(Messages);
        }}
        renderTime={renderTime}
        renderBubble={renderBubble}
        user={{
          _id: myid,
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

export {Chatroom};
