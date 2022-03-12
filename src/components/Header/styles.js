import styled from "styled-components";
import  Header  from "../../assets/header.png";


export const Title = styled.h1`
    font-size: 10rem;
    color:white;
    line-height: 10.5rem;
    @media screen and (max-width: 600px) {
        font-size: 6rem;
        line-height: 6.5rem;
    }
`
export const Paragraph = styled.p`
    color: ${ ({color}) => color || 'white'};
    font-size: 1.6rem;
    margin-top: 1rem;
    @media screen and (max-width: 600px) {
        margin-right: 1rem;
    }
   
   
`
export const HeaderTitle = styled.header`
    margin-top: 10rem;
    margin-bottom: 10rem;
    z-index:1;
`
export const Imge = styled.div`
    background-color: red;
    width:100%;
    background-repeat: no-repeat;
    background-image:  ${ ({Background}) =>  `url(${Background || Header})` } ;
    background-size: cover;
    background-position: 20% 70%;
    font-size: 1.6rem;
    
    
`
export const ImgPlant = styled.img`
    position: absolute;
    right:0px;
    height:65rem;
    object-fit: fill;
` 