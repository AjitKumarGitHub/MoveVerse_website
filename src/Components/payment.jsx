import React from 'react'
import Footer from '../Pages/Footer';
const payment = () => {
  return (
    <div className='h-auto'>
         <div className="bg-slate-300 text-blue-600 p-5 text-left">
         <h2 className="text-3xl font-bold">Make payment</h2>
        </div>
        <div className='flex flex-row justify-around'> 
         
         <div>
          <h2 className='text-3xl text-center font-serif font-bold'>Payment display Info</h2>
          <div>
            <p>Move from</p>
            <p>Move to</p>
            <p>Move type</p>
            <p>Distance covered</p>
            <p>Payment</p>
            <div>
            <button className="btn btn-neutral">Download slip</button>
            </div>
          </div>
        </div>
        <div className='text-right mt-5'>
        
 <div className="mockup-phone border-primary w-auto h-auto ">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1 bg-slate-50 text-slate-300">
        <div>
            <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="" />
             <div className='text-center text-slate-800'><h2>Scan me to payment</h2></div>
        </div>
    </div>
  </div>
</div>
        </div>
        </div>
        <Footer/>
        </div>
  )
}

export default payment;