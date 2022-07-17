import React, {Component} from 'react';
import {Animated, Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TutorialPage from "./TutorialPage";
import DragAndDropScreen from "../components/DragAndDropScreen";
import Blockly from 'blockly';
import ProjectPage from "./ProjectPage";
import 'blockly/blocks'


export default function HomePage({navigation}){


    const Separator = () => (
        <View style={styles.separator} />
    );

        return (
            <View style={{height: '100%', backgroundColor: '#B2E7FF'}}>
                <ScrollView style={{height: '100%'}}>
                    <Text>Home Page</Text>
                    <View style={{flexDirection: "row", alignContent: "center", justifyContent: 'center',}}>
                        <TouchableOpacity style={styles.button} title="Start"
                                          onPress={() => navigation.navigate('ProjectsList')}>
                            <Text style={styles.text}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} title="Tutorials"
                                          onPress={() => navigation.navigate('Tutorials')}>
                            <Text style={styles.text}>Tutorials</Text>
                        </TouchableOpacity>
                    </View>

                    <Separator/>

                    <Animated.View style={styles.circle}>
                        <Text style={{textDecorationColor:"white", padding: 10}}>Trophies</Text>
                    </Animated.View>



                </ScrollView>

            </View>
        )

}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    circle: {
        backgroundColor: "green",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        margin: 8,
    },
    button: {
        width: 200,
        backgroundColor: "#CAFF96",
        align: "center",
        margin: 20,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 48,
        textTransform: "capitalize",
        textAlign: "center",
    },
    separator: {
        marginVertical: 100,
    }
});
