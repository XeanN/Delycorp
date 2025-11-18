    import React, { useEffect, useRef, useState } from 'react';
    import { Link } from 'react-router-dom';
    import './BrandsCarousel.css';

    const BrandsCarousel = () => {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // LISTA DE MARCAS (Basada en tus fotos: Colombina, Amazon, etc.)
    const brands = [
        { name: "Colombina", logoUrl: "https://via.placeholder.com/150?text=Colombina", link: "/marcas/colombina" },
        { name: "Bon Bon Bum", logoUrl: "https://via.placeholder.com/150?text=BonBonBum", link: "/marcas/bon-bon-bum" },
        { name: "Amazon", logoUrl: "https://via.placeholder.com/150?text=Amazon", link: "/marcas/amazon" },
        { name: "Deyelli", logoUrl: "https://via.placeholder.com/150?text=Deyelli", link: "/marcas/deyelli" },
        { name: "D'loe", logoUrl: "https://via.placeholder.com/150?text=D'loe", link: "/marcas/dloe" },
        { name: "Monfer", logoUrl: "https://via.placeholder.com/150?text=Monfer", link: "/marcas/monfer" },
        { name: "Millows", logoUrl: "https://via.placeholder.com/150?text=Millows", link: "/marcas/millows" },
        { name: "Piazza", logoUrl: "https://via.placeholder.com/150?text=Piazza", link: "/marcas/piazza" },
        { name: "Nucita", logoUrl: "https://via.placeholder.com/150?text=Nucita", link: "/marcas/nucita" },
        { name: "Bridge", logoUrl: "https://via.placeholder.com/150?text=Bridge", link: "/marcas/bridge" },
        { name: "Coffee Delight", logoUrl: "https://via.placeholder.com/150?text=Coffee", link: "/marcas/coffee-delight" },
    ];

    // Duplicamos la lista varias veces para asegurar que sea "infinita" en pantallas grandes
    const infiniteBrands = [...brands, ...brands, ...brands, ...brands];

    // LÓGICA DE AUTO-SCROLL INFINITO
    useEffect(() => {
        let animationFrameId;

        const autoScroll = () => {
        if (!isDown && !isPaused && scrollRef.current) {
            const slider = scrollRef.current;
            slider.scrollLeft += 1; // Velocidad del movimiento (1px por frame)

            // Si llegamos a la mitad (donde se repiten los elementos), reseteamos sin que se note
            // Asumimos que la primera mitad es el set original duplicado
            const maxScroll = slider.scrollWidth / 2; 
            if (slider.scrollLeft >= maxScroll) {
            slider.scrollLeft = 0;
            }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDown, isPaused]);

    // LÓGICA PARA ARRASTRAR (DRAG)
    const handleMouseDown = (e) => {
        setIsDown(true);
        setIsPaused(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftState(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
        setIsPaused(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidad de arrastre
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    return (
        <section className="brands-carousel-section">
        {/* Título dentro del container para alinearse con la web */}
        <div className="container">
            <h2 className="carousel-title">Nuestras marcas</h2>
        </div>
        
        {/* El carrusel está FUERA del container para ser FULL WIDTH */}
        <div 
            className="carousel-full-width-wrapper"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Eventos táctiles para celular
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="carousel-track">
            {infiniteBrands.map((brand, index) => (
                <div key={index} className="brand-item">
                {/* Usamos onDragStart preventDefault para que la imagen no se arrastre "fantasma" */}
                <Link to={brand.link} className="brand-link" onDragStart={(e) => e.preventDefault()}>
                    <div className="brand-circle">
                    <img src={brand.logoUrl} alt={brand.name} draggable="false" />
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default BrandsCarousel;