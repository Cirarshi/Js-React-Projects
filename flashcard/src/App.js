import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Flashcard />
    </div>
  );
}

export default App;

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of syntax we used to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give component memory?",
    answer: "useState Hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is compeletly synchronised with state?",
    answer: "Controlled elememnts",
  },
];

function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
