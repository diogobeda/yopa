import React from 'react-native';
import YopaList from './YopaList';
let {
  ScrollView,
  Text,
  StyleSheet,
  StatusBarIOS
} = React;


let Home = React.createClass({
  render () {
    StatusBarIOS.setHidden(true, StatusBarIOS.Animation.slide);

    return (
      <ScrollView style={styles.container}>
        <YopaList />
      </ScrollView>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9B59B6'
  }
});

export default Home;
