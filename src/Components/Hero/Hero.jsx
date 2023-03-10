import React from "react";
import {
  HeroButton,
  HeroImg,
  HeroInfo,
  HeroTitle,
  HeroWrapper,
} from "./HeroStyle";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImg src="https://res.cloudinary.com/dpxe6utid/image/upload/v1677773933/suyai%20assets/logo-white-e1599568307152-ov5wy6betpr1eh1ynboavawk3lmtkfdydqfdao9qtc_uex1yn.png" />
      <HeroInfo>
        <HeroTitle>STAY HUNGRY</HeroTitle>
        <HeroButton whileTap={{ scale: 0.95 }}>
          Clase de prueba gratis
        </HeroButton>
      </HeroInfo>
    </HeroWrapper>
  );
};

export default Hero;
