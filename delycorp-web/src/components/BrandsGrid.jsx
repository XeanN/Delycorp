    import React from 'react';
    import { Link } from 'react-router-dom';
    import './BrandsGrid.css';

    const BrandsGrid = () => {
    // DATOS DE EJEMPLO: Reemplaza con tus categorías reales
    const categories = [
        {
        id: 1,
        title: "Dulces",
        image: "https://images.unsplash.com/photo-1582058928278-013a2ccbdc8c?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Dulces"
        },
        {
        id: 2,
        title: "Chocolatería",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Chocolatería"
        },
        {
        id: 3,
        title: "Bebidas",
        image: "https://images.unsplash.com/photo-1623652557934-a0ee703e5432?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Bebidas"
        },
        {
        id: 4,
        title: "Cuidado de hogar",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Cuidado de hogar"
        },
        {
        id: 5,
        title: "Enlatados",
        image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Enlatados"
        },
        {
        id: 6,
        title: "Productos de campaña",
        image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=800&auto=format&fit=crop",
        link: "/productos/Productos de campaña"
        }
    ];

        return (
        <section className="brands-section">
        <div className="container">
            <div className="section-header">
            <h2 className="section-title">Nuestras Categorías</h2>
            <p className="section-subtitle">Descubre la variedad de productos de calidad que distribuimos.</p>
            </div>

            {/* La Cuadrícula */}
            <div className="grid-container">
            {categories.map((cat) => (
                <Link to={cat.link} key={cat.id} className="brand-card">
                <div className="card-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                <div className="card-overlay">
                    <h3>{cat.title}</h3>
                    <span className="view-more">Ver Productos</span>
                </div>
                </Link>
            ))}
            </div>

            {/* --- NUEVO: BOTÓN VER TODOS LOS PRODUCTOS --- */}
            <div className="view-all-container">
            <Link to="/productos" className="btn-view-all">
                Ver todos los productos
            </Link>
            </div>

        </div>
        </section>
    );
    };

    export default BrandsGrid;