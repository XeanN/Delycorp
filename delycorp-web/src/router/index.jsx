// src/router/index.jsx
import { Routes, Route } from "react-router-dom";

// Páginas principales
import Home from "../pages/Home";

// Nosotros
import QuienesSomos from "../pages/QuienesSomos";
import Historia from "../pages/Historia";
import NuestroEquipo from "../pages/NuestroEquipo";

// Servicios / Trabajo / Relaciones
import TrabajaConNosotros from "../pages/TrabajaConNosotros";
import Inversionistas from "../pages/Inversionistas";
import Proveedores from "../pages/Proveedores";
import Clientes from "../pages/Clientes";

// NUEVO: Importar Sostenibilidad
import Sostenibilidad from "../pages/Sostenibilidad"; 

// Productos
import ProductCategory from "../pages/ProductCategory";
import ProductDetail from "../pages/ProductDetail";
import CatalogPage from '../pages/CatalogPage';

// Contacto
import Contacto from "../pages/Contacto";

// Noticias
import Noticias from "../pages/Noticias";
import NoticiaDetalle from "../pages/NoticiaDetalle";

export default function AppRouter() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Nosotros */}
      <Route path="/nosotros" element={<QuienesSomos />} />
      <Route path="/nosotros/quienes-somos" element={<QuienesSomos />} />
      <Route path="/nosotros/historia" element={<Historia />} />
      <Route path="/nosotros/nuestro-equipo" element={<NuestroEquipo />} />

      {/* Sostenibilidad (NUEVA RUTA AGREGADA) */}
      <Route path="/sostenibilidad" element={<Sostenibilidad />} />

      {/* Productos */}
      <Route path="/productos" element={<CatalogPage />} />
      <Route path="/productos/:categorySlug" element={<CatalogPage />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/marca/:brandSlug" element={<CatalogPage />} />

      {/* Páginas adicionales */}
      <Route path="/trabaja" element={<TrabajaConNosotros />} />
      <Route path="/inversionistas" element={<Inversionistas />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/clientes" element={<Clientes />} />

      {/* Contacto */}
      <Route path="/contacto" element={<Contacto />} />

      {/* Noticias */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<NoticiaDetalle />} />
    </Routes>
  );
}