import React from 'react'

function Emp() {
  return (

      <section>
        <crud/>
    <form onSubmit={()=>{console.log("store data in database")}}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">Name:</label>
      <input type="text" className="form-control" id="" placeholder="Full Name"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputAddress">Address:</label>
      <input type="text" className="form-control" id="" placeholder="Address"/>
    </div>
  </div>
  <div className="form-row col-md-6">
    <div className="form-group">
        <label for="inputPhoneNo.">PhoneNo.</label>
        <input type="number" className="form-control" id="" placeholder="ex-9101667263"/>
    </div>
    </div>  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
      <br/>
    </div>
  </div>

    <div className="input-group date" data-provide="datepicker">  
        <div>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"/>
        </div>
    </div>
<p></p>    
    <div className="input-group date" data-provide="datepicker">             
        <label for="Anniversary">Anniversary:</label>
        <input type="date" id="birthday" name="birthday"/>
    </div>

  <button type="submit" className="btn btn-primary" onClick={()=>{console.log("HAPPY HACKING")}}>Sign in</button>
</form>
<br/><br/>
</section>
  )
}


export default Emp