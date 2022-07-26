import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";


export default class DragAndDrop extends Component {
    render() {

        return(
            <View style={{backgroundColor: "#F0F0F0", height: '100%'}}>
                <View style={styles.dropZone}>

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
        )
    }
}
const styles = StyleSheet.create({
    dropZone: {
        height: '85%',
        backgroundColor: "#FFFEF8",
        margin: 10,
        borderRadius: 10,

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
    }
});
