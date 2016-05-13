import React, {
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
      }, {
        label: 'Bar chart',
        screenName: 'BarChartScreen'
      }, {
        label: 'Stacked Bar chart',
        screenName: 'StackedBarChartScreen'
      }, {
        label: 'Pie chart',
        screenName: 'PieChartScreen'
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
