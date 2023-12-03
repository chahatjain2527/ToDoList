import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
  return (
    <div className='container' >
      <h3 className='my-3' >Work List</h3>
      {props.ToDoList.length === 0 ? <h4>No work to do</h4> :
      props.ToDoList.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sNo} onDelete={props.onDelete} onUpdate={props.onUpdate} Done={props.Done} />);
      })
      }
      
    </div>
  );
}
