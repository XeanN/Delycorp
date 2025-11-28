    import React from 'react';
    import { Link } from 'react-router-dom';
    import { getAssetUrl } from '../utils/assets';
    import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
    import './Footer.css';

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            
            {/* SECCIÓN SUPERIOR: GRID DE 5 COLUMNAS */}
            <div className="footer-grid">
            
            {/* COLUMNA 1: MARCA + DESCRIPCIÓN + SOCIALES */}
            <div className="footer-brand-col">
                <img src={getAssetUrl('LogoDiapositiva.png')} alt="Delycorp" className="footer-logo" />
                <p className="footer-desc">
                Compañía global de alimentos que busca cautivar al consumidor a través de la innovación y el sabor de sus productos. 
                Sustentada en una marca sombrilla fuerte, marcas reconocidas y de alto valor percibido.
                </p>
                
                {/* Iconos sociales azules a la izquierda */}
                <div className="footer-social-icons">
                <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
                </div>
            </div>

            {/* COLUMNA 2: NOSOTROS */}
            <div className="footer-link-col">
                <h4>Nosotros</h4>
                <ul>    
                <li><Link to="/nosotros">Quiénes Somos</Link></li>
                <li><Link to="/nosotros/historia">Historia</Link></li>
                <li><Link to="/nosotros/nuestro-equipo">Nuestro Equipo</Link></li>
                </ul>
            </div>  

            {/* COLUMNA 3: SOSTENIBILIDAD */}
            <div className="footer-link-col">
                <h4>Sostenibilidad</h4>
                <ul>
                <li><Link to="/destacados">Destacados</Link></li>
                <li><Link to="/estrategia">Estrategia</Link></li>
                <li><Link to="/gestion-sostenibilidad">Gestión de Sostenibilidad</Link></li>
                <li><Link to="/resultados">Resultados</Link></li>
                <li><Link to="/reportes">Reportes</Link></li>
                <li><Link to="/fundacion">Fundación Delycorp</Link></li>
                </ul>
            </div>

            {/* COLUMNA 4: OTROS ENLACES */}
            <div className="footer-link-col">
                <h4>Otros enlaces</h4>
                <ul>
                <li><Link to="/noticias">Noticias</Link></li>
                <li><Link to="/inversionistas">Inversionistas</Link></li>
                <li><Link to="/proveedores">Proveedores</Link></li>
                <li><Link to="/clientes">Clientes</Link></li>
                </ul>
            </div>

            {/* COLUMNA 5: CONTACTO */}
            <div className="footer-link-col">
                <h4>Contacto</h4>
                <ul>
                <li><Link to="/contacto">Contáctanos</Link></li>
                <li><Link to="/trabaja">Trabaja con Nosotros</Link></li>
                </ul>
            </div>

            </div>

            {/* SECCIÓN INFERIOR: COPYRIGHT */}
            <div className="footer-bottom">
            <div className="copyright-text">
                {new Date().getFullYear()} © Delycorp S.A.C. - Todos los derechos reservados - 
                <Link to="/privacidad"> Políticas de Protección de datos personales</Link> | 
                <Link to="/cookies"> Política de Cookies</Link> | 
                <Link to="/terminos"> Términos y Condiciones</Link> | 
                <Link to="/aviso"> Aviso de Privacidad</Link>
            </div>
            </div>

        </div>
        </footer>
    );
    };

    export default Footer;