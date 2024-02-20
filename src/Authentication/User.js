import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
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
  const auth=getAuth()
  export function UserAuth(){
    const[user,setUser]=useState("")
    useEffect(()=>{
      let x= onAuthStateChanged(auth,user=>setUser(user))
      return x
    })
    return user
  }