    // --- CONFIGURACIÓN DE CATEGORÍAS (Para URLs y títulos) ---
    export const categoriesConfig = [
    { slug: "dulces", name: "Dulces" },
    { slug: "chocolateria", name: "Chocolatería" },
    { slug: "bebidas", name: "Bebidas" },
    { slug: "cuidado-de-hogar", name: "Cuidado de hogar" },
    { slug: "enlatados", name: "Enlatados" },
    { slug: "productos-de-campana", name: "Productos de campaña" }
    ];

    // Función para generar un placeholder de imagen único
    const getPlaceholderUrl = (id, color) => 
    `https://via.placeholder.com/300/${color}/fff?text=ID-${id}`;

    // --- BASE DE DATOS DE PRODUCTOS (Detalle Completo) ---
    export const allProducts = [
    // ==============================================
    // 1. DULCES (40 Productos)
    // ==============================================

    // --- Chupetines Juguete (Deyelli) ---
    { id: 101, name: "Chupetín Helado Led", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-002", img_primary: '/qweqwe.png', img_secondary: '/BANNER_2.png' },
    { id: 102, name: "Huevo Led", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-003", img_primary: getPlaceholderUrl(102, 'FFEB3B'), img_secondary: getPlaceholderUrl(102, 'DAA520') },
    { id: 103, name: "Molino de Caramelo", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "CHUP-001", img_primary: getPlaceholderUrl(103, '00FA9A'), img_secondary: getPlaceholderUrl(103, '008000') },
    { id: 104, name: "Caramelo Chupadedo", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-010", img_primary: getPlaceholderUrl(104, 'FF5722'), img_secondary: getPlaceholderUrl(104, 'FF8C00') },
    { id: 105, name: "Pintor Explosivo", category: "dulces", subcategory: "Chupetín + Polvo", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "6 gramos", code: "CHUP-012", img_primary: getPlaceholderUrl(105, 'F44336'), img_secondary: getPlaceholderUrl(105, '9E9E9E') },

    // --- Caramelo Líquido (Deyelli) ---
    { id: 106, name: "Mini Gas Spray (Encendedor)", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 ml", code: "CL-002", img_primary: getPlaceholderUrl(106, '03A9F4'), img_secondary: getPlaceholderUrl(106, '00BCD4') },
    { id: 107, name: "Mini Pistola Spray", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 ml", code: "CL-001", img_primary: getPlaceholderUrl(107, 'E91E63'), img_secondary: getPlaceholderUrl(107, '9C27B0') },
    { id: 108, name: "Dino Roll", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 gr", code: "CL-004", img_primary: getPlaceholderUrl(108, 'FF9800'), img_secondary: getPlaceholderUrl(108, '607D8B') },
    { id: 109, name: "Mini Extintor Spray", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 ml", code: "CL-003", img_primary: getPlaceholderUrl(109, '8BC34A'), img_secondary: getPlaceholderUrl(109, '03A9F4') },
    { id: 110, name: "Dentito Loko", category: "dulces", subcategory: "Jalea de Caramelo", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "8 gramos", code: "CL-005", img_primary: getPlaceholderUrl(110, '795548'), img_secondary: getPlaceholderUrl(110, 'F44336') },

    // --- Chicles (Deyelli) ---
    { id: 111, name: "Chiclazo Tattoo (Bolsa 100 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "4.5 gr", code: "CHI-011", img_primary: getPlaceholderUrl(111, 'FF69B4'), img_secondary: getPlaceholderUrl(111, '000') },
    { id: 112, name: "Mini Chiclazo Tattoo (Bolsa 150 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Bolsa x 150 Unidades", unit_weight: "3 gr", code: "CHI-012", img_primary: getPlaceholderUrl(112, '4682B4'), img_secondary: getPlaceholderUrl(112, '9932CC') },
    { id: 113, name: "Chiclazo Tattoo (Frasco 100 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "4.5 gr", code: "CHI-013", img_primary: getPlaceholderUrl(113, 'DC143C'), img_secondary: getPlaceholderUrl(113, '228B22') },
    { id: 114, name: "Mini Chiclazo Tattoo (Frasco 150 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 150 Unidades", unit_weight: "3 gr", code: "CHI-014", img_primary: getPlaceholderUrl(114, 'FFD700'), img_secondary: getPlaceholderUrl(114, '808000') },
    { id: 115, name: "Gaseosas Candy (Fanbi, Pepe, etc)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "18 Gramos", code: "CHI-004", img_primary: getPlaceholderUrl(115, '00FFFF'), img_secondary: getPlaceholderUrl(115, '00FF7F') },
    { id: 116, name: "Bolimix", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 125 Unidades", unit_weight: "8 Gramos", code: "CHI-016", img_primary: getPlaceholderUrl(116, 'FF00FF'), img_secondary: getPlaceholderUrl(116, 'FF6347') },
    { id: 117, name: "Chicle Jirafa (31 CM)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 60 Unidades", unit_weight: "12 gramos", code: "CHI-015", img_primary: getPlaceholderUrl(117, '00FA9A'), img_secondary: getPlaceholderUrl(117, '8A2BE2') },
    { id: 118, name: "Chicle en Polvo", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "8 gramos", code: "CHI-010", img_primary: getPlaceholderUrl(118, 'F5DEB3'), img_secondary: getPlaceholderUrl(118, 'D2691E') },
    { id: 119, name: "Chicle Balón Volador", category: "dulces", subcategory: "Chicles Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "6 gr", code: "CHI-016", img_primary: getPlaceholderUrl(119, '00BFFF'), img_secondary: getPlaceholderUrl(119, '4169E1') },

    // --- Mini Gelatinas (Deyelli) ---
    { id: 120, name: "Mini Gelatina Tren", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-006", img_primary: getPlaceholderUrl(120, 'FF4500'), img_secondary: getPlaceholderUrl(120, 'FFD700') },
    { id: 121, name: "Mini Gelatina Auto", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-005", img_primary: getPlaceholderUrl(121, '3CB371'), img_secondary: getPlaceholderUrl(121, '00FF7F') },
    { id: 122, name: "Mini Gelatina Perro", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-004", img_primary: getPlaceholderUrl(122, 'FFA07A'), img_secondary: getPlaceholderUrl(122, 'FF6347') },
    { id: 123, name: "Mini Gelatina Rana", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-003", img_primary: getPlaceholderUrl(123, 'F0E68C'), img_secondary: getPlaceholderUrl(123, 'BDB76B') },
    { id: 124, name: "Mini Gelatina Super Heroes", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-012", img_primary: getPlaceholderUrl(124, '4169E1'), img_secondary: getPlaceholderUrl(124, '87CEEB') },
    { id: 125, name: "Mini Gelatina Niño y Niña", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-007", img_primary: getPlaceholderUrl(125, '9370DB'), img_secondary: getPlaceholderUrl(125, 'DDA0DD') },
    { id: 126, name: "Mini Gelatina Dragon Ball (Frasco)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 gr", code: "GELA-014", img_primary: getPlaceholderUrl(126, '4169E1'), img_secondary: getPlaceholderUrl(126, '191970') },
    { id: 127, name: "Mini Gelatina Dragon Ball (Bolsa)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 20 Unidades", unit_weight: "15 gr", code: "G-10026", img_primary: getPlaceholderUrl(127, '003B71'), img_secondary: getPlaceholderUrl(127, 'B8860B') },
    { id: 128, name: "Mini Gelatina (Bolsa 40 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 40 Unidades", unit_weight: "15 Gramos", code: "GELA-010", img_primary: getPlaceholderUrl(128, 'FFFF00'), img_secondary: getPlaceholderUrl(128, 'F0E68C') },
    { id: 129, name: "Mini Gelatina (Bolsa 50 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 50 Unidades", unit_weight: "15 Gramos", code: "GELA-009", img_primary: getPlaceholderUrl(129, '4682B4'), img_secondary: getPlaceholderUrl(129, '6A5ACD') },
    { id: 130, name: "Mini Gelatina (Bolsa 100 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-008", img_primary: getPlaceholderUrl(130, 'DC143C'), img_secondary: getPlaceholderUrl(130, '8B0000') },
    { id: 131, name: "Mini Gelatina (Frasco 100 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-002", img_primary: getPlaceholderUrl(131, 'FF00FF'), img_secondary: getPlaceholderUrl(131, 'F0F8FF') },
    { id: 132, name: "Mini Gelatina (Caja Granel 410 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Caja x 410 Unidades", unit_weight: "N/A", code: "GELA-001", img_primary: getPlaceholderUrl(132, 'DAA520'), img_secondary: getPlaceholderUrl(132, 'FFFF00') },

    // --- Huevos Sorpresa (Deyelli) ---
    { id: 133, name: "Huevo Dino Baby", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-001", img_primary: getPlaceholderUrl(133, 'FF69B4'), img_secondary: getPlaceholderUrl(133, 'FFC0CB') },
    { id: 134, name: "Huevo Dino Xplor", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-004", img_primary: getPlaceholderUrl(134, 'FFA500'), img_secondary: getPlaceholderUrl(134, 'FF8C00') },
    { id: 135, name: "Huevo Baby Pets", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-003", img_primary: getPlaceholderUrl(135, '00BFFF'), img_secondary: getPlaceholderUrl(135, '00CED1') },
    { id: 136, name: "Huevo Mini Dino Kids", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 48 Unidades", unit_weight: "8 Gramos", code: "HMU-006", img_primary: getPlaceholderUrl(136, '8B008B'), img_secondary: getPlaceholderUrl(136, '9932CC') },
    { id: 137, name: "Huevo Doll Sorpresa", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 gramos", code: "HMU-0007", img_primary: getPlaceholderUrl(137, 'FF1493'), img_secondary: getPlaceholderUrl(137, 'FF69B4') },
    { id: 138, name: "Huevo Super Boys", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-004", img_primary: getPlaceholderUrl(138, '1E90FF'), img_secondary: getPlaceholderUrl(138, '0000CD') },
    { id: 139, name: "Huevo Mini Princesa", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-003", img_primary: getPlaceholderUrl(139, 'FFB6C1'), img_secondary: getPlaceholderUrl(139, 'FF6347') },
    { id: 140, name: "Huevo Mansión Monster", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-005", img_primary: getPlaceholderUrl(140, '32CD32'), img_secondary: getPlaceholderUrl(140, '006400') },
    { id: 141, name: "Huevo Eggo Toys", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-001", img_primary: getPlaceholderUrl(141, 'FFD700'), img_secondary: getPlaceholderUrl(141, 'DAA520') },
    { id: 142, name: "Huevo Dino Explor", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-006", img_primary: getPlaceholderUrl(142, '4682B4'), img_secondary: getPlaceholderUrl(142, '000080') },

    // --- Palitos Yogurt (Deyelli) ---
    { id: 143, name: "Stick Volador", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "11 Gramos", code: "CB-0002", img_primary: getPlaceholderUrl(143, '00CED1'), img_secondary: getPlaceholderUrl(143, '40E0D0') },
    { id: 144, name: "Stick Tattoo", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "11 Gramos", code: "CB-0001", img_primary: getPlaceholderUrl(144, 'F5DEB3'), img_secondary: getPlaceholderUrl(144, 'FF8C00') },
    { id: 145, name: "Palitos Yogurt Uñas", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "5 gramos", code: "CB-0005", img_primary: getPlaceholderUrl(145, 'DA70D6'), img_secondary: getPlaceholderUrl(145, '9400D3') },

    // --- Polvo Ácido (Deyelli) ---
    { id: 146, name: "Polvo Ácido Fruti Kola", category: "dulces", subcategory: "Polvo Ácido", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "3.5 gr", code: "PA-001", img_primary: getPlaceholderUrl(146, 'FFFF00'), img_secondary: getPlaceholderUrl(146, 'FFEB3B') },
    { id: 147, name: "Polvo Ácido K-Nita XXL", category: "dulces", subcategory: "Polvo Ácido", brand: "Deyelli", presentation: "Display x 50 Unidades", unit_weight: "10 gr", code: "PA-002", img_primary: getPlaceholderUrl(147, '795548'), img_secondary: getPlaceholderUrl(147, '5D4037') },

    // --- Caramelos (Tayas/Deyelli) ---
    { id: 148, name: "Caramelo Coffee Intense", category: "dulces", subcategory: "Caramelos", brand: "Tayas", presentation: "Bolsa x 105 Unidades", unit_weight: "3.8 gramos", code: "CAR-0001", img_primary: getPlaceholderUrl(148, '607D8B'), img_secondary: getPlaceholderUrl(148, '455A64') },
    { id: 149, name: "Caramelo Sellito Pop", category: "dulces", subcategory: "Caramelos Sellos", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "2 gr", code: "CD-002", img_primary: getPlaceholderUrl(149, '03A9F4'), img_secondary: getPlaceholderUrl(149, '00BCD4') },
    { id: 150, name: "Caramelo Garrita Loka", category: "dulces", subcategory: "Caramelos Chupadedo", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "7 gr", code: "CD-003", img_primary: getPlaceholderUrl(150, 'FF5722'), img_secondary: getPlaceholderUrl(150, 'FF9800') },
    
    // --- Chicles Juguete (Deyelli) ---
    { id: 151, name: "Chicles Balón Volador", category: "dulces", subcategory: "Chicles Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "6 gr", code: "CHI-016", img_primary: getPlaceholderUrl(151, '00BFFF'), img_secondary: getPlaceholderUrl(151, '4169E1') },
    { id: 152, name: "Gomitas Gira Loko", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-006", img_primary: getPlaceholderUrl(152, 'FF00FF'), img_secondary: getPlaceholderUrl(152, '9400D3') },
    { id: 153, name: "Gomitas Crayitos", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-008", img_primary: getPlaceholderUrl(153, 'FFC107'), img_secondary: getPlaceholderUrl(153, 'FFD700') },
    { id: 154, name: "Gomitas Lanza Bomba", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-009", img_primary: getPlaceholderUrl(154, 'DC143C'), img_secondary: getPlaceholderUrl(154, 'B22222') },
    
    // --- Malvaviscos (Deyelli) ---
    { id: 155, name: "Malvavisco Angelito (Celeste 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0010", img_primary: getPlaceholderUrl(155, '4682B4'), img_secondary: getPlaceholderUrl(155, '87CEEB') },
    { id: 156, name: "Malvavisco Angelito (Fresa 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0009", img_primary: getPlaceholderUrl(156, 'DC143C'), img_secondary: getPlaceholderUrl(156, 'FF6347') },
    { id: 157, name: "Malvavisco Angelito (Mix 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0008", img_primary: getPlaceholderUrl(157, '9ACD32'), img_secondary: getPlaceholderUrl(157, 'ADFF2F') },
    { id: 158, name: "Malvavisco Bongy (50 UNDS)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 50 Unidades", unit_weight: "5 gramos", code: "MALV-0005", img_primary: getPlaceholderUrl(158, 'FF00FF'), img_secondary: getPlaceholderUrl(158, 'FF69B4') },
    
    // ==============================================
    // 2. CHOCOLATERÍA (36 Productos)
    // ==============================================
    
    // --- Bombones Monfer (Corazón Rojo) ---
    { id: 201, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12 g", code: "HO3RH", img_primary: getPlaceholderUrl(201, 'B71C1C'), img_secondary: getPlaceholderUrl(201, 'DC143C') },
    { id: 202, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "8g", code: "HO5RH", img_primary: getPlaceholderUrl(202, 'B71C1C'), img_secondary: getPlaceholderUrl(202, 'DC143C') },
    { id: 203, name: "Monfer Corazón Rojo GOLD", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Gold x 8 Unidades", unit_weight: "8g", code: "HO8RH1", img_primary: getPlaceholderUrl(203, 'DAA520'), img_secondary: getPlaceholderUrl(203, 'FFD700') },
    { id: 204, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 15 Unidades", unit_weight: "8 g", code: "HI5RH", img_primary: getPlaceholderUrl(204, 'B71C1C'), img_secondary: getPlaceholderUrl(204, 'DC143C') },
    
    // --- Bombones Monfer (Corazón Dorado y Especiales) ---
    { id: 205, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 g", code: "HO3G-C", img_primary: getPlaceholderUrl(205, 'DAA520'), img_secondary: getPlaceholderUrl(205, 'FFD700') },
    { id: 206, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 g", code: "HO5G-C", img_primary: getPlaceholderUrl(206, 'DAA520'), img_secondary: getPlaceholderUrl(206, 'FFD700') },
    { id: 207, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 g", code: "HO8G-C", img_primary: getPlaceholderUrl(207, 'DAA520'), img_secondary: getPlaceholderUrl(207, 'FFD700') },
    { id: 208, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 12 Unidades", unit_weight: "12.5 g", code: "HI2G-C", img_primary: getPlaceholderUrl(208, 'DAA520'), img_secondary: getPlaceholderUrl(208, 'FFD700') },
    { id: 209, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 16 Unidades", unit_weight: "12.5 g", code: "H16G-C", img_primary: getPlaceholderUrl(209, 'DAA520'), img_secondary: getPlaceholderUrl(209, 'FFD700') },
    { id: 210, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 3 Unidades", unit_weight: "12.5 g", code: "BH03M-C", img_primary: getPlaceholderUrl(210, '4169E1'), img_secondary: getPlaceholderUrl(210, '0000CD') },
    { id: 211, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 5 Unidades", unit_weight: "12.5 g", code: "BH05M-C", img_primary: getPlaceholderUrl(211, '4169E1'), img_secondary: getPlaceholderUrl(211, '0000CD') },
    { id: 212, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 8 Unidades", unit_weight: "12.5 g", code: "BH08M-C", img_primary: getPlaceholderUrl(212, '4169E1'), img_secondary: getPlaceholderUrl(212, '0000CD') },
    { id: 213, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 gr", code: "BH03M3-C", img_primary: getPlaceholderUrl(213, 'F0F8FF'), img_secondary: getPlaceholderUrl(213, '4169E1') },
    { id: 214, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 gr", code: "BH05M3-C", img_primary: getPlaceholderUrl(214, 'F0F8FF'), img_secondary: getPlaceholderUrl(214, '4169E1') },
    { id: 215, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 gr", code: "BH08M3-C", img_primary: getPlaceholderUrl(215, 'F0F8FF'), img_secondary: getPlaceholderUrl(215, '4169E1') },
    { id: 216, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 gr", code: "H03G3-C", img_primary: getPlaceholderUrl(216, 'FFD700'), img_secondary: getPlaceholderUrl(216, '8B0000') },
    { id: 217, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 gr", code: "H05G3-C", img_primary: getPlaceholderUrl(217, 'FFD700'), img_secondary: getPlaceholderUrl(217, '8B0000') },
    { id: 218, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 gr", code: "H08G3-C", img_primary: getPlaceholderUrl(218, 'FFD700'), img_secondary: getPlaceholderUrl(218, '8B0000') },

    // --- Chocolates y Trufas ---
    { id: 219, name: "Monfer Cuadro Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Cuadro x 5 Unidades", unit_weight: "12.5 g", code: "SD05G-C", img_primary: getPlaceholderUrl(219, 'FFD700'), img_secondary: getPlaceholderUrl(219, 'DAA520') },
    { id: 220, name: "Monfer Cuadro Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Cuadro x 8 Unidades", unit_weight: "12.5 g", code: "RTD08G-C", img_primary: getPlaceholderUrl(220, 'FFD700'), img_secondary: getPlaceholderUrl(220, 'DAA520') },
    { id: 221, name: "Monfer Regalo con Lazo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Regalo x 8 Unidades", unit_weight: "12.5 g", code: "DO8GF-C", img_primary: getPlaceholderUrl(221, 'DC143C'), img_secondary: getPlaceholderUrl(221, 'B71C1C') },
    { id: 222, name: "Monfer Cuadro x 11 UNDS", category: "chocolateria", subcategory: "Bombones Granel", brand: "Monfer", presentation: "Cuadro x 11 Unidades", unit_weight: "12.5g", code: "RTD11G-G", img_primary: getPlaceholderUrl(222, '4682B4'), img_secondary: getPlaceholderUrl(222, '1E90FF') },
    { id: 223, name: "Monfer Pack 3 UNDS", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Pack x 16 Packs", unit_weight: "12.5 g x3", code: "EM03G-C", img_primary: getPlaceholderUrl(223, '00BFFF'), img_secondary: getPlaceholderUrl(223, '00CED1') },
    { id: 224, name: "Truffete (Pote)", category: "chocolateria", subcategory: "Trufas", brand: "Deyelli", presentation: "Pote x 100 Unidades", unit_weight: "N/A", code: "TRU-002", img_primary: getPlaceholderUrl(224, 'DC143C'), img_secondary: getPlaceholderUrl(224, '8B0000') },
    { id: 225, name: "Truffete (Bolsa)", category: "chocolateria", subcategory: "Trufas", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "N/A", code: "TRU-001", img_primary: getPlaceholderUrl(225, 'DC143C'), img_secondary: getPlaceholderUrl(225, '8B0000') },
    { id: 226, name: "Carilokis (Pote)", category: "chocolateria", subcategory: "Barras/Copas", brand: "Deyelli", presentation: "Pote x 200 Unidades", unit_weight: "4 Gramos", code: "G-99003", img_primary: getPlaceholderUrl(226, 'FF9800'), img_secondary: getPlaceholderUrl(226, 'FF5722') },
    { id: 227, name: "Snack Turrón", category: "chocolateria", subcategory: "Barras", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "TA-005", img_primary: getPlaceholderUrl(227, '607D8B'), img_secondary: getPlaceholderUrl(227, '455A64') },
    { id: 228, name: "Cocobum (Barra de Coco)", category: "chocolateria", subcategory: "Barras", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "TA-001", img_primary: getPlaceholderUrl(228, '00BFFF'), img_secondary: getPlaceholderUrl(228, '00CED1') },

    // ==============================================
    // 3. BEBIDAS (1 Producto)
    // ==============================================
    {
        id: 301, name: "Bebida Aloe Vera D'Loe", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe",
        presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0001",
        img_primary: getPlaceholderUrl(301, '3CB371'), img_secondary: getPlaceholderUrl(301, '228B22'),
    },

    // ==============================================
    // 4. CUIDADO DE HOGAR (3 Productos)
    // ==============================================
    {
        id: 401, name: "Detergente Huracán Limón", category: "cuidado-de-hogar", subcategory: "Detergentes", brand: "Huracán",
        presentation: "Saco x 15 KG", unit_weight: "15 KG", code: "DET-0002",
        img_primary: getPlaceholderUrl(401, '8BC34A'), img_secondary: getPlaceholderUrl(401, '5D4037'),
    },
    {
        id: 402, name: "Detergente Huracán Floral", category: "cuidado-de-hogar", subcategory: "Detergentes", brand: "Huracán",
        presentation: "Saco x 15 KG", unit_weight: "15 KG", code: "DET-0001",
        img_primary: getPlaceholderUrl(402, 'FF9800'), img_secondary: getPlaceholderUrl(402, 'FF5722'),
    },
    {
        id: 403, name: "Esponja Alambrada", category: "cuidado-de-hogar", subcategory: "Esponjas", brand: "Huracán",
        presentation: "Plancha x 12 Unidades", unit_weight: "N/A", code: "ESP-001",
        img_primary: getPlaceholderUrl(403, '00BFFF'), img_secondary: getPlaceholderUrl(403, '03A9F4'),
    },

    // ==============================================
    // 5. ENLATADOS (1 Producto)
    // ==============================================
    {
        id: 501, name: "Gran Durazno en Almíbar", category: "enlatados", subcategory: "Frutas en Conserva", brand: "Delycorp",
        presentation: "Caja x 12 Latas", unit_weight: "820 Gramos", code: "D-00001",
        img_primary: getPlaceholderUrl(501, '4682B4'), img_secondary: getPlaceholderUrl(501, '1E90FF'),
    },
    
    // ==============================================
    // 6. PRODUCTOS DE CAMPAÑA (3 Productos)
    // ==============================================
    {
        id: 601, name: "Ricotón Panetón Bolsa", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Bolsa x 800 gramos", unit_weight: "800 gramos", code: "PAN-0005",
        img_primary: getPlaceholderUrl(601, '003B71'), img_secondary: getPlaceholderUrl(601, '4169E1'),
    },
    {
        id: 602, name: "Delitón Panetón Bolsa", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Bolsa x 800 gramos", unit_weight: "800 gramos", code: "PAN-0001",
        img_primary: getPlaceholderUrl(602, '03A9F4'), img_secondary: getPlaceholderUrl(602, '4682B4'),
    },
    {
        id: 603, name: "Delitón Panetón Caja", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Caja x 6 Unidades", unit_weight: "750 gramos", code: "PAN-0004",
        img_primary: getPlaceholderUrl(603, 'FFC107'), img_secondary: getPlaceholderUrl(603, 'DAA520'),
    },

    ];

    // --- FUNCIONES HELPERS ---

    export const getSubcategories = (categorySlug) => {
    const filtered = allProducts.filter(p => p.category === categorySlug);
    return [...new Set(filtered.map(p => p.subcategory))];
    };

    export const getCategoryName = (slug) => {
    const found = categoriesConfig.find(c => c.slug === slug);
    return found ? found.name : "Todos los Productos";
    };