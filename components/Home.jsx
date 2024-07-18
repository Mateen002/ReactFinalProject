import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import './index.css'
import Hero2 from "../components/Hero2";
import Article from "../components/Article";
import Articles from "../components/Article";
import Carousel from "../components/Carousel";
import { ARTICLES } from "../src/data";
import { ArticleLeft } from "../components/Article";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Products from "../components/Products";
import BuyForm from "./BuyForm";
export default function Home(){
    return(
        <>
        <Navbar />

<Hero />
<BuyForm/>

<Hero2 />
<Articles />
<Carousel />
<ArticleLeft
  image={ARTICLES[9].image}
  heading={ARTICLES[9].heading}
  para={ARTICLES[9].para}
  btnText={ARTICLES[9].btnText}
/>
<Contacts />
<Footer />
<Copyright />
        </>
    )
}