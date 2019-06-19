import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import './App.css';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component {

  state = {
    todos: [
    {
      id: uuid.v4(),
      title: "Learn to code",
      completed: false
    },
    {
      id: uuid.v4(),
      title: "Read",
      completed: false
    },
    {
      id: uuid.v4(),
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

addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title, 
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}
  render(){
  return (
    <Router>
    <div className="App">
    <div className="container">
    <Header />
    <AddTodo addTodo={this.addTodo}/>
    <h1> Things of importance: </h1>
    <Todos todos={this.state.todos} markComplete={this.markComplete}
    delTodo={this.delTodo}/>
       </div>
       </div>
       </Router>
      
  );
}
}

export default App;

 