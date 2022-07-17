import React,{Component} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function TutorialSideBar() {

    const navigation = useNavigation();

    const Options = [
        { id: '1', title: 'Tutorial 1',},
        { id: '2', title: 'Tutorial 2',},
        { id: '3', title: 'Tutorial 3',},
    ];

    /*const Separator = () => (
        <View style={styles.separator} />
    );*/

    const Item = ({title}) => (

        <View>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>

            <Text style={styles.steps}>Step 1</Text>
            <Text style={styles.steps}>Step 2</Text>
            <Text style={styles.steps}>Step 3</Text>
        </View>
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
            <Text className={"App-top-logo"}>BLOCKY TUTORIALS</Text>
            <FlatList
                data={Options}
                renderItem={({item}) => (<Item title={item.title}/>)}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
    },
    title: {
        fontSize: 27,
        textAlign: "center",
    },
    steps: {
        fontSize: 21,
        textAlign: "right",
        padding: 5,
    },
    home:{
        backgroundColor: '#CAFF96',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    }
    /*
    separator: {
        marginVertical: 8,
    },*/
});
