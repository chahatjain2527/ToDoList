import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import useTodos from "./useTodos";
import StartScreen from "./Components/StartScreen";
import { useState } from "react";

function App() {
  const { appData, editTodo, saveTodo, deleteTodo, updateTodo, markDone, saveUser, setEditTodo, resetData} = useTodos();
  const [showPopup, setShowPopup] = useState(false);
  const [todayDate, setTodayDate] = useState(new Date());


  if (!appData.user) {
    return <StartScreen onSave={saveUser} />
  }
  return (<div>
    <div className="header">
      <div>
        <h2>HI {appData.user}</h2>
        <p>{todayDate.toDateString()}</p>
      </div>

      <button className="newTaskCls" onClick={() => setShowPopup(true)} > + New Task </button>
    </div>
    {showPopup && (
      <div className="popup-overlay">
        <div className="popup-box">
          <AddTodo saveTodo={(title, desc) => { saveTodo(title, desc); setShowPopup(false); }} editTodo={editTodo} />
          <button onClick={() => { setEditTodo(null); setShowPopup(false); }}>Close</button>
        </div>
      </div>
    )}
    <Todos todos={appData.todos} onDelete={deleteTodo} onUpdate={(todo) => {
      updateTodo(todo);
      setShowPopup(true);
    }} onDone={markDone} />
    <button onClick={resetData}>Reset/Logout</button>
  </div>
  );
}

export default App;