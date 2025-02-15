import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  //const [name, nameUpdate] = useState({ name: "John" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
    //nameUpdate({ name: "Hayile" });
  }

  function handleNext() {
    if (step < 3) {
      setStep((currStep) => currStep + 1);
    }
    //nameUpdate({ name: "Jonny" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isO) => !isO)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrev}
              text="Previous"
              emoji="👈"
            >
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3> {children}
    </div>
  );
}
