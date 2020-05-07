// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const List =  styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2%;
    `;
  


const TodoList = props => {
  return (
      <List>
         <div className="todo-list">
             {props.todo.map(item => (
                <Todo
                     toggleTaskComplete={props.toggleTaskComplete}
                     key={item.id}
                     item={item}
                  />
                  ))}
        </div>
              <div>
                  <button className="clear-btn" onClick={props.clearComplete}>
                       Clear Complete
                  </button>
              </div>
         
    </List>
  );
};

export default TodoList;
