/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';
import { createStackNavigator, createAppContainer } from "react-navigation";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1e88e5'
  },
  headerTintColor: 'white',
  headerTitleStyle:{
    fontWeight: 'bold',
    color: 'white'
  }
}
class TodoDetails extends Component{
  static navigationOptions = {
    ...defaultNavigationOptions,
    title: 'Todo'
  }
  render(){
    return (
      <View>
        <Text>
          {this.props.navigation.getParam('text')}
        </Text>
      </View>
    )
  }
}
class Home extends Component{
  static navigationOptions ={
    ...defaultNavigationOptions,
    title: 'Todo App',


  };
  constructor(props){
    super(props);

    // setTimeout(() =>{
    //   this.props.navigation.navigate('TodoDetails',
    //   {
    //     text: 'E aí galera!'
    //   });
    // }, 3000);
    
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
        
        <ScrollView>
          <AddTodo add={text => this.addTodo(text) } />
          <TodoList 
            todoList={this.state.todos} 
            navigation={this.props.navigation}
            />
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
const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  TodoDetails: {screen: TodoDetails}
});
export default createAppContainer(AppNavigator);