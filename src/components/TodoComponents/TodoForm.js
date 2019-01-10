import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.add}>
      <input
        value={props.todotitle}
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        onChange={props.handleChanges}
      />
      <button onClick={props.add}>Add Todo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
