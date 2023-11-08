 import Footer from "./Footer";
function Contact(){
        
    return (
        <>
        <div >
         <div className="bg-slate-300 text-blue-600 p-5 text-left">
         <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 space-x-8">
            <div className="mt-4 text-center ">
                <h2 className="text-3xl font-bold mb-2 pb-3">Get In Touch</h2>
                <form action="">
                    <input className="bg-white input input-bordered input-secondary w-full max-w-xl" type="text" placeholder="Person Name" />
                    <input className="bg-white input input-bordered input-secondary w-full max-w-xl" type="email" name="" id="" placeholder="Email" />
                    <input className="bg-white input input-bordered input-secondary w-full max-w-xl" type="number" name="" id="" placeholder="number"/>
                    <input className="bg-white input input-bordered input-secondary w-full max-w-xl" type="text" name="" id="" placeholder="city" />
                    
                    <textarea className="bg-white input input-bordered input-secondary w-full max-w-xl" cols={78} placeholder="write message"/>
                <div>
                <button className="btn btn-active btn-secondary">Send Message</button>
                </div>
               
                </form>
            </div>
            <div className="bg-pink-300">
                <div className="ml-5">
                    <h2 className="text-3xl font-bold mb-2 pb-3">Contact Information</h2>
                    <p>91+ 9658647241</p>
                    <p>91+ 7845968542</p>
                    <p>91+ 8651726941</p>
                    <p>91+ 5547584885</p>
                </div>
                <div className="ml-5">
                    <h2 className="text-3xl font-bold mb-2 pb-3">Mail Address </h2>
                    <p>abc112@gmail.com</p>
                    <p>xyz123@gmail.com</p>
                    <p>sdta152@gmail.com</p>
                </div>
                <div className="ml-5">
                    <h2 className="text-3xl font-bold mb-2 pb-3">Registered office</h2>
                    <p>ashok Rajpath block-b near nitp 
                        800005, Patna
                    </p>
                </div>
            </div>
        </div>
         <div className="mt-6">
         <Footer/>
         </div>
        
    </div>
    
</>
    );
}

export default Contact;