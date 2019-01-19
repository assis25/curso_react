/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TodoList from './components/todo-list';


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
  render() {
    return (
      <View style={styles.container}>
        <TodoList todoList={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
