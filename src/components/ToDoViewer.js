import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoViewer extends React.Component {

    render() {
        return (
          <div className="ToDoViewer">
            <ul>
              {this.props.toDoListArray.map((name) => (
                <li key={name}><ToDoItem toDoName={name} /></li>
                )
              )}
            </ul>
          
          </div>
        )
    }
}

export default ToDoViewer;