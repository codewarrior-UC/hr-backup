import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import Store  from './reduxdata/Store'
import {connect} from 'react-redux'
import { ACTION_LOGOUT } from './reduxdata/actions/UserAction'

var mapStateToProps = (state)=>{ 
  return {
      loginstatus : state.loginstatus,
  }
}

class Menu extends React.Component
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
        <div class="author-content">
          <span>Web Designer</span>
        </div>
        <nav class="main-nav" role="navigation">
          {this.state.loginstatus?<ul class="main-menu">
              <li><Link to="/students">Student List</Link></li>      
              {/* <li><b onClick={this.logout}>Logout</b></li>  
              <li><Link to="/about">About Me</Link></li>      
            <li><Link to="/register">Register</Link></li>   
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/Login">Login</Link></li>   */}
          </ul>:
          <ul class="main-menu">
{/*             
            <li><Link to="/students">Student List</Link></li>      
              <li><b onClick={this.logout}>Logout</b></li>  
              <li><Link to="/about">About Me</Link></li>      
            <li><Link to="/register">Register</Link></li>   
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/Login">Login</Link></li>   */}
            
          </ul>}

        </nav>
      </div>
    </div>
  </div>

  }
}

export default connect(mapStateToProps)(Menu)