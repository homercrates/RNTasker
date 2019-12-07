import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const GoalItem = props => {
                            // onPress points to onDelete in App.js
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
                <Button 
                    title={'X'}

                />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 2,
        backgroundColor: '#aac',
        borderColor: 'black',
        borderWidth: 1,
      }
})

export default GoalItem;