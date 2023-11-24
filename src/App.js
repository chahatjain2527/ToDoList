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
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (item) =>{
    console.log("I am in delete",item.sNo);
    //let index = toDoList.indexOf(item);
    //toDoList.splice(index,1);
    settoDoList(toDoList.filter((e)=>{
      return e!==item
    }));

    localStorage.setItem("todos", JSON.stringify(toDoList));
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

  const [toDoList, settoDoList] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList])

  return (
    <div className="App">
      <Router>
        <Navbar Title="ToDo List" SearchBar = {true} />
        <Routes>
          <Route exact path="/" element={[<AddTodo addTodo={addTodo} />,<Todos ToDoList ={toDoList} onDelete={onDelete} />]} ></Route>
          <Route exact path="/About" element={<About/>} >
          </Route>
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
