import React,{Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Animated, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function OptionsSideBar() {

    const navigation = useNavigation();

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

    const getNavigate = (title) => {
        navigation.navigate(title)
    }

        const Item = ({title}) => (

            <TouchableOpacity style={styles.item} onPress={() =>navigation.navigate("Home")}>
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
                <Animated.View style={styles.circle}>
                    <Text style={{color:"white", padding: 10}}>AI</Text>
                </Animated.View>
            </SafeAreaView>
        )

}
let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    circle: {
        backgroundColor: "black",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        margin: 8,
    },
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
