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
import Footer from "./components/Footer.jsx";
import { UserContext } from "./components/Context.js";

axios.defaults.headers.common["Authorization"] = "5wY65Pq5uCOFfh5yfnMVGhIF";

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
              <Footer />
              <Habitos />
            </>
          }
        />
        <Route
          path="/hoje"
          element={
            <>
              <Navbar />
              <Footer />
              <Hoje />
            </>
          }
        />
        <Route
          path="/historico"
          element={
            <>
              <Navbar />
              <Footer />
              <Historico />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
