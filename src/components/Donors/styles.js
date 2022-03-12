import styled from "styled-components";


export const Box = styled.div`
    display: flex;
    justify-content:space-between;
    margin: ${({verticalMargin}) => `${verticalMargin || '4'}rem 0rem`   } ;
    align-items: ${({alignVertical}) => `${alignVertical || 'center'}`   } ;
    flex-wrap: wrap-reverse;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content:center;
        gap: 5rem;
      
    }
    
`

export const ImgDonor = styled.img`
    object-fit: contain;
    height: ${({height}) => height || '5rem' };
    @media screen and (max-width: 600px) {
        height: ${({height}) => height || '5rem' };
    }
`

export const ImgPlantLil = styled.img`
    position: absolute;
    right:-5rem;
    height:20rem;
    object-fit: fill;
    transform:  scaleX(-1);
    margin-top: -8rem;
`

export const ImgPlantLil2 = styled.img`
    position: absolute;
    right:-15rem;
    margin-top: -12rem;
    height:20rem;
    object-fit: fill;
  

`