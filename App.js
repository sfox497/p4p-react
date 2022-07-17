import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import HomePage from "./src/screens/HomePage";
import CodingProjectPage from "./src/screens/CodingProjectPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionsSideBar from "./src/components/OptionsSideBar";
import TutorialPage from "./src/screens/TutorialPage";
import ProjectPage from "./src/screens/ProjectPage";

export default function App() {

    const Stack = createNativeStackNavigator();

    const MyStack = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomePage}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Project" component={CodingProjectPage} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

  return (
      <NavigationContainer>
          <View style={styles.container}>
              <Text style={styles.title}>BLOCKY TUTOR</Text>
              <StatusBar style="auto"/>


              <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={HomePage}
                      options={{ title: 'Welcome to blocky tutor' }}
                  />
                  <Stack.Screen name="Project" component={CodingProjectPage} options={{ title: 'Project coding' }} />
                  <Stack.Screen name="ProjectOptions" component={OptionsSideBar} options={{ title: 'Project coding' }} />
                  <Stack.Screen name="Tutorials" component={TutorialPage} options={{ title: 'Blocky Tutorials' }} />
                  <Stack.Screen name="ProjectsList" component={ProjectPage} options={{ title: 'Projects list' }} />
              </Stack.Navigator>

          </View>
      </NavigationContainer>

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
