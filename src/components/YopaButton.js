import React from 'react-native';
import {ColoredButton} from './';

let YopaButton = React.createClass({
  render () {
    return (
      <ColoredButton text={this.props.text} />
    );
  }
});

export default YopaButton;
