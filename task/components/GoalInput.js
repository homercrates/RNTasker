import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (e) => {
        setEnteredGoal(e);
      }

    return (
        <Modal visible={props.didWeModal} animationType="fade">
            <View style={styles.screen}>
                <TextInput placeholder="write heres"
                    style={styles.txtInput}
                    onChangeText={goalInputHandler}
                    value={props.enteredGoal}
                />
                <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 5,
        marginBottom: 2,
      },
      screen: {
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
      },     
});

export default GoalInput;