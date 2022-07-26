import {Image, StyleSheet, View} from "react-native";
import {Component} from "react";
import {Row, Rows, Table} from "react-native-table-component";
import {Animated} from "react-native-web";
import Svg, {Circle} from "react-native-svg";

export default class TrophiesPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Tutorial', 'Trophy'],
            DataTable: [
                ['Tutorial 1', <Image style={{flex:1, width: 40, height: 10}} source={require('../../assets/icons8-trophy-90.png')}/>],
                ['Tutorial 2', <View style={{flexDirection: "row"}}><Image style={styles.trophy} source={require('../../assets/icons8-trophy-90.png')}/>
                    <Image style={styles.trophy} source={require('../../assets/icons8-trophy-90.png')}/></View>],
                ['Tutorial 3', '-'],
                ['Tutorial 4', '-'],
                ['Tutorial 5', '-']
            ]
        }
    }


    render() {
        const state = this.state;

        const circle_length=2*Math.PI*95;

        return (
            <View style={{backgroundColor: '#B2E7FF', height: '100%', alignContent: "center"}}>

                <View style={{flexDirection: "row", alignContent: "center"}}>
                    <Animated.View style={styles.progressCircle}/>
                    <Animated.View style={styles.pacman}/>

                    <View style={styles.viewContainer}>
                        <Svg style={styles.svgContainer}>
                            <Circle
                                cx={90}
                                cy={90}
                                r={90}
                                fill={"yellow"}
                                stroke={"yellow"}
                                strokeWidth={0}
                                strokeDasharray={circle_length}
                                strokeDashoffset={0}
                                style={{padding: 10}}
                            />
                            <Circle
                                cx={90}
                                cy={90}
                                r={90}
                                fill={"transparent"}
                                stroke={"gold"}
                                strokeWidth={10}
                                strokeDasharray={circle_length}
                                strokeDashoffset={circle_length*0.8}
                                style={{padding: 10}}
                            />
                        </Svg>
                    </View>

                </View>



                <Table style={{backgroundColor: '#ffffff', margin: 10}} borderStyle={{borderWidth: 1, borderColor: '#6bd800'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} onPress/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                </Table>

            </View>
        )
    }

}

let CIRCLE_RADIUS = 100;
const styles = StyleSheet.create({
    titleText: {
        fontSize: 36,
        textAlign: "center",
        fontStyle: "bold",
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#CAFF96'
    },
    TableText: {
        margin: 10
    },
    progressCircle: {
        backgroundColor: "gold",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        margin: 8,
    },
    trophy: {
        width: 40,
        height: 40,
        color: "gold",
    },
    pacman: {
        margin: 8,
        width: 0,
        height: 0,
        borderTopWidth: 100,
        borderTopColor: "yellow",
        borderLeftColor: "yellow",
        borderLeftWidth: 100,
        borderRightColor: "transparent",
        borderRightWidth: 100,
        borderBottomColor: "yellow",
        borderBottomWidth: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        rotation: Animated.loop(10),
        position: "absolute",
        transform: [
            {rotateY: "180deg"},
            {rotateZ: "315deg"},]
    },
    svgContainer: {
        alignSelf: "center",
        alignItems: "center",
        height: 200,
        width: 200,
        transform: [
            {rotateZ: "90deg"},
            {rotateX: "0deg"},
            {rotateY: "180deg"},
        ]
    },
    viewContainer: {
        height: 205,
        width: 205,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop:0,
    }
});
