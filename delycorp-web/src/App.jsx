<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";

import AppRouter from "./router";

import "./App.css";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CtaSection from './components/CtaSection'; 
import Home from './pages/Home';
// Importamos las 3 páginas nuevas
import QuienesSomos from './pages/QuienesSomos'; 
import Historia from './pages/Historia';
import NuestroEquipo from './pages/NuestroEquipo';
import TrabajaConNosotros from './pages/TrabajaConNosotros';
import Inversionistas from './pages/Inversionistas';
import Proveedores from './pages/Proveedores';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Noticias from './pages/Noticias';
import NoticiaDetalle from './pages/NoticiaDetalle';
import './App.css';
>>>>>>> 024310b4c7e7942599b1766250bfcca4700b1ca0

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
<<<<<<< HEAD
          <AppRouter />
=======
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* --- RUTAS SEPARADAS DE NOSOTROS --- */}
            <Route path="/nosotros/quienes-somos" element={<QuienesSomos />} />
            <Route path="/nosotros/historia" element={<Historia />} />
            <Route path="/nosotros/nuestro-equipo" element={<NuestroEquipo />} />
            {/* Si alguien va solo a /nosotros, lo redirigimos a la primera subpágina */}
            <Route path="/nosotros" element={<QuienesSomos />} /> 

            {/* Rutas de Productos */}
            <Route path="/productos/:category" element={<ProductCategory />} />
            <Route path="/productos" element={<ProductCategory />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            {/* Agrega esto dentro de <Routes> */}
            <Route path="/trabaja" element={<TrabajaConNosotros />} />
            <Route path="/inversionistas" element={<Inversionistas />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetalle />} />
          </Routes>
>>>>>>> 024310b4c7e7942599b1766250bfcca4700b1ca0
        </main>
        <CtaSection />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
