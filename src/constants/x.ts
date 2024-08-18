import {
  Dimensions,
  FlexStyle,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

const F = 'F';
const f = (params: any) => {};
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const Touchable = {
  OPACITY: 0.9,
  hitlop: (n?: number) => {
    let _n = n || 12;
    return {top: _n, bottom: _n, left: _n, right: _n};
  },
};

const scale = (n: number) => {
  return (WIDTH / 375) * n;
};

const Fonts = {
  DOSIS: 'Dosis',
};

const Color = {
  PAGE: '#f0f0f0',
};

const Styles = {
  FILL: <ImageStyle | ViewStyle | any>{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  rowCenter: (justifyContent?: FlexStyle['justifyContent']) => {
    return <StyleProp<ViewStyle>>{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: justifyContent ?? 'space-between',
    };
  },
  circle: (n: number, backgroundColor: string) => {
    return <StyleProp<ViewStyle>>{
      borderRadius: n / 2,
      height: n,
      width: n,
      backgroundColor,
    };
  },
  CARD: <ViewStyle>{
    // iOS 阴影
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.618},
    shadowOpacity: 0.1,
    shadowRadius: 0.618,
    // Android 阴影
    elevation: 1,
  },
};

const x = {
  F,
  f,
  HEIGHT,
  WIDTH,
  scale,
  Touchable,
  Fonts,
  Color,
  Styles,
};

export default x;
