import React, {Component, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import { Token } from '../../redux/actions/Logics_action';

const MoreComponent = ({nameM,directory,navigation}) => {
  const {token} = useSelector(state => state.LogicData);
  const dispatch=useDispatch();

  const Nav=()=>{
    
    const MessageCheak=()=>{
        navigation.navigate('ChatCardScreen');
    };
    const GoToSettings=()=>{
      navigation.navigate('SettingScreen');
    };
    const GoToCalculater=()=>{
      navigation.navigate('CalculaterScreen');
    };
    const GoToSubmit=()=>{
        navigation.navigate('SubmitProperty'); 
    }
    const GotoLoan=()=>{
      navigation.navigate('LoanScreen');
    }
    const GotoBlogs=()=>{
      navigation.navigate('BlogScreen');
    }
    const GotoLogin=()=>{
      dispatch(Token(''))
      navigation.navigate('Login');
    }
    if (nameM == 'Message'){MessageCheak()}
    else if (nameM == 'Settings'){GoToSettings()}
    else if (nameM == 'Submit Property'){GoToSubmit()}
    else if (nameM == 'Loan'){GotoLoan()}
    else if (nameM == 'Blog'){GotoBlogs()}
    else if (nameM == 'LogOut'){GotoLogin()}
    else if (nameM == 'Calculater'){GoToCalculater()}
  }
  return (
    <TouchableOpacity
      onPress={Nav}
      style={{
        height: 100,
        width: '40%',
        backgroundColor: 'red',
        marginTop: '5%',
        marginLeft: '7%',
        borderRadius: 5,
        backgroundColor: '#F6F9FF',
        paddingVertical:'6%',
        alignItems:'center',
        justifyContent:'space-between'
        
      }}>
     
        <Image
          style={{width:25,height:25}}
          source={directory}
        />
        <Text
          style={{fontSize: 15,color: '#0042CC',fontWeight:'500'}}>
          {nameM}
        </Text>
   
    </TouchableOpacity>
  );
};
export default MoreComponent;
