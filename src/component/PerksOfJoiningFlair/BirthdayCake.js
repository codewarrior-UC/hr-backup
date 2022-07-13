import React, { Component } from 'react'

export class BirthdayCake extends Component {
  render() {
    return (
        <section>
        <div className="container">
      <h2>BirthdayCake</h2>
            {/* <h3>FORM</h3>
            <h4>-1- dropdown -- -cakesize- [1/2Kg or 1kg]-</h4>
                <h4>text</h4> */}
        
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select your cake
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/">None</a>
                    <a class="dropdown-item" href="/">Chocolate</a>
                    <a class="dropdown-item" href="/">Vanila</a>
                    <a class="dropdown-item" href="/">ButterScotch</a>
                    <a class="dropdown-item" href="/">Pinapple</a>
                </div>
                <br/><br/>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={()=>{console.log("HAPPY Birthday")}}>Get your Cake Delivered</button>
      </div>
      <br/><br/>
      </section>
    )
  }
}

export default BirthdayCake

