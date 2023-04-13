import React from 'react'
import {
  ActivityIMG2,
  MainActInfoDiv,
  MainActivity,
  MainActivity2,
  MainActTitle,
  MainInfo,
  SectionWrapper,
} from './ActivitiesSection.style'

const ActivitiesSection = () => {
  return (
    <SectionWrapper>
      <MainActivity>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1678123706/suyai%20assets/Screenshot_2023-03-06_at_14-26-25_SUYAI_FITNESS_CLUB_suyaifitnessclub_Fotos_y_videos_de_Instagram_qbqayr.png" />
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)' }}>ENTRAMIENTO</MainActTitle>
          <MainInfo>
            Lunes a Viernes: 7:00Hs a 11:00Hs/ 18Hs A 21Hs <br /> Sabados 9Hs A 12:00Hs
          </MainInfo>
        </MainActInfoDiv>
      </MainActivity>
      <MainActivity2>
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)' }}>JIU JITSU</MainActTitle>
          <MainInfo>Lunes a viernes: 19:00Hs A 20.30Hs</MainInfo>
        </MainActInfoDiv>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/jiu-jitsu_cczrie.jpg" />
      </MainActivity2>
      <MainActivity>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/aikido_q97vri.jpg" />
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)' }}>AIKIDO</MainActTitle>
          <MainInfo>Lunes, miercoles y viernes: 17:30Hs Y 20.30Hs</MainInfo>
        </MainActInfoDiv>
      </MainActivity>
      <MainActivity2>
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)', fontSize: '1.8rem' }}>
            Boxeo recreativo y competitivo
          </MainActTitle>
          <MainInfo>Martes y jueves: DE 10Hs A 11:30Hs, 18.30Hs A 20Hs</MainInfo>
        </MainActInfoDiv>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/boxeo-recreativo-competitivo_rvj9tr.jpg" />
      </MainActivity2>
      <MainActivity>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1678126180/suyai%20assets/stretching_cki0yh.jpg" />
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)' }}>STRETCHING</MainActTitle>
          <MainInfo>Martes 20Hs</MainInfo>
        </MainActInfoDiv>
      </MainActivity>
      <MainActivity2>
        <MainActInfoDiv>
          <MainActTitle style={{ fontFamily: 'var(--fuente1)' }}>STRETCHING</MainActTitle>
          <MainInfo>Martes 20Hs</MainInfo>
        </MainActInfoDiv>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/krav_maga_m7wrdt.jpg" />
      </MainActivity2>
    </SectionWrapper>
  )
}

export default ActivitiesSection
