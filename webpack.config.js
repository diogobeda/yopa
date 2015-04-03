var webpack = require('webpack'),
  path = require('path'),
  AnyBarWebpackPlugin = require('anybar-webpack');

module.exports = {
  watch: true,
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, '/'),
    filename: 'index.ios.js',
    libraryTarget: 'commonjs'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?optional=runtime'] }
    ]
  },

  externals: [
    /React|ActivityIndicatorIOS|DatePickerIOS|Image|ListView|MapView|NavigatorIOS|PickerIOS|Navigator|ScrollView|SliderIOS|SwitchIOS|TabBarIOS|Text|TextInput|TouchableHighlight|TouchableOpacity|TouchableWithoutFeedback|View|WebView|AlertIOS|Animation|AppRegistry|AppStateIOS|AsyncStorage|CameraRoll|InteractionManager|LinkingIOS|LayoutAnimation|NetInfo|PixelRatio|PushNotificationIOS|PanResponder|StatusBarIOS|StyleSheet|VibrationIOS|RCTDeviceEventEmitter|NativeModules|LinkedStateMixin|cloneWithProps|update/
  ],

  plugins: [
    new webpack.NoErrorsPlugin(),
    new AnyBarWebpackPlugin()
  ]
};
