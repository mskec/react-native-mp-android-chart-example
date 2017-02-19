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

class TimeSeriesLineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textColor: 'blue',
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        fontFamily: 'monospace',
        fontStyle: 1,
        custom: {
          colors: ['red', 'blue'],
          labels: ['REFER', 'USER',]
        }
      },
      marker: {
        enabled: true,
        type: 'rectangle',
        backgroundTint: 'teal'
      }
    };
  }

  componentDidMount() {
    const size = 100;

    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            datasets: [{
              values: this._randomParabolaValues(size),
              label: 'refer',
              config: {
                lineWidth: 2,
                drawCircles: false,
                drawCubic: true,
                highlightColor: 'red',
                color: 'red',
                drawFilled: true,
                fillColor: 'red',
                fillAlpha: 60,
                highlightEnabled: false,
                dashedLine: {
                  lineLength: 20,
                  spaceLength: 20
                }
              }
            }, {
              values: [{x: 5, y: 90},
                {x: 10, y: 130},
                {x: 50, y: 2000, marker: "eat more"},
                {x: 80, y: 9000, marker: "your are overweight, eat less"}],
              label: 'user',
              config: {
                lineWidth: 1,
                drawCubic: true,
                drawCubicIntensity: 0.4,
                circleRadius: 5,
                drawHighlightIndicators: false,
                color: 'blue',
                drawFilled: true,
                fillColor: 'blue',
                fillAlpha: 45,
                circleColor: 'blue'
              }
            }],
          }
        }
      })
    );
  }

  _randomParabolaValues(size: number) {
    return _.times(size, (index) => {
      return {x: index, y: index * index}
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={this.state.data}
          description={{text: ''}}
          legend={this.state.legend}
          marker={this.state.marker}

          drawGridBackground={false}
          borderColor={'teal'}
          borderWidth={1}
          drawBorders={true}

          touchEnabled={true}
          dragEnabled={true}
          scaleEnabled={true}
          scaleXEnabled={true}
          scaleYEnabled={true}
          pinchZoom={true}
          doubleTapToZoomEnabled={true}

          dragDecelerationEnabled={true}
          dragDecelerationFrictionCoef={0.99}

          keepPositionOnRotation={false}
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

AppRegistry.registerComponent('TimeSeriesLineChartScreen', () => TimeSeriesLineChartScreen);

export default TimeSeriesLineChartScreen;
