import React, { useState } from "react";

export default function TodoItem({ todo, index, onDelete, onUpdate, onDone, onFavorite }) {
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
    handleDone(!isChecked)
  };

  const handleFavorite = (e) => {
    const isChecked = e.target.checked;
    onFavorite(todo, isChecked);
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
          {/* //status true means not completed */}
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
          <label className="star">
            <input type="checkbox" onChange={handleFavorite} checked={todo.isFavorite} />
            <span>★</span>
          </label>
          {/* //status true means not completed */}
          <button style={{ display: todo.status ? "" : "none" }} className="btn update" onClick={handleUpdate}> Update </button>
          <button className="btn delete" onClick={handleDelete}> Delete </button>
        </div>
      </div>
    </div>
  );
}
