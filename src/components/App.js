import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "40px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>
        Enter your name:
      </label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "250px",
          height: "28px",
          padding: "4px",
          fontSize: "14px",
        }}
      />

      {name && (
        <p style={{ marginTop: "15px" }}>
          Hello, {name}!
        </p>
      )}
    </div>
  );
};

export default App;
