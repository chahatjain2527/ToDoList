import React, { useState } from "react";

export default function TodoItem({ todo, index, onDelete, onUpdate, onDone }) {
  // 🔹 Handle delete
  const handleDelete = () => {
    onDelete(todo);
  };

  // 🔹 Handle update
  const handleUpdate = () => {
    onUpdate(todo);
  };

  // 🔹 Handle done
  const handleDone = (falg) => {
    onDone(todo, falg);
  };

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    console.log(isChecked);
    handleDone(!isChecked)
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
          <h4 style={{ textDecoration: todo.status ? "none" : "line-through" }}>
            {todo.title}
          </h4>
          <p>{todo.description}</p>
        </div>

        <input type="checkbox" onChange={handleChange} checked={!todo.status} className="taskRadio" />
      </div>

      <hr className="separator" />

      <div className="bottomRow">
        <span className="dateTag">
          {todo.sNo ? new Date(todo.sNo).toDateString() : ""}
        </span>
        <div className="actionBtns">
          <button style={{ display: todo.status ? "" : "none" }} className="btn update" onClick={handleUpdate}> Update </button>
          <button className="btn delete" onClick={handleDelete}> Delete </button>
        </div>
      </div>
    </div>
  );
}
