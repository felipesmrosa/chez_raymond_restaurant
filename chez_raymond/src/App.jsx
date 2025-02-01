import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Importando os componentes
import { Header } from "./Components/Header/Index";
import { Footer } from "./Components/Footer/Index";
import { FloatingWhatsapp } from "./Components/Whatsapp/Index";

// Importando as páginas para as rotas
import { EventsForm } from "./Components/Formularios/Eventos/Index";
import { Geral } from "./Components/Index";
import { HeaderEventos } from "./Components/Header/HeaderEvents";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/eventos" ? <HeaderEventos /> : <Header />}
      <FloatingWhatsapp />
      <Routes>
        <Route path="/" element={<Geral />} />
        <Route path="/eventos" element={<EventsForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
