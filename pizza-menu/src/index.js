import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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

function Header() {
  /*  
  const styleHeader = {
    color: "Blue",
    fontSize: "40px",
    textTransform: "uppercase",
  }; */

  const styleHeader = {};

  return (
    <header className="header">
      <h1 style={styleHeader}>Connex Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>You can choose from</h2>
      <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
        price={pizzaData[0].price}
      />

      <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        photoName={pizzaData[1].photoName}
        price={pizzaData[1].price}
      />

      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName={pizzaData[2].photoName}
        price={pizzaData[2].price}
      />

      <Pizza
        name={pizzaData[3].name}
        ingredients={pizzaData[3].ingredients}
        photoName={pizzaData[3].photoName}
        price={pizzaData[3].price}
      />

      <Pizza
        name={pizzaData[4].name}
        ingredients={pizzaData[4].ingredients}
        photoName={pizzaData[4].photoName}
        price={pizzaData[4].price}
      />

      <Pizza
        name={pizzaData[5].name}
        ingredients={pizzaData[5].ingredients}
        photoName={pizzaData[5].photoName}
        price={pizzaData[5].price}
      />
    </main>
  );
}

function Pizza(props) {
  //console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = "180";
  const closeHour = "22";
  const isOpen = hour >= openHour && hour <= closeHour;
  var openClose = "";
  //const currentTime = new Date().toLocaleTimeString();

  if (isOpen) openClose = "We're Serving Now !!";
  else
    openClose =
      "Sorry We're away !! Please, wait we will be starting back soon.";
  /*{
    new Date().toLocaleTimeString();
  }*/

  //console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're Open Now !!");
  //else alert("Sorry We're close !!");

  return <footer className="footer">{openClose}</footer>;
}

//function Test() {
//  return <h1>Helllo Hi!</h1>;
//}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<App />);
