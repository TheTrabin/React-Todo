import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodoTask: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    e.preventDefault();
    this.setState({
      newTodoTask: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoTask(this.state.newTodoTask);
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.newTodoTask}
          onChange={this.handleChanges}
        />
        <button>Submit New Task</button>
      </form>
    );
  }
}

export default TodoForm;
