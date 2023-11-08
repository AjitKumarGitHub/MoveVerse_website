import React from "react";
import { Link } from "react-router-dom";
function Header(){
   return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-3xl font-serif" href="#">MoveVerse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         
          <Link className="nav-link active text-white" to="/Home">home</Link>
        </li>
        <li className="nav-item">
       
          <Link className="nav-link" to="/Contact Us">contact Us</Link>
        </li>

        <li className="nav-item">
           
          <Link className="nav-link" to="/About Us">about Us</Link>
        </li>

        <li className="nav-item">
           
           <Link className="nav-link" to="/Signup">signUp</Link>
         </li>
         <li className="nav-item">
           
           <Link className="nav-link" to="/Login">login</Link>
         </li>
        </ul>
        
    </div>
  </div>
</nav>

 
    </div>
   );
}

export default Header;