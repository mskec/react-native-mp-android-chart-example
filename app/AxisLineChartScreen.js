import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import _ from 'lodash';
import {LineChart} from 'react-native-mp-android-chart';

const COLOR_PURPLE = '#697dfb';

class AxisLineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      xAxis: {},
      yAxis: {}
    };
  }

  componentDidMount() {
    const valueRange = 100;
    const size = 30;

    this.setState(
      reactAddonsUpdate(this.state, {
        xAxis: {
          $set: {
            textColor: 'red',
            textSize: 16,
            fontFamily: 'monospace',
            fontStyle: 2,
            gridColor: 'red',
            gridLineWidth: 1,
            axisLineColor: 'darkgray',
            axisLineWidth: 1.5,
            gridDashedLine: {
              lineLength: 10,
              spaceLength: 10
            },
            avoidFirstLastClipping: true,
            position: 'BOTTOM'
          }
        },
        yAxis: {
          $set: {
            left: {
              drawGridLines: false
            },
            right: {
              enabled: false
            }
          }
        },
        data: {
          $set: {
            dataSets: [{
              values: this._randomYValues(valueRange, size),
              label: '',
              config: {
                lineWidth: 1.5,
                drawCircles: false,
                drawCubicIntensity: 0.3,
                mode: 'CUBIC_BEZIER',
                drawHighlightIndicators: false,
                color: COLOR_PURPLE,
                drawFilled: true,
                fillColor: COLOR_PURPLE,
                fillAlpha: 90
              }
            }],
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    const nextValueMaxDiff = 0.2;
    let lastValue = range / 2;

    return _.times(size, () => {
      let min = lastValue * (1 - nextValueMaxDiff);
      let max = lastValue * (1 + nextValueMaxDiff);
      return {y: Math.random() * (max - min) + min};
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={this.state.data}
          description={{text: ''}}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
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

AppRegistry.registerComponent('AxisLineChartScreen', () => AxisLineChartScreen);

export default AxisLineChartScreen;
