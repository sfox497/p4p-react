import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import HomePage from "./src/screens/HomePage";
import CodingProjectPage from "./src/screens/CodingProjectPage";

export default function App() {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>BLOCKY TUTOR</Text>
          <StatusBar style="auto"/>

          <HomePage/>
          <CodingProjectPage/>

      </View>

  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 56,
    },
    container: {
      flex: 1,
      backgroundColor: '#B2E7FF',
      marginTop: StatusBar.currentHeight || 0,
  },
});
