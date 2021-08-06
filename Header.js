import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.header}>
      <Text style={styles.text}>ATTENDANCE APP</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
  },
  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
})