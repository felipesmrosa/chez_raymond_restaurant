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
          {/* Página inicial, que pode ser a home */}
          <Route path="/" element={<Geral />} />
          <Route path="/reservas" element={<ReservationForm />} /> {/* Página de reservas */}
          <Route path="/eventos" element={<EventsForm />} /> {/* Página de eventos */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
