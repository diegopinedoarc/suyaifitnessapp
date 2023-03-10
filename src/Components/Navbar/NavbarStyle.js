import styled from "styled-components";
import { motion } from "framer-motion";
export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 60%;
  gap: 1.5rem;
  & a {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 624px) {
    display: none;
  }
`;
export const NavButton = styled(motion.button)`
  width: 100%;
  height: 2.8rem;
  padding: 0.5rem;
  background-color: var(--naranjasuyai);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 2px 2px 6px 1px var(--negroheader);
  cursor: pointer;
`;
