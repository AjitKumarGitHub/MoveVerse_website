const Form=()=>{
    return(
       <div className="w-full h-auto ">
        <div className="bg-slate-300 shadow-lg box-content w-full "> 
        <form >
                <h2 className='text-3xl font-bold text-blue-700'>Input Your Details</h2>
                <div className="grid grid-cols-2 gap-1">
                  <div>
                  <label htmlFor="name">Your Name</label><br></br>
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white" type="text"  name="name" id="name" placeholder="write your name"/><br></br>
                <label htmlFor="email"> Your Email</label> <br></br>
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="email"  name="email" id="email" placeholder="write your email"  /><br></br>
                <label htmlFor="pwd">Password</label><br></br>
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="number"  name="pwd" id="pwd" placeholder="write your password"/><br></br>
                <label htmlFor="name">Mobile No.</label><br></br>
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="text"  name="name" id="name" placeholder="write your number"/><br></br>
                <label htmlFor="name">Date of relocation</label><br></br>
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="text"  name="name" id="name" placeholder="write date"/><br></br> 
                  </div>
                  <div>
                   
                 
                <label htmlFor="name">Move type</label><br></br> 
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="text"  name="name" id="name" placeholder="write move type"/><br></br>
                <label htmlFor="name">Move from</label><br></br> 
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="text"  name="name" id="name" placeholder="Move from"/><br></br>
                <label htmlFor="name">Move to</label><br></br> 
                <input className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  type="text"  name="name" id="name" placeholder="Move to"/><br></br>
                <textarea className="input inpput-bordered input-secondary w-full max-w-xs bg-white"  rows={5} cols={45} placeholder="Please mention all items you would like to move?" />
                {/* <button className="btn btn-active btn-secondary md:text-center">Submit</button> */}
                  </div>
                  {/* <button className="btn btn-active btn-secondary text-left md:text-center">Submit</button> */}
                </div>
                <button className="btn btn-active btn-secondary text-left md:text-center">Submit</button>
                 
                {/* <button type="submit" className="btn" >Submit</button> */}
                <div> 
                   
                {/* <button className="btn btn-active btn-secondary text-left md:text-center">Submit</button> */}
                </div>


            </form>
            {/* <button className="btn btn-active  btn-secondary  md:text-center">Submit</button> */}
      </div>
      
        </div>
    )
}

export default Form;