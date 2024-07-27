import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*
  const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
];
*/

function App() {
  return (
    <div className="card">
      <div className="">
        <Avatar src="pics/UK_Crop.jpeg" alt="UK" />
        <div className="data">
          <Intro name="Utkarsh Kapoor" />
          <Skilllist />
        </div>
      </div>
      <div className="">
        <Avatar src="pics/Lassu_Crop.jpeg" alt="Lassu" />
        <div className="data">
          <Intro name="Lasya Yerabati" />
          <Skilllist />
        </div>
      </div>
      <div className="">
        <Avatar src="pics/Ankit_Crop.jpeg" alt="Anky" />
        <div className="data">
          <Intro name="Ankit Limani" />
          <Skilllist />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.src} alt={props.alt}></img>;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        I specialize in translating concepts into sleek, user-friendly
        interfaces. With a focus on clean code and responsive design, I create
        websites that combine functionality with visual appeal. I'm passionate
        about staying current with technology trends to deliver seamless user
        experiences that elevate brands.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👍" color="red" />
      <Skill skill="HTML + CSS" emoji="✌️" color="blue" />
      <Skill skill="JavaScript" emoji="🤞" color="green" />
      <Skill skill="XML" emoji="🙌" color="brown" />
      <Skill skill="Git" emoji="🤝" color="orange" />
      <Skill skill="Web Design" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    </div>
  );
}

/*
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
  {
    new Date().toLocaleTimeString();
  }

  //console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're Open Now !!");
  //else alert("Sorry We're close !!");

  return <footer className="footer">{openClose}</footer>;
}

//function Test() {
//  return <h1>Helllo Hi!</h1>;
//}
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<App />);
