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
    gap: 2rem;
  }
`;
export const MainActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 24rem;

  @media only screen and (max-width: 624px) {
    flex-direction: column;
    width: 95%;
    height: 30rem;
    gap: 0.5rem;
    padding: 0.3rem;
    margin-bottom: 0.4rem;
  }
`;

export const ActivityIMG2 = styled.img`
  width: 22rem;
  border-radius: 0rem 1rem 1rem 0rem;
  @media only screen and (max-width: 624px) {
    border-radius: 1rem 1rem 1rem 1rem;
    position: relative;
    top: 2rem;
    z-index: -1;
  }
`;

export const MainActInfoDiv = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 30%;
  border: 3px solid white;
  padding: 2rem;
  border-radius: 0.4rem;

  @media only screen and (max-width: 624px) {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    position: relative;
    top: 2rem;
    width: 100%;
    border-radius: 0.4rem;
    justify-content: center;
    align-items: center;
  }
`;
export const MainActTitle = styled.h2`
  color: var(--naranjasuyai);
  font-size: 3rem;
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
`;
export const MainInfo = styled.p``;
export const SecondaryInfo = styled.p`
  color: var(--naranjasuyai);
`;
export const MainActivity2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 24rem;
  @media only screen and (max-width: 624px) {
    flex-direction: column-reverse;
    width: 95%;
    height: 32rem;
    gap: 0.5rem;
    padding: 0.3rem;
    margin-bottom: 0.4rem;
  }
`;
