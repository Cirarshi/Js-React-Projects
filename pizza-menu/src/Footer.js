import React from "react";
import { Order } from "./Order";

export function Footer() {
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
