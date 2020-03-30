import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ListItem({id, value, onDelete}){
  
    return (
      <TouchableOpacity onPress={onDelete.bind(this, id)}>
        <View style={styles.goalItem}><Text>{value}</Text></View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: 'grey',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10
  }
})