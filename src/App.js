import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";

const todosArray = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todosArray,
      titlevalue: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = ev => {
    ev.preventDefault();
    // this.setState(currentState => {
    //   return {
    //     todoList: currentState.todoList.concat({
    //       todotitle: this.state.titlevalue,
    //       id: Date.now(),
    //       completed: false,
    //     }),
    //     titlevalue: ''
    //   };
    // })
    this.setState({
      todoList: [
        ...this.state.todoList,
        { todotitle: this.state.titlevalue, 
          id: Date.now(),
          date: '', 
          completed: false }
      ],
      titlevalue: ''
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List: MVP TitleValue is: {this.state.titlevalue}</h1>
        <TodoList wholeTodoList={this.state.todoList} />
        <TodoForm
          addtodo={this.addTodo}
          todotitle={this.state.titlevalue}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
