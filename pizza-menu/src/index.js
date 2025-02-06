import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
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

      {pizzasNum > 0 ? (
        <React.Fragment>
          <p>
            Real authentic italian pizza taste is here, which you can get
            no-where.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
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
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/*
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
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
