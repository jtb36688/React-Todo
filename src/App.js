import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";
import moment from "moment";

const todoList = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList,
      titlevalue: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = ev => {
    ev.preventDefault();
    if (this.state.titlevalue === '') {
      return
    }
    else {
    this.setState(currentState => {
      return {
        todoList: currentState.todoList.concat({
          todotitle: this.state.titlevalue,
          id: Date.now(),
          date: new moment().format("MMMM Do YYYY, h:mm:ss a"),
          completed: false
        }),
        titlevalue: ""
      };
    });
  }
  };

  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed === false)
    });
  };

  toggleCompleted = index => {
    this.setState({
      todoList: this.state.todoList.map((todo, idx) => {
        if (index !== idx) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}> Todo List</h1>
        <TodoList
          wholeTodoList={this.state.todoList}
          completed={this.toggleCompleted}
        />
        <TodoForm
          add={this.addTodo}
          todotitle={this.state.titlevalue}
          handleChanges={this.handleChanges}
          clear={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
