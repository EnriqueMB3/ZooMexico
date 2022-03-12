import { Navbar } from "../Navbar/Navbar"
import {Logo} from '../Logo/Logo'
import { Paragraph, Title, HeaderTitle, Imge, ImgPlant } from "./styles" 
import { GlobalLayout } from "../../styles/GlobalLayout"
import { Element } from "react-scroll/modules"
import { Sidebar } from "../Sidebar/Sidebar"
import useSidebar from "../../hooks/useSidebar"
import Plant_3 from '../../assets/plants_3.png'

export const Header = () => {

  const { isShowing, toggle } = useSidebar();


  return (
    <Element name='Home'>
      <Imge>
        <ImgPlant src={Plant_3}/>
    <GlobalLayout>
      <Sidebar isShowing={isShowing} toggle={toggle} />

        <Navbar  isShowing={isShowing}toggle={toggle}/>
        <Logo/>
        <HeaderTitle>
          <Title>
              FULL OF <br/>  ADVENTURE
          </Title>
          <Paragraph>
              Zoo México has adapted to this era of digitalization, comibining <br/>
              interest in our amazing species with massive power of <br/> social media
          </Paragraph>
        </HeaderTitle>
    </GlobalLayout>
      </Imge>
    </Element>
  )
}
