import type {PropsWithChildren} from 'react';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStacksProp} from '..';
import Banner from './components/Banner';
import DoingOrders from './components/DoingOrders';
import MarketOrders from './components/MarketOrders';
import SuggestTips from './components/SuggestTips';
import Toolbar from './components/Toolbar';

interface MyProps {
  navigation?: RootStacksProp;
}

const HomeScreen: React.FC<MyProps> = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: '#fff'}}
      />
      <Toolbar onSearchPress={() => {}} onMessagePress={() => {}} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{height: 12}} />
        {[
          <Banner />,
          <DoingOrders />,
          <MarketOrders />,
          <SuggestTips onClosePress={() => {}} />,
        ].map((it, i) => (
          <View key={i} style={{marginBottom: 12}}>
            {it}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
