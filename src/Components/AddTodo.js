import React, { useEffect, useState } from 'react'

export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    useEffect(() => {
        // Check if selectedTodoForUpdate prop is provided and update the state
        if (props.selectedTodoForUpdate) {
          settitle(props.selectedTodoForUpdate.title);
          setdesc(props.selectedTodoForUpdate.description);
        }
      }, [props.selectedTodoForUpdate]);

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title can't be empty");
        }
        else {
            props.addTodo(title, desc);
            setdesc("");
            settitle("");
        }
    };
    return (
        <div className='container my-3 p-3' style={{border:'1px solid red'}} >
            <h3>Add a Work Item</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Work Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Work Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Discritopn" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add</button>
            </form>
        </div>
    )
}
