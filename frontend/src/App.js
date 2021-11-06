import "./App.css";
import React from "react";

// Holds the webpage frontend
function App() {
  const [name, setName] = React.useState("");
  const [output, setOutput] = React.useState("");

  // Function for handling button click
  const handleSubmit = () => {
    const url = "/" + name; // "http://127.0.0.1:5000/"
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((jsondata) => setOutput(jsondata["message"]))
      .catch((err) => {
        console.log(err);
      });
  };

  // Returning JS for the formatting and display
  return (
    <div className="App">
      <header className="App-header">
        <p>Please enter first name</p>
        <input onChange={(event) => setName(event.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Find last name
        </button>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;