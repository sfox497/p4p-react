import React, {Component, useState} from 'react';
import { WebView } from 'react-native-webview';

export default function BlocklyWebView() {
    const [renderedOnce, setRenderedOnce] = useState(false);
    const updateSource = () => {
      setRenderedOnce(true);
    };

    return (
      <WebView
        originWhitelist={['*']}
        source={renderedOnce ? {uri: 'file:///android_asset/webview.html'} : undefined}
        style={{flex:1}}
        domStorageEnabled
        javaScriptEnabled
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        onLoad={updateSource}
      />
    );
}
