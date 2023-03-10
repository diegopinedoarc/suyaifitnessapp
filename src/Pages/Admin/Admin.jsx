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
import { loadInitialValues } from "../../Formik/initial-values";

const Admin = () => {
  return (
    <AdminWrapper>
      <AdminTitle>¡Bienvenido!</AdminTitle>
      <CargaDatosStyled>
        <h2>Carga de planificacion</h2>
        <Formik initialValues={loadInitialValues}>
          <Form>
            <InputCarga
              name="core"
              htmlFor="core"
              type="text"
              id="core"
              placeholder="Core"
            >
              Core
            </InputCarga>
            <InputCarga
              name="weightlifting"
              htmlFor="weightlifting"
              type="text"
              id="weightlifting"
              placeholder="WeightLifting"
            >
              WeightLifting
            </InputCarga>
            <InputCarga
              name="session"
              htmlFor="session"
              type="text"
              id="session"
              placeholder="Session"
            >
              Session
            </InputCarga>
            <InputCarga
              name="wod"
              htmlFor="wod"
              type="text"
              id="wod"
              placeholder="Wod"
            >
              Wod
            </InputCarga>
            <InputCarga
              name="wod"
              htmlFor="wod"
              type="text"
              id="wod"
              placeholder="Wod"
            >
              Accesesorios
            </InputCarga>
            <Submit>Cargar</Submit>
          </Form>
        </Formik>
      </CargaDatosStyled>
    </AdminWrapper>
  );
};

export default Admin;
