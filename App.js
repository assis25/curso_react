/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';


export default class App extends Component{
  constructor(){
    super();
    const todo1 = {
      text: 'Primeiro item da lista:',
    };
    const todo2 = {
      text: 'Segundo item da lista:',
    };
    const todo3 = {
      text: 'Terceiro item da lista:',
    };
    this.state = {
      todos: [todo1, todo2, todo3],
    }
  }
  addTodo(text){
    this.setState({
      todos: [{ text: text }].concat(this.state.todos)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <AddTodo add={text => this.addTodo(text) } />
        <ScrollView>
          
          <TodoList todoList={this.state.todos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
