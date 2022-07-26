import React, {Component} from 'react';
import {Animated, Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

                    <TouchableOpacity
                        style={styles.circle}
                        onPress={() => navigation.navigate('Trophies')}>
                        <Image
                            style={styles.trophy}
                            source={require('../../assets/icons8-trophy-90.png')}/>

                    </TouchableOpacity>



                </ScrollView>

            </View>
        )

}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    circle: {
        backgroundColor: "#CAFF96",
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
    },
    trophy : {
        flex: 1,
        margin: 8,
    },
});
