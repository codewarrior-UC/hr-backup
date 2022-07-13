import React,{useState, useEffect} from 'react'
//import { History } from 'react-router-dom'
//import Header from '/header'

export default function EmpRegistration() {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    //const [history, useHistory] = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
         //   history.push("/add")
        }
    },[] )
    function login(){
        console.warn(email,password)
    }
    return (
    <div className="container">       
        <form>
        <div className="form-row">
            <div className="form-group col-md-5">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)}
            />
            </div>
            <div className="form-group col-md-5">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}/>
            </div>
        </div>
                {/* <div className="form-group col-md-5">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-md-5">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                </div> */}
        <button type="submit" className="btn btn-primary" onClick={login}>Sign in</button>
        </form>
    </div>
            
  )
}
