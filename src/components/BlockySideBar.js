import React, {Component} from "react";
import {StatusBar, StyleSheet, View, Text} from "react-native";
import Draggable from "./Draggable";

export default class BlockySideBar extends Component {
    render() {

        return(
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
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: 500,
        backgroundColor: "#FFFFFF",
        height: 600,

    },
    item: {
        padding: 10,
        textAlign: "left",
        height: '10%',
        backgroundColor: "#F0F0F0",
        fontSize: 20,
    },
});
