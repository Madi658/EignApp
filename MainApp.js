import React, {Component} from 'react';
import MainApp from './App';
import {StatusBar, LogBox, View} from 'react-native';

import {Provider} from 'react-redux';
import {persister, store} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Fragment} from 'react';
// import { View } from 'native-base';

const StartScreen = () => {
  console.disableYellowBox = true;
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <MainApp />
        </PersistGate>
      </Provider>
    </View>
  );
};
export default StartScreen;
