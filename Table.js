import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Table extends React.Component{
  render(){
    return (
      <View style={styles.grid}>
      <Text style={styles.text}>      no.</Text>
      <Text style={styles.text}>     name            </Text>
      <Text style={styles.text1}>        status           </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: "bold",
    color: "white", 
    textAlign: "center",
    padding: 10,
  },
  text1: {
    backgroundColor: 'black',
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white", 
  },    
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
})