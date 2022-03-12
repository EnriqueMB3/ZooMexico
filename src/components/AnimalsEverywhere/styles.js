import styled from "styled-components";

export const SectionContent = styled.section`
    display:grid;

`

export const SubtitleCenter = styled.h2`
    font-size: 5rem;
    color: ${ ({color}) => color || 'white'};
    letter-spacing:.2rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
`
export const Section = styled.section`
    padding: ${({pleft, pright, pheight, pbottom }) =>  `${ pheight || '10'}rem 0rem ${ pbottom || '10'}rem 0rem` };
    background-color: ${({backgroundColor}) => backgroundColor ||  '#fff'};
`
export const Paragraph = styled.section`
    color:white;
    font-size: 1.4rem;
    height: 5rem;
`

export const ImgPlantLil2Left = styled.img`
    position: absolute;
    left:-5rem;
    height:20rem;
    object-fit: fill;
    transform:  scaleX(-1);
`
