import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
  return (
    <div>
      {props.wholeTodoList.map(todo => {
        return <Todo todos={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
