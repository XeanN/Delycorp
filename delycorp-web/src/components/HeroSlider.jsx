    import React, { useState, useEffect } from 'react';
    import './HeroSlider.css';
    import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

    const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // DATOS DE EJEMPLO (Reemplazarás "img" con tus fotos reales de Delycorp más adelante)
    const slides = [
        {
        id: 1,
        image: "/BANNER_3.png", // Imagen corporativa/oficina
        title: "Excelencia en Distribución",
        subtitle: "Llevamos calidad a cada rincón del Perú."
        },
        {
        id: 2,
        image: "/BANNER_2.png", // Imagen de alimentos/almacén
        title: "Nuestras Marcas",
        subtitle: "Representamos a las mejores marcas del mercado."
        },
        {
        id: 3,
        image: "/BANNER_1.png", // Imagen de equipo/reunión
        title: "Compromiso y Pasión",
        subtitle: "Un equipo dedicado a servirte mejor."
        }
    ];

    // Cambio automático cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="hero-slider">
        {slides.map((slide, index) => (
            <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            >
            <div className="container slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className="cta-button">Conocer Más</button>
            </div>
            </div>
        ))}

        {/* Flechas de navegación */}
        <button className="slider-arrow left" onClick={prevSlide}><FaChevronLeft /></button>
        <button className="slider-arrow right" onClick={nextSlide}><FaChevronRight /></button>

        {/* Puntos indicadores (Dots) */}
        <div className="slider-dots">
            {slides.map((_, index) => (
            <div 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
            ></div>
            ))}
        </div>
        </div>
    );
    };

    export default HeroSlider;