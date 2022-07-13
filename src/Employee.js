import React from 'react'
import AdminService from "./services/AdminService";

export default class Employee extends React.Component
{
  save = (event)=>{
      event.preventDefault()
      var ob = {
        first_name : this.fnamebox.value,
       middle_name : this.mnamebox.value,
       last_name : this.lname.value,
       email : this.emailbox.value,
        mobile_number : this.mobilebox.value,
        dob : this.dobbox.value,
        aniversary_date : this.adatebox.value,
        joining_date : this.jdbox.value,
        father_mother_name : this.fmnbox.value,
        employee_type : this.etypebox.value,
     
     
      }
      var pro = AdminService.createemployee(ob)
      pro.then(response=>response.json())
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  render()
  {
    return <section class="section contact-me" data-section="section4">
    <div class="container">
      <div class="section-heading">
        <h2>Employee Registeration</h2>
        <div class="line-dec"></div>        
      </div>
      <div class="row">
        <div class="right-content">
          <div class="container">
            <form id="contact" 
            onSubmit={this.save}>
              <div class="row">
                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.fnamebox=c}
                      placeholder="First Name..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.mnamebox=c}
                      placeholder="Middle Name..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.lnamebox=c}
                      placeholder="Last Name..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      ref={c=>this.emailbox=c}
                      placeholder="Your email..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="password"
                      class="form-control"
                      ref={c=>this.mobilebox=c}
                      placeholder="Mobile Number..."
                      required
                    />
                  </fieldset>
                </div>


                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      ref={c=>this.dobbox=c}
                      placeholder="DOB..."
                      required
                    />
                  </fieldset>
                </div>

                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      ref={c=>this.adatebox=c}
                      placeholder="Anaversary Date..."
                      required
                    />
                  </fieldset>
                </div>


                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      ref={c=>this.Jdatebox=c}
                      placeholder="Joining Date..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      ref={c=>this.fmnbox=c}
                      placeholder="Father Mother Name..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="text"
                      class="form-control"
                      ref={c=>this.etypebox=c}
                      placeholder="Employee Type..."
                      required
                    />
                  </fieldset>
                </div>
               
                <div class="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="button">
                      Register
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
}