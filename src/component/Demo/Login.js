import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminService from '../Services/AdminService'
//import { Home } from '../Home'
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '',
            islogin: false
        }
    }
    login = (event) => {
        var ob = {
            email: this.emailbox.value,
            password: this.passbox.value
        }
        AdminService.AdminLogin(ob)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    this.setState({ islogin: true })
                    console.log("login success")
                }
                else
                    this.setState({ msg: "Invalid email or Password !" })
                   
                    
            })
            .catch(err => {
                console.log(err)
            })
        event.preventDefault()
    }
    render() {
       if(this.state.islogin){
       return (<><Navigate to="/Home"/></>)
    }
       else  
        return (
          <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" width="300px" height="350px"
                            alt="login form" className="img-fluid"  />
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <form id="contact" onSubmit={this.login}>
                                <div className="d-flex align-items-center mb-3 pb-1">
                                    <i className="fas fa-cubes fa-2x me-3" ></i>
                                    <span className="h1 fw-bold mb-0">FLAiR </span>
                                </div>
                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>
                                <div className="form-outline mb-4">
                                    <input
                                   id="emailid"
                                   type="text"
                                    className="form-control"
                                    ref={(c) => (this.emailbox = c)}
                                    placeholder="email ..."
                                    required
                                     />
                                    <label className="form-label"  htmlFor="emailid">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input 
                                     id="passw"
                                    type="password"
                                    className="form-control"
                                    ref={(c) => (this.passbox = c)}
                                    placeholder="Password..."
                                    required
                                    />
                                    <label className="form-label"  htmlFor="passw">Password</label>
                                </div>
                                <div className="pt-1 mb-4">
                                    <button 
                                    className="btn btn-dark btn-lg btn-block" 
                                     type="submit"
                                     id="form-submit" >
                                  Login</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </section>
        );
    }
}