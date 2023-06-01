// Dependencies
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import ResetStyle from "./style/ResetStyle.js";
import styled from "styled-components";
import axios from "axios";
// Pages
import Login from "./screens/Login.jsx";
import RegisterUser from "./screens/RegisterUser.jsx";
import Habitos from "./screens/Habitos.jsx";
import Historico from "./screens/Historico.jsx";
import Hoje from "./screens/Hoje.jsx";
// Components
import Navbar from "./components/Navbar.jsx";




function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ResetStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<RegisterUser />} />
        <Route
          path="/habitos"
          element={
            <>
              <Navbar />
              <Habitos />
            </>
          }
        />
        <Route
          path="/hoje"
          element={
            <>
              <Navbar />
              <Hoje />
            </>
          }
        />
        <Route
          path="/historico"
          element={
            <>
              <Navbar />
              <Historico />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
