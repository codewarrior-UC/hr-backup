import React from 'react'
import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom'
import EmployeeList from './EmployeeList'
import EmployeerList from './EmployeerList'
import AdminList from './AdminList'
import Employee  from './Employee'
import Orderlist from './Orderlist'

export default class App extends React.Component
{
  render()
  {
    return <div>
       
<Navbar/>
        <Routes>
          {/* <Route path="/" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}/> */}
          <Route path="/" element={<EmployeeList/>}/>
          <Route path="/EmployeerList" element={<EmployeerList/>}/>
          <Route path="/AdminList" element={<AdminList/>}/>
          <Route path="/Employee" element={<Employee/>}/>
          <Route path="/Orderlist" element={<Orderlist/>}/>
          {/* <Route path="/Filt" element={<Filt/>}/>
         */}
        </Routes>
    </div>
  }
}