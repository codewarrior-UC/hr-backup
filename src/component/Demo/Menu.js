import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Menu extends Component {
  render() {
    return (
      <div>

<h1>This is menu component</h1>
<nav>
<ul>
    <li>
        <Link to="/">Login</Link>
    </li>
    
    <li>
        <Link to="/Navbr">Navbr</Link>
    </li>
    
    <li>
        <Link to="/Emp">Emp</Link>
    </li>
    
    <li>
        <Link to="/EmpM">EmpM</Link>
    </li>
</ul>

</nav>


      </div>
    )
  }
}

export default Menu