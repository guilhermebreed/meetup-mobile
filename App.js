import React from 'react';
import Expo, { Components } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        montSerrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montSerratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montSerratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montSerratMedium: require('./assets/fonts/Montserrat-Medium.ttf')
      },
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Components.AppLoading />;
    }
    return <HomeScreen />;
  }
}

Expo.registerRootComponent(App);
