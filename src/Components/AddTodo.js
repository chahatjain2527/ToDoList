import React, { useEffect, useState } from "react";

export default function AddTodo({ saveTodo, editTodo }) {

  // 🔹 Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 🔹 When a todo is selected for update, pre-fill the form
  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
    }
  }, [editTodo]);

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !title.trim()) {
      alert("Title can't be empty");
      return;
    }
    saveTodo(title, description);

    setTitle("");
    setDescription("");

  };

  return (
    <div className="container my-3 p-3" style={{ border: "1px solid red" }}>
      <h3>{editTodo ? "Update" : "Add"} Task</h3>

      <form onSubmit={handleSubmit}>
        <div className="row">

          {/* 🔹 Title Input */}
          <div className="form-group col-md-6">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className="form-control" placeholder="Enter Title" value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>

          {/* 🔹 Description Input */}
          <div className="form-group col-md-6">
            <label htmlFor="desc">Comments</label>
            <input type="text" id="desc" className="form-control" placeholder="Enter Description" value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>

        {/* 🔹 Submit Button */}
        <button type="submit" className="btn btn-success btn-sm"> {editTodo ? "Update" : "Add"} </button>
      </form>
    </div>
  );
}