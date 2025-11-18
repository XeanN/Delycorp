    import React from 'react';
    import { Link } from 'react-router-dom';
    import './CorporateSection.css';

    const CorporateSection = () => {
    return (
        <section className="corporate-section">
        <div className="container corporate-grid">
            
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div className="corporate-content">
            <span className="subtitle">SOSTENIBILIDAD Y COMPROMISO</span>
            <h2>Generamos valor para el Perú</h2>
            <p>
                En Delycorp no solo distribuimos productos, entregamos bienestar. 
                Estamos comprometidos con el desarrollo sostenible, apoyando a nuestras 
                comunidades y garantizando la excelencia en cada paso de nuestra cadena de valor.
            </p>
            
            <div className="stats-row">
                <div className="stat-item">
                <span className="number">+15</span>
                <span className="label">Años de Experiencia</span>
                </div>
                <div className="stat-item">
                <span className="number">100%</span>
                <span className="label">Cobertura Nacional</span>
                </div>
            </div>

            <Link to="/sostenibilidad" className="corporate-btn">
                Conoce nuestro impacto
            </Link>
            </div>

            {/* COLUMNA DERECHA: IMAGEN */}
            <div className="corporate-image">
            {/* Imagen de ejemplo: almacén o equipo trabajando */}
            <img 
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop" 
                alt="Delycorp Equipo" 
            />
            {/* Elemento decorativo (cuadro rojo) */}
            <div className="deco-box"></div>
            </div>

        </div>
        </section>
    );
    };

    export default CorporateSection;