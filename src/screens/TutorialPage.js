import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TutorialSideBar from "../components/TutorialSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";
import DragAndDropScreen from "../components/DragAndDropScreen";

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";

export default function TutorialPage({navigation}) {

    const CopilotDrag = walkthroughable(DragAndDropScreen);
    const CopilotButton = walkthroughable(DragAndDropScreen);

    return (
        <View style={{backgroundColor: '#B2E7FF', height: '100%'}}>
            <View style={{flexDirection: "row"}}>
                <TutorialSideBar style={{flex: 1}} />
                <DragAndDropScreen style={{flex: 4, flexGrow: 1}}/>
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
