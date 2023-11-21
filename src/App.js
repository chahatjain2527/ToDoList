import React, { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";


function App() {
  const onDelete = (item) =>{
    console.log("I am in delete",item.sNo);
    //let index = toDoList.indexOf(item);
    //toDoList.splice(index,1);
    settoDoList(toDoList.filter((e)=>{
      return e!==item
    }))
  }

  const addTodo= (Title, Desc)=>{
    let sno = toDoList.length > 0 ? toDoList[toDoList.length -1].sNo+1 : 1;
    const myTodo = {
      sNo : sno,
      title: Title,
      description: Desc
    };
    settoDoList([...toDoList, myTodo]);
  }

  const [toDoList, settoDoList] = useState([
    {
      sNo : 1,
      title: "First Task",
      description: "Description"
    },
    {
      sNo : 2,
      title: "Second Task",
      description: "Description"
    },
    {
      sNo : 3,
      title: "Third Task",
      description: "Description"
    }
  ]);

  return (
    <div className="App">
      <Navbar Title="ToDo List" SearchBar = {true} />
      <AddTodo addTodo={addTodo} />
      <Todos ToDoList ={toDoList} onDelete={onDelete} />
      <Footer/>
    </div>
  );
}

export default App;
