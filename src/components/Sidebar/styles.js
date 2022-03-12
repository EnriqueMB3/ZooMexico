import {animateScroll as scroll, Link as ScrollLink} from 'react-scroll';

import styled from "styled-components";



export const SidebarContainer  = styled.nav`
    display:none;
    height:100vh; 
    width:100vw;
    position:fixed;
    top: 0;
    left: 0;
    background-color: #0d0d0d;
    opacity: .95;
    transition: 0.3s ease-in-out;
    z-index:2;
    svg{
        color:#21D862;
        position: fixed;
        z-index: 999;
        width: 3rem;
        height: 3rem;
        align-items: center;
        top: 0;
        right:0;
        transition: 0.3s ease-in-out;
        cursor:pointer;
        margin: 1.5rem;
    }
     @media screen and (max-width: 600px) {
       display:${({Show}) =>  Show? 'block' : 'none'  };
    }


`

export const SidebarLink = styled(ScrollLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #21D862;
        transition: 0.2s ease-in-out;
    }

    
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 600px) {
        display:flex;
    
    }
`

export const SidebarWrap  = styled.div`
    display: flex;
    justify-content: center;
    align-items:stretch;
    height:100%;
`

export const SidebarItem = styled.li`
    margin-bottom: 1.5rem;
`