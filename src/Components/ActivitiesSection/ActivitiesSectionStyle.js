import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 1rem;
  @media only screen and (max-width: 624px) {
    justify-content: space-around;
    gap: 1rem;
  }
`;
export const MainActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    width: 95%;

    height: 30rem;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 26rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    width: 95%;
    /* margin-top: 3rem;
    margin-bottom: 3.5rem; */
    height: 60rem;
  }
`;
export const DivContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 26rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column;
    width: 95%;
    /* margin-top: 3rem;
    margin-bottom: 3.5rem; */
    height: 90rem;
  }
`;

export const SecondaryActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 24rem;
  @media only screen and (max-width: 624px) {
    width: 70%;
  }
`;
export const SecondaryActivity2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 24rem;
  @media only screen and (max-width: 624px) {
    width: 70%;
  }
`;
export const ActivityIMG = styled.img`
  width: 18rem;
  border-radius: 1rem 1rem 0rem 0rem;
`;
export const ActivityIMG2 = styled.img`
  width: 18rem;
  border-radius: 0rem 1rem 1rem 0rem;
  @media only screen and (max-width: 624px) {
    border-radius: 1rem 1rem 1rem 1rem;
    position: relative;
    top: -12rem;
    z-index: -1;
  }
`;
export const ActivityIMG3 = styled.img`
  width: 18rem;
  border-radius: 1rem 0rem 0rem 1rem;
  @media only screen and (max-width: 624px) {
    display: none;
  }
`;
export const MainActTitle = styled.h2`
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
`;

export const MainActInfoDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  width: 50%;

  @media only screen and (max-width: 624px) {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    position: relative;
    top: 2rem;
    width: 70%;
    border-radius: 0.4rem;
  }
`;
export const MainInfo = styled.p``;
export const SecondaryInfo = styled.p``;

export const SecondaryActTitle = styled.h2``;

export const SecondaryActInfoDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 3rem;
  flex-direction: column;
  width: 60%;
  position: relative;
  top: -5rem;

  @media only screen and (max-width: 624px) {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    position: relative;
    top: -20rem;
    width: 100%;
    border-radius: 0.4rem;
  }
`;
