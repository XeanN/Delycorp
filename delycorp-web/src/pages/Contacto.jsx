    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaTiktok, FaChevronRight } from 'react-icons/fa';
    import './Contacto.css';

    const Contacto = () => {
    return (
        <div className="contacto-page">
        
        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Contáctanos</span>
        </div>

        {/* 1. HERO BANNER */}
        <section className="contact-hero">
            <div className="container">
                <h1>Estamos aquí para ayudarte</h1>
                <p>Ponte en contacto con nosotros para cualquier consulta o solicitud.</p>
            </div>
        </section>

        <div className="container">
            <div className="contact-grid">
                
                {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
                <div className="contact-info-card">
                    <h2>Información de Contacto</h2>
                    
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div className="info-text">
                            <h4>Dirección</h4>
                            <p>Calle Los Talladores 370<br />Urb. El Artesano, Ate Vitarte - Lima</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaPhoneAlt className="info-icon" />
                        <div className="info-text">
                            <h4>Teléfono / Celular</h4>
                            <p>(01) 555-0199 <br /> +51 999 999 999</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div className="info-text">
                            <h4>Correo Electrónico</h4>
                            <p>ventas@delycorp.pe <br /> contacto@delycorp.pe</p>
                        </div>
                    </div>

                    {/* SECCIÓN REDES SOCIALES (Botones) */}
                    <div className="social-section">
                        <h3>Síguenos en nuestras redes:</h3>
                        <div className="social-buttons">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn-social btn-facebook">
                                <FaFacebookF /> Facebook
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-social btn-instagram">
                                <FaInstagram /> Instagram
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="btn-social btn-tiktok">
                                <FaTiktok /> TikTok
                            </a>
                            <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="btn-social btn-whatsapp">
                                <FaWhatsapp /> WhatsApp
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-social btn-linkedin">
                                <FaLinkedinIn /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: MAPA (Ubicación real aproximada en Ate) */}
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.0038358466885!2d-76.96271668561802!3d-12.043281745107453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c68965000001%3A0x123456789abcdef!2sC.%20Los%20Talladores%20370%2C%20Ate%2015022!5e0!3m2!1ses-419!2spe!4v1625000000000!5m2!1ses-419!2spe" 
                        width="600" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Mapa de Ubicación Delycorp"
                    ></iframe>
                </div>

            </div>
        </div>

        </div>
    );
    };

    export default Contacto;