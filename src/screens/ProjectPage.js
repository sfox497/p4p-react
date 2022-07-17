import {Animated, ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Component} from "react";
import {Row, Rows, Table} from "react-native-table-component";
import DragAndDrop from "../components/DragAndDrop";


export default class ProjectPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Name', 'Date Created'],
            DataTable: [
                ['Project 1', '20/04/22'],
                ['Project a', '21/04/22'],
                ['1', '2'],
                ['a', 'b'],
                ['1', '2']
            ]
        }
    }

    render() {
        const state = this.state;

        return (

            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{paddingVertical: 10}}>
                        <Text style={styles.titleText}>PROJECTS</Text>
                    </View>

                    <Table borderStyle={{borderWidth: 1, borderColor: '#6bd800'}}>
                        <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} onPress/>
                        <Rows data={state.DataTable} textStyle={styles.TableText}/>
                    </Table>

                    <TouchableOpacity style={styles.home} onPress={() => this.props.navigation.push('Home')}>
                        <Text style={{textAlign: "center"}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.home} onPress={() => this.props.navigation.push('Project')}>
                        <Text style={{textAlign: "center"}}>Open</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.titleText}>Preview</Text>

                    <View style={styles.dropZone}>
                        <Text>Drag and drop area</Text>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff'
    },
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
    dropZone: {
        backgroundColor: "#FFFEF8",
        margin: 10,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        flexGrow: 1,
    },
    home:{
        backgroundColor: '#CAFF96',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,

    }
});
