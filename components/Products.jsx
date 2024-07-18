import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contacts from "./Contact";
import img1 from "../Products/img1.jpg";
import img2 from "../Products/img2.jpg";
import img3 from "../Products/img3.png";
import img4 from "../Products/img4.png";
import img5 from "../Products/img5.png";
import img6 from "../Products/img6.png";
import img7 from "../Products/img7.png";
import img8 from "../Products/img8.png";
import img9 from "../Products/img9.png";
import img10 from "../Products/img10.png";

import { IMAGES } from "../src/data";

export default function Products() {
  return (
    <>
      <div className="products-con">
        <Product
          image={IMAGES[0].image}
          para1={IMAGES[0].para1}
          para2={IMAGES[0].para2}
          disPrice={IMAGES[0].disPrice}
          price={IMAGES[0].price}
        />
        <Product   image={IMAGES[1].image}
          para1={IMAGES[1].para1}
          para2={IMAGES[1].para2}
          disPrice={IMAGES[1].disPrice}
          price={IMAGES[1].price}
        />
         <Product
          image={IMAGES[2].image}
          para1={IMAGES[2].para1}
          para2={IMAGES[2].para2}
          disPrice={IMAGES[2].disPrice}
          price={IMAGES[2].price}
        />
        <Product   image={IMAGES[3].image}
          para1={IMAGES[3].para1}
          para2={IMAGES[3].para2}
          disPrice={IMAGES[3].disPrice}
          price={IMAGES[3].price}
        />
         <Product
          image={IMAGES[4].image}
          para1={IMAGES[4].para1}
          para2={IMAGES[4].para2}
          disPrice={IMAGES[4].disPrice}
          price={IMAGES[4].price}
        />
        <Product   image={IMAGES[5].image}
          para1={IMAGES[5].para1}
          para2={IMAGES[5].para2}
          disPrice={IMAGES[5].disPrice}
          price={IMAGES[5].price}
        />
         <Product
          image={IMAGES[6].image}
          para1={IMAGES[6].para1}
          para2={IMAGES[6].para2}
          disPrice={IMAGES[6].disPrice}
          price={IMAGES[6].price}
        />
        <Product   image={IMAGES[7].image}
          para1={IMAGES[7].para1}
          para2={IMAGES[7].para2}
          disPrice={IMAGES[7].disPrice}
          price={IMAGES[7].price}
        />
        <Product
          image={IMAGES[8].image}
          para1={IMAGES[8].para1}
          para2={IMAGES[8].para2}
          disPrice={IMAGES[8].disPrice}
          price={IMAGES[8].price}
        />
        <Product   image={IMAGES[9].image}
          para1={IMAGES[9].para1}
          para2={IMAGES[9].para2}
          disPrice={IMAGES[9].disPrice}
          price={IMAGES[9].price}
        />

      </div>
      <Contacts />
      <Footer />
      <Copyright />
    </>
  );
}
export function Product(props) {
  return (
    <>
      <div className="product">
        <img src={props.image} alt="" />
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        <h4>
          <b>{props.disPrice}</b>
          <span>
            <s>{props.price}</s>
          </span>
        </h4>
        <button>Buy Now</button>
      </div>
    </>
  );
}
