    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaTruckLoading, FaMapMarkedAlt, FaHandshake, FaBoxes } from 'react-icons/fa';
    import './Proveedores.css';

    const Proveedores = () => {
    return (
        <div className="proveedores-page">
        
        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Proveedores</span>
        </div>

        {/* 1. HERO BANNER */}
        <section className="providers-hero">
            <div className="providers-hero-content">
            <h1>Gestión de Proveedores</h1>
            <p>Construimos relaciones sólidas para llevar calidad a todo el Perú.</p>
            </div>
        </section>

        {/* 2. INTRODUCCIÓN */}
        <div className="container">
            <section className="providers-intro">
            <h2>Crezcamos Juntos</h2>
            <p>
                En Delycorp buscamos socios estratégicos que compartan nuestra visión de excelencia. 
                Nuestro objetivo es potenciar las marcas que representamos, garantizando que lleguen 
                a cada rincón del país a través de nuestra robusta red de distribución.
            </p>
            </section>
        </div>

        {/* 3. BENEFICIOS DE SER PROVEEDOR (Datos del PDF) */}
        <section className="providers-benefits">
            <div className="container">
                <h3 style={{textAlign:'center', color:'var(--color-corporate-blue)', fontSize:'1.8rem'}}>
                    ¿Por qué ser socio estratégico de Delycorp?
                </h3>
                
                <div className="benefits-grid">
                    {/* Beneficio 1: Cobertura */}
                    <div className="benefit-card">
                        <FaMapMarkedAlt className="benefit-icon" />
                        <h3>Cobertura Masiva</h3>
                        <p>
                            Llevamos tus productos a más de <strong>15,000 Puntos de Venta</strong> a nivel nacional. 
                            Tu marca tendrá presencia garantizada en todo el territorio.
                        </p>
                    </div>

                    {/* Beneficio 2: Red Comercial */}
                    <div className="benefit-card">
                        <FaHandshake className="benefit-icon" />
                        <h3>Red de Distribuidores</h3>
                        <p>
                            Contamos con una red de más de <strong>170 distribuidores y mayoristas</strong> aliados 
                            que aseguran la rotación y penetración de mercado de tu portafolio.
                        </p>
                    </div>

                    {/* Beneficio 3: Logística */}
                    <div className="benefit-card">
                        <FaTruckLoading className="benefit-icon" />
                        <h3>Logística de Clase Mundial</h3>
                        <p>
                            Ofrecemos almacenes de alta capacidad y seguridad, asegurando la correcta conservación 
                            y distribución eficiente de la mercadería.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. LLAMADO A LA ACCIÓN (Botón final) */}
        <section className="providers-cta-section container">
            <h2 style={{color:'var(--color-text-main)', marginBottom:'15px'}}>¿Deseas formar parte de nuestra red de proveedores?</h2>
            <p style={{color:'#666', marginBottom:'40px', maxWidth:'600px', margin:'0 auto 40px'}}>
                Si cuentas con productos innovadores y buscas un aliado estratégico para expandir tu mercado, queremos conocerte.
            </p>
            
            <a href="mailto:comercialretail@delycorp.pe" className="btn-provider-contact">
                Contactar al Área de Compras
            </a>
        </section>

        </div>
    );
    };

    export default Proveedores;