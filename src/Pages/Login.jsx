import { useState } from 'react';
 
import {useNavigate} from "react-router-dom";
 import { auth } from '../Firebase';
 import {signInWithEmailAndPassword} from "firebase/auth";
  

function Login(){

    const navigate=useNavigate();
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
     const [errorMsg,setErrorMsg]=useState("");
    
    const [getEmail,setEmail]=useState("");
    const [getPassword,setPassword]=useState("");
    
    const emailHandler=(event)=>{
       setEmail(event.target.value);
    }
    const passwordHandler=(event)=>{
      setPassword(event.target.value);
    }
     
    const handleSubmission=(event)=>{
         event.preventDefault();

         if(!getEmail||!getPassword){
             setErrorMsg("fill all fields");
          return;
         }
       
      setSubmitButtonDisabled(true);
       signInWithEmailAndPassword(auth,getEmail,getPassword).then(async(response)=>{
           
           navigate("/Home");
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

   
       return ( <> 
          <div className='h-screen'> 
          <div className="bg-slate-300 text-blue-600 p-5 text-left">
         <h2 className="text-3xl font-bold">Login</h2>
        </div>
         <div className="form-container">
            
         
            <form >
                <h2 className='sign'>Login</h2>
                
                <label htmlFor="email"> Your Email</label> <br></br>
                <input className='text-white' type="email" value={getEmail} name="email" id="email" placeholder="write your email"  onChange={emailHandler}/><br></br>
                <label htmlFor="pwd">Password</label><br></br>
                <input className='text-white' type="number" value={getPassword} name="pwd" id="pwd" placeholder="write your password"  onChange={passwordHandler}/><br></br>
                
                    <h3>{errorMsg}</h3>
                <button type="submit" className="btn" onClick={handleSubmission} disabled={submitButtonDisabled}>Submit</button>
                <div> 
                </div>
            </form>
            
        </div>
        </div>
        </>);
}
export default Login;