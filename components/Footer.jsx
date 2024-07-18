import { Outlet, Link } from "react-router-dom";


export default function Footer(){
    return(
        <div className="footer-con">
            <div className="footers">
                <h2>Categories</h2>
                <ul>

                <a href=""><li>Transitions</li></a>
               <a href=""> <li>New Arrivals</li></a>
                <a href=""><li>Sunglasses</li></a>
               <a href=""> <li>Computer glasses</li></a>
                <a href=""><li>Prescription glasses</li></a>
            </ul>

            </div>
            <div className="footers">
            <h2>Quick Links</h2>
                <ul>

               <a href=""> <li><Link to="/">Home</Link></li></a>
                <a href=""><li><Link to="/products">Our Products</Link></li></a>
                <a href=""><li>Contact Us</li></a>
               <a href=""> <li>About Us</li>   </a>
            </ul>
            </div>
            <div className="footers">
            <h2>Get in touch</h2>
                <ul>

               <a href=""> <li>03200095612</li></a>
              <a href="">  <li>unique.eyewear1@gmail.com</li></a>
             
            </ul>
            </div>
        </div>
    )
}