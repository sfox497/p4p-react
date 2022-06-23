import React,{Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, Button, TouchableOpacity} from 'react-native';


export default class OptionsSideBar extends Component {

    render() {
        const Options = [
            { id: '1', title: 'Tutorials',},
            { id: '2', title: 'Predictive Text',},
            { id: '3', title: 'AI Teacher',},
            { id: '4', title: 'Levels',},
            { id: '5', title: 'Trophies',},
            { id: '6', title: 'Home',},
        ];

        /*const Separator = () => (
            <View style={styles.separator} />
        );*/

        const Item = ({title}) => (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            /*<View>
                <Button title={title}
                    style={styles.item}
                    color={"#CAFF96"}
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
                <Separator/>
            </View>*/
        );

        return(
            <SafeAreaView style={styles.container}>
                <Text className={"App-top-logo"}>BLOCKY TUTOR</Text>
                <FlatList
                    data={Options}
                    renderItem={({item}) => (<Item title={item.title}/>)}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        width: 300,
        height: 600,
    },
    item: {
        backgroundColor: '#CAFF96',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
    },/*
    separator: {
        marginVertical: 8,
    },*/
});
