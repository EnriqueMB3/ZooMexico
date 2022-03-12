import styled from "styled-components";


export const Event = styled.div`
    max-width: 260px;
    display: grid;
    flex-direction: column;
    gap: 10px;
`

export const ImgEvent = styled.img`
  height: 23rem;
  object-fit: fill;
  @media screen and (max-width: 600px) {
      width: 100%;
    object-fit: cover;

  }
`
export const EventTitle = styled.h3`
    color: white;
    font-size: 2rem;
`

export const ImgPlantLilLeft = styled.img`
    position: absolute;
    left:-5rem;
    height:20rem;
    object-fit: fill;
    transform:  scaleX(-1);
`