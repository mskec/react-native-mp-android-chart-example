import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class BarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      name: 'BarChartScreen'
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BarChartScreen', () => BarChartScreen);

export default BarChartScreen;
