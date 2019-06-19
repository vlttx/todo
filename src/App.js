import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
    {
      id: 1;
      title: "Learn to code";
      completed: false
    },
    {
      id: 2;
      title: "Read";
      completed: false
    }
    {
      id: 3;
      title: "Write";
      completed: false
    }
    ]
  }
  render(){
  return (
    <div className="App">
    <h1> Here I am </h1>
    <Todos />
       </div>
      
  );
}
}

export default App;

 