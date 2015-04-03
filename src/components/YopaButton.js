import React from 'react-native';
let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

let YopaButton = React.createClass({
  render () {
    let color = {
      backgroundColor: this.props.color
    };

    return (
      <TouchableHighlight style={styles.wrapper}>
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

export default YopaButton;
