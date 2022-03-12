import { Link } from "react-scroll/modules";
import styled from "styled-components";


export const TitleSite = styled.h3`
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 2rem;
` 

export const ItemSite = styled.li`
    font-size: 1.2rem;
    color:#A9B2AC;
    display:flex;
    align-items: center;
   svg{
       margin-right: .8rem;
   }
    div svg{
        font-size: 2rem;
        margin-right: .8rem;
    }
    margin-top: .8rem;
`

export const ItemLink = styled(Link)`
    font-size: 1.2rem;
    color:#A9B2AC;
    display:flex;
    align-items: center;
    cursor: pointer;
    margin-top: .8rem;
`

export const ButtonSuscribe = styled.button`
    background-color: ${ ({backgroundColor}) => backgroundColor || '#21D862'};
    color: ${ ({color}) => color || 'white'};
    width: 100%;
    margin-top: .8rem;
    text-align:center;
    font-size: 1.5rem;
    padding: 1rem;
    cursor:pointer;
    border-radius: 2px;
`

export const Input = styled.input`
    background-color: ${ ({backgroundColor}) => backgroundColor || '#1E3626'};
    color: ${ ({color}) => color || 'white'};
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    margin-top: .8rem;
    border-radius: 2px;
`

export const SiteMapItem = styled.div`
 @media screen and (max-width: 600px) {
       margin: auto;
       min-width: 250px;
    }
`