import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
  return (
    <div className='container' >
      <h3 className='my-3' >TodoList</h3>
      {props.ToDoList.length === 0 ? <h4>No task to do</h4> :
      props.ToDoList.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sNo} onDelete={props.onDelete} />
      })
      }
      
    </div>
  );
}
