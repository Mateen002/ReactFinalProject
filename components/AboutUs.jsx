import { ArticleLeft } from "./Article";
import { ARTICLES } from "../src/data";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Contacts from "./Contact";

export default function AboutUs(){
    return(
        <>
        <div className="about-con">
            <h1>About Us</h1>
            <p>Lorem, ipsum doldddddddd dor sit amet consectetur adipisicing elit. Et aut rerum quos, accusantium possimus similique, dolorum tempora illum ipsum commodi assumenda laudantium aliquid, eveniet eius maiores necessitatibus ullam suscipit minus temporibus sit perspiciatis adipisci laboriosam? Minus error veritatis sed id?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti nulla eum porro dolorem fugiat ipsa libero mollitia consequuntur omnis ratione adipisci, recusandae rerum est expedita qui! Modi, quos sint?</p><br /><br />
            <ArticleLeft
  image={ARTICLES[9].image}
  heading={ARTICLES[9].heading}
  para={ARTICLES[9].para}
  btnText={ARTICLES[9].btnText}
  />
        </div>
        <Contacts />
      <Footer />
      <Copyright />
        </>
    )
}