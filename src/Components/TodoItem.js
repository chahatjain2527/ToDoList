import React, { useState } from 'react'

export default function TodoItem(props) {
  let [ItemStyle,setItemStyle] = useState();
  const done = () =>{
    setItemStyle({
      background: "aliceblue",
    })
  }
  return (<>
    <div style={ItemStyle}>
      <h4>{`${props.todo.sNo} ${props.todo.title}`}</h4>
      <p>{props.todo.description}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}} >Delete</button>&nbsp;
      { props.todo.status && <><button className='btn btn-sm btn-danger'onClick={()=>{props.onUpdate(props.todo)}}>Update</button>&nbsp;
      <button className='btn btn-sm btn-danger'onClick={()=>{props.Done(props.todo); done();}}>Done</button></>}
    </div>
    <hr/>
    </>
  )
}
