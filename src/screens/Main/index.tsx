import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Image} from 'react-native';
import HomeScreen from '../Home';
import MarketScreen from '../Market';
import {useStore} from '@src/stores';
import OrdersScreen from '../Orders';
import MyScreen from '../My';

const Tab = createBottomTabNavigator();

function MainScreen() {
  const screens = [
    {
      name: 'Home',
      component: HomeScreen,
      icon: require('./assets/menu_home.png'),
      label: '首页',
    },
    {
      name: 'Hot',
      component: MarketScreen,
      icon: require('./assets/menu_fire.png'),
      label: '热门',
    },
    {
      name: 'Order',
      component: OrdersScreen,
      icon: require('./assets/menu_order.png'),
      label: '订单',
    },
    {
      name: 'Friends',
      component: HomeScreen,
      icon: require('./assets/menu_friends.png'),
      label: '社区',
    },
    {
      name: 'Me',
      component: MyScreen,
      icon: require('./assets/menu_me.png'),
      label: '我的',
    },
  ];
  const {theme} = useStore();
  return (
    <Tab.Navigator>
      {screens.map((it, i) => (
        <Tab.Screen
          {...it}
          key={i}
          options={{
            headerShown: false,
            tabBarLabel: it.label,
            tabBarActiveTintColor: theme,
            tabBarIcon: ({color}) => (
              <Image
                source={it.icon}
                style={{height: 24, width: 24, tintColor: color}}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainScreen;
