import React from 'react-native';
import {YopaList, AddFriendButton} from './';
let {
  ScrollView,
  StyleSheet,
  StatusBarIOS
} = React;


let Home = React.createClass({
  render () {
    StatusBarIOS.setHidden(true, StatusBarIOS.Animation.slide);

    return (
      <ScrollView style={styles.container}>
        <YopaList />
        <AddFriendButton style={styles.addFriendButton} />
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
