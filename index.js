import React, {createContext, useEffect} from 'react';
import {AppRegistry, StatusBar, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {useStore} from './src/stores';
import Screens from './src/screens';
const StoreContext = createContext();

const Huopawp = () => {
  return (
    <StoreContext.Provider value={useStore}>
      <View style={{flex: 1}}>
        <StatusBar translucent={false} />
        <View style={{flex: 1, position: 'relative'}}>
          <Screens />
        </View>
      </View>
    </StoreContext.Provider>
  );
};
AppRegistry.registerComponent(appName, () => Huopawp);
