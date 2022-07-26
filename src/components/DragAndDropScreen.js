import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, Dimensions, FlatList} from "react-native";
import Draggable from "./Draggable";
import {CopilotStep, walkthroughable} from "react-native-copilot";


export default class DragAndDropScreen extends Component {
    render() {

        const WalkthroughableButton = walkthroughable(TouchableOpacity);

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

        return(
            <View style={{backgroundColor: "#F0F0F0", height: '100%',flexDirection: "row"}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Categories</Text>
                    <View style={{height: '30%', backgroundColor: '#FFFFFF'}}>
                        <FlatList
                            data={ToolboxData}
                            numColumns={2}
                            renderItem={({item}) => (<ToolBoxItem title={item.title} colour={item.colour}/>)}
                            keyExtractor={(item) => item.id}
                        />

                    </View>
                    <Text style={styles.title}>Code Blocks</Text>
                    <View style={{flexGrow: 1, backgroundColor: '#FFFFFF'}}>
                        <Draggable/>
                        <Draggable/>
                        <Draggable/>
                    </View>
                </View>
                <View style={styles.drop}>
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
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
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
    /*item: {
        padding: 10,
        textAlign: "left",
        height: '10%',
        backgroundColor: "#F0F0F0",
        fontSize: 20,
    },*/
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
    }
});
