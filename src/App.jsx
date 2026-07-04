import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SiteMotion from "./components/SiteMotion";
import FloatingActions from "./components/FloatingActions";
import Inicio from "./pages/Inicio";
import ChessCity from "./pages/ChessCity";
import Clases from "./pages/Clases";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import CondicionesUso from "./pages/CondicionesUso";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteMotion />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/chesscity" element={<ChessCity />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/condiciones-de-uso" element={<CondicionesUso />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </>
  );
}
