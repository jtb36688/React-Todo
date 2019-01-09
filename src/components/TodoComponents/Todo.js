import React from 'react';



function Todo(props) {
    const todocomplete = (props.todos.completed)
    const completedfunc = () => {
        if  (todocomplete) {
            return <p>All Done!</p>
        }
        else {
            return <p>Not Yet!</p>
        }
        }
    return <div className='SoleTodo'>
        <div className='Date'>Added on: {props.todos.date}</div>
        <div className='TodoTitle'>{props.todos.todotitle}</div>
            <div>Completed:{completedfunc()}
            </div>
    </div>
  }
  

export default Todo;