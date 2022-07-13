import React from "react";
import CustomListDropDown from "./CustomListDropDown";
import AdminService from "./services/AdminService";
import "./style.css";
import FilterForm from "./CustomListDropDown"
export default class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeelist: [],
    };
  }

  componentDidMount() {
    AdminService.employeelist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employeelist: data.data.result });
        console.log("employeelist", data.data.result);
      });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <section className="section about-me" data-section="section1">
        <div className="container">
          <div className="section-heading">
            <h2>EmployeeList List</h2>
            <div className="line-dec"></div>
          </div>
          <CustomListDropDown data={FilterForm}/>



{/*  <FilterForm data={EmployeeList} />,
 */}
          <table className="table">
            <thead>
            <div>
            {/* {AdminService.employeelist.filter(ide => ide.includes(AdminService.company_id)).map(filteredEmployeelist => (
                  <li>
                    {filteredEmployeelist}
                  </li>
                ))}  */}
            </div>
              <tr className="employee-nowarp-table-text">
                <th>S. No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                {/* <th>Email</th> */}
                <th>Mobile Number</th>
                <th>company_name</th>
                <th>company_id</th>
                <th>control</th>
              </tr>
            </thead>
            <tbody>

{this.state.employeelist.map((emp, index) => {
                
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{emp.first_name}</td>
                    <td>{emp.last_name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile_number}</td>
                    <td>{emp.company_name}</td>
                    <td>{emp.company_id}</td>
                    <td>
                      <button>more</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}


