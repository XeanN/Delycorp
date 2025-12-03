    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaChartLine, FaHandHoldingHeart, FaBoxOpen, FaStar } from 'react-icons/fa';
    import './Clientes.css';

    const Clientes = () => {

        const clientesFelices = [
        { id: 1,  img: "Cliente_1.jpg" },
        { id: 2,  img: "Cliente_2.jpg" },

    ];
    return (
        <div className="clientes-page">
        

        {/* 1. HERO BANNER */}
        <section className="clients-hero">
            <div className="clients-hero-content">
            <h1>Nuestros Clientes</h1>
            <p>Aliados estratégicos para el crecimiento de tu negocio.</p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Clientes</span>
        </div>

        {/* 2. CÓMO TRABAJAMOS (INTRODUCCIÓN) */}
        <div className="container">
            <section className="clients-intro-section">
            <h2>¿Cómo trabajamos?</h2>
            <div className="intro-box">
                <p>
                En Delycorp no somos solo proveedores, somos un <strong>aliado estratégico</strong>. 
                Nuestro principal objetivo es que tu cliente final busque la recompra en tu negocio. 
                Para lograrlo, te brindamos un portafolio variado con nuestras líneas <em>Best Seller</em> 
                de golosinas Deyelli, bebidas D'Loe y bombones Monfer.
                </p>
                <p>
                Nos enfocamos en asegurar la <strong>rentabilidad que necesita tu negocio</strong> para seguir creciendo, 
                acompañada de un soporte post-venta constante y cercano.
                </p>
            </div>
            </section>
        </div>

        {/* 3. PILARES DE VALOR (GRID) */}
        <section className="value-pillars-section">
            <div className="container">
                <h3 style={{textAlign:'center', color:'#444', fontSize:'1.5rem'}}>Nuestra Propuesta de Valor</h3>
                
                <div className="pillars-grid">
                    {/* Pilar 1 */}
                    <div className="pillar-card">
                        <FaChartLine className="pillar-icon" />
                        <h3>Rentabilidad Garantizada</h3>
                        <p>
                            Ofrecemos productos de alta rotación e innovación, diseñados para generar márgenes atractivos 
                            y despertar el efecto "¡Wow!" en tus clientes.
                        </p>
                    </div>

                    {/* Pilar 2 */}
                    <div className="pillar-card">
                        <FaBoxOpen className="pillar-icon" />
                        <h3>Portafolio Variado</h3>
                        <p>
                            Contamos con un catálogo amplio que incluye chocolates, gomas, caramelos líquidos y juguetes interactivos, 
                            cubriendo todas las necesidades de tu punto de venta.
                        </p>
                    </div>

                    {/* Pilar 3 */}
                    <div className="pillar-card">
                        <FaHandHoldingHeart className="pillar-icon" />
                        <h3>Soporte Integral</h3>
                        <p>
                            Brindamos acompañamiento post-venta para asegurar la correcta exhibición y rotación de los productos, 
                            construyendo relaciones redituales a largo plazo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. CANALES Y COBERTURA */}
        <section className="channels-section container">
            <div className="channels-flex">
                <div className="channels-info">
                    <h3>Nuestros Canales de Atención</h3>
                    <p>
                        Entendemos las necesidades de cada formato de negocio. Actualmente atendemos con excelencia al:
                    </p>
                    <ul style={{listStyle:'none', padding:0, lineHeight:'2', color:'#555'}}>
                        <li>✅ <strong>Canal Tradicional:</strong> Bodegas, Puestos de Mercado y Kioscos.</li>
                        <li>✅ <strong>Canal Mayorista:</strong> Más de 170 distribuidores aliados.</li>
                        <li>✅ <strong>Cobertura Nacional:</strong> Llegamos a más de 15,000 puntos de venta en Costa, Sierra y Selva.</li>
                    </ul>
                </div>
                <div className="channels-image">
                    <img 
                        src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop" 
                        alt="Canal tradicional bodegas" 
                    />
                </div>
            </div>
        </section>

        {/* --- 5. GALERÍA DE CLIENTES FELICES --- */}
            <section className="happy-clients-section">
                <div className="container">
                    <div className="section-header">
                        <h2>CLIENTES FELICES</h2>
                        <p>Negocios que crecen día a día junto a nosotros.</p>
                    </div>

                    <div className="gallery-grid">
                        {clientesFelices.map((cliente) => (
                            <div key={cliente.id} className="gallery-item">
                                <img src={cliente.img} alt={`Cliente feliz ${cliente.nombre}`} />
                                <div className="gallery-overlay">
                                    <span>{cliente.nombre}</span>
                                    <div className="stars">
                                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
    };

    export default Clientes;