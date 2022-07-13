import React, { Component } from 'react'
import "./PerksOfJoiningFlair/PerksOfJoining.css"
export class Shootout extends Component {
  render() {
    return (
      <div className='container'>
     <section>
     <br/><br/><br/>
        <h2>shootout</h2>
        <p>  here we will take employees name and print that in a template.</p>
        {/* //emp.js data will be used to make template and posted on linkedIn */}
        <p>connect with linkedIn and post that template</p>
        <button type="button" className="btn btn-dark" onClick={()=>{console.log("this will post ur template in LinkedIn")}}>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="imagebtn" width="20px" alt="Save icon"/>
            <br/>
            Save
          </button>
    <br/><br/>
      </section>
      </div>
    )
  }
}

export default Shootout