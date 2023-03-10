import React from "react";
import {
  ActivityIMG,
  ActivityIMG2,
  ActivityIMG3,
  DivContainer,
  DivContainer2,
  MainActInfoDiv,
  MainActivity,
  MainActTitle,
  MainInfo,
  SecondaryActInfoDiv,
  SecondaryActivity,
  SecondaryActivity2,
  SecondaryActTitle,
  SecondaryInfo,
  SectionWrapper,
} from "./ActivitiesSectionStyle";

const ActivitiesSection = () => {
  return (
    <SectionWrapper>
      <MainActivity>
        <ActivityIMG3 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1678123706/suyai%20assets/Screenshot_2023-03-06_at_14-26-25_SUYAI_FITNESS_CLUB_suyaifitnessclub_Fotos_y_videos_de_Instagram_qbqayr.png" />
        <MainActInfoDiv>
          <MainActTitle style={{}}>ENTRENAMIENTO</MainActTitle>
          <MainInfo>
            LUNES A VIERNES 7:00 a 11:00 Y 18 A 21 HRS SABADOS 18:00 A 21:00 Hs
          </MainInfo>
        </MainActInfoDiv>
        <ActivityIMG2 src="https://res.cloudinary.com/dpxe6utid/image/upload/v1678123706/suyai%20assets/Screenshot_2023-03-06_at_14-26-25_SUYAI_FITNESS_CLUB_suyaifitnessclub_Fotos_y_videos_de_Instagram_qbqayr.png" />
      </MainActivity>
      <DivContainer>
        <SecondaryActivity>
          <ActivityIMG
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/jiu-jitsu_cczrie.jpg"
          />
          <SecondaryActInfoDiv>
            <SecondaryActTitle>Jiujitsu</SecondaryActTitle>
            <SecondaryInfo>LUNES A VIERNES 19:00 A 20.30Hs</SecondaryInfo>
          </SecondaryActInfoDiv>
        </SecondaryActivity>
        <SecondaryActivity>
          <ActivityIMG
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/aikido_q97vri.jpg"
          />
          <SecondaryActInfoDiv>
            <SecondaryActTitle>Aikido</SecondaryActTitle>
            <SecondaryInfo>
              LUNES MIERCOLES Y VIERNES 17:30 Y 20.30Hs
            </SecondaryInfo>
          </SecondaryActInfoDiv>
        </SecondaryActivity>
      </DivContainer>
      <DivContainer2>
        <SecondaryActivity2>
          <ActivityIMG src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/boxeo-recreativo-competitivo_rvj9tr.jpg" />

          <SecondaryActInfoDiv>
            <SecondaryActTitle>Boxeo recreativo</SecondaryActTitle>
            <SecondaryInfo>
              MARTES Y JUEVES DE 10 A 11:30 y 18.30 A 20Hs
            </SecondaryInfo>
          </SecondaryActInfoDiv>
        </SecondaryActivity2>
        <SecondaryActivity2>
          <ActivityIMG src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/krav_maga_m7wrdt.jpg" />
          <SecondaryActInfoDiv>
            <SecondaryActTitle>Kravmaga</SecondaryActTitle>
            <SecondaryInfo>MARTES Y JUEVES 20:30Hs</SecondaryInfo>
          </SecondaryActInfoDiv>
        </SecondaryActivity2>
        <SecondaryActivity2>
          <ActivityIMG src="https://res.cloudinary.com/dpxe6utid/image/upload/v1678126180/suyai%20assets/stretching_cki0yh.jpg" />
          <SecondaryActInfoDiv>
            <SecondaryActTitle>Streching</SecondaryActTitle>
            <SecondaryInfo>MARTES 20Hs</SecondaryInfo>
          </SecondaryActInfoDiv>
        </SecondaryActivity2>
      </DivContainer2>
    </SectionWrapper>
  );
};

export default ActivitiesSection;
