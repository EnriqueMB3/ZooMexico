import React from 'react'
import { GlobalLayout } from '../../styles/GlobalLayout'
import { Section, SectionContent, SubtitleCenter } from '../AnimalsEverywhere/styles'
import { ComplementSubeLeft } from '../Donate/styles'
import Event_1 from '../../assets/event1.png'
import Event_2 from '../../assets/event2.png'
import Event_3 from '../../assets/event3.png'
import { Box} from '../Donors/styles'
import { Event, EventTitle, ImgEvent, ImgPlantLilLeft } from './styles'
import { Paragraph } from '../AnimalsEverywhere/styles'
import { Element } from 'react-scroll/modules'
import Plant_2 from '../../assets/plants_2.png'

export const Events = () => {
  return (
    <Element name='Events'>
        <Section backgroundColor='#6A1D28'>
            <GlobalLayout>
                <SectionContent>
                    <SubtitleCenter>Events</SubtitleCenter>
                    <ComplementSubeLeft align ='center' color='#DCA976'>We wait for you to come</ComplementSubeLeft>

                    <Box>
                        <Event>
                            <ImgEvent src={Event_1}/>
                            <EventTitle>The Axolotes just arrive</EventTitle>
                            <Paragraph>Come to know them in the herpetary. Remember that in the three packages: Diamond, Premier and GuadaZoo is include in the access to herpetary. We wait for you.</Paragraph>
                        </Event>
                        
                        <Event>
                            <ImgEvent src={Event_2}/>
                            <EventTitle>Interaction with manatees</EventTitle>
                            <Paragraph>Confused with mermaids for the big size and the facility to swim. Lorenzillo y Clau arraive, the most adorable couple of manatees.</Paragraph>
                        </Event>

                        <Event>
                            <ImgEvent src={Event_3}/>
                            <EventTitle>I care me, I care you</EventTitle>
                            <Paragraph>To follow enyoing the days in the free air and a lot of sun, the family time and be surrounded by the nature  we must to follow to the letter all the indications.</Paragraph>
                        </Event>
                    </Box>

                </SectionContent>
            </GlobalLayout>
            <ImgPlantLilLeft src={Plant_2}/>
        </Section>
    </Element>

  )
}
