import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {BarChart} from 'react-native-mp-android-chart';

class BarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
      },
      data: {
        datasets: [{
          values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
          label: 'Bar dataset',
          config: {
            color: 'teal',
            barSpacePercent: 40,
            barShadowColor: 'lightgrey',
            highlightAlpha: 90,
            highlightColor: 'red'
          }
        }],
        xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          data={this.state.data}
          animation={{durationX: 2000}}
          legend={this.state.legend}
          gridBackgroundColor={'#ffffff'}

          drawBarShadow={false}
          drawValueAboveBar={true}
          drawHighlightArrow={true}
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

AppRegistry.registerComponent('BarChartScreen', () => BarChartScreen);

export default BarChartScreen;
