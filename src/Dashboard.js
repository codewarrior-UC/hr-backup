import React from 'react'
import AdminService from "./services/AdminService";
import './style.css'
export default class Dashboard extends React.Component
{
  constructor()
  {
    super()
    this.state = {
        birthday : [],
        joining : [],
        aniversary :[]

     }
  }

  componentDidMount()
  {
    AdminService.findbirthdayaniversaryjoiningdate()
    .then(response=>response.json())
    .then(data=>{
        this.setState({birthday:data.data.result})
        console.log('birthday',data.data.result)
    });

    AdminService.findbirthdayaniversaryjoiningdate()
    .then(response=>response.json())
    .then(data=>{
        this.setState({joining:data.data.result})
        console.log('birthday',data.data.result)
    });

    AdminService.findbirthdayaniversaryjoiningdate()
    .then(response=>response.json())
    .then(data=>{
        this.setState({aniversary:data.data.result})
        console.log('birthday',data.data.result)
    });

  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render()
  {
    return <section className="section about-me" data-section="section1">
    <div className="container">
      <div className="section-heading">
        <h2>bday list List</h2>
        <div className="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead>
          <tr className='employee-nowarp-table-text'>
            <th >S. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>company_name</th>
            <th>control</th>
          </tr>
        </thead>
        <tbody>
          {this.state.birthday.map((bday,index)=>{
            
            return <tr key={index}>
              <td>{index+1}</td>
                <td>{bday.first_name}</td>
                <td>{bday.last_name}</td>
                <td>{bday.email}</td>
                <td>{bday.mobile_number}</td>
                <td>{bday.company_name}</td>
                <td><button>more</button></td>
            </tr>
          })}
        </tbody>
      </table>     
    </div>



    <div className="container">
      <div className="section-heading">
        <h2>NewJOINE List</h2>
        <div className="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead>
          <tr className='employee-nowarp-table-text'>
            <th >S. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>company_name</th>
            <th>control</th>
          </tr>
        </thead>
        <tbody>
          {this.state.newjoine.map((joine,index)=>{
            
            return <tr key={index}>
              <td>{index+1}</td>
                <td>{joine.first_name}</td>
                <td>{joine.last_name}</td>
                <td>{joine.email}</td>
                <td>{joine.mobile_number}</td>
                <td>{joine.company_name}</td>
                <td><button>more</button></td>
            </tr>
          })}
        </tbody>
      </table>   

      <div className="container">
      <div className="section-heading">
        <h2>Anniversary List</h2>
        <div className="line-dec"></div>       
      </div>  
      <table className='table'>
        <thead>
          <tr className='employee-nowarp-table-text'>
            <th >S. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>company_name</th>
            <th>control</th>
          </tr>
        </thead>
        <tbody>
          {this.state.aniversary.map((anni,index)=>{
            
            return <tr key={index}>
              <td>{index+1}</td>
                <td>{anni.first_name}</td>
                <td>{anni.last_name}</td>
                <td>{anni.email}</td>
                <td>{anni.mobile_number}</td>
                <td>{anni.company_name}</td>
                <td><button>more</button></td>
            </tr>
          })}
        </tbody>
      </table>   


      
        </div>   
    </div>
  </section>
  }
}