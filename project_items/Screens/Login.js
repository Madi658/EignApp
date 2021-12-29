import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  LoginButton,
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import Loading from '../Components/Loading';
import { GoogleSignin,statusCodes,} from '@react-native-community/google-signin';
// import firebase from 'firebase';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NetInfo from '@react-native-community/netinfo';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { Token } from '../../redux/actions/Logics_action';
import { LoginA } from '../../redux/actions/Login_action';
import { InternetValidation } from '../Components/Validation';

var validator = require('email-validator');
const Login = props => {
  const [pushdata, setPushData] = useState([]);
  const [loogedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState({});

  const [setEmail, setsEmail] = useState('');
  const [setPassword, setsPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  
  const IsNetCheck = () => {
    NetInfo.fetch().then(networkState => {
      networkState.isConnected === true ? Servises() : alert("NO Internet");
    });
  };
  const Servises=()=>{
    isSignedIn(); 
  };
  const GOtoHome=()=>{
    props.navigation.navigate('Map');
  }
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  const SiginWithGoogle=()=>{ 
    InternetValidation().then(async res=>{
      if(res.success == true)
 {
      try{
        await GoogleSignin.hasPlayServices()
        const userinfo = await GoogleSignin.signIn({
          scopes: ['email', 'profile'],
        });
       let fd=new FormData();
        fd.append('email', userinfo.user.email);
        fd.append('first_name', userinfo.user.givenName);
        fd.append('last_name', userinfo.user.familyName);
        fd.append('photo', userinfo.user.photo);
        fd.append('id', userinfo.user.id);
        dispatch(LoginA(fd))
        console.log('google user unfo',fd);
      }
      catch(err){
        console.log('google login in error',err);
      }
    }else alert(res.message)
    })
  }
  const handleEmail = text => {
    setsEmail(text);
  };
  const handlePassword = text => {
    setsPassword(text);
  };
  console.log('user info',userInfo);
  const logoutwithFacebook = () => {
    LoginManager.logOut();
    setUserInfo({});
  };
  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,picture,email,friends, first_name, last_name',
        // string: 'email',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      async (error, user) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          // setinfo(user);
          console.log('>>>>>>>>:::::::', user);
          // (Sociallogin.first_name = user?.first_name),
          //   (Sociallogin.last_name = user?.last_name),
          //   (Sociallogin.email = user?.email),
          //   (Sociallogin.password = user?.first_name + user?.last_name),
          //   (Sociallogin.confirm_password = user?.first_name + user?.last_name),
            // (Sociallogin.idToken = user?.id),
            // (Sociallogin.type = 'facebook'),
            // onSignup();
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  const loginWithFacebook =  () => {
      InternetValidation().then(async res=>{
        if(res.success == true){
          if (LoginManager.setLoginBehavior != null) {
            console.log('.........null......');
            LoginManager.logOut();
          } else {
            console.log('..........not null.....');
            LoginManager.logOut();
          }
          LoginManager.logInWithPermissions(['public_profile,email']).then(
            async login => {
              if (!login?.isCancelled) {
                await AccessToken.getCurrentAccessToken().then(data => {
                  const accessToken = data.accessToken.toString();
                  getInfoFromToken(accessToken);
                });
              } else {
                console.log('Login cancelled');
              }
            },
            error => {
              console.log('Login fail with error: ' + error);
            },
          );
        }else alert(res.message);
      })
  };
  
  const login = () => {
    InternetValidation().then(async res=>{
      if(res.success == true)
      {
        setIsLoading(true);
        const valid = validator.validate(setEmail); // true
        if (setEmail === '' || setPassword === '') {
          setIsLoading(false);
          alert('Please Enter Email and Password');
        } else if (valid === false) {
          setIsLoading(false);
          alert('Please Enter Valid Email');
        } else {
          console.log('request send');
          let formdata = new FormData();
          formdata.append('email', setEmail.toLowerCase());
          formdata.append('password', setPassword);
          console.log(formdata);
          fetch('https://eign-backend.herokuapp.com/user/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formdata,
          })
            .then(response => response.json())
            .then(responsejosn => {
              console.log('responsejosn.status',responsejosn);
              if(responsejosn.status != undefined  )
              {
                setIsLoading(false);
                alert(responsejosn.status);
              }else
                { 
                  setIsLoading(false);
                  dispatch(Token(responsejosn));
                  GOtoHome();
                }
            })
            .catch(err=>{
              setIsLoading(false);
              alert(err.message)
            })
        }
      }else alert('Enternet Not Available')
    })
   
  };
  useEffect(()=>{
    IsNetCheck()
  },[])
useEffect(()=>{
  GoogleSignin.configure({
    webClientId:'735800995051-ct32s1hipufvn6r1pt8d3l2uv49faehs.apps.googleusercontent.com',
    offlineAccess:true,
    iosClientId:'735800995051-0pl28hhvustn3sejss42rpk29o39qann.apps.googleusercontent.com'
  })
  
},[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: '20%',
          width: '60%',
          marginTop: '10%',
          alignSelf: 'center',
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '15%',
        }}>
        <Image
          style={{height: '65%', width: '65%', resizeMode: 'contain'}}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: '5%'}}>
        <Text style={{fontSize: 18, color: '#828282'}}>Sign in or</Text>
        <Text
          onPress={() => props.navigation.navigate('SignUpStarter')}
          style={{
            fontSize: 18,
            left: 8,
            fontWeight: 'bold',
            color: 'blue',
          }}>
          register
        </Text>
      </View>
      <TextInput
        disabled={isLoading}
        autoCapitalize='none'
        keyboardType="email-address"
        label="Email"
        onChangeText={text => handleEmail(text)}
        value={setEmail}
        mode={'outlined'}
        placeholder={'Enter Your Email'}
        style={{
          width: '90%',
          marginTop: '4%',
          alignSelf: 'center',
          height: 50,
        }}
      />
      <TextInput
        disabled={isLoading}
        autoCapitalize='none'
        secureTextEntry={true}
        selectionColor="blue"
        label="Password"
        onChangeText={text => handlePassword(text)}
        value={setPassword}
        mode={'outlined'}
        placeholder={'Enter Your Password'}
        placeholderTextColor="#B4B4B4"
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '4%',
          height: 50,
        }}
      />
      <TouchableOpacity
       disabled={isLoading}
        onPress={login}
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4BC09E',
          marginTop: '3%',
          borderRadius: 5,
        }}>
        {isLoading === false ? (
          <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 18}}>
            Get Started
          </Text>
        ) : (
          <Loading ShowLoading={isLoading} clr={'white'} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '4%',
        }}>
        <Text
          onPress={() => props.navigation.navigate('Map')}
          style={{
            color: 'blue',
            fontWeight: '500',
            fontSize: 18,
            marginBottom: '8%',
          }}>
          Skip
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: '5%',
          color: '#828282',
          fontWeight: '500',
          fontSize: 16,
        }}>
        More
      </Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7F7F7',
          marginTop: '3%',
          borderRadius: 5,
        }}
        onPress={SiginWithGoogle}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/google.png')} />
          <Text
            style={{color: 'black', fontWeight: '500', fontSize: 18, left: 10}}>
            Signup with Google
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3B5998',
          marginTop: '3%',
          borderRadius: 5,
        }}
        onPress={loginWithFacebook}
        >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/FB.png')} />
          <Text
            style={{color: 'white', fontWeight: '500', fontSize: 18, left: 10}}>
            Signup with FaceBook
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '1%',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#828282', right: 5, marginTop: '5%'}}>
          I accept Habrick's
        </Text>
        <Text style={{marginTop: '5%'}}>Terms of Use</Text>
        <Text style={{color: '#828282', left: 5, right: 5, marginTop: '5%'}}>
          and
        </Text>
        <Text style={{left: 8, marginTop: '5%'}}>Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  listHeader: {
    backgroundColor: '#eee',
    color: '#222',
    height: 44,
    padding: 12,
  },
  detailContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  dp: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Login;
