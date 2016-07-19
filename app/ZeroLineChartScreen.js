import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {BarChart} from 'react-native-mp-android-chart';

const GREEN = '#71BD6A';
const RED = '#D14B5A';

class ZeroLineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {
        datasets: [{
          yValues: [-224.1, 238.5, 1280.1, -442.3, -2280.1],
          label: 'Zero line dataset',
          config: {
            colors: [RED, GREEN, GREEN, RED, RED]
          }
        }],
        xValues: ['1', '2', '3', '4', '5']
      },
      xAxis: {
        enabled: false
      },
      yAxis: {
        left: {
          drawLabels: false,
          drawAxisLine: false,
          drawGridLines: false,
          zeroLine: {
            enabled: true,
            lineWidth: 1.5
          }
        },
        right: {
          enabled: false
        }
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          data={this.state.data}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
          description={{text: ''}}
          legend={{enabled: false}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

AppRegistry.registerComponent('ZeroLineChartScreen', () => ZeroLineChartScreen);

export default ZeroLineChartScreen;
