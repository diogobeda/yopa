import React from 'react-native';
import randomColor from 'randomcolor';
import YopaButton from './YopaButton';
let {
  ListView
} = React;

let YopaList = React.createClass({
  getInitialState () {
    let list = new ListView.DataSource({rowHasChanged: ({ name1 }, { name2 }) => name1 !== name2});
    return {
      list: list.cloneWithRows([
        { name: 'Diogo' },
        { name: 'Andressa' },
        { name: 'Dula' }
      ])
    };
  },

  renderRow (rowData) {
    return (
      <YopaButton text={rowData.name} color={randomColor()} />
    );
  },

  render () {
    return (
      <ListView
        dataSource={this.state.list}
        renderRow={this.renderRow}
      />
    );
  }
});

export default YopaList;
