import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import {RadarChart} from 'react-native-mp-android-chart';


class RadarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true
      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            datasets: [{
              yValues: [100, 110, 105, 115, 110],
              label: 'DS 1',
              config: {
                color: '#FF8C9D',

                drawFilled: true,
                fillColor: '#FF8C9D',
                fillAlpha: 100,
                lineWidth: 2
              }
            }, {
              yValues: [115, 100, 105, 110, 120],
              label: 'DS 2',
              config: {
                color: '#C0FF8C',

                drawFilled: true,
                fillColor: '#C0FF8C',
                fillAlpha: 150,
                lineWidth: 1.5
              }
            }, {
              yValues: [105, 115, 121, 110, 105],
              label: 'DS 3',
              config: {
                color: '#8CEAFF',

                drawFilled: true,
                fillColor: '#8CEAFF'
              }
            }],
            xValues: ['A', 'B', 'C', 'D', 'E']
          }
        }
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RadarChart
          style={styles.chart}
          data={this.state.data}
          description={{text: ''}}
          legend={this.state.legend}
          skipWebLineCount={1}
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

AppRegistry.registerComponent('RadarChartScreen', () => RadarChartScreen);

export default RadarChartScreen;
