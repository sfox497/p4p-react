import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TutorialSideBar from "../components/TutorialSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";
import DragAndDropScreen from "../components/DragAndDropScreen";

export default function TutorialPage({navigation}) {

    return (
        <View style={{height: '100%',backgroundColor: '#B2E7FF'}}>
            <Text>Coding Page</Text>
            <View style={{flexDirection: "row"}}>
                <TutorialSideBar style={{flex: 1}} />
                <DragAndDropScreen style={{flex: 4}}/>
                <View style={{flex: 0}}/>
                {/*<BlockySideBar style={{flex: 1}}/>
                <View style={{flex: 3}}>
                    <DragAndDrop/>
                </View>*/}
            </View>
            {/*<FlatList data={DATA} renderItem={({item}) => (
                            <Item title={item.title}/>)}/>*/}

        </View>
    )

}
