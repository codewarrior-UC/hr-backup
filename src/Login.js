import React from 'react'
import { Navigate } from 'react-router-dom';
import AdminService from "./services/AdminService";



export default class Login extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      msg : '',
      islogin : false
    }
  }
  login = (event)=>
  {
    var ob = {
      email: this.emailbox.value,
      password : this.passbox.value
    }
    AdminService.AdminLogin(ob)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      if(data.success)
      {
          this.setState({ islogin: true })
           console.log("login success")   
           localStorage.setItem('token',data.data.token)
      } 
   
      else
        this.setState({msg:"Invalid Email or Password !"})  
      

    })
    .catch(err=>{
      console.log(err)
    })
    event.preventDefault()
  }

  render()
  {
    if(this.state.islogin)
      return <Navigate to="/Home"/>
    else  
    return <section class="section contact-me" data-section="section4">
    <div class="container">
      <div class="section-heading">
        <h2>Admin Login</h2>
        <div class="line-dec"></div>        
      </div>
      <div class="row">
        <div class="right-content">
          <div class="container">
            <form id="contact" onSubmit={this.login}>
              <div class="row">
                <div class="col-md-6">
                  <fieldset>
                    <input                     
                      type="text"
                      class="form-control"
                      ref={c=>this.emailbox=c}
                      placeholder="Email..."
                      required
                    />
                  </fieldset>
                </div>              
                <div class="col-md-6">
                  <fieldset>
                    <input
                      type="password"
                      class="form-control"
                      ref={c=>this.passbox=c}
                      placeholder="Password..."
                      required
                    />
                  </fieldset>
                </div>
                <div class="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="button">
                      Login
                    </button>
                    &nbsp;
                    <b className='text-danger'>{this.state.msg}</b>
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