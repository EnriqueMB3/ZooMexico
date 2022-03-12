import React from 'react'
import { Imge } from '../Header/styles'
import Shark from '../../assets/shark.png'
import { Box, ImgPlantLil, ImgPlantLil2 } from '../Donors/styles'
import { GlobalLayout } from '../../styles/GlobalLayout'
import { ContainImg, ImgGalery } from './styles'
import {  SectionContent, SubtitleCenter } from '../AnimalsEverywhere/styles'
import Galery_1 from '../../assets/galery-1.png'
import Galery_2 from '../../assets/galery-2.png'
import Galery_3 from '../../assets/galery-3.png'
import Galery_4 from '../../assets/galery-4.png'
import Galery_5 from '../../assets/galery-5.png'
// import Galery_6 from '../../assets/galery-6.png'
import Galery_7 from '../../assets/e49.jpg'
import { Element } from 'react-scroll/modules'

import Plant_2 from '../../assets/plants_2.png'
import Plant_4 from '../../assets/plants_4.png'

import { ImgPlantLeft } from '../Donate/styles'
export const Galery = () => {
  return (
    <Element name='Galery'>
      <Imge Background={Shark}>

      <ContainImg>
          
          <GlobalLayout>
              <SectionContent>

          <SubtitleCenter>Galery</SubtitleCenter>
              <Box verticalMargin='8'>
                  <ImgGalery src={Galery_4} />
                  <ImgGalery src={Galery_3} />
                  <ImgGalery src={Galery_5} />
                  <ImgGalery src={Galery_1} />
                  <ImgGalery src={Galery_7} />
                  <ImgGalery src={Galery_2} />

              </Box>
              </SectionContent>
          </GlobalLayout>

      </ContainImg>

      </Imge>
      <ImgPlantLil src={Plant_2}/>
      <ImgPlantLil2 src={Plant_2}/>
      <ImgPlantLeft src={Plant_4}/>
    </Element>
  )
}
