    import React, { useState, useEffect } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { allProducts, getCategoryName } from '../data/products';
    import './ProductCategory.css'; 

    const ProductDetail = () => {
    const { id } = useParams();
    
    // 1. Buscar producto
    const product = allProducts.find(p => p.id === parseInt(id));

    // 2. CONSTRUIR LA GALERÍA DINÁMICA
    // Juntamos img_primary + img_secondary + extra_images en una sola lista
    const [gallery, setGallery] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        if (product) {
            const images = [];
            
            // Siempre agregamos la primaria
            if (product.img_primary) images.push(product.img_primary);
            
            // Agregamos la secundaria si existe y es diferente
            if (product.img_secondary && product.img_secondary !== product.img_primary) {
                images.push(product.img_secondary);
            }

            // --- AQUÍ LA MAGIA: Agregamos las extras si existen ---
            if (product.extra_images && Array.isArray(product.extra_images)) {
                images.push(...product.extra_images);
            }

            setGallery(images);
            setCurrentImage(images[0]); // Poner la primera como principal por defecto
        }
    }, [product]);

    
    const phoneNumber = "51999022179"; 

    const handleWhatsApp = () => {
        const message = `Hola Delycorp, estoy interesado en el producto: *${product.name}* (Código: ${product.code}). Quisiera saber stock y precios.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    
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
            
            {/* === COLUMNA IZQUIERDA: GALERÍA === */}
            <div className="image-gallery-column">
                
                {/* Imagen Grande Principal */}
                <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '15px' }}>
                    <img src={currentImage} alt={product.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', display: 'block' }} />
                </div>

                {/* Tira de Miniaturas (Se genera sola según cuántas fotos tengas) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    
                    {gallery.map((imgSrc, index) => (
                        <div 
                            key={index}
                            onClick={() => setCurrentImage(imgSrc)}
                            style={{ 
                                cursor: 'pointer', 
                                border: currentImage === imgSrc ? '2px solid var(--color-primary)' : '1px solid #ddd', 
                                padding: '5px', 
                                borderRadius: '6px',
                                backgroundColor: '#fff',
                                width: '70px',  // Tamaño fijo para uniformidad
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img src={imgSrc} alt={`Vista ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
                    ))}

                </div>
            </div>
            
            {/* === COLUMNA DERECHA: INFO === */}
            <div>
                <span style={{ color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {product.brand} - {product.subcategory}
                </span>
                <h1 style={{ color: 'var(--color-corporate-blue)', fontSize: '2.5rem', margin: '10px 0 20px' }}>
                    {product.name}
                </h1>
                
                <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', marginBottom: '30px', backgroundColor: '#f9f9f9' }}>
                    <h3 style={{ color: 'var(--color-primary)', margin: '0 0 15px', fontSize: '1.2rem' }}>Detalles de Presentación</h3>
                    <p style={{ margin: '5px 0', fontSize: '1rem' }}>Presentación: {product.presentation}</p>
                    <p style={{ margin: '5px 0', fontSize: '1rem' }}>Peso Unitario: {product.unit_weight}</p>
                    <p style={{ margin: '5px 0', fontSize: '1rem' }}>Código Delycorp: {product.code}</p>
                </div>

                <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '30px', fontSize: '1.1rem' }}>
                    {product.description 
                    ? product.description 
                    : "Este producto está diseñado para generar el efecto ¡Wow! en tus clientes gracias a su calidad y precio."}
                </p>
                
                <button 
                onClick={handleWhatsApp}
                style={{ 
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