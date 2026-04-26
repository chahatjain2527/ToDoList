import React, { useState } from "react";

function StartScreen({ onSave }) {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");

  const onClickHandle = (e) => {
    e.preventDefault();
    if(!name)
      alert("Please enter your name");

      onSave(name)
  }
  return (
    <div className="startScreenContainer">
      {!started ? (
        <button onClick={() => setStarted(true)}>
          Let's Start....
        </button>
      ) : (
        <>
          <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
          <button onClick={onClickHandle} > Continue </button>
        </>
      )}
    </div>
  );
}

export default StartScreen;