import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (e) => {
    setEnteredGoal(e);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), val: enteredGoal}
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TextInput placeholder="write here"
          style={styles.txtInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler}></Button>
      </View>
      <Text>{enteredGoal}</Text>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.val}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  txtInput: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 5
  },
  listItem: {
    padding: 10,
    margin: 2,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
  }
});
