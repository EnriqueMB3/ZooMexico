import React from 'react'
import { GlobalLayout } from '../../styles/GlobalLayout'
import {  Section, SubtitleCenter } from '../AnimalsEverywhere/styles'
import { Paragraph } from '../Header/styles'
import Oxxo from '../../assets/oxxo.png'
import Cinempolis from '../../assets/cinepolis.png'
import Barcel from '../../assets/barcel.png'
import Samsung from '../../assets/samsung.png'
import { Box, ImgDonor, ImgPlantLil, ImgPlantLil2 } from './styles'
import { Element } from 'react-scroll/modules'

import Plant_2 from '../../assets/plants_2.png'


export const Donors = () => {
  return (
    <Element name='Donors'>
      <Section>
          <GlobalLayout>
              <SubtitleCenter color='#21D862'>
                  Donors
              </SubtitleCenter>
              <Paragraph color='666666'>
              Zoo México is for everyone interested in learning about the animal world. We have twenty years preserving species and caring for the environment through different associations committed to the flora and fauna of protected areas.   
              Our mission goes beyond showing animals, we want every visitor to take away the experience of knowing the different species of the world and learn about the value they have while having fun with the different dynamics in our well-known tours. 
              </Paragraph>

              <Box>
                  <ImgDonor src={Oxxo} alt='oxxo' height={'8rem'} />
                  <ImgDonor src={Samsung} alt='samsung'  />
                  <ImgDonor src={Cinempolis} alt='cinepolis' />
                  <ImgDonor src={Barcel} alt='barcel' />
              </Box>

          </GlobalLayout>
      </Section>
      <ImgPlantLil src={Plant_2}/>
      <ImgPlantLil2 src={Plant_2}/>

    </Element>

  )
}
