import { useState } from "react";
import Logo from "./logo.js";
import Form from "./form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

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
