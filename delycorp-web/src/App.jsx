import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // 1. Importar Footer
import CtaSection from './components/CtaSection'; // 1. Importar aquí
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory'; // <--- NUEVO
import ProductDetail from './pages/ProductDetail';     // <--- NUEVO
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<div style={{paddingTop: '150px', textAlign:'center'}}><h1>Página Nosotros</h1></div>} />
            {/* RUTAS DINÁMICAS DE PRODUCTOS */}
            {/* Esta ruta atrapa: /productos/chocolateria, /productos/dulces, etc. */}
            <Route path="/productos/:category" element={<ProductCategory />} />
            
            {/* Ruta para todos los productos (usaremos Chocolatería por defecto o puedes crear una página 'All') */}
            <Route path="/productos" element={<ProductCategory />} />

            {/* Ruta detalle producto */}
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<div style={{paddingTop: '150px', textAlign:'center'}}><h1>Contáctanos</h1></div>} />
          </Routes>
        </main>
        {/* 2. Colocar el CTA aquí para que sea GLOBAL (en todas las páginas) */}
        <CtaSection />
        
        <Footer /> {/* 2. Colocar Footer aquí, al final */}
      </div>
    </BrowserRouter>
  );
}

export default App;