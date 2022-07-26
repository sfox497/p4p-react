import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Dimensions,
    Switch
} from 'react-native';
import TutorialSideBar from "../components/TutorialSideBar";
import BlockySideBar from "../components/BlockySideBar";
import DragAndDrop from "../components/DragAndDrop";
import DragAndDropScreen from "../components/DragAndDropScreen";
import Walkthrough from "../components/walkthrough";

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";
import Draggable from "../components/Draggable";

const TutorialPage = (props) => {

    const CopilotDrag = walkthroughable(DragAndDropScreen);
    const CopilotButton = walkthroughable(DragAndDropScreen);

    const [secondStepActive, setSecondStepActive] = useState(true);

    useEffect(() => {
        props.copilotEvents.on('stepChange', handleStepChange)
    }, [])

    const handleStepChange = (step) => {
        console.log(`current step is: ${step.name}`)
    }

    const WalkthroughableText = walkthroughable(Text);
    const WalkthroughableView = walkthroughable(View);
    const WalkthroughableView2 = walkthroughable(View);
    const WalkthroughableView3 = walkthroughable(View);

    const Options = [
        { id: '1', title: 'Tutorial 1',},
        { id: '2', title: 'Tutorial 2',},
        { id: '3', title: 'Tutorial 3',},
    ];

    const Item = ({title}) => (

        <View>
            <TouchableOpacity style={styles.tutorialItem} onPress={() => props.start()}>
                <Text style={styles.tutorialTitle}>{title}</Text>
            </TouchableOpacity>

            <Text style={styles.steps}>Step 1</Text>
            <Text style={styles.steps}>Step 2</Text>
            <Text style={styles.steps}>Step 3</Text>
        </View>
    );

    const ToolboxData = [
        { id: '1', title: 'UI', colour: "plum"},
        { id: '2', title: 'Math', colour: "cornflowerblue"},
        { id: '3', title: 'Data', colour: "coral"},
        { id: '4', title: 'Loops', colour: "lightgreen"},
        { id: '5', title: 'Functions', colour: "khaki"},
        { id: '6', title: 'Variables', colour: "aquamarine"},
    ];

    function getWidth(){
        const window = Dimensions.get("window");
        return window.width
    }

    function getDragZone() {
        const window = Dimensions.get("window");
        const dropZone = (window.width/4)*3
        return dropZone
    }

    const ToolBoxItem = ({ title, colour }) => (
        <TouchableOpacity style={[styles.toolbox,{backgroundColor: colour}]}>
            <Text style={styles.toolboxText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{backgroundColor: '#B2E7FF', height: '100%'}}>
            <View style={{flexDirection: "row"}}>
                {/* tutorial sidebar */}
                <SafeAreaView style={styles.sidebarContainer}>
                    <Text className={"App-top-logo"}>Blockly TUTORIALS</Text>
                    <FlatList
                        data={Options}
                        renderItem={({item}) => (<Item title={item.title}/>)}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Home')}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </SafeAreaView>

                {/* DRAG AND DROP SCREEN */}

                <View style={{backgroundColor: "#F0F0F0", height: '100%',flexDirection: "row",flex: 4, flexGrow: 1}}>

                    <View style={styles.container}>
                        <CopilotStep
                            text={"The first step is to choose a category"}
                            order={1}
                            name={"first"}>
                            <WalkthroughableView>
                                <Text style={styles.title}>
                                    Categories
                                </Text>

                                <View style={{ backgroundColor: '#FFFFFF'}}>
                                    <FlatList
                                        data={ToolboxData}
                                        numColumns={2}
                                        renderItem={({item}) => (<ToolBoxItem title={item.title} colour={item.colour}/>)}
                                        keyExtractor={(item) => item.id}
                                    />
                                </View>
                            </WalkthroughableView>
                        </CopilotStep>
                        <CopilotStep
                            active={secondStepActive}
                            text={"And then to pick the blockly code block"}
                            order={2}
                            name={"second"}>
                            <WalkthroughableView2>
                                <Text style={styles.title}>Code Blocks</Text>
                                <View style={{flexGrow: 1, backgroundColor: '#FFFFFF'}}>
                                    <Draggable/>
                                    <Draggable/>
                                    <Draggable/>
                                </View>
                            </WalkthroughableView2>
                        </CopilotStep>

                        {/*<Switch onValueChange={(secondStepActive) =>
                            setSecondStepActive(secondStepActive)}
                                value={secondStepActive}/>*/}
                    </View>
                    <CopilotStep
                        active={secondStepActive}
                        text={"And drag to the drop screen"}
                        order={3}
                        name={"third"}>
                        <WalkthroughableView3 style={styles.drop}>
                            <View style={styles.dropZone}>
                                <Text>Drag and drop area from {getDragZone().toString()} to {getWidth().toString()}</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={styles.runButtonContainer}>
                                    <Text style={styles.buttonText}>Run</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.debugButtonContainer}>
                                    <Text style={styles.buttonText}>Debug</Text>
                                </TouchableOpacity>
                            </View>
                        </WalkthroughableView3>
                    </CopilotStep>

                </View>
            </View>
            {/*<FlatList data={DATA} renderItem={({item}) => (
                            <Item title={item.title}/>)}/>*/}


        </View>
    )

};

export default copilot({
    animated: true, // Can be true or false
    overlay: 'svg', // Can be either view or svg
})(TutorialPage);


const styles = StyleSheet.create({
    sidebarContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    tutorialItem: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    tutorialTitle: {
        fontSize: 27,
        textAlign: "center",
    },
    steps: {
        fontSize: 21,
        textAlign: "right",
        padding: 5,
    },
    home:{
        backgroundColor: '#CAFF96',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    dropZone: {
        height: '85%',
        borderColor: '#FFFEF8',
        borderWidth: 5,
        margin: 10,
        borderRadius: 10,

    },
    drop: {
        flex: 3
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: 800,
        backgroundColor: "#F0F0F0",
        height: 600,

    },
    item: {
        padding: 20,
        textAlign: "center",
        textAlignVertical: "center",
        height: '10%',
        backgroundColor: "#F0F0F0"
    },
    buttons:{
        flexDirection:"row-reverse",

        alignContent: "center",
        marginTop: 2,
        marginRight: 15,
        marginBottom: 8,
    },
    runButtonContainer:{
        elevation: 8,
        backgroundColor: "#FE6A6A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 20,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    debugButtonContainer:{
        elevation: 8,
        backgroundColor: "#FEC36A",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    toolbox: {
        flex: 1,
        maxWidth: "50%",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 10,
    },
    toolboxText:{
        fontSize: 20,
        textAlign: "center",
    },
    title: {
        padding: 15,
        fontSize: 20,
        textAlign: "center",
    },
    activeSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    /*item: {
        padding: 10,
        textAlign: "left",
        height: '10%',
        backgroundColor: "#F0F0F0",
        fontSize: 20,
    },*/
});
