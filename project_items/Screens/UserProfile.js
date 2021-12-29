import React, {Component, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import ButtonC from '../Components/ButtonC';
import TextInputC from '../Components/TextInputC';
import UserPicture from '../Components/UserPicture';
import Textt from '../Components/Textt';
import PropertyTypeCards from '../Components/PropertyTypeCards';
import ImagePickerBox from '../Components/ImagePickerBox';
import idCard from '../assets/Union.png';
import passport from '../assets/Union.png';
import useForceUpdate from 'use-force-update';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { Token } from '../../redux/actions/Logics_action';
import axios from 'axios';
import { Loading } from '../Components/Looding';
import ImagePicker from 'react-native-customized-image-picker';

const UserProfile = props => {
  const dispatch=useDispatch();
  const forceUpdate = useForceUpdate();
  const {token} = useSelector(state => state.LogicData);
  const [firstName, setfirstName] = useState(token.first_name);
  const [last_name, setlast_name] = useState(token.last_name);

  const [phone, setphone] = useState(token.phone);
  const [City, setCity] = useState(token.city);
  const [country, setcountry] = useState(token.country);
  const [state, setstate] = useState(token.state);
  const [zip_code, setzip_code] = useState(token.zip_code);
  const [image, setImage] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [Looding, setLooding] = useState(false);
  const [PicCheak, setPicCheak] = useState(false)
  const [tempPic, settempPic] = useState([]);
  
  const [identification, setIdentification] = useState([
    {
      selection: false,
      name: 'ID Card',
      pics: idCard,
    },
    {
      selection: false,
      name: 'Passport',
      pics: passport,
    },
  ]);
    console.log('tempPic',tempPic);
    console.log('tempPic',token);
  const MultiPic = () => {
    ImagePicker.openPicker({
    }).then(images => {
      console.log('response',images);
      settempPic(images[0].path);
      setPicCheak(true);
    });
  };
  const tickShow = () => {
    setImage(true);
  };
  const ImageShow = () => {
    setIsShow(true);
  };
  const Change = index => {
    console.log('change colr', index);
    identification.map((data, index) => {
      data.selection = false;
    });

    let temp = identification;
    temp[index].selection = true;
    setIdentification(temp);
    forceUpdate();
    tickShow();
    ImageShow();
  };
const GetUpdateProfile = async () => {
  let random = Math.floor(Math.random() * 9999999999) + 1;
  console.log(token.user_id);
  const baseURL=`https://eign-backend.herokuapp.com/user/edit/${token.user_id}/`;
    setLooding(true)
      try {
        // {
        //   city:City,
        //   country:country,
        //   first_name:firstName,
        //   last_name:last_name,
        //   phone:phone,
        //   profile_pic:token.profile_pic,
        //   state:state,
        //   zip_code:zip_code,
        // }
       let  fd=new FormData();
       fd.append('city',City);
       fd.append('country',country);
       fd.append('first_name',firstName);
       fd.append('last_name',last_name);
       fd.append('phone',phone);
       fd.append('state',state);
       fd.append('zip_code',zip_code);
       {PicCheak ? fd.append('profile_pic', {
        uri: tempPic,
        name: `FileName${random}.png`,
        filename: `FileName${random}.png`,
        type: 'image/png',
      }): fd.append('profile_pic','');}

        await axios
       .post(baseURL,fd)
          .then((res) => {
            const Update = res.data;
            dispatch(Token(Update));
           setLooding(false)
           setPicCheak(false);
          })
          .catch((err) => {
            console.log('hellll',err.response);
           setLooding(false);
           alert('Something Went Wrong, Please Try Again 22');
           setPicCheak(false);
          });
      } catch (err) {
            setLooding(false);
        alert('Something Went Wrong, Please try Again');
        setPicCheak(false);
      }
  };
  return (
    
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {Looding ? <Loading visible={Looding}/> :
        <ScrollView style={{flex: 1}}>
          <View>
            <BackArrow onPressBack={() => props.navigation.goBack()} />
            <View style={{alignSelf: 'center', marginTop: '-8%'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Profile</Text>
            </View>
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}>
                <Image
                  source={PicCheak ? {uri:tempPic}: {uri: token.profile_pic}}
                  style={{width: 65, height: 65, borderRadius: 10,backgroundColor:'gray'}}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', top: 10}}>
                  {token.full_name}
                </Text>
              </View>
              <Text style={{fontSize: 13, opacity: 0.5, top: 10, left: 20}}>
                Personal Info
              </Text>
              <TextInput
                autoCapitalize="none"
                selectionColor="blue"
                label="Your First Name"
                onChangeText={setfirstName}
                value={firstName}
                mode={'outlined'}
                placeholder={'Enter Your First Name'}
                placeholderTextColor="#B4B4B4"
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: '5%',
                  backgroundColor: '#fff',
                }}
              />
                 <TextInput
                autoCapitalize="none"
                selectionColor="blue"
                label="Your Last Name"
                onChangeText={setlast_name}
                value={last_name}
                mode={'outlined'}
                placeholder={'Enter Your Last Name'}
                placeholderTextColor="#B4B4B4"
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: '5%',
                  backgroundColor: '#fff',
                }}
              />
              {/* <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="Email"
                  onChangeText={() => console.log('Done')}
                  value=""
                  mode={'outlined'}
                  placeholder={'Enter Your Email'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    marginTop:'5%',
                    backgroundColor: '#fff',
                  }}
                /> */}
              <TextInput
                autoCapitalize="none"
                selectionColor="blue"
                label="Phone"
                onChangeText={setphone}
                value={phone}
                mode={'outlined'}
                placeholder={'Enter Your Phone Number'}
                placeholderTextColor="#B4B4B4"
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: '5%',
                  backgroundColor: '#fff',
                }}
              />
              {/* <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="Password"
                  onChangeText={() => console.log('Done')}
                  value=""
                  mode={'outlined'}
                  placeholder={'Enter Your Password'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 43,
                    backgroundColor: '#fff',
                  }}
                /> */}
              {/* <Text
                  onPress={() => props.navigation.navigate('ChangePassword')}
                  style={{left: '63%', color: '#0042CC', fontWeight: 'bold'}}>
                  Change Password
                // </Text> */}
              <Text
                style={{
                  fontSize: 13,
                  opacity: 0.5,
                  left: 20,
                  marginTop: '2.5%',
                }}>
                Location
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  marginTop: '2.5%',
                }}>
                <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="City"
                  onChangeText={setCity}
                  value={City}
                  mode={'outlined'}
                  placeholder={'Enter City Name'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '47%',
                    backgroundColor: '#fff',
                  }}
                />
                <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="Country"
                  onChangeText={setcountry}
                  value={country}
                  mode={'outlined'}
                  placeholder={'Enter Country Name'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '47%',
                    backgroundColor: '#fff',
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  marginTop: '5%',
                }}>
                <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="State"
                  onChangeText={setstate}
                  value={state}
                  mode={'outlined'}
                  placeholder={'Enter State Name'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '47%',
                    backgroundColor: '#fff',
                  }}
                />
                <TextInput
                  autoCapitalize="none"
                  selectionColor="blue"
                  label="Zip-code"
                  keyboardType='phone-pad'
                  onChangeText={setzip_code}
                  value={zip_code}
                  mode={'outlined'}
                  placeholder={'Enter Zip-Code'}
                  placeholderTextColor="#B4B4B4"
                  style={{
                    width: '47%',
                    backgroundColor: '#fff',
                  }}
                />
              </View>
              <ButtonC title="Save" length="90%" borderRadius={5} onPressB={GetUpdateProfile}/>
              <Textt
                title="Identification"
                styling={{
                  marginLeft: '5%',
                  flexDirection: 'row',
                  marginTop: '5%',
                  opacity: 0.5,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                {identification.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => Change(index)}
                      style={{
                        height: 100,
                        width: '25%',
                        marginTop: '5%',

                        marginLeft: '5%',
                        borderRadius: 15,

                        backgroundColor: data.selection ? '#0042CC' : '#F6F9FF',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          top: 14,
                        }}>
                        <View>
                          {image && (
                            <Image
                              style={{
                                resizeMode: 'contain',
                                top: -8,
                                right: 35,
                                tintColor: data.selection ? 'white' : '#fff',
                                opacity: data.selection ? 1 : 0.1,
                              }}
                              source={require('../assets/tick.png')}
                            />
                          )}
                        </View>

                        <Image
                          style={{
                            resizeMode: 'contain',
                            tintColor: data.selection ? '#F6F9FF' : '#0042CC',
                          }}
                          source={data.pics}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            top: 20,
                            color: data.selection ? '#F6F9FF' : '#0042CC',
                          }}>
                          {data.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <Textt
                title="upload a photo"
                styling={{
                  marginLeft: '5%',
                  flexDirection: 'row',
                  marginTop: '5%',
                  opacity: 0.5,
                }}
              />
                <TouchableOpacity
          onPress={() =>MultiPic()}
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
          Upload Image
        </Text>
      </TouchableOpacity>
            </View>
          </View>
        </ScrollView> }
      </SafeAreaView>
    
  );
};
export default UserProfile;
