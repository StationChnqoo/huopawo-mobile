import React, {useEffect} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';

import MarketItem from '@src/components/MarketItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStacksProp} from '..';
import x from '@src/constants/x';
import Profile from './components/Profile';

interface MyProps {
  navigation?: RootStacksProp;
}

const MyScreen: React.FC<MyProps> = props => {
  useEffect(() => {
    return function () {};
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: '#fff'}}
      />
      <ScrollView>
        <View style={{height: 12}} />
        {[<Profile />].map((it, i) => (
          <View key={i} style={{marginBottom: 12}}>
            {it}
          </View>
        ))}
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyScreen;
