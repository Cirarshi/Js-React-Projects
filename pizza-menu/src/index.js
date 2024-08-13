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
  const pizzas = pizzaData;
  //const pizzas = [];
  const pizzasNum = pizzas.length;

  return (
    <main className="menu">
      <h2>You can choose from</h2>

      <p>
        Real authentic italian pizza taste is here, which you can get no-where.
      </p>

      {pizzasNum > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're upgrading our menu, please wait.</p>
      )}

      {/*
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
      */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(pizzaObj);
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = "18";
  const closeHour = "23";
  const isOpen = hour >= openHour && hour <= closeHour;
  //var openClose = "";
  //const currentTime = new Date().toLocaleTimeString();

  /*if (isOpen) openClose = "We're Serving Now !!";
  else {
    openClose = (
      <p>
        Sorry We're away !! Please, wait we will be staring back in{" "}
        {openHour - hour} hours.
      </p>
    );
  }
  /*{
    new Date().toLocaleTimeString();
  }*/

  //console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're Open Now !!");
  //else alert("Sorry We're close !!");

  //return <footer className="footer">{isOpen}</footer>};

  //if (!isOpen) return <p>Closed</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We're are closed Now !!. Wait until {openHour}:00p.m.</p>
      )}
    </footer>
  );
}

//function Test() {
//  return <h1>Helllo Hi!</h1>;
//}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're Serving Now !!. You can order until {closeHour - 1}
        :30p.m.
      </p>
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
