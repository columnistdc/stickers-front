import React from 'react';
import {
  Text,
  Button,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {fetchData} from "../scripts"

export default class HomeScreen extends React.Component {
state = {
  responce: ""
}

handleButtonClick=async()=>{
const result = await fetchData("http://localhost:8080/stickers")
  this.setState({responce:JSON.stringify(result)})
}

  render() {
    return ( 
    <View style = {styles.container}>
    <Button onPress={this.handleButtonClick} title="Нажми меня"/>
      <Text>{this.state.responce}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});