import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("may 22 2025");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((curCount) => curCount - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((curCount) => curCount + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((curCount) => curCount - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((curCount) => curCount + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days from today was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
