import React from "react";
import { pizzaData } from ".";
import { Pizza } from "./Pizza";

export function Menu() {
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
