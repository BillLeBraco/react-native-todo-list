import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'
export default function App() {
  const [text,setText] = useState('');
  const [tasks,setTasks] = useState([{text:"💪 Work out of 30 minutes"},{text:"🏠 Ace the react native test"},{text:"🍸 Chill out"}]);
  function addTask(){
    setTasks([...tasks,{text:text}]);
    setText('');
    Keyboard.dismiss();
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
      <View>
          <Text style={styles.title}>
            Todo Today
          </Text>
          <View style={styles.tasksSection}>
          {tasks.map((task) =>
              (
                <TouchableOpacity onPress={() => {
                  setTasks(tasks.filter(t => t.text != task.text))
                }}>
                  <Task key={task.text} text={task.text}/>
                </TouchableOpacity>
              )
            )}
            
          
          </View>
        </View>
        <View style={styles.add_view}>
          <TextInput style={styles.input} placeholder="Ajouter..." onChangeText={setText} value={text}></TextInput>
          <TouchableOpacity onPress={addTask} style={styles.button}><Text style={styles.text_button}>+</Text></TouchableOpacity>
        </View>
      </KeyboardAvoidingView>        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title:{
    fontWeight:"bold",
    fontSize:24
  },
  add_view:{
    flexDirection:"row",
    alignItems:'center',
    marginTop:40 
  },
  button:{
    backgroundColor:'white',
    width:60,
    height:60,
    borderRadius:30,
    alignItems: "center",
  },
  input: {
    height: 50,
    width:'70%',
    margin: 12,
    borderWidth: 2,
    backgroundColor:"white",
    borderRadius:30,
    textAlign:'center'    
  },
  text_button: {
    fontSize:40,
    color:'#8c82ff',
    marginTop:3
  }
});
