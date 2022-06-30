import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import OptionsSideBar from "../components/OptionsSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";

export default function CodingProjectPage({navigation}) {


        return (
            <View style={{height: '100%',backgroundColor: '#B2E7FF'}}>
                <Text>Coding Page</Text>
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
        )

}
