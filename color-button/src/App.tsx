import React, { useState } from "react";
import "./App.css";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsClick((prev) => !prev);

  const displayText = isClick ? "Change to red" : "Change to blue";
  const displayStyle = isChecked
    ? { backgroundColor: "grey" }
    : isClick
      ? { backgroundColor: "blue" }
      : { backgroundColor: "red" };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />

      <button onClick={handleClick} disabled={isChecked} style={displayStyle}>
        {displayText}
      </button>
    </div>
  );
}

export default App;
