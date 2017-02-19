import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {BarChart} from 'react-native-mp-android-chart';

class StackedBarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: "SQUARE",
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        wordWrapEnabled: true
      },
      data: {
        datasets: [{
          values: [{y: [40, 30, 20]}, {y: [10, 20, 10]}, {y: [30, 20, 50]}, {y: [30, 50, 10]}],
          label: 'Stacked Bar dataset',
          config: {
            colors: ['#C0FF8C', '#FFF78C', '#FFD08C'],
            stackLabels: ['Engineering', 'Sales', 'Marketing']
          }
        }],
        xLabels: ['Q1', 'Q2', 'Q3', 'Q4']
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          data={this.state.data}
          legend={this.state.legend}
          drawValueAboveBar={false}
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

AppRegistry.registerComponent('StackedBarChartScreen', () => StackedBarChartScreen);

export default StackedBarChartScreen;
