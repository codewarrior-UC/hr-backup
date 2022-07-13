import React from 'react'
import AdminService from "./services/AdminService";

export default class employeerlist extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      employeerlist : []
    }
  }

  componentDidMount()
  {
    AdminService.employeerlist()
    .then(response=>response.json())
    .then(data=>{      
        this.setState({employeerlist:data.data.result})
    });
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render()
  {
    return <section class="section about-me" data-section="section1">
    <div class="container">
      <div class="section-heading">
        <h2>Employeerlist List</h2>
        <div class="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>First Name</th>
            <th>Middile Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            {/* <th>DOB</th>
            <th>Aniversary Date</th>
            <th>Joining Date</th>
            <th>Father Mother Name</th>
            <th>Employee Type</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.employeerlist.map((emp,index)=>{
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{emp.first_name}</td>
                <td>{emp.middle_name}</td>
          
                <td>{emp.last_name}</td>
                <td>{emp.email}</td>
                <td>{emp.mobile_number}</td>
                {/* <td>{emp.dob}</td>
                <td>{emp.aniversary_date}</td>
                <td>{emp.joining_date}</td>
                <td>{emp.father_mother_name}</td>
                <td>{emp.employee_type}</td> */}
               
               
            </tr>
          })}
        </tbody>
      </table>    
    </div>
  </section>
  }
}