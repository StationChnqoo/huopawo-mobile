import React, {createContext, useEffect, useState} from 'react';
import {AppRegistry, Platform, StatusBar, View} from 'react-native';
import {name as appName} from './app.json';
import Screens from './src/screens';
import {useStore} from './src/stores';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StoreContext = createContext();

const Huopawo = () => {
  useEffect(() => {
    console.log(`StatusBar height: ${Platform.OS} ${StatusBar.currentHeight}`);
  }, []);

  return (
    <StoreContext.Provider value={useStore}>
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
        />
        <View style={{flex: 1, position: 'relative'}}>
          <Screens />
        </View>
      </View>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Huopawo);
