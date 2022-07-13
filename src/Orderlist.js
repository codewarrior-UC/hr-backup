import React from "react";
import AdminService from "./services/AdminService";
import "./style.css";
export default class Orderlist extends React.Component {
  constructor() {
    super();
    this.state = {
      orderlist: [],   
    };
  }
  componentDidMount() {
    AdminService.orderslist()
      .then((response) => response.json())
      .then((data) => {
        this.setState({ orderlist: data.data.result });
        console.log("orderlist", data.data.result);
      });
  }
  componentDidUpdate() {
    console.log(this.state.orderlist);
  }
  render() {
    return (
      <section className="section about-me" data-section="section1">
        <div className="container">
          <div className="section-heading">
            <h2>Order List</h2>
            <div className="line-dec"></div>
          </div>
          <table className="table">
            <thead>
            <div>
            </div>
              <tr className="employee-nowarp-table-text">
                <th>S.NO</th>
                <th>id</th>
                <th>quantity</th>
                {/* <th>company_id</th> */}
              </tr>
            </thead>
            <tbody>
        {this.state.orderlist.map((orders, index) => {               
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{orders._id}</td>
                    <td>{orders.quantity}</td>
                     {/* <td>{orders.company_id}</td> */}
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


