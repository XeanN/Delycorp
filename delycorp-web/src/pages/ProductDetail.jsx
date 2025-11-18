    import React from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { allProducts } from '../data/products'; // <--- CORREGIDO: Usamos la nueva base de datos
    import './ProductCategory.css'; 

    const ProductDetail = () => {
    const { id } = useParams();
    
    // Buscar el producto en la lista única (allProducts)
    const product = allProducts.find(p => p.id === parseInt(id));

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
        {/* Botón volver */}
        <Link to={`/productos/${product.category}`} style={{color:'#888', marginBottom:'20px', display:'inline-block', textDecoration:'none'}}>
            &larr; Volver a {product.category}
        </Link>
        
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            
            {/* Imagen */}
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', textAlign: 'center', border: '1px solid #eee' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            </div>
            
            {/* Info */}
            <div>
            <span style={{ color: '#999', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                {product.brand}
            </span>
            <h1 style={{ color: 'var(--color-corporate-blue)', fontSize: '2.5rem', margin: '10px 0' }}>
                {product.name}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>
                Categoría: <strong>{product.subcategory}</strong>
            </p>
            
            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
            
            <p style={{ lineHeight: '1.6', color: '#555' }}>
                Disfruta de la mejor calidad con {product.name}. Ideal para compartir o disfrutar en cualquier momento del día.
                Este producto cumple con los más altos estándares de distribución de Delycorp.
            </p>
            
            <button style={{ 
                marginTop: '30px', 
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
                Contactar Ventas
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default ProductDetail;