import React from 'react-native';
import randomColor from 'randomcolor';
import {ColoredButton} from './';
import FriendActions from '../actions/FriendActions';
let {
  TextInput,
  StyleSheet
} = React;

let AddFriendButton = React.createClass({
  getInitialState () {
    return {
      editable: false,
      color: randomColor()
    };
  },

  toggleEditable () {
    this.setState({ editable: !this.state.editable });
  },

  onPress () {
    this.toggleEditable();
  },

  handleSubmit (event) {
    this.toggleEditable();
    FriendActions.add({ name: event.nativeEvent.name });
  },

  render () {
    if(this.state.editable) {
      return (
        <TextInput
          style={[styles.input, { backgroundColor: this.state.color }]}
          autoFocus={true}
          onSubmitEditing={this.handleSubmit}
        />
      );
    } else {
      return (
        <ColoredButton
          onPress={this.onPress}
          text="Adicionar amigo"
          color={this.state.color}
        />
      );
    }
  }
});

let styles = StyleSheet.create({
  input: {
    height: 80,
    padding: 15,
    color: '#fff'
  }
});

export default AddFriendButton;
