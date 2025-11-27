    import React, { useState, useEffect } from 'react';
    import { useParams, useLocation, Link } from 'react-router-dom';
    import { allProducts, categoriesConfig, getCategoryName } from '../data/products';
    import { FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';
    import './ProductCategory.css'; // Usamos el mismo CSS

    const CatalogPage = () => {
    // 1. DETECTAR CONTEXTO (¿Qué estoy viendo?)
    const { categorySlug, brandSlug } = useParams(); // Definiremos estas rutas en el router
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    // Estado
    const [productsToShow, setProductsToShow] = useState([]);
    const [sidebarFilters, setSidebarFilters] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    
    // Títulos y Colores dinámicos
    let pageTitle = "Catálogo";
    let bannerColor = "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)"; // Rojo Default

    // 2. LÓGICA INTELIGENTE DE DATOS
    useEffect(() => {
        let data = allProducts;
        let filters = [];

        // CASO A: VISTA POR CATEGORÍA (ej: /productos/dulces)
        if (categorySlug) {
        pageTitle = getCategoryName(categorySlug);
        // Filtramos productos de esta categoría
        data = allProducts.filter(p => p.category === categorySlug);
        // El Sidebar mostrará SUBCATEGORÍAS (Chupetines, Gomitas...)
        filters = [...new Set(data.map(p => p.subcategory))].map(sub => ({
            name: sub,
            type: 'subcategory',
            value: sub
        }));
        } 
        // CASO B: VISTA POR MARCA (ej: /marca/deyelli)
        else if (brandSlug) {
    
        const cleanSlug = (str) => {
            if (!str) return '';
            return str
                .toLowerCase()
                .normalize("NFD")                
                .replace(/[\u0300-\u036f]/g, "") 
                .replace(/[^a-z0-9]/g, '');      
        };
        // ------------------------------------

        // Ahora sí comparamos manzanas con manzanas
        data = allProducts.filter(p => cleanSlug(p.brand) === cleanSlug(brandSlug));
        
        // Título bonito (tomamos el nombre real del primer producto encontrado)
        pageTitle = data.length > 0 ? data[0].brand : brandSlug.toUpperCase();
        bannerColor = "linear-gradient(135deg, #003B71 0%, #002a52 100%)"; // Azul corporativo

        // El Sidebar mostrará CATEGORÍAS disponibles para esa marca
        // (Ej: Deyelli tiene Dulces, Chocolates, etc.)
        filters = [...new Set(data.map(p => p.category))].map(catSlug => ({
            name: getCategoryName(catSlug),
            type: 'category', // Importante: tipo filtro interno
            value: catSlug
        }));
        }
        // CASO C: BUSCADOR GLOBAL
        else if (searchQuery) {
        pageTitle = `Resultados para: "${searchQuery}"`;
        const q = searchQuery.toLowerCase();
        data = allProducts.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.brand.toLowerCase().includes(q) ||
            p.subcategory.toLowerCase().includes(q)
        );
        // Sidebar muestra Categorías encontradas
        filters = [...new Set(data.map(p => p.category))].map(catSlug => ({
            name: getCategoryName(catSlug),
            type: 'category',
            value: catSlug
        }));
        }
        // CASO D: VER TODO (Catálogo completo)
        else {
        pageTitle = "Todos los Productos";
        filters = categoriesConfig.map(c => ({
            name: c.name,
            type: 'category_link', // Este tipo redirige
            value: c.slug
        }));
        }

        // 3. APLICAR FILTRO ACTIVO (Si el usuario hizo clic en el sidebar)
        if (activeFilter) {
        if (activeFilter.type === 'subcategory') {
            data = data.filter(p => p.subcategory === activeFilter.value);
        } else if (activeFilter.type === 'category') {
            data = data.filter(p => p.category === activeFilter.value);
        }
        }

        setProductsToShow(data);
        setSidebarFilters(filters);

    }, [categorySlug, brandSlug, searchQuery, activeFilter]);

    // Resetear filtro activo si cambiamos de página principal
    useEffect(() => {
        setActiveFilter(null);
        window.scrollTo(0,0);
    }, [categorySlug, brandSlug, searchQuery]);

    return (
        <div className="category-page">
        
        {/* BANNER DINÁMICO */}
        <div className="category-banner" style={{ background: bannerColor }}>
            <div className="banner-bg-shapes"></div>
            <div className="container banner-content">
                <h1>{pageTitle}</h1>
                <p>{productsToShow.length} productos encontrados</p>
            </div>
        </div>

        {/* BREADCRUMBS INTELIGENTES */}
        <div className="container breadcrumbs">
            <Link to="/">Inicio</Link> <FaChevronRight className="icon" />
            <Link to="/productos">Catálogo</Link> 
            {(categorySlug || brandSlug) && (
                <> <FaChevronRight className="icon" /> <span className="current">{pageTitle}</span> </>
            )}
        </div>

        <div className="container category-layout">
            
            {/* SIDEBAR INTELIGENTE */}
            <aside className="sidebar-filters">
            <div className="filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3>Filtrar Productos</h3>
                <FaChevronDown className={`arrow ${isFilterOpen ? 'open' : ''}`} />
            </div>

            {isFilterOpen && (
                <ul className="filter-list">
                {/* Opción "Ver Todo" dentro del contexto actual */}
                <li onClick={() => setActiveFilter(null)}>
                    <span className={!activeFilter ? 'active-filter' : ''}>Ver todo</span>
                </li>

                {sidebarFilters.map((filter, idx) => (
                    <li key={idx}>
                    {filter.type === 'category_link' ? (
                        /* Caso: En portada, redirigimos a la URL de categoría */
                        <Link to={`/productos/${filter.value}`}>{filter.name}</Link>
                    ) : (
                        /* Caso: Dentro de una marca/cat, filtramos en memoria */
                        <span 
                        className={activeFilter?.value === filter.value ? 'active-filter' : ''}
                        onClick={() => setActiveFilter(filter)}
                        >
                        {filter.name}
                        </span>
                    )}
                    </li>
                ))}
                </ul>
            )}
            </aside>

            {/* GRID DE RESULTADOS */}
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
                <button className="btn-reset" onClick={() => setActiveFilter(null)}>
                    Limpiar filtros
                </button>
                </div>
            )}
            </main>
        </div>
        </div>
    );
    };

    export default CatalogPage;