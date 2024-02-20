import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  function chnageName(e) {
    setName(e.target.value)
  }
  function chnageEmail(e) {
    setEmail(e.target.value)
  }
  function chnagePass1(e) {
    setPass1(e.target.value)
  }
  function chnagePass2(e) {
    setPass2(e.target.value)
  }
  const navigate = useNavigate()

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
  const auth = getAuth()
  const submitData = (e) => {
    e.preventDefault()
    let obj = {
      email: email,
      password: pass1
    }
    console.log(obj)
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        alert("Register SuccessFully")
        navigate('/login')
      }).catch(() => {
        alert("Failed Some error")
      })
  }
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <h1><span style={{ color: "orange" }}>MOBILE</span>&nbsp;<span style={{ color: "green" }}>SHOPPING</span></h1>
                         </div>
                </nav>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div className="conatainer" style={{ width: "450px", padding: "20px" }}>
        <div className="card m-2 " style={{ backgroundColor: "burlywood", color: "black" }}>
          <div className="card-title">
            <h1 style={{ textAlign: "center", color: "green" }}>REGISTER FORM</h1>
          </div>
          <div className="card-body">
            <form onSubmit={submitData}>
              <div classNameName="mb-3">
                <label className="form-label">Name</label>
                <input value={name} onChange={chnageName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div classNameName="mb-3">
                <label className="form-label">Email address</label>
                <input value={email} onChange={chnageEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input value={pass1} onChange={chnagePass1} type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label className="form-label">Conform Password</label>
                <input value={pass2} onChange={chnagePass2} type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <button type="submit" className="btn btn-primary">Sign Up</button>
              <Link to='/' className="btn btn-danger">Back</Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div></div>
  )
}
export default Register;