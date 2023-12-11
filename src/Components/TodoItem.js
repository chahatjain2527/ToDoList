import React, { useState } from 'react'

export default function TodoItem(props) {
  let [ItemStyle,setItemStyle] = useState();
  const done = () =>{
    setItemStyle({
      background: "aliceblue",
    })
  }
  const _style= {
    h4:{
      textDecoration:"underline"
    },
    div:{
      padding:"10px 15px",
      marginBottom:"10px",
      borderLeft: "1px solid lightgray",
      borderBottom: "1px solid black",
      borderRadius:"5px",
    },
    buttonD:{
      border:'1px solid red',
      background:"none",
      color:"red"
    },
    buttonU:{
      border:'1px solid orange',
      background:"none",
      color:"orange"
    },
    buttonE:{
      border:'1px solid green',
      background:"none",
      color:"green"
    }
  }
  return (<>
    <div style={{ ...ItemStyle, ..._style.div,wordWrap:"break-word" }}>
      <h5 style={_style.h4}>{`${props.todo.sNo}. ${props.todo.title}`}</h5>
      <p>{props.todo.description}</p>
      <button className='btn btn-sm' onClick={()=>{props.onDelete(props.todo)}} style={_style.buttonD} >Delete</button>&nbsp;
      { props.todo.status && <><button className='btn btn-sm'onClick={()=>{props.onUpdate(props.todo)}} style={_style.buttonU}>Update</button>&nbsp;
      <button className='btn btn-sm'onClick={()=>{props.Done(props.todo); done();}} style={_style.buttonE}>Done</button></>}
    </div>
    </>
  )
}
