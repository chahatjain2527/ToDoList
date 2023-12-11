import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
  const _style={
    h4:{
      color:"red",padding:'5px'
    }
  }
  return (
    <div className='container' >
      <h3 className='my-4 text-center ' >Work List</h3>
      {props.ToDoList.length === 0 ? <h5 style={_style.h4} >No Work To Do</h5> :
      props.ToDoList.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sNo} onDelete={props.onDelete} onUpdate={props.onUpdate} Done={props.Done} />);
      })
      }
      
    </div>
  );
}
