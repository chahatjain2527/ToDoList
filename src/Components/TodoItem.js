import React, { useState } from "react";

export default function TodoItem({ todo, index, onDelete, onUpdate, onDone }) {
  console.log("Rendering TodoItem: ", new Date(todo.sNo).toDateString());

  // 🔹 Handle delete
  const handleDelete = () => {
    onDelete(todo);
  };

  // 🔹 Handle update
  const handleUpdate = () => {
    onUpdate(todo);
  };

  // 🔹 Handle done
  const handleDone = () => {
    onDone(todo);
  };

  return (
    // <div className="itemCardCls">
    //   <h4 style={{ textDecoration: todo.status ? 'none' : 'line-through' }}>{todo.title}</h4>

    //   <p>{todo.description}</p>

    //   {/* 🔹 Delete Button */}
    //   <button className="btn delete" onClick={handleDelete} > Delete </button>
    //   &nbsp;
    //   {/* 🔹 Show Update & Done only if task is not completed */}
    //   {todo.status && (
    //     <>
    //       <button className="btn update" onClick={handleUpdate} > Update </button>
    //       &nbsp;
    //       <button className="btn done" onClick={handleDone} > Done </button>
    //     </>
    //   )}
    // </div>

    <div className="itemCardCls">

      <div className="topRow">
        <div className="textBlock">
          <h4 style={{ textDecoration: todo.status ? 'none' : 'line-through' }}>{todo.title}</h4>
          <p>{todo.description}</p>
        </div>

        <input type="radio" onClick={handleDone} checked={!todo.status} className="taskRadio" />
      </div>

      <hr className="separator" />

        <div className="bottomRow">
          <span className="dateTag">{todo.sNo ? new Date(todo.sNo).toDateString() : ''}</span>
          {todo.status && (
          <div className="actionBtns">
            <button className="btn update" onClick={handleUpdate}>Update</button>
            <button className="btn delete" onClick={handleDelete}>Delete</button>
          </div>
          )}
        </div>

    </div>
  );
}