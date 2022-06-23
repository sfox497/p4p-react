import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class HomePage extends Component {
    render() {
        return (
            <View style={{height: 200}}>
                <Text>Home Page</Text>
                <Button style={styles.button} title="Start">Start</Button>
                <Button style={styles.button} title="Tutorials">Tutorials</Button>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        fontSize: 48,
        textTransform: "capitalize",
        height: 100,
        width: 300,
        backgroundColor: "#CAFF96",
    },
});
