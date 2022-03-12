import React from 'react'
import { GlobalLayout } from '../../styles/GlobalLayout'
import { Section, SubtitleCenter } from '../AnimalsEverywhere/styles'
import { Box} from '../Donors/styles'
import { ImgPlantSide, Quote, QuoteImg, QuoteText } from './styles'
import GirlVisitor_1 from '../../assets/girl-visitor.png'
import GirlVisitor_2 from '../../assets/girl-visitor-2.png'
import GirlVisitor_3 from '../../assets/girl-visitor-3.png'
import { Element } from 'react-scroll/modules'

import Plant_1 from '../../assets/plants_1.png'
export const Testimonials = () => {
  return (
  <Element name='Testimonials'>

    <Section >
      <GlobalLayout>
    

          <SubtitleCenter color='#21D862'>
            Testimonials
            </SubtitleCenter>

          <Box>
              <Quote>
                <QuoteText>The giraffes were beautiful. I had never seen one in front of me</QuoteText>
                <QuoteImg src={GirlVisitor_1}/>
              </Quote>
              <Quote>
                <QuoteText>It is a different experience from other zoos that I went. All tours are amazing  </QuoteText>
                <QuoteImg src={GirlVisitor_2}/>
              </Quote>
              <Quote>
                <QuoteText>The gift store has the cutest stuffed animals I've ever seen. </QuoteText>
                <QuoteImg src={GirlVisitor_3}/>
              </Quote>
          </Box>
      </GlobalLayout>
      <ImgPlantSide src={Plant_1}/>
    </Section>
  </Element>
  )
}
