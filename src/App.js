import { useState, useEffect } from "react";

function CounterDisplay({ count }) {
  // ... (Your CounterDisplay logic)
  let h2Elements = [];
  if (count > 0) {
    h2Elements = Array.from({ length: count }).map((_, index) => (
      <h2 key={index}>Count: {count}</h2>
    ));
  } else if (count < 0) {
    h2Elements = Array.from({ length: -count }).map((_, index) => (
      <h2 key={index}>Count: {count}</h2>
    ));
  } else {
    h2Elements = <h2>Count: {count}</h2>;
  }
  return (
    <div>
      {h2Elements}
      {count > 0 && <p style={{ color: "green" }}>Count is positive!</p>}
      {count < 0 && <p style={{ color: "red" }}>Count is negative!</p>}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);
  function handleClick() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Counter</h1>

      <button onClick={handleClick}>Add One</button>
      <button onClick={subtract}>Minus One</button>
      <button
        onClick={reset}
        style={{ backgroundColor: "red", padding: "5px" }}
      >
        Reset
      </button>
      <CounterDisplay count={count}></CounterDisplay>
    </div>
  );
}
