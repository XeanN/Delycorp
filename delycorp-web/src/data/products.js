    // --- CONFIGURACIÓN DE CATEGORÍAS ---
    // slug: debe ser minúscula, sin tildes, sin ñ y con guiones en vez de espacios.
    export const categoriesConfig = [
    { slug: "dulces", name: "Dulces" },
    { slug: "chocolateria", name: "Chocolatería" },
    { slug: "bebidas", name: "Bebidas" },
    { slug: "cuidado-de-hogar", name: "Cuidado de hogar" },       // <-- CORREGIDO: cuidado-de-hogar
    { slug: "enlatados", name: "Enlatados" },
    { slug: "productos-de-campana", name: "Productos de campaña" } // <-- CORREGIDO: productos-de-campana
    ];

    // --- BASE DE DATOS DE PRODUCTOS ---
    export const allProducts = [
    // --- DULCES ---
    {
        id: 101,
        name: "Bon Bon Bum Surtido",
        category: "dulces", 
        subcategory: "Chupetas",
        image: "https://via.placeholder.com/300?text=BonBonBum",
        brand: "Bon Bon Bum"
    },
    {
        id: 102,
        name: "Gomitas Grissly Ositos",
        category: "dulces",
        subcategory: "Gomas",
        image: "https://via.placeholder.com/300?text=Gomitas",
        brand: "Grissly"
    },

    // --- CHOCOLATERÍA ---
    {
        id: 201,
        name: "Barra KICK con Maní",
        category: "chocolateria",
        subcategory: "Barras de Chocolate",
        image: "https://via.placeholder.com/300?text=KICK",
        brand: "Colombina"
    },
    {
        id: 202,
        name: "Nucita Crema",
        category: "chocolateria",
        subcategory: "Cremas Esparcibles",
        image: "https://via.placeholder.com/300?text=Nucita",
        brand: "Nucita"
    },

    // --- BEBIDAS ---
    {
        id: 301,
        name: "Néctar de Durazno",
        category: "bebidas",
        subcategory: "Jugos",
        image: "https://via.placeholder.com/300?text=Jugo",
        brand: "Frutica"
    },

    // --- CUIDADO DE HOGAR ---
    {
        id: 401,
        name: "Detergente Líquido",
        category: "cuidado-de-hogar", // <-- Coincide con el slug nuevo
        subcategory: "Limpieza Ropa",
        image: "https://via.placeholder.com/300?text=Detergente",
        brand: "DelyHome"
    },

    // --- ENLATADOS ---
    {
        id: 501,
        name: "Atún Van Camp's",
        category: "enlatados",
        subcategory: "Pescados",
        image: "https://via.placeholder.com/300?text=Atun",
        brand: "Van Camps"
    },

    // --- PRODUCTOS DE CAMPAÑA ---
    {
        id: 601,
        name: "Panetón Delycorp",
        category: "productos-de-campana", // <-- Coincide con el slug nuevo
        subcategory: "Navidad",
        image: "https://via.placeholder.com/300?text=Paneton",
        brand: "Delycorp"
    }
    ];

    // Helpers
    export const getSubcategories = (categorySlug) => {
    const filtered = allProducts.filter(p => p.category === categorySlug);
    return [...new Set(filtered.map(p => p.subcategory))];
    };

    export const getCategoryName = (slug) => {
    const found = categoriesConfig.find(c => c.slug === slug);
    return found ? found.name : "Todos los Productos";
    };