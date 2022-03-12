import styled from "styled-components";

export const SectionImgSide = styled.section`
    display: grid;
    background-color: ${({backgroundColor}) => backgroundColor ||  '#fff'};
 `

export const ImgSide = styled.img`
    height: 70rem;
    object-fit:cover;
    @media screen and (max-width: 600px) {
        width:100vw;
        height: 60rem;
    }
`

export const BoxImgSide = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
  
`

export const BoxSideText = styled.div`
    display: flex;
    justify-content:center;
    width:100%;
    flex-direction: column;
    margin: 0rem 10rem;
    flex: 1 1 0;
    @media screen and (max-width: 600px) {
        justify-content:center;
        flex-direction: column;
        margin: 0rem 1rem;
        padding: 4rem 4rem;
       
    }

`
export const SubtitleLeft = styled.h2`
    font-size: 5rem;
    color: ${ ({color}) => color || 'white'};
    letter-spacing:.2rem;
    text-transform: uppercase;
  
    
`

export const ComplementSubeLeft = styled.h3`
    font-size: 4rem;
    color: ${ ({color}) => color || 'white'};
    margin-bottom: 3rem;
    text-transform: none;
    font-weight:lighter;
    text-align: ${ ({align}) => align || 'left'};
    @media screen and (max-width: 600px) {
        font-size: 3rem;   
        margin-bottom: 2rem;

    }
`

export const ButtonAction = styled.h3`
    background-color: ${ ({backgroundColor}) => backgroundColor || '#21D862'};
    color: ${ ({color}) => color || 'white'};
    max-width: 15rem;
    margin-top: 3rem;
    text-align:center;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2px;
    @media screen and (max-width: 600px) {
        margin-bottom: 2rem;
        margin-top: 2rem;


    }
`

export const ImgPlantLeft = styled.img`
    position: absolute;
    left:-5rem;
    height:28rem;
    object-fit: fill;
    margin-top: -16rem;
`

export const ImgPlantRight = styled.img`
    position: absolute;
    right:-5rem;
    height:18rem;
    object-fit: fill;
    margin-top: -10rem;
    transform: scaleX(-1);
`

