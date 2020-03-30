import React, {useState} from 'react';
import { StyleSheet, View, Button, ScrollView, FlatList,  } from 'react-native';
import ListItem from './components/ListItem';
import InputArea from './components/InputArea';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
    setGoals((currentGoals) => [...currentGoals, {id: Math.random().toString(), value: goal}]);
    setIsAddMode(false);
  };
  const onDelete = (goalId) => {
    console.log(goalId)
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const onCancel = () => setIsAddMode(false);
  return (
    <View style={styles.screen}>
      <Button title="Adicionar nova meta" onPress={() => setIsAddMode(true)}/> 
      <InputArea
      visible={isAddMode} 
      addGoalHandler={addGoalHandler}
      onCancel={onCancel}
      />
      <FlatList data={goals} 
      renderItem={({item}) => (<ListItem {...item} id={item.id} onDelete={onDelete}/>)}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  
});
