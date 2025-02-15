import React, { Component } from "react";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    // Initial state with sample employee data
    this.state = {
      employees: [
        {
          id: 1,
          name: "Mickey Mouse",
          position: "Software Engineer",
          department: "Development",
        },
        {
          id: 2,
          name: "Jack Sparrow",
          position: "Product Manager",
          department: "Product",
        },
        {
          id: 3,
          name: "Mother Teressa",
          position: "UX Designer",
          department: "Design",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeDetails;
