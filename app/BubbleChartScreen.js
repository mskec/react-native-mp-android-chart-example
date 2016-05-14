import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from 'lodash';
import {BubbleChart} from 'react-native-mp-android-chart';

class BubbleChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
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
      React.addons.update(this.state, {
        data: {
          $set: {
            datasets: [{
              yValues: this._randomYValues(20, 10),
              label: 'DS 1',
              config: {
                color: '#C0FF8C',
                highlightCircleWidth: 2
              }
            }, {
              yValues: this._randomYValues(20, 10),
              label: 'DS 2',
              config: {
                color: '#FFF78C'
              }
            }, {
              yValues: this._randomYValues(20, 10),
              label: 'DS 3',
              config: {
                color: '#FFD08C'
              }
            }],
            xValues: _.map(_.range(10), (val) => val.toString())
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    const yValues = [];
    for (let i = 0; i < size; i++) {
      yValues.push({
        value: Math.random() * range,
        size: Math.random() * range
      });
    }
    return yValues;
  }

  render() {
    return (
      <View style={styles.container}>
        <BubbleChart
          style={styles.chart}
          data={this.state.data}
          legend={this.state.legend}
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

AppRegistry.registerComponent('BubbleChartScreen', () => BubbleChartScreen);

export default BubbleChartScreen;
