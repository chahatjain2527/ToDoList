import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Descrition can't be empty");
        }
        else {
            props.addTodo(title, desc);
            setdesc("");
            settitle("");
        }
    };
    return (
        <div className='container my-3' >
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">ToDo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Discritopn" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
            </form>
        </div>
    )
}
