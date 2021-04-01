import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
      marginTop:20,
      backgroundColor:'white',
      borderRadius:5,
      padding:10,
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",    
    flexWrap: "wrap",
    alignItems: "center"
  },
  square: {
     height:30,
     width:30,
     borderWidth:4,
     borderColor:"#8c82ff",
     backgroundColor:"#8c82ff",
     borderRadius:5
  },
  itemText: {
    maxWidth: "100%",
    marginLeft:15
  },
  circular: {
    height:15,
    width:15,
    borderWidth:4,
    borderColor:"#2f69ff",
    borderRadius:20,
    alignSelf:"center",
  },
});

export default Task;