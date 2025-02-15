export default function Stats({ item }) {
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
