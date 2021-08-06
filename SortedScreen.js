import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import Header from '../components/Header';

export default class SortedScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

reset=()=>{
    db.ref("class/enabled/").set({
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,
      enabled5: false,
      enabled6: false,
      enabled7: false,
      enabled8: false,
      enabled9: false,
      enabled10: false,            
    })

    this.setState({
      present_students: [],
      absent_students: [],
    })
  }

  goToList = () => {
    this.props.navigation.navigate('ListScreen');
  };

  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  getDateOld() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '.' + month + '.' + year;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getDate();
    var students_ref = db.ref('class/').on('value', (data) => {
      var class_a = data.val();
      var present_students = [];
      var absent_students = [];
      for (var i in class_a) {
        if (class_a[i][today] === 'Present') {
          present_students.push(class_a[i]);
        }
        if (class_a[i][today] === 'Absent') {
          absent_students.push(class_a[i]);
          console.log(absent_students);
        }
      }
      this.setState({
        present_students: present_students,
        absent_students: absent_students,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header />
        <Text style={styles.title}>Present Students List</Text>
        <View style={styles.presentContainer}>
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <Text style={styles.title}>Absent Students List</Text>

        <View style={styles.absentContainer}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.text}>
            No.of Present: {this.state.present_students.length}
          </Text>
          <Text style={styles.text}>
            No.of Absent: {this.state.absent_students.length}
          </Text>
        </View>

        <View style={styles.grid1}>
        <TouchableOpacity style={styles.buttons1}
        onPress={this.goToList}>
        <Text style={styles.text1}>GO HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons1} 
            onPress={this.reset}>
            <Text style={styles.text1}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  grid1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  presentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#02d6ac',
  },
  absentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fa0251',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
