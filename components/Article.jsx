import { ARTICLES } from "../src/data";
import { Outlet, Link } from "react-router-dom";

export default function Articles() {
   
  return (

    <>
      <ArticleLeft
        image={ARTICLES[0].image}
        heading={ARTICLES[0].heading}
        para={ARTICLES[0].para}
        btnText={ARTICLES[0].btnText}
      />

      <ArticleRight
        image={ARTICLES[1].image}
        heading={ARTICLES[1].heading}
        para={ARTICLES[1].para}
        btnText={ARTICLES[1].btnText}
      />

      <ArticleLeft
        image={ARTICLES[2].image}
        heading={ARTICLES[2].heading}
        para={ARTICLES[2].para}
        btnText={ARTICLES[2].btnText}
      />

      <ArticleRight
        image={ARTICLES[3].image}
        heading={ARTICLES[3].heading}
        para={ARTICLES[3].para}
        btnText={ARTICLES[3].btnText}
      />

      <ArticleLeft
        image={ARTICLES[4].image}
        heading={ARTICLES[4].heading}
        para={ARTICLES[4].para}
        btnText={ARTICLES[4].btnText}
      />

      <ArticleRight
        image={ARTICLES[5].image}
        heading={ARTICLES[5].heading}
        para={ARTICLES[5].para}
        btnText={ARTICLES[5].btnText}
      />

      <ArticleLeft
        image={ARTICLES[6].image}
        heading={ARTICLES[6].heading}
        para={ARTICLES[6].para}
        btnText={ARTICLES[6].btnText}
      />

      <ArticleRight
        image={ARTICLES[7].image}
        heading={ARTICLES[7].heading}
        para={ARTICLES[7].para}
        btnText={ARTICLES[7].btnText}
      />
      <ArticleLeft
        image={ARTICLES[8].image}
        heading={ARTICLES[8].heading}
        para={ARTICLES[8].para}
        btnText={ARTICLES[8].btnText}
      />
    </>
  );
}
export function ArticleLeft(props) {
  
  return (
    <>
      <div className="heading"><h2>{props.heading}</h2></div>

      <div className="article-con">
        <div className="article-img">
          <img src={props.image} alt="..." />
        </div>
        <div className="article-para">
          <h1>{props.heading}</h1>

          <p>{props.para}</p>
          <Link to="/products"><button>{props.btnText}</button></Link>
        </div>
      </div>
    </>
  );
}
export function ArticleRight(props) {
  return (
    <>
      <div className="heading">{/* <h2>Best Selling Collections</h2> */}</div>
      <div className="article-con">
        <div className="article-para">
          <h1>{props.heading}</h1>

          <p>{props.para}</p>
          <Link to="/products"><button>{props.btnText}</button></Link>
        </div>

        <div className="article-img">
          <img src={props.image} alt="..." />
        </div>
      </div>
    </>
  );
}
