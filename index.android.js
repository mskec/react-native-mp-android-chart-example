
import React, {
  AppRegistry,
  BackAndroid,
  Navigator,
  Text,
  View
} from 'react-native';

import ChartsListScreen from './app/ChartsListScreen';
import LineChartScreen from './app/LineChartScreen';
import BarChartScreen from './app/BarChartScreen';
import StackedBarChartScreen from './app/StackedBarChartScreen';

const MAIN_SCREEN = 'ChartsListScreen';

class reactNativeMPAndroidChartExample extends React.Component {

  constructor() {
    super();

    this.state = {
      initialRoute: {
        name: MAIN_SCREEN
      }
    };

    this.onRouteChange = this.onRouteChange.bind(this);
    this.onBackAndroid = this.onBackAndroid.bind(this);

    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onRouteChange(route: Object, navigator: Object) {
    const routes = {
      ChartsListScreen: <ChartsListScreen navigator={navigator} />,
      LineChartScreen: <LineChartScreen navigator={navigator} />,
      BarChartScreen: <BarChartScreen navigator={navigator} />,
      StackedBarChartScreen: <StackedBarChartScreen navigator={navigator} />
    };

    let screen = routes[route.name];
    if (!screen) {
      return console.error('Unhandled route!', route);
    }

    this.route = route;

    return screen;
  }

  onBackAndroid() {
    if (!this._isOnMainScreen()) {
      this.refs.navigator.pop();
      return true;
    }

    return false;
  }

  _isOnMainScreen() {
    return this.route.name === MAIN_SCREEN;
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={this.state.initialRoute}
        renderScene={this.onRouteChange}
      />
    );
  }
}

AppRegistry.registerComponent('reactNativeMPAndroidChartExample', () => reactNativeMPAndroidChartExample);
