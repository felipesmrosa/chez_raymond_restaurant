import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando os componentes
import { Header } from "./Components/Header/Index";
import { Footer } from "./Components/Footer/Index";
import { FloatingWhatsapp } from "./Components/Whatsapp/Index";

// Importando as páginas para as rotas
import { ReservationForm } from "./Components/Formularios/Reservas/Index";
import { EventsForm } from "./Components/Formularios/Eventos/Index";
import { Geral } from "./Components/Index";

export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FloatingWhatsapp />
        <Routes>
          <Route path="/" element={<Geral />} />
          <Route path="/reservas" element={<ReservationForm />} />
          <Route path="/eventos" element={<EventsForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
