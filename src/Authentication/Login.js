import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth"
function Login(){
   const[email,setEmail]=useState("")
    const[pass1,setPass1]=useState("")
   
   function chnageEmail(e){
    setEmail(e.target.value)
   }
   function chnagePass1(e){
    setPass1(e.target.value)
   }
   
   const firebaseConfig = {
    apiKey: "AIzaSyCCqxX6DJk1UCuIGBhiWi9J--MWEDkBkrs",
    authDomain: "shopping-1ce96.firebaseapp.com",
    projectId: "shopping-1ce96",
    storageBucket: "shopping-1ce96.appspot.com",
    messagingSenderId: "731356656728",
    appId: "1:731356656728:web:b7023dfe6551aef582862d",
    measurementId: "G-RH5GL4YG4E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
const a=getAuth()
const navigate=useNavigate()
const submitData=(e)=>{
    e.preventDefault()
    let obj={
        email:email,
        password:pass1
    }
    signInWithEmailAndPassword(a,obj.email,obj.password)
    .then(()=>{
        alert("Login SuccessFully")
        navigate('/')
    }).catch(()=>{
        alert("Failed Some error")
    })
 }
    return(
        <div>
            <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <h1><span style={{ color: "orange" }}>MOBILE</span>&nbsp;<span style={{ color: "green" }}>SHOPPING</span></h1>
                         </div>
                </nav>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className="conatainer" style={{width:"400px"}}>
    <div  className="card m-3 p-3" style={{backgroundColor:"burlywood",color:"black"}}>
        <div className="card-title">
            <h1 style={{textAlign:"center",color:"green"}}>LOG IN</h1>
        </div>
        <div className="card-body">
        <form onSubmit={submitData}>
       
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} onChange={chnageEmail} type="email"  required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input value={pass1} onChange={chnagePass1} type="password" required className="form-control" id="exampleInputPassword1"/>
  </div>
 <div style={{display:"flex",justifyContent:"space-between"}}>
  <button type="submit" className="btn btn-primary">LogIn</button>
  <Link to='/' className="btn btn-danger">Back</Link>
 </div><br/>
  <p>New User?<Link to='/register'>Register</Link></p>
</form>
        </div>
    </div>
</div>
        </div></div>
    )
}
export default Login;