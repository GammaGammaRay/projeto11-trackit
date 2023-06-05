// Dependencies
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//Context
import PageContextProvider from "./components/ContextProvider.jsx";

// Pages
import Login from "./pages/LoginPage.jsx";
import RegisterUser from "./pages/RegisterPage.jsx";
import Habitos from "./pages/HabitosPage.jsx";
import Historico from "./pages/HistoricoPage.jsx";
import Hoje from "./pages/HojePage.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const { pathname } = useLocation();

  return (
    <PageContextProvider>
      {pathname !== "/" && pathname !== "/cadastro" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<RegisterUser />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
      {pathname !== "/" && pathname !== "/cadastro" && <Footer />}
    </PageContextProvider>
  );
}

export default App;
