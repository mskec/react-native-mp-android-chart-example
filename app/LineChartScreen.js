import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {LineChart} from 'react-native-mp-android-chart';
import Button from 'react-native-button';


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
      }
    };
  }

  componentDidMount() {
    this.setState(
      React.addons.update(this.state, {
        data: {
          $set: {
            datasets: [{
              yValues: [100, 110, 105, 115],
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
              yValues: [90, 130, 100, 105],
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
              yValues: [110, 105, 115, 110],
              label: 'Company Dashed',
              config: {
                color: 'green',
                drawFilled: true,
                drawCubic: true,
                fillColor: 'green',
                fillAlpha: 50
              }
            }],
            xValues: ['Q1', 'Q2', 'Q3', 'Q4']
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

          drawGridBackground={false}
          borderColor={'teal'}
          borderWidth={1}
          drawBorders={true}

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
