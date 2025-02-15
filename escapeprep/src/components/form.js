import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [qnty, setQnty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { desc, qnty, packed: false, id: Date.now() };
    onAddItems(newItem);
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
