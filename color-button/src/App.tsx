import React, { useState } from "react";
import "./App.css";

function App() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => setIsClick((prev) => !prev);

  const displayText = isClick ? "Change to red" : "Change to blue";
  const displayStyle = isClick
    ? { backgroundColor: "blue" }
    : { backgroundColor: "red" };

  return (
    <div>
      <button onClick={handleClick} style={displayStyle}>
        {displayText}
      </button>
    </div>
  );
}

export default App;
