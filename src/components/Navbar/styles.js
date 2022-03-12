
import styled from "styled-components";
import {animateScroll as scroll, Link as ScrollLink} from 'react-scroll';


export const Nav = styled.nav` 
    display: flex;
    justify-content: end;
    gap:30px;
    padding:10px;
    font-size:12pt;
    svg{
        display: none;
    }
    @media screen and (max-width: 600px) {
      
     a{
         display: none;
     }
       
     svg{
         color:#21D862;
         position: fixed;
         z-index: 999;
         width: 3rem;
         opacity:1;
         height: 3rem;
         align-items: center;
         top: 0;
         right: 0; 
         transition: 0.3s ease-in-out;
         cursor:pointer;
         margin: 1.5rem;
         display:${({Show}) =>  Show? 'block' : 'none'  };
     }
    }
`

export const Link = styled(ScrollLink)` 
    font-weight: bold;
    color:white;
    cursor: pointer;
`

