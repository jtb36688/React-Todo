import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
  return (
    <div>
      {props.wholeTodoList.map((todo, index) => (
        <Todo
          index={index}
          todos={todo}
          key={todo.id}
          completed={props.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
