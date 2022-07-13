// import React,{useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
// //import { Link } from "react-router-dom";

//   function Login(){
//     const[email, setEmail]=  useState("");
//     const[password, setPassword]=  useState("");
// const history = useHistory();


//     useEffect(()=>{
//       if(localStorage.getItem('user-info')){
//         history.push("/add")

//       }
//     },[])


//   return (
//     <>
//     <div>
//         <input  type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Enter Your Email" required/>
//         <input  type="password"  onChange={(e)=>setPassword(e.target.value)} name="joining" id="joining" placeholder="Enter Your joiningday" required/>
//         <button> Yes</button>
//         </div>
//     </>
//   );
// }

// export default Login;