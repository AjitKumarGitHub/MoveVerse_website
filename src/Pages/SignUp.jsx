 import { useState } from 'react';
import './SignUp.css';
import { Link , useNavigate} from "react-router-dom";
 import { auth } from '../Firebase';
 import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
 
function SignUp(){
          const navigate=useNavigate();
          const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
           const [errorMsg,setErrorMsg]=useState("");
          const [getName,setName]=useState("");
          const [getEmail,setEmail]=useState("");
          const [getPassword,setPassword]=useState("");
          const nameHandler=(event)=>{
               setName(event.target.value);
          }
          const emailHandler=(event)=>{
             setEmail(event.target.value);
          }
          const passwordHandler=(event)=>{
            setPassword(event.target.value);
          }
           
          const handleSubmission=(event)=>{
               event.preventDefault();

               if(!getName||!getEmail||!getPassword){
                   setErrorMsg("Please fill all fields before submit");
                return;
               }
             
            setSubmitButtonDisabled(true);
             createUserWithEmailAndPassword(auth,getEmail,getPassword).then(async(response)=>{
                 const user=response.user;
                await updateProfile(user,{
                     displayName: getName,
                 });
                 navigate("/Login");
                setSubmitButtonDisabled(false);

             }).catch((err)=>{
                setErrorMsg(err.error);
                setSubmitButtonDisabled(false);
             });
             setErrorMsg("");
            //    setEmail("");
            //    setPassword("");
            //    setName("");

               
          }

     return (
        <> 
        <div className='h-screen'> 
        <div className="bg-slate-300 text-blue-600 p-5 text-left">
         <h2 className="text-3xl font-bold">SignUp</h2>
        </div>
        <div className="form-container">
             
            <form >
                <h2 className='sign'>Sign Up</h2>
                <label htmlFor="name">Your Name</label><br></br>
                <input type="text" value={getName} name="name" id="name" placeholder="write your name" onChange={nameHandler}/><br></br>
                <label htmlFor="email"> Your Email</label> <br></br>
                <input type="email" value={getEmail} name="email" id="email" placeholder="write your email"  onChange={emailHandler}/><br></br>
                <label htmlFor="pwd">Password</label><br></br>
                <input type="number" value={getPassword} name="pwd" id="pwd" placeholder="write your password"  onChange={passwordHandler}/><br></br>
                <div> 
                    <h3>{errorMsg}</h3>
                <button type="submit" className="btn" onClick={handleSubmission} disabled={submitButtonDisabled}>Submit</button>
                </div>
            </form>
            <p className='pid'>Have you already SignUp? <Link to="/Login">Login</Link></p>
        </div>
        </div>
        </>
     );
}
export default SignUp;