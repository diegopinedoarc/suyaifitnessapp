import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../Components/LoginInput/LoginInput";
import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginPasswordStyled,
  LoginEmailStyled,
} from "./LoginStyle";
const Login = () => {
  return (
    <LoginContainerStyled>
      <h2>Iniciar Sesión</h2>
      <Formik>
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/forgot-password">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type="button">
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
