import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
                color: 'gray',
                scatterShape: 'X'
              }
            }, {
              yValues: this._randomYValues(20, 10),
              label: 'DS 2',
              config: {
                color: 'blue',
                scatterShape: 'CIRCLE',
                scatterShapeHoleRadius: 6,
                scatterShapeHoleColor: 'teal'
              }
            }, {
              yValues: this._randomYValues(20, 10),
              label: 'DS 3',
              config: {
                color: 'green',
                drawHighlightIndicators: false,
                scatterShape: 'SQUARE',
                scatterShapeSize: 8
              }
            }],
            xValues: _.map(_.range(10), (val) => val.toString())
          }
        }
      })
    );
  }

  _randomYValues(range: number, size: number) {
    return _.times(size, () => Math.random() * range);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScatterChart
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

AppRegistry.registerComponent('ScatterChartScreen', () => ScatterChartScreen);

export default ScatterChartScreen;
