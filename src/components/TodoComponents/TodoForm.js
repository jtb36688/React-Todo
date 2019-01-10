import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.addtodo}>
      <input
        value={props.todotitle}
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        onChange={props.handleChanges}
      />
      <button onClick={props.addtodo}>Add Todo</button>
      <button onClick={props.addtodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
