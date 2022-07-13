import React, { Component } from 'react'

export class Anniversary extends Component {
  render() {
    return (
      
        <section>
        <div className="container">
      <h2>Anniversary Cake</h2>
            {/* <h2>Anniversary</h2>
        <p>-dropdown-</p>
        <p>Anniversary cake</p>
        <p>dinner at nearest restorant</p> */}
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
                <br/>
                <br/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>{console.log("HAPPY Anniversary")}}>Get your Cake Delivered</button>
      </div>
      <br/><br/>
      </section>
    
    )
  }
}

export default Anniversary