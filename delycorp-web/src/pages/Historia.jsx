import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './NosotrosShared.css'; 

const Historia = () => {
    // Definición de enlaces para el menú lateral (aunque no esté visible)
    const internalLinks = [
        { name: "Quiénes Somos", slug: "quienes-somos" },
        { name: "Historia", slug: "historia" },
        { name: "Nuestro Equipo", slug: "nuestro-equipo" },
        { name: "Valores Corporativos", slug: "valores-corporativos" },
    ];
    
    const location = useLocation();

    return (
        <div className="nosotros-subpage historia-page">
            
            {/* Breadcrumb: Inicio > Quiénes Somos > Historia */}
            <div className="breadcrumb-bar container">
                <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
                <Link to="/nosotros/quienes-somos" className="breadcrumb-link">Quiénes Somos</Link> <FaChevronRight className="breadcrumb-arrow" /> 
                <span className="breadcrumb-current">Historia</span>
            </div>
            
            <div className="container subpage-content-grid single-column"> 
                
                
                <main className="main-page-content quienes-somos-content-wrapper">
                    
                    {/* BLOQUE DE CONTENIDO (Misma estructura de grid 3fr/2fr) */}
                    <div className="quienes-somos-content">
                        
                        {/* Bloque Izquierdo (Texto de Historia) */}
                        <div className="content-left-text">
                            <p className="sub-title">CÓMO EMPEZÓ TODO</p>
                            <h1 className="page-main-title">Nuestra Historia</h1>
                            
                            <p className="intro-paragraph">
                                Nuestro fundador inició esta aventura con una experiencia previa en el rubro de consumo masivo por más de 15 años. 
                                En el año 2016, tomó la decisión de ingresar al rubro de golosinas importadas, buscando comercializar productos que generen el efecto ¡Wow! por su innovación, calidad y precio.
                            </p>
                            
                            <hr className="title-divider" />

                            <p className="secondary-info">
                                Hoy en día, gracias a nuestro equipo y clientes, hemos destacado como una empresa referente en el rubro de golosinas importadas a nivel nacional. Nuestra visión se mantiene: ser cómplices de tus momentos especiales.
                            </p>
                        </div>
                        
                        {/* Bloque Derecho (Imagen - Historia) */}
                        <div className="content-right-image">
                            <img 
                                src="https://images.unsplash.com/photo-1542844510-18e95085d386?q=80&w=1000&auto=format&fit=crop"
                                alt="Historia de la compañía" 
                            />
                        </div>
                        
                    </div>
                    
                </main>
            </div>
        </div>
    );
};

export default Historia;