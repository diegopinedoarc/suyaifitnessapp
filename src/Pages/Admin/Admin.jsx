import React from "react";
import InputCarga from "../../Components/InputCarga/InputCarga";
import {
  AdminTitle,
  AdminWrapper,
  CargaDatosStyled,
  Formik,
  Form,
} from "./AdminStyles";
import Submit from "../../Components/Submit/Submit";

const Admin = () => {
  return (
    <AdminWrapper>
      <AdminTitle>¡Bienvenido!</AdminTitle>
      <CargaDatosStyled>
        <h2>Carga de planificacion</h2>
        <Formik>
          <Form>
            <InputCarga
              name="core"
              htmlFor="coree"
              type="text"
              id="core"
              placeholder="Core"
            >
              Core
            </InputCarga>
            <InputCarga
              name="WeightLifting"
              htmlFor="WeightLifting"
              type="text"
              id="WeightLifting"
              placeholder="WeightLifting"
            >
              WeightLifting
            </InputCarga>
            <InputCarga
              name="Session"
              htmlFor="Session"
              type="text"
              id="Session"
              placeholder="Session"
            >
              Session
            </InputCarga>
            <InputCarga
              name="Wod"
              htmlFor="Wod"
              type="text"
              id="Wod"
              placeholder="Wod"
            >
              Wod
            </InputCarga>
            <Submit>Cargar</Submit>
          </Form>
        </Formik>
      </CargaDatosStyled>
    </AdminWrapper>
  );
};

export default Admin;
