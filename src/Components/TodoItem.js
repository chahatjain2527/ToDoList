import React from 'react'

export default function TodoItem(props) {
  const handleUpdate = () => {
    // Make your API call here
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    .then(response => {
      // Handle the response here (e.g., show a success message)
      console.log('API call successful');
    })
    .catch(error => {
      // Handle errors here (e.g., show an error message)
      console.error('Error updating todo:', error);
    });
  };
  return (<>
    <div>
      <h4>{`${props.todo.sNo} ${props.todo.title}`}</h4>
      <p>{props.todo.description}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}} >Delete</button>&nbsp;
      <button className='btn btn-sm btn-danger'onClick={handleUpdate}>Update</button>
    </div>
    <hr/>
    </>
  )
}
