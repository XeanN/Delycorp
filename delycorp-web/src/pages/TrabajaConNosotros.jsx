    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaCloudUploadAlt } from 'react-icons/fa';
    import './TrabajaConNosotros.css';

    const TrabajaConNosotros = () => {
    return (
        <div className="trabaja-page">
        
        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Trabaja con Nosotros</span>
        </div>

        {/* 1. HERO BANNER */}
        <section className="work-hero">
            <div className="work-hero-content">
            <h1>Sé parte de nuestra familia</h1>
            <p>Buscamos talento apasionado que quiera crecer con nosotros.</p>
            </div>
        </section>

        <div className="container">
            
            {/* 2. TEXTO DE CULTURA (Datos del PDF) */}
            <section className="culture-section">
            <h2 className="culture-title">El talento humano es nuestra prioridad</h2>
            <p className="culture-text">
                Nuestro equipo de colaboradores es el recurso más valioso de nuestra compañía. 
                Estamos convencidos de que si nuestro capital humano se siente feliz y sigue perfeccionando sus habilidades, 
                podemos crear relaciones redituales y a largo plazo.
                <br /><br />
                Nos esforzamos diariamente en brindar un ámbito de trabajo adecuado, agradable y seguro.
            </p>
            </section>

            {/* 3. FORMULARIO DE POSTULACIÓN */}
            <section className="application-container">
            <h3 className="form-title">Envíanos tu CV</h3>
            
            <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
                
                {/* Nombre */}
                <div className="form-group">
                <label>Nombre Completo *</label>
                <input type="text" placeholder="Ej: Juan Pérez" required />
                </div>

                {/* Apellidos */}
                <div className="form-group">
                <label>Apellidos *</label>
                <input type="text" placeholder="Ej: Rodriguez" required />
                </div>

                {/* Email */}
                <div className="form-group">
                <label>Correo Electrónico *</label>
                <input type="email" placeholder="juan@correo.com" required />
                </div>

                {/* Teléfono */}
                <div className="form-group">
                <label>Teléfono / Celular *</label>
                <input type="tel" placeholder="+51 999 999 999" required />
                </div>

                {/* Área de Interés */}
                <div className="form-group full-width">
                <label>Área de Interés</label>
                <select>
                    <option value="">Selecciona una opción</option>
                    <option value="ventas">Ventas y Comercial</option>
                    <option value="logistica">Logística y Almacén</option>
                    <option value="admin">Administración y Finanzas</option>
                    <option value="marketing">Marketing</option>
                    <option value="otros">Otros</option>
                </select>
                </div>

                {/* Mensaje */}
                <div className="form-group full-width">
                <label>Mensaje o Presentación</label>
                <textarea rows="4" placeholder="Cuéntanos brevemente sobre ti..."></textarea>
                </div>

                {/* Subir CV */}
                <div className="form-group full-width">
                <label>Adjuntar CV (PDF o Word)</label>
                <div className="file-upload-wrapper">
                    <FaCloudUploadAlt className="file-icon" />
                    <p className="file-upload-text">Haz clic para seleccionar tu archivo</p>
                    <input type="file" style={{display: 'none'}} id="cv-upload" />
                </div>
                </div>

                {/* Botón */}
                <button type="submit" className="btn-submit">Enviar Postulación</button>

            </form>
            </section>

        </div>
        </div>
    );
    };

    export default TrabajaConNosotros;