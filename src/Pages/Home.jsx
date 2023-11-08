import Form from "./Form";
import Footer from "./Footer" 
function Home(){
    return (
        <div> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> 
            <div className="w-full h-auto">
                <img height={1000} width={800} src="https://www.thepackersmovers.com/blog/wp-content/uploads/2020/02/top-20-reliable-packers-movers-in-india-1.jpg" />
            </div>
        <div>
        <Form/>
        </div>
          </div>  
          <div className="text-center text-2xl w-full mt-6">
    <h1 className="text-3xl font-bold w-full">Packers and Movers Near Me</h1>
    <div className="mt-6">
    Are you looking for the best packers and movers in your area? If so, your search 
    ends here. If you are wondering how to find the best packers and movers near you 
    in your city, check out the below city pages and find the best packers and movers in your area. Through this portal, you will grab free quotes from the top three pre-verified and qualified moving companies that are operating in your city. Then, you can compare the packers and movers charges and find the best deal for your move.


    </div>
</div>
       <div className="mt-10 ">
        <div className="text-center text-3xl font-bold">Our services</div>
        <div className="flex flex-row flex-wrap gap-6 justify-center mt-5">
        <div className="card w-96 bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwWOJDSLIBWO-OUvC7uo2bLydShyELYMSkQ&usqp=CAU" alt="Shoes" className="rounded-xl w-full  " width={300} height={500}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">House Relocation</h2>
    <p>Plan a hassle-free and safe household move anywhere in the country with our packers and movers.</p>
    <div className="card-actions">
       
    </div>
  </div>
</div>
<div className="card w-96 bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img   src="https://img.freepik.com/free-vector/house-moving-illustration_23-2148686376.jpg?w=1060&t=st=1699431244~exp=1699431844~hmac=70ad785774e9cafb0be5827acd4ef9076ab33deda1c1a5ce399d26a7a8790b22 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Office Relocation</h2>
    <p> Office packers and movers companies will safely pack and move your expensive office items within time.</p>
    <div className="card-actions">
       
    </div>
  </div>
</div>
<div className="card w-96 bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img   src="https://www.assureshift.in/sites/default/files/images/content-images/secure-car-shifting-services.jpg" alt="Shoes" className="rounded-xl w-full " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Vehicle Transport</h2>
    <p>Let our reliable bike shifting companies handle your two-wheeler relocation in a hassle-free manner.</p>
    <div className="card-actions">
       
    </div>
  </div>
</div>
        </div>
        </div>   
 
    <div className=" mt-6">
        <div className="text-3xl text-center font-bold mt-6">How it works</div>
        <div className="grid grid-cols-2 justify-center"> 
        <div className="text-center  text-2xl mx-20 ">
        
        Get in touch with best packers and movers matching your moving needs
        </div>

        <div className="w-full">
        <div className="steps steps-vertical">
        <div className="step step-primary">Share your relocation  
         
         </div>
          
        <div className="step step-primary">
Get 3 References of Movers</div>
        <div className="step step-primary">
Plan a pre-move survey</div>
        <div className="step step-primary">Compare & Hire</div>
</div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
    );
}

export default Home;