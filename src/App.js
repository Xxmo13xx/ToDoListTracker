import React, { Component } from 'react';
import logo from './logo.svg';
import ToDoItem from './components/ToDoItem';
import ToDoViewer from'./components/ToDoViewer';
import ToDoOverview from './components/ToDoOverview';
import './App.css';

class App extends Component {

  tempArray = ['Task 1', 'Task 2', 'Task 3'];

  render(){
    return(
      <div>
        <ToDoOverview />
        <ToDoViewer toDoListArray={this.tempArray} />
    
      </div>
    )
  }
  

}

export default App;
