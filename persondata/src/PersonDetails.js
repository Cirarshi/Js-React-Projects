import React from "react";

class PersonDetails extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h1>Child Component</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default PersonDetails;
