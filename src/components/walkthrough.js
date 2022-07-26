import {copilot, CopilotStep, walkthroughable} from "react-native-copilot";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";

const walkthrough = (props) => {

    const [secondStepActive, setsecondStepActive] = useState(true);
    const WalkthroughableText = walkthroughable(Text);

    useEffect(() => {
        props.copilotEvents.on('stepChange', handleStepChange)
        props.start()
    }, [])

    const handleStepChange = (step) => {
        console.log(`current step is: ${step.name}`)
    }

    return(
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.start()}>
                <Text style={styles.buttonText}>
                    START APP INTRODUCTION TOUR
                </Text>
            </TouchableOpacity>
            <CopilotStep
                text={"This is the heading"}
                order={1}
                name={"first"}>
                <WalkthroughableText>
                    Example of text
                </WalkthroughableText>
            </CopilotStep>
        </View>
    );
};

export default copilot({
    animated: true, // Can be true or false
    overlay: 'svg', // Can be either view or svg
})(walkthrough);

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
})

