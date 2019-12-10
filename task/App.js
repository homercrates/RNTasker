import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddTask, setIsAddTask] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {key: Math.random().toString(), val: goalTitle}
    ]);
    //close modal
    setIsAddTask(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  };

  return (
    <View style={styles.container}>
      <Button title='Add Task' onPress={() => setIsAddTask(true)}/>
      <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler} didWeModal={isAddTask} />
      </View>
      <Text>o0</Text>
      
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.val} id={itemData.item.key} onDelete={removeGoalHandler}/>
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
});
