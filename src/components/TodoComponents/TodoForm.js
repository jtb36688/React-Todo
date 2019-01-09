import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.addtodo}>
        {}
      <input
        value={props.todoTitle}
        type="text"
        name="titlevalue"
        placeholder="Name"
        onChange={props.handleChanges}
      />
      <button onClick={props.addtodo}>
          Add Todo
        </button>
    </form>
  );
}

export default TodoForm;
