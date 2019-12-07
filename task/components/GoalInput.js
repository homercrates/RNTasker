import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (e) => {
        setEnteredGoal(e);
      }

    return (
        <View style={styles.screen}>
            <TextInput placeholder="write here"
                style={styles.txtInput}
                onChangeText={goalInputHandler}
                value={props.enteredGoal}
            />
            <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 5
      },
      screen: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      },     
});

export default GoalInput;