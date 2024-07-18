import { Outlet, Link } from "react-router-dom";
// import Home from "./Home";
// import { useState } from "react";
// let footer= document.querySelector="footer-con"


export default function Navbar() {
//   const [myStyle, setmyStyle] = useState('');
  

//   const onHandler = () => {
   
//     setmyStyle( 
//     document.body.style.backgroundColor='black',
//     document.body.style.color='white',
// footer.style.backgroundColor='gray'    )
  
//   }

  return (
    <div>
      <nav className="navBar">
        <ul>
            <li id="chashmay">Chashmay</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link>
            </li>
            <li ><a href="">Contact us</a></li>
            <li><Link to="/aboutus" >About us</Link></li>
        </ul>
      </nav>  
      {/* <br /><br /> */}
      <Outlet />

    </div>
  );
}
