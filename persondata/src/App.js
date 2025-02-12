import React from "react";
import PersonDetails from "./PersonDetails";

class App extends React.Component {
  render() {
    const person = {
      name: "Scooby Doo",
      age: 7,
    };

    return (
      <div>
        <h1>Parent Component</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <PersonDetails name={person.name} age={person.age} />
      </div>
    );
  }
}

export default App;
