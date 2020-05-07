// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Todo
          toggleTaskComplete={props.toggleTaskComplete}
          key={item.id}
          item={item}
        />
      ))}
      <button className="clear-btn" onClick={props.clearComplete}>
        Clear Complete
      </button>
    </div>
  );
};

export default TodoList;
