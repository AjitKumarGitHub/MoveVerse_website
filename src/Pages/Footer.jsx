const Footer=()=>{
    return (
        <div className="bg-slate-300 ">
            <div className="flex flex-row flex-wrap justify-center space-x-5">
            <div className="social-links text-2xl ">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <div>
            <h2 className="text-2xl font-bold">Company Info</h2>
            <div>
            <p>About us</p>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
            <p>Customer reviews</p>
            <p>FAQ</p>
            <p>Contact us</p>
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold">Services</h2>
            <div>
                <p>Packers movers by city</p>
                <p>Bike transport</p>
                <p>Office relocation</p>
                <p>Home relocation</p>
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold">News and Media</h2>
            <div>
                <p>Moving stories</p>
                <p>Success stories</p>
                <p>Media room</p>
                <p>blog</p>
                <p>News</p>
                <p>Web stories</p>
            </div>
        </div>
            </div>
         <div className="footer-content text-center">
        <p>&copy; 2023 MoveVerse Company</p>
         
      </div>
        </div>
    )
}

export default Footer;