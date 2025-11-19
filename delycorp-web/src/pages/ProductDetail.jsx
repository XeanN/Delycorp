    import React, { useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { allProducts, getCategoryName } from '../data/products';
    import './ProductCategory.css'; // Reusamos estilos por ahora

    const ProductDetail = () => {
    const { id } = useParams();
    
    // Buscar producto en la lista centralizada
    const product = allProducts.find(p => p.id === parseInt(id));

    // --- NUEVA LÓGICA DE IMAGEN ---
    const [currentImage, setCurrentImage] = useState(product ? product.img_primary : null);

    // Asegurar que la imagen secundaria sea diferente antes de mostrarla
    const hasSecondaryImage = product && product.img_secondary && product.img_primary !== product.img_secondary;

    if (!product) {
        return (
        <div className="container" style={{paddingTop: '150px', textAlign: 'center'}}>
            <h2>Producto no encontrado</h2>
            <Link to="/productos" className="btn-reset">Volver al catálogo</Link>
        </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
        
        {/* Botón Volver */}
        <Link 
            to={`/productos/${product.category}`} 
            style={{color:'#888', marginBottom:'20px', display:'inline-block', textDecoration:'none'}}
        >
            &larr; Volver a {getCategoryName(product.category)}
        </Link>
        
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px', alignItems: 'flex-start' }}>
            
            {/* Columna Izquierda: IMAGEN Y SELECTOR */}
            <div className="image-gallery-column">
            
            {/* Imagen Principal */}
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '15px' }}>
                <img src={currentImage} alt={product.name} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            </div>

            {/* Selector de Imagen (Mini-Galería) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {/* Thumbnail 1 (Primary) */}
                <div 
                onClick={() => setCurrentImage(product.img_primary)}
                style={{ cursor: 'pointer', border: currentImage === product.img_primary ? '2px solid var(--color-primary)' : '1px solid #ddd', padding: '5px', borderRadius: '4px' }}
                >
                <img src={product.img_primary} alt="Vista 1" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                
                {/* Thumbnail 2 (Secondary) - Solo si existe */}
                {hasSecondaryImage && (
                <div 
                    onClick={() => setCurrentImage(product.img_secondary)}
                    style={{ cursor: 'pointer', border: currentImage === product.img_secondary ? '2px solid var(--color-primary)' : '1px solid #ddd', padding: '5px', borderRadius: '4px' }}
                >
                    <img src={product.img_secondary} alt="Vista 2" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                )}
            </div>
            </div>
            
            {/* Columna Derecha: INFORMACIÓN DETALLADA */}
            <div>
            <span style={{ color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {product.brand} - {product.subcategory}
            </span>
            <h1 style={{ color: 'var(--color-corporate-blue)', fontSize: '2.5rem', margin: '10px 0 20px' }}>
                {product.name}
            </h1>
            
            {/* TABLA DE PRESENTACIÓN (Datos de las tablas del PDF) */}
            <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', marginBottom: '30px', backgroundColor: '#f9f9f9' }}>
                <h3 style={{ color: 'var(--color-primary)', margin: '0 0 15px', fontSize: '1.2rem' }}>Detalles de Presentación</h3>
                <p style={{ margin: '5px 0', fontSize: '1rem' }}>
                Presentación: {product.presentation}
                </p>
                <p style={{ margin: '5px 0', fontSize: '1rem' }}>
                Peso Unitario: {product.unit_weight}
                </p>
                <p style={{ margin: '5px 0', fontSize: '1rem' }}>
                Código Delycorp: {product.code}
                </p>
            </div>

            <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>
                Este producto está diseñado para generar el efecto ¡Wow! en tus clientes gracias a su calidad y precio.
            </p>
            
            <button style={{ 
                padding: '15px 40px', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '50px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(227, 28, 35, 0.3)'
            }}>
                Consultar Stock y Precios
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default ProductDetail;