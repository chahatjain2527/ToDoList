import React, {useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About";

function App() {
  let initTodo;
  const [selectedTodoForUpdate, setSelectedTodoForUpdate] = useState(null); 
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (item) =>{
    //let index = toDoList.indexOf(item);
    //toDoList.splice(index,1);
    if(item.status === true){
      if(window.confirm("Want to delete not done task"))
      settoDoList(toDoList.filter((e)=>{
        return e!==item
      }));
    }
    else{
      settoDoList(toDoList.filter((e)=>{
        return e!==item
      }));
    }

    localStorage.setItem("todos", JSON.stringify(toDoList));
  }

  const onUpdate = (item) =>{
    setSelectedTodoForUpdate(item);
    settoDoList(toDoList.filter((e)=>{
      return e!==item
    }));
    
  }

  const Done = (item) =>{
    //settoDoList(toDoList[item.sNo - 1].status) = false;
    //toDoList[item.sNo - 1].status = false;
    toDoList.map((workItem)=>{
      if(workItem.sNo === item.sNo)
      workItem.status = false;
      
      return workItem;
    });
    settoDoList([...toDoList]);
  }

  const addTodo= (Title, Desc)=>{
    let sno = toDoList.length > 0 ? toDoList[toDoList.length -1].sNo+1 : 1;
    const myTodo = {
      sNo : sno,
      title: Title,
      description: Desc,
      status: true
    };
    settoDoList([...toDoList, myTodo]);

  }

  const [toDoList, settoDoList] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList])

  console.log(toDoList);
  return (
    <div className="App">
      <Router>
        <Navbar Title="Work List" SearchBar = {true} />
        <Routes>
          <Route exact path="/" element={[<AddTodo addTodo={addTodo} selectedTodoForUpdate={selectedTodoForUpdate} />,<Todos ToDoList ={toDoList} onDelete={onDelete} onUpdate={onUpdate} Done={Done} />]} ></Route>
          <Route exact path="/About" element={<About/>} >
          </Route>
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
