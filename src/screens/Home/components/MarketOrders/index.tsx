import Price from '@src/components/Price';
import x from '@src/constants/x';
import {useStore} from '@src/stores';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface MyProps {
  onClosePress: () => void;
}

const MarketOrders: React.FC<MyProps> = props => {
  const {onClosePress} = props;
  const [datas, setDatas] = useState(Array(10).fill(''));
  const {theme} = useStore();

  const lineBuilder = (
    color: string,
    title: string,
    area: string,
    distance: string,
  ) => {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <View style={[x.Styles.circle(6, color)]} />
        <View style={{width: 4}} />
        <Text style={{color: '#333', fontSize: x.scale(12)}}>{title}</Text>
        <View style={{width: 4}} />
        <Text
          style={{flex: 1, color: '#999', fontSize: x.scale(12)}}
          numberOfLines={1}>
          {area}
        </Text>
        <View style={{width: 4}} />
        <Text style={{color: '#666', fontSize: x.scale(12)}}>{distance}</Text>
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <View style={styles.viewHeader}>
        <Text style={styles.textTitle}>最新订单</Text>
        <TouchableOpacity
          activeOpacity={x.Touchable.OPACITY}
          onPress={() => {}}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: theme, fontSize: x.scale(14)}}>全部 →</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />
      <View style={{paddingHorizontal: 6}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {datas.map((it, i) => (
            <TouchableOpacity
              key={i}
              style={styles.item}
              activeOpacity={x.Touchable.OPACITY}
              onPress={() => {}}>
              <Text style={styles.itemTitle}>广东深圳 → 山东烟台</Text>
              <View style={{height: 6}} />
              <Text
                style={{flex: 1, color: '#666', fontSize: x.scale(14)}}
                numberOfLines={1}>
                {['鸡蛋', '4米2', '高栏'].join(' | ')}
              </Text>
              <View style={{height: 10}} />
              {lineBuilder('green', '装货：', '坂田街道', '12公里')}
              <View style={{height: 6}} />
              {lineBuilder('orange', '卸货：', '发城镇', '2222公里')}
              <View style={{height: 10}} />
              <View style={x.Styles.rowCenter()}>
                <Price price={'2000'} />
                <Text style={styles.textTime}>3天前发布</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 12,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  textTitle: {
    fontSize: x.scale(18),
    color: '#333',
    fontWeight: '500',
  },
  item: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 6,
    width: x.WIDTH * 0.618,
  },
  itemTitle: {
    fontSize: x.scale(16),
    color: '#333',
    fontWeight: '500',
  },
  textTime: {
    fontSize: x.scale(14),
    color: '#333',
  },
});

export default MarketOrders;
