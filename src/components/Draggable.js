import React, { Component } from "react";
import {
    StyleSheet,
    View,
    PanResponder,
    Animated, Text, Dimensions
} from "react-native";

export default class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            showDraggable: true,
            dropAreaValues: null,
            opacity: new Animated.Value(1)
        };
}

    componentWillMount() {
        // Add a listener for the delta value change
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);

        /*document.onselectstart = () =>
        {   window.getSelection().removeAllRanges();
        };*/
        // Initialize PanResponder with move handling
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: () => {
                this.setState({
                    showDraggable: true
                })
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
            },
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x, dy: this.state.pan.y

            }]),

            // adjusting delta value
            onPanResponderRelease: (e, gesture) => {
                if (this.isInDropArea(gesture)){
                    // dissolve out after drag
                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(() =>
                        this.setState({
                            showDraggable: false
                        })
                    );
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: {x: 0, y: 0},
                        friction: 10
                    }).start();
                }
            }

        });
    }

    isInDropArea(gesture){

        const window = Dimensions.get("window");

        const dropZone = (window.width/4)*3

        return gesture.moveX > dropZone;

    }

    render() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[panStyle, styles.rectangle]}>
                <Text>{this.state.pan.x._value}</Text>
            </Animated.View>
        );
    }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    rectangle: {
        backgroundColor: "skyblue",
        width: 90,
        height: 40,
        margin: 5,
        
    }
});
