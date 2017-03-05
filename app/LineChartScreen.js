import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import {LineChart} from 'react-native-mp-android-chart';

class LineChartScreen extends React.Component {

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
          colors: ['red', 'blue', 'green'],
          labels: ['Company X', 'Company Y', 'Company Dashed']
        }
      },
      marker: {
        enabled: true,
        type: 'oval',
        backgroundTint: 'teal'
      },
      xAxis: {
        valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4']
      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{y:100}, {y:110}, {y:105}, {y:115}],
              label: 'Company X',
              config: {
                lineWidth: 2,
                drawCircles: false,
                drawCubic: true,
                highlightColor: 'red',
                color: 'red',
                drawFilled: true,
                fillColor: 'red',
                fillAlpha: 60,
                dashedLine: {
                  lineLength: 20,
                  spaceLength: 20
                }
              }
            }, {
              values: [{y:90}, {y:130}, {y:100}, {y:105}],
              label: 'Company Y',
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
            }, {
              values: [{y:110}, {y:105}, {y:115}, {y:110}],
              label: 'Company Dashed',
              config: {
                color: 'green',
                drawFilled: true,
                drawCubic: true,
                fillColor: 'green',
                fillAlpha: 50
              }
            }],

          }
        }
      })
    );
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
          xAxis={this.state.xAxis}
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

AppRegistry.registerComponent('LineChartScreen', () => LineChartScreen);

export default LineChartScreen;
