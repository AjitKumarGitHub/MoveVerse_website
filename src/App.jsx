import {React, useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
 import SignUp from "./Pages/SignUp";
 import Login from "./Pages/Login";
 import Payment from "./Components/payment";
 //import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App(){

    //  const [userName,setUserName]=useState("");
    //  useEffect(()=>{
    //   auth.onAuthStateChanged((user)=>{
    //     if(user){
    //       setUserName(user.displayName);
    //     } else setUserName("");
    //   })
    //  },[]);


  return(
    <div>
       <Header/>
       <Routes>
         
        <Route path="/" element={<Home />}/> 
        <Route path="/Contact Us" element={<Contact />}/> 
        <Route path="/About Us" element={<About />}/> 
        <Route path="/SignUp" element={<SignUp />}/> 
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/payment" element={<Payment/>}/> 
       </Routes>
    </div>
  ) ;
}
export default App;