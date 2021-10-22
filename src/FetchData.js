import React from "react";

export default class EmployeeTable extends React.Component{
    constructor(props){
      super (props);
      this.state = { employees:[], display:"none"};
      this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
    fetch ("https://dummy.restapiexample.com/api/v1/employees")
    .then (( resp) => resp.json ())
    .then ((resp) => {
     this.setState({ employees: resp.data});
    })
  }

  clickHandler(){
      const displaystate = this.state.display === "none" ? "block" : "none";
      this.setState({display: displaystate})
  }

  render() {
  return(
      <div>
          <button onClick={this.clickHandler}>Display Fetch Data</button>
          <div style={{display:this.state.display}}>
    <table className ="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
          {this.state.employees.map((employee) =>(
            <tr>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
            </tr>
     ))}
        </tbody>
    </table>
    </div>
    </div>
  );
  }
}