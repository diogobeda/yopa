import React from 'react-native';
import randomColor from 'randomcolor';
let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  PropTypes
} = React;

let ColoredButton = React.createClass({
  propTypes: {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func
  },

  render () {
    let color = {
      backgroundColor: this.props.color || randomColor()
    };

    return (
      <TouchableHighlight style={styles.wrapper} onPress={this.props.onPress}>
        <View style={[styles.button, color]}>
          <Text style={styles.text}>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default ColoredButton;
