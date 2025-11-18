    import React from 'react';
    import { Link } from 'react-router-dom';
    import './NewsSection.css';

    const NewsSection = () => {
    const news = [
        {
        id: 1,
        date: "12 NOV, 2024",
        title: "Delycorp amplía su red de distribución en el norte",
        excerpt: "Inauguramos un nuevo centro logístico para mejorar los tiempos de entrega en Piura y Trujillo.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
        },
        {
        id: 2,
        date: "05 OCT, 2024",
        title: "Lanzamiento de la nueva línea de productos saludables",
        excerpt: "Conoce nuestras nuevas opciones bajas en azúcar y ricas en fibra para toda la familia.",
        image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800&auto=format&fit=crop"
        },
        {
        id: 3,
        date: "28 SEP, 2024",
        title: "Reconocimiento a la excelencia logística 2024",
        excerpt: "Hemos sido galardonados por nuestra eficiencia y compromiso con la calidad.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section className="news-section">
        <div className="container">
            <div className="section-header">
            <h2 className="section-title">Últimas Noticias</h2>
            <Link to="/noticias" className="view-all-link">Ver todas las noticias &rarr;</Link>
            </div>

            <div className="news-grid">
            {news.map((item) => (
                <article key={item.id} className="news-card">
                <div className="news-image">
                    <img src={item.image} alt={item.title} />
                    <div className="news-date">{item.date}</div>
                </div>
                <div className="news-content">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link to={`/noticias/${item.id}`} className="read-more">Leer más</Link>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default NewsSection;