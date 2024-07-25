import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import * as React from 'react';

import HomeScreen from './home';
import App from '@root/App';

export type RootStacksParams = {
  App: undefined;
  HomeScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigator}>
      <RootStack.Navigator
        screenOptions={{animation: 'slide_from_right', headerShown: false}}>
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
