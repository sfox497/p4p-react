import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class BlocklyWebView extends Component {

  render() {

    return (
      <WebView
        source={{uri: 'http://192.168.160.226:3000'}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: Constants.statusBarHeight,
  },
});

export default BlocklyWebView
