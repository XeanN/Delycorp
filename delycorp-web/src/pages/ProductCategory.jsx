    import React, { useState, useEffect } from 'react';
    import { useParams, useSearchParams, Link } from 'react-router-dom';
    import { 
    allProducts, 
    categoriesConfig, // Importamos la configuración nueva
    getSubcategories, 
    getCategoryName 
    } from '../data/products';
    import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
    import './ProductCategory.css';

    const ProductCategory = () => {
    const { category } = useParams(); // Viene de la URL (ej: "chocolateria")
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    const [productsToShow, setProductsToShow] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [activeSubFilter, setActiveSubFilter] = useState(null);

    // 1. TÍTULO Y COLOR INTELIGENTE
    let pageTitle = "";
    let bannerColor = "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)"; // Rojo por defecto

    if (searchQuery) {
        pageTitle = `Resultados para: "${searchQuery}"`;
        bannerColor = "linear-gradient(135deg, #003B71 0%, #002a52 100%)"; // Azul para búsqueda
    } else if (category) {
        // AQUÍ ESTÁ EL TRUCO: Usamos la función para obtener "Chocolatería" con tilde
        pageTitle = getCategoryName(category);
    } else {
        pageTitle = "Todos los Productos";
    }

    // 2. FILTRADO DE PRODUCTOS
    useEffect(() => {
        let filtered = allProducts;

        // Filtro por Categoría (URL)
        if (category) {
        filtered = filtered.filter(p => p.category === category);
        }

        // Filtro por Buscador
        if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.brand.toLowerCase().includes(query) ||
            p.subcategory.toLowerCase().includes(query)
        );
        }

        // Filtro por Subcategoría (Sidebar)
        if (activeSubFilter) {
        filtered = filtered.filter(p => p.subcategory === activeSubFilter);
        }

        setProductsToShow(filtered);
    }, [category, searchQuery, activeSubFilter]);

    // Obtener items para el sidebar
    // Si hay categoría seleccionada, muestra sus subcategorías (ej: Barras, Galletas)
    // Si no (estás en "Ver todo"), muestra la lista de categorías principales
    const sidebarItems = category 
        ? getSubcategories(category) 
        : categoriesConfig;

    return (
        <div className="category-page">
        
        {/* BANNER */}
        <div className="category-banner" style={{ background: bannerColor }}>
            <div className="banner-bg-shapes"></div>
            <div className="container banner-content">
            <h1>{pageTitle}</h1>
            <p>{productsToShow.length} productos encontrados</p>
            </div>
        </div>

        {/* BREADCRUMBS */}
        <div className="container breadcrumbs">
            <Link to="/">Inicio</Link> <FaChevronRight className="icon" /> 
            <Link to="/productos">Productos</Link> 
            {category && (
            <> 
                <FaChevronRight className="icon" /> 
                <span className="current">{pageTitle}</span> 
            </>
            )}
        </div>

        <div className="container category-layout">
            
            {/* SIDEBAR */}
            <aside className="sidebar-filters">
            <div className="filter-group">
                <div className="filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3>{category ? "Filtrar por Tipo" : "Nuestras Categorías"}</h3>
                <FaChevronDown className={`arrow ${isFilterOpen ? 'open' : ''}`} />
                </div>
                
                {isFilterOpen && (
                <ul className="filter-list">
                    {/* Botón "Ver Todo" dentro de la categoría actual */}
                    <li onClick={() => setActiveSubFilter(null)}>
                    <span className={!activeSubFilter ? 'active-filter' : ''}>
                        {category ? "Ver todo en " + pageTitle : "Todas las categorías"}
                    </span>
                    </li>
                    
                    {category ? (
                    // MODO SUBCATEGORÍAS (Estás dentro de Chocolatería)
                    sidebarItems.map((subItem, index) => (
                        <li key={index} onClick={() => setActiveSubFilter(subItem)}>
                        <span className={activeSubFilter === subItem ? 'active-filter' : ''}>
                            {subItem}
                        </span>
                        </li>
                    ))
                    ) : (
                    // MODO MENÚ PRINCIPAL (Estás en /productos)
                    sidebarItems.map((catItem, index) => (
                        <li key={index}>
                        <Link to={`/productos/${catItem.slug}`}>
                            {catItem.name}
                        </Link>
                        </li>
                    ))
                    )}
                </ul>
                )}
            </div>
            </aside>

            {/* GRID PRODUCTOS */}
            <main className="products-grid-container">
            {productsToShow.length > 0 ? (
                <div className="products-grid">
                {productsToShow.map((product) => (
                    <Link to={`/producto/${product.id}`} key={product.id} className="product-card">
                    <div className="product-image">
                        <img src={product.img_primary} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <span className="product-brand">{product.brand}</span>
                        <h4>{product.name}</h4>
                        <span className="product-sub">{product.subcategory}</span>
                        <span className="btn-details">Ver Detalle</span>
                    </div>
                    </Link>
                ))}
                </div>
            ) : (
                <div className="no-products">
                <h3>No se encontraron productos</h3>
                <p>Intenta con otra categoría o término de búsqueda.</p>
                <Link to="/productos" className="btn-reset">Volver al catálogo</Link>
                </div>
            )}
            </main>
        </div>
        </div>
    );
    };

    export default ProductCategory;