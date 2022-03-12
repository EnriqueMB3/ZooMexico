import React from 'react'
import { GlobalLayout } from '../../styles/GlobalLayout'
import { Section } from '../AnimalsEverywhere/styles'
import { Box } from '../Donors/styles'
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { ButtonSuscribe, Input, ItemLink, ItemSite, SiteMapItem, TitleSite } from './styles';
import { Element } from 'react-scroll/modules';

export const Sitemap = () => {
  return (
      <Element name='Schedule'>
        <Section backgroundColor='#082311' pheight='2'>
            <GlobalLayout>
                <Box alignVertical='start'>
                    <SiteMapItem>
                        <TitleSite>Zoo Mexico</TitleSite>
                        <ul>
                            <ItemSite>Av. Heroes #343 Col. Nation, México City</ItemSite>
                            <ItemSite> <FaPhoneSquareAlt/>  +52 865 123 458</ItemSite>
                            <ItemSite>info.zomexico@zoomexico.com</ItemSite>
                            <ItemSite> 
                                <div>

                                <FaInstagramSquare/>
                                <FaTwitterSquare/>
                                <FaFacebookSquare/>
                                </div>
                            </ItemSite>

                        </ul>
                    </SiteMapItem>
                    
                    <SiteMapItem>
                        <TitleSite>Our Newsletter</TitleSite>
                        <ul>
                            <ItemSite>Suscribe and get letters our news and update </ItemSite>
                            <Input type={'text'} placeholder={'Email'}></Input>
                            <ButtonSuscribe backgroundColor='#3B3B3B'>Suscribe</ButtonSuscribe>

                        </ul>
                    </SiteMapItem>

                    <SiteMapItem>
                        <TitleSite>Schedule</TitleSite>
                        <ul>
                            <ItemSite>Scholar  Season:<br/> Tuesday to Sunday  10:00 am to 6:00 pm</ItemSite>
                            <ItemSite>Vacational  Season: <br/> Monday to Sunday  9:30 am to 6:00 pm</ItemSite>
    

                        </ul>
                    </SiteMapItem>

                    <SiteMapItem>
                        <TitleSite>Explore</TitleSite>
                        <ul>
                            <ItemLink  smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Home'>
                                
                                Animals Everywhere
                                
                                </ItemLink>
                            <ItemLink smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Testimonials'>Testimonials</ItemLink>
                            <ItemLink smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Donate'>Donate</ItemLink>
              
              <ItemLink smooth={true}
      hashSpy={true}
      duration={500}
      delay={500}
      isDynamic={true} to='Donors'>Donors</ItemLink>
                        </ul>
                    </SiteMapItem>
                </Box>
            </GlobalLayout>
        </Section>
      </Element>
  )
}
