import React from 'react';


function ToDoItem(props){

    
    return(
        <div className="ToDoItem">
            <img src={ require("../imgs/toDoItemClosedArrow.jpg")} />
            {props.toDoName}
            <a href className="ToDoItemButton">
                edit
            </a>
        </div>
    )
}

export default ToDoItem