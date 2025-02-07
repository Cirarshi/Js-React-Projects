import { useState } from "react";

const initialItems = [
  { id: 1, desc: "Travel Bag", qnty: 1, packed: true },
  { id: 2, desc: "Mobile", qnty: 2, packed: false },
  { id: 3, desc: "Charger & Cable", qnty: 1, packed: false },
  { id: 4, desc: "Powerbank", qnty: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Let's Escaape🌴</h1>;
}

function Form() {
  const [desc, setDesc] = useState("");
  const [qnty, setQnty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { desc, qnty, packed: false, id: Date.now() };
    //console.log(newItem);

    setDesc("");
    setQnty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😊 trip ?</h3>
      <select value={qnty} onChange={(e) => setQnty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item....."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <li>
        <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
          {item.qnty} {item.desc}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your lists and already have packed Y (Y%)</em>
    </footer>
  );
}
