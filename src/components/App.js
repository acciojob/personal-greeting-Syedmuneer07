
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:<br/>
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
         </label>
        {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
