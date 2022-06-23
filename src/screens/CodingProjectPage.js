import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import OptionsSideBar from "../components/OptionsSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";

export default class CodingProjectPage extends Component {

    render() {

        return (
            <View>
                <Text>Coding Page</Text>
                <View style={{flexDirection: "row"}}>
                    <OptionsSideBar style={{flex: 1}}/>
                    <BlockySideBar style={{flex: 1}}/>
                    <View style={{flex: 3}}>
                        <DragAndDrop/>
                    </View>
                </View>


                {/*<FlatList data={DATA} renderItem={({item}) => (
                            <Item title={item.title}/>)}/>*/}

            </View>
        )
    }
}
