import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./index.css" ;
import Store  from './reduxdata/Store'
import {connect} from 'react-redux'
import { ACTION_LOGOUT } from './reduxdata/actions/UserAction'

var mapStateToProps = (state)=>{ 
  return {
      loginstatus : state.loginstatus,
  }
}

class Navbar extends React.Component
{
  constructor(){
    super()
    this.state = {
           islogout : false
    }
  }
  
  logout = ()=>{
    Store.dispatch({
      ...ACTION_LOGOUT
    })
    //this.setState({islogout:true})
  }
  render()
  {
    if(this.state.islogout)
      return <Navigate to="/"/>
    else  
    return<div class="responsive-nav">
    <i class="fa fa-bars" id="menu-toggle"></i>
    <div id="menu" class="menu">
      <i class="fa fa-times" id="menu-close"></i>
      <div class="container">
        <div class="image">
          <a href="/#"><img src="assets/images/author-image.jpg" alt="" /></a>
        </div>
        <div class="author-content scale-up-center">
          {/* <h4>
          {this.props.loginstatus?this.props.userName:"BIPS College"}</h4> */}
          <span><h3>gift Think</h3></span>
        </div>
        <nav class="main-nav" role="navigation">
          {this.state.loginstatus?<ul class="main-menu">
               <li><Link to="/employeelist">Employee List</Link></li>      
          </ul>:
          <ul class="main-menu">
             <li><Link to="/Employee">Employee</Link></li>  
            <li><Link to="/EmployeeList">EmployeeList</Link></li>      
            <li><Link to="/EmployeerList">EmployeerList</Link></li>    
            <li><Link to="/AdminList">AdminList</Link></li>    
            <li><Link to="/Orderlist">OrderList</Link></li>   
            <li><Link to="/Placeorder">placeorder</Link></li>   
          </ul>}
        </nav>
      </div>
    </div>
  </div>
  }
}
export default connect(mapStateToProps)(Navbar)