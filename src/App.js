import { useState } from "react";

export default function App() {
  // 🧠 State: keeps track of data that can change
  const [count, setCount] = useState(0);

  // 🧮 Function to handle button click
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Add One</button>
    </div>
  );
}
