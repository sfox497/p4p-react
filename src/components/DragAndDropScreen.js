import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, StatusBar, Dimensions} from "react-native";
import Draggable from "./Draggable";


export default class DragAndDropScreen extends Component {
    render() {

        function getWidth(){
            const window = Dimensions.get("window");

            return window.width
        }

        function getDragZone() {
            const window = Dimensions.get("window");

            const dropZone = (window.width/4)*3

            return dropZone
        }

        return(
            <View style={{backgroundColor: "#F0F0F0", height: '100%',flexDirection: "row"}}>
                <View style={styles.container}>
                    <Text style={styles.item}>Categories</Text>
                    <View style={{height: '30%', backgroundColor: '#FFFFFF'}}>
                        <Text>buttons</Text>

                    </View>
                    <Text style={styles.item}>Code Blocks</Text>
                    <View style={{height: '50%', backgroundColor: '#FFFFFF'}}>
                        <Text>options</Text>
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
        backgroundColor: "#FFFFFF",
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
    }
});
