import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
class App extends Component {

  state = {
    todos: [
    {
      id: 1,
      title: "Learn to code",
      completed: false
    },
    {
      id: 2,
      title: "Read",
      completed: false
    },
    {
      id: 3,
      title: "Write",
      completed: false
    }
    ]
  }
//toggle complete
    markComplete = (id) => {
     this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
     })});
}
//deletes the Todo, but returns it after refresh since we dont have the database or backend
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}
  render(){
  return (
    <div className="App">
    <div className="container">
    <Header />
    <AddTodo />
    <h1> Things of importance: </h1>
    <Todos todos={this.state.todos} markComplete={this.markComplete}
    delTodo={this.delTodo}/>
       </div>
       </div>
      
  );
}
}

export default App;

 