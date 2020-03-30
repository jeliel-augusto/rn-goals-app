import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native'

export default function InputArea({addGoalHandler, visible, onCancel}){
    const [goalInput, setGoalInput] = useState('');

    const goalInputHandler = (text) => {
        setGoalInput(text);
    }
    return (
        <Modal visible={visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Descreva a meta para este curso..." 
                style={styles.input}
                value={goalInput}
                onChangeText={goalInputHandler}/>
                <View style={styles.actions}>
                    <Button style={styles.actionButton} title="Inserir" onPress={() => {setGoalInput(''); addGoalHandler(goalInput)}} />
                    <Button title="cancelar" color="red" style={styles.actionButton} onPress={onCancel}/>
                </View>
                
            </View>
        </Modal>
       
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: "center"
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    actionButton: {
        width: '40%'
    }
})