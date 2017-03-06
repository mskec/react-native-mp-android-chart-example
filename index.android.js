import React from 'react';
import {
  AppRegistry,
  BackAndroid,
  Navigator,
  Text,
  View
} from 'react-native';

import AxisLineChartScreen from './app/AxisLineChartScreen';
import BarChartScreen from './app/BarChartScreen';
import BubbleChartScreen from './app/BubbleChartScreen';
import CandleStickChartScreen from './app/CandleStickChartScreen';
import ChartsListScreen from './app/ChartsListScreen';
import LineChartScreen from './app/LineChartScreen';
import TimeSeriesLineChartScreen from './app/TimeSeriesLineChartScreen';
import PieChartScreen from './app/PieChartScreen';
import RadarChartScreen from './app/RadarChartScreen';
import ScatterChartScreen from './app/ScatterChartScreen';
import StackedBarChartScreen from './app/StackedBarChartScreen';
import ZeroLineChartScreen from './app/ZeroLineChartScreen';

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
      AxisLineChartScreen: <AxisLineChartScreen navigator={navigator} />,
      BarChartScreen: <BarChartScreen navigator={navigator} />,
      BubbleChartScreen: <BubbleChartScreen navigator={navigator} />,
      CandleStickChartScreen: <CandleStickChartScreen navigator={navigator} />,
      ChartsListScreen: <ChartsListScreen navigator={navigator} />,
      LineChartScreen: <LineChartScreen navigator={navigator} />,
      TimeSeriesLineChartScreen: <TimeSeriesLineChartScreen navigator={navigator} />,
      PieChartScreen: <PieChartScreen navigator={navigator} />,
      RadarChartScreen: <RadarChartScreen navigator={navigator} />,
      ScatterChartScreen: <ScatterChartScreen navigator={navigator} />,
      StackedBarChartScreen: <StackedBarChartScreen navigator={navigator} />,
      ZeroLineChartScreen: <ZeroLineChartScreen navigator={navigator} />
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
