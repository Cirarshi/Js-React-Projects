import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const pizzaData = [
  {
    name: "Garden Fresh",
    ingredients: "Lots of mouth watering fresh veggies",
    price: 199,
    photoName: "pizzas/fresh.jpg",
    soldOut: false,
  },
  {
    name: "Toasted Bread",
    ingredients: "Toasted bread with veggies and cheese for a great start",
    price: 99,
    photoName: "pizzas/ToastedBread.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinach",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 159,
    photoName: "pizzas/spinach.jpg",
    soldOut: false,
  },
  {
    name: "Corn & Onion",
    ingredients: "A twist of a bit of sweet with corns",
    price: 129,
    photoName: "pizzas/onion.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Evergreen",
    ingredients: "Looks fresh and green pizza",
    price: 249,
    photoName: "pizzas/evergreen.jpg",
    soldOut: true,
  },
  {
    name: "Sweet and Salty",
    ingredients: "With onions and tomatoes and tangy masala with cheese on top",
    price: 199,
    photoName: "pizzas/corn.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<App />);
