import React, { useState } from "react";

function App() {

  let [name, setName] =useState("");

  function handleChange(event){
    console.log(event.target.value)
     name = event.target.value 
  }

  function updateHeader(){
    setName(name)
  }
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={updateHeader}>Submit</button>
    </div>
  );
}

export default App;
