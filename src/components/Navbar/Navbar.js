import { Bars, Link, Nav } from "./styles"
import { FaBars} from "react-icons/fa";

export const Navbar = ({isShowing, toggle}) => {

  
  const toggleShow = () =>{
    toggle();
  }


  return (
    <Nav Show={!isShowing}>
        <FaBars onClick={toggleShow}></FaBars>
        <Link 
      smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Donors' >Donors</Link>
        <Link 
      smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Testimonials'>Testimonials</Link>
        <Link 
      smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Events' >Events</Link>
      <Link 
      smooth={true}
      hashSpy={true}
      delay={500}
      duration={500}
      isDynamic={true} to='Galery'>Galery</Link>
      <Link 
      smooth={true}
      hashSpy={true}
      delay={500}
      duration={500}
      isDynamic={true} to='Schedule'>Schedule</Link>
    </Nav>
  )
}
