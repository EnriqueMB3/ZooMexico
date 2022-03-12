import React from 'react'
import { GlobalLayout } from '../../styles/GlobalLayout'
import { Paragraph } from '../Header/styles'
import { SectionContent, SubtitleCenter, Section, ImgPlantLil2Left } from './styles'
import Plant_2 from '../../assets/plants_2.png'
export const AnimalsEverywhere = () => {
  return (
      <Section backgroundColor='#6A1D28'>

      <GlobalLayout>

        <SectionContent>
            <SubtitleCenter>ANIMALS EVERYWHERE</SubtitleCenter>
            <Paragraph>
            Zoo México is for everyone interested in learning about the animal world. We have twenty   years preserving species and caring for the environment through different associations committed to the flora and fauna of protected areas. <br/>
            Our mission goes beyond showing animals, we want every visitor to take away the experience of knowing the different species of the world and learn about the value they have while having fun  with the different  dynamics in our well-known tours. 
            </Paragraph>
         
        </SectionContent>
      </GlobalLayout>
      <ImgPlantLil2Left src={Plant_2}/>
      </Section>
  )
}
