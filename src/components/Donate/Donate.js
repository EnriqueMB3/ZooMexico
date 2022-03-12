import React from 'react'
import { Element } from 'react-scroll/modules'
import Lemur from '../../assets/lemur.png'
import { Paragraph } from '../Header/styles'
import { BoxImgSide, BoxSideText, ButtonAction, ComplementSubeLeft, ImgSide, SectionImgSide, SubtitleLeft, ImgPlantLeft, ImgPlantRight } from './styles'
import Plant_1 from '../../assets/plants_1.png'
import Plant_4 from '../../assets/plants_4.png'

export const Donate = () => {
  return (
    <Element name='Donate'>
      <SectionImgSide backgroundColor='#6A1D28'>
      
      <BoxImgSide>
          
          
          <ImgSide src={Lemur} />
          <BoxSideText>
              <SubtitleLeft>Donate</SubtitleLeft>
              <ComplementSubeLeft color='#DCA976'>Help us to care more species</ComplementSubeLeft>
              <Paragraph>Be part of our community means be part of us, all years we try to care more animals and invest to investigation team for reach places around the world and understand  things about the animals we care and the new ones</Paragraph>
              <ButtonAction> Donate</ButtonAction>
          </BoxSideText>

      
      </BoxImgSide>
      
      </SectionImgSide>
      <ImgPlantLeft src={Plant_4}/>
      <ImgPlantRight src={Plant_1}/>

    </Element>

  )
}
