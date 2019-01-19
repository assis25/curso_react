import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class AddTodo extends Component{
  constructor(){
    super();

    this.state = {
      text: '',
    }
  }
  onTextInput(text){
    this.setState({
      text: text,
    })
  }
  addTodo(){
    this.props.add(this.state.text)
    this.setState({
      text:''
    })
  }
  render(){
    return(
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={this.state.text}
        onChangeText={text => this.onTextInput(text)}
      />
      <Button 
        style={styles.button}
        onPress={
          ()=> this.addTodo()
        }
        title="Add"
        />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: 'lightgray',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    marginRight: 10
  },
  button: {
    marginLeft: 10,
    flexShrink: 0
  }
})
export default AddTodo;