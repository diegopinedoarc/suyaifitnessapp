import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper, NavButton } from "./NavbarStyle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./">
          Home
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./contact">
          Contacto
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./benchmarks">
          Benchmarks
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./userlanding">
          PlaniWeb
        </Link>
      </motion.div>
      {/* <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./login">
          Turnos Web
        </Link>
      </motion.div> */}
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./login">
          <NavButton>Login</NavButton>
        </Link>
      </motion.div>
    </NavbarWrapper>
  );
};

export default Navbar;
