import React from 'react'
import { SidebarContainer, SidebarItem, SidebarLink, SidebarMenu, SidebarWrap } from './styles'

import { FaTimes} from "react-icons/fa";
import { Logo } from '../Logo/Logo';

export const Sidebar = ({isShowing, toggle}) => {


    const toggleShow = () =>{
     
        toggle();
    }
   
  
  return (
    <SidebarContainer Show={isShowing} >
        <FaTimes onClick={toggleShow}></FaTimes>
    
        <SidebarWrap>
            <SidebarMenu>
                <SidebarItem>
                <SidebarLink onClick={toggleShow} smooth={true}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                  isDynamic={true} to='Home'>
                    <Logo  width="1.6rem" />
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink onClick={toggleShow} smooth={true}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                   isDynamic={true} to='Donors'>
                        Donors
                    </SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink onClick={toggleShow} smooth={true}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                     isDynamic={true} to='Events' >
                        Events
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink smooth={true} onClick={toggleShow}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                   isDynamic={true}  to='Testimonials'>
                        Testimonials
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink smooth={true} onClick={toggleShow}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                  isDynamic={true} to='Galery'>
                        Galery
                    </SidebarLink>
                </SidebarItem>

                <SidebarItem>
                    <SidebarLink smooth={true} onClick={toggleShow}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                  isDynamic={true} to='Schedule'>
                        Schedule
                    </SidebarLink>
                </SidebarItem>
                



            </SidebarMenu>
        </SidebarWrap>
    </SidebarContainer>
  )
}
