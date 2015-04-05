import React from 'react-native';
import Reflux from 'reflux';
import randomColor from 'randomcolor';
import {YopaButton} from './';
import FriendStore from '../stores/FriendStore';
import FriendActions from '../actions/FriendActions';
let {
  ListView,
  View,
  StyleSheet,
  ActivityIndicatorIOS
} = React;

let YopaList = React.createClass({
  mixins: [Reflux.listenTo(FriendStore, 'onFriendsUpdate')],

  getInitialState () {
    return {
      friends: [],
      loading: true
    };
  },

  componentWillMount () {
    FriendActions.getAll();
  },

  onFriendsUpdate (friends) {
    this.setState({
      friends: friends,
      loading: false
    });
  },

  getDataSource (list) {
    return new ListView.DataSource({rowHasChanged: rowHasChanged}).cloneWithRows(list);
  },

  renderRow (rowData) {
    return (
      <YopaButton text={rowData.name} />
    );
  },

  render () {
    return (
      <View>
        <ActivityIndicatorIOS
          animating={this.state.loading}
          style={[styles.centering, { height: this.state.loading ? 80 : 0 }]}
          color="#fff"
          size="large"
        />
        <ListView
          dataSource={this.getDataSource(this.state.friends)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function rowHasChanged (r1, r2) {
  return r1.name !== r2.name;
}

export default YopaList;
