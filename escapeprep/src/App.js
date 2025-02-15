import { useState } from "react";

const initialItems = [
  { id: 1, desc: "Travel Bag", qnty: 1, packed: false },
  { id: 2, desc: "Mobile", qnty: 2, packed: false },
  { id: 3, desc: "Charger & Cable", qnty: 1, packed: false },
  { id: 4, desc: "Powerbank", qnty: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    const confirmed = window.confirm(
      "You are going to clear your packing list. Are you sure you wants to proceed?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handleClearAll}
      />
      <Stats item={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Let's Escaape🌴</h1>;
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItem, onToggleItem, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "qnty")
    sortedItems = items.slice().sort((a, b) => a.qnty - b.qnty);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Order by input order</option>
          <option value="desc">Order by Description</option>
          <option value="packed">Order by Packed Status</option>
          <option value="qnty">Order by Quantity</option>
        </select>
        <button onClick={onClear}>Clear All</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
          {item.qnty} {item.desc}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}

function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some item to your list 🚀</em>
      </p>
    );
  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const packPer = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packPer !== 100
          ? `💼 You have ${numItems} items on your lists and
        already have packed ${numPacked}(${packPer}%)`
          : "You are all set to go 🏃✈️🚆"}
      </em>
    </footer>
  );
}
