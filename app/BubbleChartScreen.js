import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

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
      },
      animation: {
        durationX: 1500,
        durationY: 1500,
        easingX: 'EaseInCirc'
      }
    };
  }

  componentDidMount() {
    const size = 10;
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            datasets: [{
              yValues: this._randomYValues(20, size),
              label: 'DS 1',
              config: {
                color: '#C0FF8C',
                highlightCircleWidth: 2
              }
            }, {
              yValues: this._randomYValues(20, size),
              label: 'DS 2',
              config: {
                color: '#FFF78C'
              }
            }, {
              yValues: this._randomYValues(20, size),
              label: 'DS 3',
              config: {
                color: '#FFD08C'
              }
            }],
            xValues: _.map(_.range(size), (val) => val.toString())
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    return _.times(size, () => {
      return {
        value: Math.random() * range,
        size: Math.random() * range
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <BubbleChart
          style={styles.chart}
          data={this.state.data}
          legend={this.state.legend}
          animation={this.state.animation}
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
