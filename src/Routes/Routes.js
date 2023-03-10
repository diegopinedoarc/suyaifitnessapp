import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Benchmarks from "../Pages/Benchmarks/Benchmarks";
import UserLanding from "../Pages/UserLanding/UserLanding";
import Admin from "../Pages/Admin/Admin";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/benchmarks" element={<Benchmarks />} />
      <Route path="/userlanding" element={<UserLanding />} />
      <Route path="/admin" element={<Admin />} />
    </ReactDomRoutes>
  );
};

export default Routes;
