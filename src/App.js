import React from 'react';
// import Todo from './components/Todo';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todo = [
  {
    task: 'Complete Resume',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Update LinkedIn',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTaskComplete = itemId => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTodoTask = itemName => {
    this.setState({
      todo: [
        ...this.state.todo,
        { task: itemName, completed: false, id: Date.now() }
      ]
    });
  };

  clearComplete = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    return (
      <div>
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
      <div>
        <TodoList 
        toggleTaskComplete={this.toggleTaskComplete}
        todo={this.state.todo}
        clearComplete={this.clearComplete}
        />
        {/* <Todo /> */}
        <TodoForm addTodoTask={this.addTodoTask} />
      </div>
      </div>
    );
  }
}

export default App;
