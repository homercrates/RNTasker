import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (e) => {
        setEnteredGoal(e);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.didWeModal} animationType="fade">
            <View style={styles.screen}>
                <TextInput placeholder="write heres"
                    style={styles.txtInput}
                    onChangeText={goalInputHandler}
                    value={props.enteredGoal}
                />
                <View style={styles.buttonsSideXside}>
                    <View style={styles.button} >
                       <Button title="Add" onPress={addGoalHandler}></Button> 
                    </View>
                    <View styles={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                </View>
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
      buttonsSideXside: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '65%',
          // 60%  when compared to above container being 80%
          // 80% would put buttons on either edge of the txtInput view being 80%
          // leaves  space between letting the buttons dynamic sit on outside
      },
      button: {
          width: '30%',
      }   
});

export default GoalInput;