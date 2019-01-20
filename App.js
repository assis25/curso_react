import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, PermissionsAndroid} from 'react-native';
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
    const todo = this.props.navigation.getParam('todo');
    console.warn(todo);
    return (
      <View>
        <Text>
          {todo.text}
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
      id: 1,
      text: 'Primeiro item da lista:',
    };
    const todo2 = {
      id: 2,
      text: 'Segundo item da lista:',
    };
    const todo3 = {
      id: 3,
      text: 'Terceiro item da lista:',
    };
    this.state = {
      idCount: 3,
      todos: [todo1, todo2, todo3],
    }
    this.resquestMapsPermission();
  }
  async resquestMapsPermission(){
    try{
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': "Todo app location access",
          'message': 'We need your location to know where you'
        }
      )
      this.setState({
        geolocationPermissionGranted: isGranted,
      })
    }catch(err){
      return;
    }
  }

  setTodoLocation(id, coords) {
    const { latitude, longitude } = coords;
    const { todos } = this.state;
    todos
      .find(todo => todo.id === id)
      .location = coords;
    this.setState({
      todos: todos
    });
  }

  addTodo(text){
    const id = this.state.idCount + 1;
    this.setState({
      todos: [{ id: id, text: text }].concat(this.state.todos),
      idCount: id
    });
    if(this.state.geolocationPermissionGranted){
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setTodoLocation(id, pos.coords)
      }, null, {enableHighAccuracy: true})
    }
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