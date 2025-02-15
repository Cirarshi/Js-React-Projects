export default function Item({ item, onDeleteItem, onToggleItem }) {
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
