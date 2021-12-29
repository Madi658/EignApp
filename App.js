import React, {Component} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import Login from './project_items/Screens/Login';
import Name from './project_items/Screens/Name';

import Password from './project_items/Screens/Password';

import PhoneNumber from './project_items/Screens/PhoneNumber';
import App_Intro from './project_items/Screens/App_Intro';
import Map from './project_items/Screens/Map';
import VideoDetails from './project_items/Screens/VideoDetails';
import FilterScreen from './project_items/Screens/FilterScreen';
import Agreement from './project_items/Screens/Agreement';
import Dropdown from './project_items/Screens/Dropdown';

import LoanScreen from './project_items/Screens/LoanScreen';
import SettingScreen from './project_items/Screens/SettingScreen';
import SubmitProperty from './project_items/Screens/SubmitProperty';
import ListView from './project_items/Screens/ListView';
import SignUpStarter from './project_items/Screens/SignUpStarter';
import UserProfile from './project_items/Screens/UserProfile';
import ChangePassword from './project_items/Screens/ChangePassword';
import CalculatorScreen from './project_items/Screens/CalculatorScreen';
import ChatCardScreen from './project_items/Screens/ChatCardScreen';
import BlogScreen from './project_items/Screens/BlogScreen';

import Search from './project_items/Screens/Search';
import Saved from './project_items/Screens/Saved';
import More from './project_items/Screens/More';

import Feather from 'react-native-vector-icons/Feather';
import {Chatroom} from './project_items/Screens/Chatroom';
import ConfirmationCode from './project_items/Screens/ConfirmationCode';
import OTP from './project_items/Screens/OTP';
import MapVsListView from './project_items/Screens/MapVsListView';
import VideoViewer from './project_items/Components/VideoViewer';
import PicViewer from './project_items/Components/PicViewer';
import SubmitAnOffer from './project_items/Screens/SubmitAnOffer';
import VideoScrool from './project_items/Screens/VideoScrool';
import CalculaterScreen from './project_items/Screens/CalculaterScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Saved') {
            iconName = 'heart';
          } else if (route.name === 'More') {
            iconName = 'more-horizontal';
          } 
          // else if (route.name === 'Feed') {
          //   iconName = 'map-pin';
          // }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Feed" component={MapVsListView} />
      {/* <Tab.Screen name="gvh" component={Feed} /> */}
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const TabRoutes2 = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Saved') {
            iconName = 'heart';
          } else if (route.name === 'More') {
            iconName = 'more-horizontal';
          } else if (route.name === 'Map') {
            iconName = 'map-pin';
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Search" component={LoanScreen} />
      <Tab.Screen name="Feed" component={Map} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Raf RedWan" component={More} />
    </Tab.Navigator>
  );
};

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App_Intro">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="App_Intro"
            component={App_Intro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Name"
            component={Name}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Password"
            component={Password}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PhoneNumber"
            component={PhoneNumber}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Map"
            component={TabRoutes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListView"
            component={ListView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VideoDetails"
            component={VideoDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FilterScreen"
            component={FilterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpStarter"
            component={SignUpStarter}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubmitProperty"
            component={SubmitProperty}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dropdown"
            component={Dropdown}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoanScreen"
            component={TabRoutes2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CalculatorScreen"
            component={CalculatorScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BlogScreen"
            component={BlogScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Chatroom"
            component={Chatroom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatCardScreen"
            component={ChatCardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Agreement"
            component={Agreement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ConfirmationCode"
            component={ConfirmationCode}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="OTP"
            component={OTP}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="MapVsListView"
            component={MapVsListView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VideoViewer"
            component={VideoViewer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PicViewer"
            component={PicViewer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubmitAnOffer"
            component={SubmitAnOffer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VideoScrool"
            component={VideoScrool}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="CalculaterScreen"
            component={CalculaterScreen}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
