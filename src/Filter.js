import React, { Component } from 'react'
import employeerlist from './EmployeerList';
import AdminService from './services/AdminService'

export class Filter extends Component {
  constructor()
  {
    super()
    this.state = {
      companyname : [   
      ]
    }
  }
  // handleSubmitComp(event) {
  //   alert("Your selected value is: " + this.state.companyname);
  //   event.preventDefault();
  // }
  // componentDidMount()
  // {
  //   AdminService.companyname()
  //   .then(response=>response.json())
  //   .then(data=>{
  //       this.setState({companyname:data.data.result})
  //       console.log('company',data.data.result)
  //   }); 
  // }

  // componentDidUpdate(){
  //   console.log(this.state)
  // }
  render() {
    const companyname = this.getcompany(this.state.companyname, "name");

    const filterDropdown = companyname.filter(function(result) {
      return result.name === companyname;
    });
    return (

  <div>
                   <form onSubmit={this.handleSubmitComp}>
                          <br />
                          <br />
                          <label>
                            Looping through emp name from Json File
                            <select
                              value={this.state.companyname}
                              onChange={this.handleChangeComp}
                            >
                              {companyname.map(course => (
                                <option key={companyname.name} value={companyname.id}>
                                  {companyname.name}
                                </option>
                              ))}
                            </select>
                          </label>
                          <input type="submit" value="Submit" />
                          <div>
                            {filterDropdown.map(listss => (
                              <div key={employeerlist} style={{ margin: "10px" }}>
                                {listss.employeerlist}
                                <br />
                              </div>
                            ))}
                          </div>
                        </form>
                        </div>

    )
  }
}

export default Filter