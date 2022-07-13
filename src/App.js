import React from 'react'
import Menu from './Menu'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import EmployeeList from './EmployeeList'
import EmployeerList from './EmployeerList'
import AdminList from "./AdminList"
import Home from "./Home"
import Employee from './Employee'
import Orderlist from './Orderlist'
import  Placeorder  from "./Placeorder"
export default class App extends React.Component
{
constructor(){
  super()
  this.state=[{
  }]
}

  render()
  {
    return <div>    
<Menu/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Orderlist" element={<Orderlist/>}/>
          <Route path="/EmployeerList" element={<EmployeerList/>}/>
          <Route path="/AdminList" element={<AdminList/>}/>
          <Route path="/EmployeeList" element={<EmployeeList/>}/>
          <Route path="/Placeorder" element={<Placeorder/>}/>
        </Routes>
    </div>
  }
}