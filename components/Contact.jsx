import needhelp from "../icons/needhelp.svg";
import email from "../icons/email.svg";
import phone from "../icons/phone.svg";




const ICONS = [
    {
        image: needhelp,
        heading: 'Need Help',
        para: 'Help Center'

    },

    {
        image: phone,
        heading: 'Phone Support',
        para: '03200095612'
    },

    {
        image: email,
        heading: 'Email Support',
        para: 'unique.eyewear1@gmail.com'
    }
]

export default function Contacts() {
  return (
    <div className="contact-con">
      <Contact 
      image={ICONS[0].image}
      heading={ICONS[0].heading}
      para={ICONS[0].para}
      />
      <Contact
       image={ICONS[1].image}
       heading={ICONS[1].heading}
       para={ICONS[1].para}
       />
      <Contact 
       image={ICONS[2].image}
       heading={ICONS[2].heading}
       para={ICONS[2].para}
      />
    </div>
  );
}
export function Contact(props) {
    return(
  <>
    <div className="contact">
      <a href=""><img src={props.image} alt="" /></a>
      <span>
    
       <a href=""> <h4>{props.heading}</h4></a>
       <a href=""> <p>{props.para}</p></a>
      </span>
    </div>
  </>
  )
}
