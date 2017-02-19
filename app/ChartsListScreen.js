import React from 'react';
import {
  AppRegistry,
  ListView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native';


class ChartsListScreen extends React.Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        label: 'Line chart',
        screenName: 'LineChartScreen'
      },{
        label: 'Time series Line chart',
        screenName: 'TimeSeriesLineChartScreen'
      }, {
        label: 'Bar chart',
        screenName: 'BarChartScreen'
      }, {
        label: 'Stacked Bar chart',
        screenName: 'StackedBarChartScreen'
      }, {
        label: 'Pie chart',
        screenName: 'PieChartScreen'
      }, {
        label: 'Bubble chart',
        screenName: 'BubbleChartScreen'
      }, {
        label: 'Scatter chart',
        screenName: 'ScatterChartScreen'
      }, {
        label: 'Candle Stick chart',
        screenName: 'CandleStickChartScreen'
      }, {
        label: 'Radar chart',
        screenName: 'RadarChartScreen'
      }, {
        label: 'Axis line chart',
        screenName: 'AxisLineChartScreen'
      }, {
        label: 'Zero line chart',
        screenName: 'ZeroLineChartScreen'
      }])
    };

    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(rowData: Object) {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigator.push({name: rowData.screenName})}
      >
         <View style={s.row}>
           <Text>{rowData.label}</Text>
         </View>
       </TouchableHighlight>
     );
  }
}

const s = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  }
});

AppRegistry.registerComponent('ChartsListScreen', () => ChartsListScreen);

export default ChartsListScreen;
