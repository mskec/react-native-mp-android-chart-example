
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {LineChart} from 'react-native-mp-android-chart';
import Button from 'react-native-button';

class reactNativeMPAndroidChartExample extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true
      }
    };

    this.toggleLegend = this.toggleLegend.bind(this);
  }

  toggleLegend() {
    this.setState(
      React.addons.update(this.state, {
        legend: {
          $set: {enabled: !this.state.legend.enabled}
        }
      })
    );
  }

  render() {
    console.log('View|render', this.state)
    return (
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          legend={this.state.legend} />

        <View style={styles.actions}>
          <Button
            text="Toggle legend"
            style={{color: '#fff'}}
            containerStyle={styles.buttonContainer}
            onPress={this.toggleLegend}>
            Toggle legend
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginBottom: 5
  },
  chart: {
    flex: 1
  },
  actions: {
    flexDirection: 'row',
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: '#03A9F4',
    borderRadius: 5,
    padding: 5
  }
});

AppRegistry.registerComponent('reactNativeMPAndroidChartExample', () => reactNativeMPAndroidChartExample);
