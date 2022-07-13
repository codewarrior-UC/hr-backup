import React, { Component } from 'react'
import {Routes, Route} from "react-router-dom";
import Navbr from './Navbr';
import Dash from "./Demo/Dash";
import Emp from "./Demo/Emp";
import AdminDashboard from './AdminDashboard/AdminDash';


export class Home extends Component {
  render() {
    
    return (
      <div>
      <Navbr/>
         <Routes>  
            <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
            <Route path="/Emp" element={<Emp/>}/>
            <Route path="/Dash" element={<Dash/>}/>   
         </Routes>
      </div>
    )
  }
}