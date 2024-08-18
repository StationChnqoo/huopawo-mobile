import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface MyProps {
  children: React.ReactNode;
}

const SafeArea: React.FC<MyProps> = props => {
  const STATUS_BAR_HEIGHT = Platform.select({
    android: StatusBar.currentHeight,
    ios: useSafeAreaInsets().top,
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: STATUS_BAR_HEIGHT,
          backgroundColor: '#fff',
          width: '100%',
        }}
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SafeArea;