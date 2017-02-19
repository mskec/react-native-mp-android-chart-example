import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import _ from 'lodash';
import {ScatterChart} from 'react-native-mp-android-chart';

class ScatterChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true
      },
      marker: {
        enabled: true,
        type: 'com.github.reactNativeMPAndroidChart.example.marker.OvalBlueMarker'
      }
    };
  }

  componentDidMount() {
    const size = 30;
    const range = 20;

    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            datasets: [{
              values: this._randomYValues(range, size),
              label: 'DS 1',
              config: {
                color: 'gray',
                scatterShape: 'X'
              }
            }, {
              values: this._randomYValues(range, size),
              label: 'DS 2',
              config: {
                color: 'blue',
                scatterShape: 'CIRCLE',
                scatterShapeHoleRadius: 6,
                scatterShapeHoleColor: 'teal'
              }
            }, {
              values: this._randomYValues(range, size),
              label: 'DS 3',
              config: {
                color: 'green',
                drawHighlightIndicators: false,
                scatterShape: 'SQUARE',
                scatterShapeSize: 8
              }
            }],
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    return _.times(size, () => {
      return {y: Math.random() * range}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScatterChart
          style={styles.chart}
          data={this.state.data}
          legend={this.state.legend}
          marker={this.state.marker}
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

AppRegistry.registerComponent('ScatterChartScreen', () => ScatterChartScreen);

export default ScatterChartScreen;
