import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, onDelete, onUpdate, onDone, onFavorite }) {

  return (
    <div className="container listCls" id="todoListContainer">
      <h3 className="my-3">Your Tasks</h3>

      {/* 🔹 If no todos, show message */}
      {todos.length === 0 ? (
        <h4>No Task, Please Add Task</h4>
      ) : (
        // 🔹 Render each todo item
        todos.map((todo, index) => (
          <TodoItem key={todo.sNo} index={index} todo={todo} onDelete={onDelete} onUpdate={onUpdate} onDone={onDone} onFavorite={onFavorite} />
        ))
      )}
    </div>
  );
}