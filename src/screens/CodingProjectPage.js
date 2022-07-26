import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, WebView} from 'react-native';
import OptionsSideBar from "../components/OptionsSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";

export default function CodingProjectPage({navigation}) {

    const InjectedJavascript = "document.body.style.userSelect = 'none'";

        return (
            /*<WebView
                source={{uri: "https://www.google.com/"}}
                injectedJavaScript={InjectedJavascript}
                style={{flex: 1}}
            >*/
            <View style={{height: '100%',backgroundColor: '#B2E7FF'}}>
                <View style={{flexDirection: "row"}}>
                    <OptionsSideBar style={{flex: 1}} />
                    <BlockySideBar style={{flex: 1}}/>
                    <View style={{flex: 3}}>
                        <DragAndDrop/>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                {/*<FlatList data={DATA} renderItem={({item}) => (
                            <Item title={item.title}/>)}/>*/}

            </View>
            /*</WebView>*/
        )

}
