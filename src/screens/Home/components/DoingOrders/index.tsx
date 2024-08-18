import Price from '@src/components/Price';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {}

const DoingOrders: React.FC<MyProps> = props => {
  const {} = props;
  const [datas, setDatas] = useState(Array(10).fill(''));
  const {theme} = useStore();
  return (
    <View style={styles.view}>
      <View style={x.Styles.rowCenter()}>
        <View style={x.Styles.rowCenter('flex-start')}>
          <Image
            source={{uri: 'https://blog.cctv3.net/i.jpg'}}
            style={{
              height: x.scale(32),
              width: x.scale(32),
              borderRadius: x.scale(16),
            }}
          />
          <View style={{width: 4}} />
          <Text style={styles.name}>孙师傅</Text>
        </View>
        <View style={x.Styles.rowCenter()}>
          <View style={x.Styles.circle(6, '#999')} />
          <View style={{width: 4}} />
          <Text style={styles.online}>3分钟前在线</Text>
        </View>
      </View>
      <View style={{height: 10}} />
      <View style={x.Styles.rowCenter()}>
        <Text style={styles.area}>坂田街道坂雪岗大道方向</Text>
        <Text style={styles.area}>发城镇</Text>
      </View>
      <View style={{height: 5}} />
      <View style={x.Styles.rowCenter()}>
        <Text style={styles.city} numberOfLines={1}>
          深圳市
        </Text>
        <View style={[x.Styles.rowCenter()]}>
          <View style={styles.line} />
          <View style={{alignItems: 'center', marginHorizontal: 16}}>
            <Text style={{fontSize: x.scale(24)}}>🚚</Text>
            <View style={{height: 2}} />
            <Text style={{color: 'green', fontSize: x.scale(12)}}>进行中</Text>
          </View>
          <View style={styles.line} />
        </View>
        <Text style={[styles.city, {textAlign: 'right'}]} numberOfLines={1}>
          烟台市
        </Text>
      </View>
      <View style={{height: 6}} />
      <View style={x.Styles.rowCenter()}>
        <Text style={styles.distance}>距离装货地/卸货地：12公里</Text>
        <Price price={'6666'} />
      </View>
      <View style={{height: 12}} />
      <TouchableOpacity
        activeOpacity={x.Touchable.OPACITY}
        style={[x.Styles.rowCenter('center')]}>
        <Text style={{fontSize: x.scale(14), color: theme, fontWeight: '500'}}>
          所有 1 / 10个进行中的订单 →
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 12,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  name: {
    fontSize: x.scale(16),
    color: '#333',
    fontWeight: '500',
  },
  online: {
    fontSize: x.scale(14),
    color: '#999',
  },
  area: {
    fontSize: x.scale(14),
    color: '#999',
  },
  city: {
    fontSize: x.scale(20),
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  line: {
    width: 32,
    height: 1,
    backgroundColor: '#ccc',
  },
  distance: {
    fontSize: x.scale(14),
    color: '#333',
  },
});

export default DoingOrders;
