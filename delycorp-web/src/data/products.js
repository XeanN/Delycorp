    import { getAssetUrl } from '../utils/assets'; // 1. Importar
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
    { id: 101, name: "Chupetín Helado Led", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-002", img_primary: getAssetUrl('dulces/chupetin-helado-led.png'), img_secondary: getAssetUrl('dulces/chupetin-helado-led-2.png') },
    { id: 102, name: "Huevo Led", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-003", img_primary: getAssetUrl('dulces/huevo-led.png'), img_secondary: getAssetUrl('dulces/huevo-led-2.png') },
    { id: 103, name: "Molino de Caramelo", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "CHUP-001", img_primary: getAssetUrl('dulces/molino-de-caramelo.png'), img_secondary: getAssetUrl('dulces/molino-de-caramelo-2.png') },
    { id: 104, name: "Caramelo Chupadedo", category: "dulces", subcategory: "Chupetines Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 Gramos", code: "CHUP-010", img_primary: getAssetUrl('dulces/caramelo-chupadedo.png'), img_secondary: getAssetUrl('dulces/caramelo-chupadedo-2.png') },
    { id: 105, name: "Pintor Explosivo", category: "dulces", subcategory: "Chupetín + Polvo", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "6 gramos", code: "CHUP-012", img_primary: getAssetUrl('dulces/pintor-explosivo.png'), img_secondary: getAssetUrl('dulces/pintor-explosivo-2.png') },

    // --- Caramelo Líquido (Deyelli) ---
    { id: 106, name: "Mini Gas Spray (Encendedor)", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 ml", code: "CL-002", img_primary: getAssetUrl('dulces/mini-gas-spray-encendedor.png'), img_secondary: getAssetUrl('dulces/mini-gas-spray-encendedor-2.png') },
    { id: 107, name: "Mini Pistola Spray", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 ml", code: "CL-001", img_primary: getAssetUrl('dulces/mini-pistola-spray.png'), img_secondary: getAssetUrl('dulces/mini-pistola-spray-2.png') },
    { id: 108, name: "Dino Roll", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 gr", code: "CL-004", img_primary: getAssetUrl('dulces/dino-roll.png'), img_secondary: getAssetUrl('dulces/dino-roll-2.png') },
    { id: 109, name: "Mini Extintor Spray", category: "dulces", subcategory: "Caramelo Líquido", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 ml", code: "CL-003", img_primary: getAssetUrl('dulces/mini-extintor-spray.png'), img_secondary: getAssetUrl('dulces/mini-extintor-spray-2.png') },
    { id: 110, name: "Dentito Loko", category: "dulces", subcategory: "Jalea de Caramelo", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "8 gramos", code: "CL-005", img_primary: getAssetUrl('dulces/dentito-loko.png'), img_secondary: getAssetUrl('dulces/dentito-loko-2.png') },

    // --- Chicles (Deyelli) ---
    { id: 111, name: "Chiclazo Tattoo (Bolsa 100 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "4.5 gr", code: "CHI-011", img_primary: getAssetUrl('dulces/chiclazo-tattoo-bolsa-100.png'), img_secondary: getAssetUrl('dulces/chiclazo-tattoo-bolsa-100-2.png') },
    { id: 112, name: "Mini Chiclazo Tattoo (Bolsa 150 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Bolsa x 150 Unidades", unit_weight: "3 gr", code: "CHI-012", img_primary: getAssetUrl('dulces/mini-chiclazo-tattoo-bolsa-150.png'), img_secondary: getAssetUrl('dulces/mini-chiclazo-tattoo-bolsa-150-2.png') },
    { id: 113, name: "Chiclazo Tattoo (Frasco 100 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "4.5 gr", code: "CHI-013", img_primary: getAssetUrl('dulces/chiclazo-tattoo-frasco-100.png'), img_secondary: getAssetUrl('dulces/chiclazo-tattoo-frasco-100-2.png') },
    { id: 114, name: "Mini Chiclazo Tattoo (Frasco 150 U.)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 150 Unidades", unit_weight: "3 gr", code: "CHI-014", img_primary: getAssetUrl('dulces/mini-chiclazo-tattoo-frasco-150.png'), img_secondary: getAssetUrl('dulces/mini-chiclazo-tattoo-frasco-150-2.png') },
    { id: 115, name: "Gaseosas Candy (Fanbi, Pepe, etc)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "18 Gramos", code: "CHI-004", img_primary: getAssetUrl('dulces/gaseosas-candy.png'), img_secondary: getAssetUrl('dulces/gaseosas-candy-2.png') },
    { id: 116, name: "Bolimix", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Frasco x 125 Unidades", unit_weight: "8 Gramos", code: "CHI-016", img_primary: getAssetUrl('dulces/bolimix.png'), img_secondary: getAssetUrl('dulces/bolimix-2.png') },
    { id: 117, name: "Chicle Jirafa (31 CM)", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 60 Unidades", unit_weight: "12 gramos", code: "CHI-015", img_primary: getAssetUrl('dulces/chicle-jirafa-31cm.png'), img_secondary: getAssetUrl('dulces/chicle-jirafa-31cm-2.png') },
    { id: 118, name: "Chicle en Polvo", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "8 gramos", code: "CHI-010", img_primary: getAssetUrl('dulces/chicle-en-polvo.png'), img_secondary: getAssetUrl('dulces/chicle-en-polvo-2.png') },

    // --- Mini Gelatinas (Deyelli) ---
    { id: 120, name: "Mini Gelatina Tren", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-006", img_primary: getAssetUrl('dulces/mini-gelatina-tren.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-tren-2.png') },
    { id: 121, name: "Mini Gelatina Auto", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-005", img_primary: getAssetUrl('dulces/mini-gelatina-auto.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-auto-2.png') },
    { id: 122, name: "Mini Gelatina Perro", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-004", img_primary: getAssetUrl('dulces/mini-gelatina-perro.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-perro-2.png') },
    { id: 123, name: "Mini Gelatina Rana", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-003", img_primary: getAssetUrl('dulces/mini-gelatina-rana.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-rana-2.png') },
    { id: 124, name: "Mini Gelatina Super Heroes", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-012", img_primary: getAssetUrl('dulces/mini-gelatina-super-heroes.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-super-heroes-2.png') },
    { id: 125, name: "Mini Gelatina Niño y Niña", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-007", img_primary: getAssetUrl('dulces/mini-gelatina-nino-y-nina.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-nino-y-nina-2.png') },
    { id: 126, name: "Mini Gelatina Dragon Ball (Frasco)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 gr", code: "GELA-014", img_primary: getAssetUrl('dulces/mini-gelatina-dragon-ball-frasco.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-dragon-ball-frasco-2.png') },
    { id: 127, name: "Mini Gelatina Dragon Ball (Bolsa)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 20 Unidades", unit_weight: "15 gr", code: "G-10026", img_primary: getAssetUrl('dulces/mini-gelatina-dragon-ball-bolsa.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-dragon-ball-bolsa-2.png') },
    { id: 128, name: "Mini Gelatina (Bolsa 40 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 40 Unidades", unit_weight: "15 Gramos", code: "GELA-010", img_primary: getAssetUrl('dulces/mini-gelatina-bolsa-40.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-bolsa-40-2.png') },
    { id: 129, name: "Mini Gelatina (Bolsa 50 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 50 Unidades", unit_weight: "15 Gramos", code: "GELA-009", img_primary: getAssetUrl('dulces/mini-gelatina-bolsa-50.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-bolsa-50-2.png') },
    { id: 130, name: "Mini Gelatina (Bolsa 100 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-008", img_primary: getAssetUrl('dulces/mini-gelatina-bolsa-100.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-bolsa-100-2.png') },
    { id: 131, name: "Mini Gelatina (Frasco 100 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Frasco x 100 Unidades", unit_weight: "15 Gramos", code: "GELA-002", img_primary: getAssetUrl('dulces/mini-gelatina-frasco-100.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-frasco-100-2.png') },
    { id: 132, name: "Mini Gelatina (Caja Granel 410 UNDS)", category: "dulces", subcategory: "Mini Gelatinas", brand: "Deyelli", presentation: "Caja x 410 Unidades", unit_weight: "N/A", code: "GELA-001", img_primary: getAssetUrl('dulces/mini-gelatina-caja-granel-410.png'), img_secondary: getAssetUrl('dulces/mini-gelatina-caja-granel-410-2.png') },

    // --- Huevos Sorpresa (Deyelli) ---
    { id: 133, name: "Huevo Dino Baby", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-001", img_primary: getAssetUrl('dulces/huevo-dino-baby.png'), img_secondary: getAssetUrl('dulces/huevo-dino-baby-2.png') },
    { id: 134, name: "Huevo Dino Xplor", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-004", img_primary: getAssetUrl('dulces/huevo-dino-xplor.png'), img_secondary: getAssetUrl('dulces/huevo-dino-xplor-2.png') },
    { id: 135, name: "Huevo Baby Pets", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 Gramos", code: "HMU-003", img_primary: getAssetUrl('dulces/huevo-baby-pets.png'), img_secondary: getAssetUrl('dulces/huevo-baby-pets-2.png') },
    { id: 136, name: "Huevo Mini Dino Kids", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 48 Unidades", unit_weight: "8 Gramos", code: "HMU-006", img_primary: getAssetUrl('dulces/huevo-mini-dino-kids.png'), img_secondary: getAssetUrl('dulces/huevo-mini-dino-kids-2.png') },
    { id: 137, name: "Huevo Doll Sorpresa", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "12 gramos", code: "HMU-0007", img_primary: getAssetUrl('dulces/huevo-doll-sorpresa.png'), img_secondary: getAssetUrl('dulces/huevo-doll-sorpresa-2.png') },
    { id: 138, name: "Huevo Super Boys", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-004", img_primary: getAssetUrl('dulces/huevo-super-boys.png'), img_secondary: getAssetUrl('dulces/huevo-super-boys-2.png') },
    { id: 139, name: "Huevo Mini Princesa", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-003", img_primary: getAssetUrl('dulces/huevo-mini-princesa.png'), img_secondary: getAssetUrl('dulces/huevo-mini-princesa-2.png') },
    { id: 140, name: "Huevo Mansión Monster", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-005", img_primary: getAssetUrl('dulces/huevo-mansion-monster.png'), img_secondary: getAssetUrl('dulces/huevo-mansion-monster-2.png') },
    { id: 141, name: "Huevo Eggo Toys", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-001", img_primary: getAssetUrl('dulces/huevo-eggo-toys.png'), img_secondary: getAssetUrl('dulces/huevo-eggo-toys-2.png') },
    { id: 142, name: "Huevo Dino Explor", category: "dulces", subcategory: "Huevos Sorpresa", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "HCH-006", img_primary: getAssetUrl('dulces/huevo-dino-explor.png'), img_secondary: getAssetUrl('dulces/huevo-dino-explor-2.png') },

    // --- Palitos Yogurt (Deyelli) ---
    { id: 143, name: "Stick Volador", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "11 Gramos", code: "CB-0002", img_primary: getAssetUrl('dulces/stick-volador.png'), img_secondary: getAssetUrl('dulces/stick-volador-2.png') },
    { id: 144, name: "Stick Tattoo", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "11 Gramos", code: "CB-0001", img_primary: getAssetUrl('dulces/stick-tattoo.png'), img_secondary: getAssetUrl('dulces/stick-tattoo-2.png') },
    { id: 145, name: "Palitos Yogurt Uñas", category: "dulces", subcategory: "Palitos Yogurt", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "5 gramos", code: "CB-0005", img_primary: getAssetUrl('dulces/palitos-yogurt-unas.png'), img_secondary: getAssetUrl('dulces/palitos-yogurt-unas-2.png') },

    // --- Polvo Ácido (Deyelli) ---
    { id: 146, name: "Polvo Ácido Fruti Kola", category: "dulces", subcategory: "Polvo Ácido", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "3.5 gr", code: "PA-001", img_primary: getAssetUrl('dulces/polvo-acido-fruti-kola.png'), img_secondary: getAssetUrl('dulces/polvo-acido-fruti-kola-2.png') },
    { id: 147, name: "Polvo Ácido K-Nita XXL", category: "dulces", subcategory: "Polvo Ácido", brand: "Deyelli", presentation: "Display x 50 Unidades", unit_weight: "10 gr", code: "PA-002", img_primary: getAssetUrl('dulces/polvo-acido-k-nita-xxl.png'), img_secondary: getAssetUrl('dulces/polvo-acido-k-nita-xxl-2.png') },

    // --- Caramelos (Tayas/Deyelli) ---
    { id: 148, name: "Caramelo Coffee Intense", category: "dulces", subcategory: "Caramelos", brand: "Tayas", presentation: "Bolsa x 105 Unidades", unit_weight: "3.8 gramos", code: "CAR-0001", img_primary: getAssetUrl('dulces/caramelo-coffee-intense.png'), img_secondary: getAssetUrl('dulces/caramelo-coffee-intense-2.png') },
    { id: 149, name: "Caramelo Sellito Pop", category: "dulces", subcategory: "Caramelos Sellos", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "2 gr", code: "CD-002", img_primary: getAssetUrl('dulces/caramelo-sellito-pop.png'), img_secondary: getAssetUrl('dulces/caramelo-sellito-pop-2.png') },
    { id: 150, name: "Caramelo Garrita Loka", category: "dulces", subcategory: "Caramelos Chupadedo", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "7 gr", code: "CD-003", img_primary: getAssetUrl('dulces/caramelo-garrita-loka.png'), img_secondary: getAssetUrl('dulces/caramelo-garrita-loka-2.png') },
    
    // --- Chicles Juguete (Deyelli) ---
    { id: 151, name: "Chicles Balón Volador", category: "dulces", subcategory: "Chicles Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "6 gr", code: "CHI-016", img_primary: getAssetUrl('dulces/chicles-balon-volador.png'), img_secondary: getAssetUrl('dulces/chicles-balon-volador-2.png') },
    { id: 152, name: "Gomitas Gira Loko", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-006", img_primary: getAssetUrl('dulces/gomitas-gira-loko.png'), img_secondary: getAssetUrl('dulces/gomitas-gira-loko-2.png') },
    { id: 153, name: "Gomitas Crayitos", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-008", img_primary: getAssetUrl('dulces/gomitas-crayitos.png'), img_secondary: getAssetUrl('dulces/gomitas-crayitos-2.png') },
    { id: 154, name: "Gomitas Lanza Bomba", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "4 gr", code: "GOMI-009", img_primary: getAssetUrl('dulces/gomitas-lanza-bomba.png'), img_secondary: getAssetUrl('dulces/gomitas-lanza-bomba-2.png') },
    
    // --- Malvaviscos (Deyelli) ---
    { id: 155, name: "Malvavisco Angelito (Celeste 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0010", img_primary: getAssetUrl('dulces/malvavisco-angelito-celeste-500g.png'), img_secondary: getAssetUrl('dulces/malvavisco-angelito-celeste-500g-2.png') },
    { id: 156, name: "Malvavisco Angelito (Fresa 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0009", img_primary: getAssetUrl('dulces/malvavisco-angelito-fresa-500g.png'), img_secondary: getAssetUrl('dulces/malvavisco-angelito-fresa-500g-2.png') },
    { id: 157, name: "Malvavisco Angelito (Mix 500g)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 500 g", unit_weight: "500 g", code: "MALV-0008", img_primary: getAssetUrl('dulces/malvavisco-angelito-mix-500g.png'), img_secondary: getAssetUrl('dulces/malvavisco-angelito-mix-500g-2.png') },
    { id: 158, name: "Malvavisco Bongy (50 UNDS)", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 50 Unidades", unit_weight: "5 gramos", code: "MALV-0005", img_primary: getAssetUrl('dulces/malvavisco-bongy-50.png'), img_secondary: getAssetUrl('dulces/malvavisco-bongy-50-2.png') },
    
    // --- Galletas (NUEVO) ---
    { id: 159, name: "Mini Galleta Tonazo Fresa", category: "dulces", subcategory: "Galletas", brand: "Tonazo", presentation: "Bolsa x 50 Unidades", unit_weight: "10 gr", code: "GA-001", img_primary: getAssetUrl('dulces/mini-galleta-tonazo-fresa.png'), img_secondary: getAssetUrl('dulces/mini-galleta-tonazo-fresa-2.png') },
    { id: 160, name: "Mini Galleta Tonazo Vainilla", category: "dulces", subcategory: "Galletas", brand: "Tonazo", presentation: "Bolsa x 50 Unidades", unit_weight: "10 gr", code: "GA-003", img_primary: getAssetUrl('dulces/mini-galleta-tonazo-vainilla.png'), img_secondary: getAssetUrl('dulces/mini-galleta-tonazo-vainilla-2.png') },
    { id: 161, name: "Mini Galleta Tonazo Chocolate", category: "dulces", subcategory: "Galletas", brand: "Tonazo", presentation: "Bolsa x 50 Unidades", unit_weight: "10 gr", code: "GA-002", img_primary: getAssetUrl('dulces/mini-galleta-tonazo-chocolate.png'), img_secondary: getAssetUrl('dulces/mini-galleta-tonazo-chocolate-2.png') },
    { id: 162, name: "Yumi Chock", category: "dulces", subcategory: "Galletas", brand: "Deyelli", presentation: "Display x 10 Unidades", unit_weight: "15 Gramos", code: "MG-001", img_primary: getAssetUrl('dulces/yumi-chock.png'), img_secondary: getAssetUrl('dulces/yumi-chock-2.png') },

    // --- Gomitas (NUEVO) ---
    { id: 163, name: "Gomitas Culebritas", category: "dulces", subcategory: "Gomitas", brand: "Guandy", presentation: "Tira x 24 Unidades", unit_weight: "20 gramos", code: "GOMI-004", img_primary: getAssetUrl('dulces/gomitas-culebritas.png'), img_secondary: getAssetUrl('dulces/gomitas-culebritas-2.png') },
    { id: 164, name: "Gomitas Banana Banana", category: "dulces", subcategory: "Gomitas", brand: "Guandy", presentation: "Tira x 24 Unidades", unit_weight: "20 gramos", code: "GOMI-003", img_primary: getAssetUrl('dulces/gomitas-banana-banana.png'), img_secondary: getAssetUrl('dulces/gomitas-banana-banana-2.png') },
    { id: 165, name: "Batalla Goko (con Juguete)", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "6 gramos", code: "GOMI-002", img_primary: getAssetUrl('dulces/batalla-goko.png'), img_secondary: getAssetUrl('dulces/batalla-goko-2.png') },
    { id: 166, name: "Frie Tu Huevo XL", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 20 Unidades", unit_weight: "25 gramos", code: "GOMI-001", img_primary: getAssetUrl('dulces/frie-tu-huevo-xl.png'), img_secondary: getAssetUrl('dulces/frie-tu-huevo-xl-2.png') },
    { id: 167, name: "Frie Tu Huevito", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "16 gramos", code: "GOMI-005", img_primary: getAssetUrl('dulces/frie-tu-huevito.png'), img_secondary: getAssetUrl('dulces/frie-tu-huevito-2.png') },
    { id: 168, name: "Gomitas Gummy Lunch", category: "dulces", subcategory: "Gomitas", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "10 gramos", code: "G-53019", img_primary: getAssetUrl('dulces/gomitas-gummy-lunch.png'), img_secondary: getAssetUrl('dulces/gomitas-gummy-lunch-2.png') },
    { id: 169, name: "Gomitas Corazones Sweet Heart", category: "dulces", subcategory: "Gomitas", brand: "Guandy", presentation: "Tira x 24 Unidades", unit_weight: "20 Gramos", code: "GOMI-016", img_primary: getAssetUrl('dulces/gomitas-corazones-sweet-heart.png'), img_secondary: getAssetUrl('dulces/gomitas-corazones-sweet-heart-2.png') },
    { id: 170, name: "Gomitas Sour Watermelon", category: "dulces", subcategory: "Gomitas", brand: "Guandy", presentation: "Tira x 24 Unidades", unit_weight: "20 Gramos", code: "GOMI-017", img_primary: getAssetUrl('dulces/gomitas-sour-watermelon.png'), img_secondary: getAssetUrl('dulces/gomitas-sour-watermelon-2.png') },
    { id: 171, name: "Gomitas Ositos Sour Bear", category: "dulces", subcategory: "Gomitas", brand: "Guandy", presentation: "Tira x 24 Unidades", unit_weight: "20 Gramos", code: "GOMI-018", img_primary: getAssetUrl('dulces/gomitas-ositos-sour-bear.png'), img_secondary: getAssetUrl('dulces/gomitas-ositos-sour-bear-2.png') },
    { id: 172, name: "Gomitas Chatarrita (Gomi Blox)", category: "dulces", subcategory: "Gomitas Juguete", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "8.5 gr", code: "GOMI-010", img_primary: getAssetUrl('dulces/gomitas-chatarrita-gomi-blox.png'), img_secondary: getAssetUrl('dulces/gomitas-chatarrita-gomi-blox-2.png') },

    // --- Gomitas Ácidas Damla (NUEVO) ---
    { id: 173, name: "Damla Sour Belts Tropical XL", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 72 Unidades", unit_weight: "15 Gramos", code: "G-53018", img_primary: getAssetUrl('dulces/damla-sour-belts-tropical-xl.png'), img_secondary: getAssetUrl('dulces/damla-sour-belts-tropical-xl-2.png') },
    { id: 174, name: "Damla Sour Tubes Tropical", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 24 Unidades", unit_weight: "30 Gramos", code: "G-53014", img_primary: getAssetUrl('dulces/damla-sour-tubes-tropical.png'), img_secondary: getAssetUrl('dulces/damla-sour-tubes-tropical-2.png') },
    { id: 175, name: "Damla Sour Tubes Mora Frambuesa", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 24 Unidades", unit_weight: "30 Gramos", code: "G-53011", img_primary: getAssetUrl('dulces/damla-sour-tubes-mora-frambuesa.png'), img_secondary: getAssetUrl('dulces/damla-sour-tubes-mora-frambuesa-2.png') },
    { id: 176, name: "Damla Sour Tubes Frutas", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 24 Unidades", unit_weight: "30 Gramos", code: "G-53017", img_primary: getAssetUrl('dulces/damla-sour-tubes-frutas.png'), img_secondary: getAssetUrl('dulces/damla-sour-tubes-frutas-2.png') },
    { id: 177, name: "Damla Sour Tubes Manzana", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 24 Unidades", unit_weight: "30 Gramos", code: "G-53016", img_primary: getAssetUrl('dulces/damla-sour-tubes-manzana.png'), img_secondary: getAssetUrl('dulces/damla-sour-tubes-manzana-2.png') },
    { id: 178, name: "Damla Sour Tubes Fresa", category: "dulces", subcategory: "Gomitas Ácidas", brand: "Damla", presentation: "Display x 24 Unidades", unit_weight: "30 Gramos", code: "G-53012", img_primary: getAssetUrl('dulces/damla-sour-tubes-fresa.png'), img_secondary: getAssetUrl('dulces/damla-sour-tubes-fresa-2.png') },

    // --- Malvaviscos (NUEVO) ---
    { id: 179, name: "Malvavisco Twister Celeste", category: "dulces", subcategory: "Malvaviscos", brand: "Angelito", presentation: "Bolsa x 200 gramos", unit_weight: "200 gramos", code: "MALV-0002", img_primary: getAssetUrl('dulces/malvavisco-twister-celeste.png'), img_secondary: getAssetUrl('dulces/malvavisco-twister-celeste-2.png') },
    { id: 180, name: "Malvavisco Twister Fresa", category: "dulces", subcategory: "Malvaviscos", brand: "Angelito", presentation: "Bolsa x 200 gramos", unit_weight: "200 gramos", code: "MALV-0001", img_primary: getAssetUrl('dulces/malvavisco-twister-fresa.png'), img_secondary: getAssetUrl('dulces/malvavisco-twister-fresa-2.png') },
    { id: 181, name: "Malvavisco Twister Frutas", category: "dulces", subcategory: "Malvaviscos", brand: "Angelito", presentation: "Bolsa x 200 gramos", unit_weight: "200 gramos", code: "MALV-0003", img_primary: getAssetUrl('dulces/malvavisco-twister-frutas.png'), img_secondary: getAssetUrl('dulces/malvavisco-twister-frutas-2.png') },
    { id: 182, name: "Malvavisco Mini Mini", category: "dulces", subcategory: "Malvaviscos", brand: "Angelito", presentation: "Tira x 12 Unidades", unit_weight: "40 gramos", code: "MALV-0004", img_primary: getAssetUrl('dulces/malvavisco-mini-mini.png'), img_secondary: getAssetUrl('dulces/malvavisco-mini-mini-2.png') },
    { id: 183, name: "Malvavisco Chocomanchas", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Tira x 12 Unidades", unit_weight: "26 gramos", code: "MALV-0006", img_primary: getAssetUrl('dulces/malvavisco-chocomanchas.png'), img_secondary: getAssetUrl('dulces/malvavisco-chocomanchas-2.png') },
    { id: 184, name: "Marshmellosos", category: "dulces", subcategory: "Malvaviscos", brand: "Deyelli", presentation: "Bolsa x 50 Unidades", unit_weight: "5 Gramos", code: "MALV-0011", img_primary: getAssetUrl('dulces/marshmellosos.png'), img_secondary: getAssetUrl('dulces/marshmellosos-2.png') },

    // --- Chicles (NUEVO) ---
    { id: 185, name: "Bolichicle Boli Mix", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 100 Unidades", unit_weight: "8 gr", code: "CHI-018", img_primary: getAssetUrl('dulces/bolichicle-boli-mix.png'), img_secondary: getAssetUrl('dulces/bolichicle-boli-mix-2.png') },
    { id: 186, name: "Dino Huevitos", category: "dulces", subcategory: "Chicles", brand: "Deyelli", presentation: "Display x 30 Unidades", unit_weight: "20 Gramos", code: "G-61004", img_primary: getAssetUrl('dulces/dino-huevitos.png'), img_secondary: getAssetUrl('dulces/dino-huevitos-2.png') },

    // --- Piñatería (NUEVO) ---
    { id: 187, name: "Piñatón Deyelli", category: "dulces", subcategory: "Piñatería", brand: "Deyelli", presentation: "Bolsa x 100 Piezas", unit_weight: "1 Kg", code: "PC-001", img_primary: getAssetUrl('dulces/pinaton-deyelli.png'), img_secondary: getAssetUrl('dulces/pinaton-deyelli-2.png') },
    { id: 188, name: "Piñatero Deyelli", category: "dulces", subcategory: "Piñatería", brand: "Deyelli", presentation: "Bolsa x 100 Piezas", unit_weight: "1 Kg", code: "PC-006", img_primary: getAssetUrl('dulces/pinatero-deyelli.png'), img_secondary: getAssetUrl('dulces/pinatero-deyelli-2.png') },
    
    // ==============================================
    // 2. CHOCOLATERÍA (36 Productos)
    // ==============================================
    
    // --- Bombones Monfer (Corazón Rojo) ---
    { id: 201, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12 g", code: "HO3RH", img_primary: getAssetUrl('chocolateria/monfer-corazon-rojo-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-rojo-3-2.png') },
    { id: 202, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "8g", code: "HO5RH", img_primary: getAssetUrl('chocolateria/monfer-corazon-rojo-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-rojo-5-2.png') },
    { id: 203, name: "Monfer Corazón Rojo GOLD", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Gold x 8 Unidades", unit_weight: "8g", code: "HO8RH1", img_primary: getAssetUrl('chocolateria/monfer-corazon-rojo-gold.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-rojo-gold-2.png') },
    { id: 204, name: "Monfer Corazón Rojo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 15 Unidades", unit_weight: "8 g", code: "HI5RH", img_primary: getAssetUrl('chocolateria/monfer-corazon-rojo-15.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-rojo-15-2.png') },
    
    // --- Bombones Monfer (Corazón Dorado y Especiales) ---
    { id: 205, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 g", code: "HO3G-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-dorado-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-dorado-3-2.png') },
    { id: 206, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 g", code: "HO5G-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-dorado-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-dorado-5-2.png') },
    { id: 207, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 g", code: "HO8G-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-dorado-8.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-dorado-8-2.png') },
    { id: 208, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 12 Unidades", unit_weight: "12.5 g", code: "HI2G-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-dorado-12.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-dorado-12-2.png') },
    { id: 209, name: "Monfer Corazón Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 16 Unidades", unit_weight: "12.5 g", code: "H16G-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-dorado-16.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-dorado-16-2.png') },
    { id: 210, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 3 Unidades", unit_weight: "12.5 g", code: "BH03M-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-azul-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-azul-3-2.png') },
    { id: 211, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 5 Unidades", unit_weight: "12.5 g", code: "BH05M-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-azul-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-azul-5-2.png') },
    { id: 212, name: "Monfer Corazón Azul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón Azul x 8 Unidades", unit_weight: "12.5 g", code: "BH08M-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-azul-8.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-azul-8-2.png') },
    { id: 213, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 gr", code: "BH03M3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-3-2.png') },
    { id: 214, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 gr", code: "BH05M3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-5-2.png') },
    { id: 215, name: "Monfer Corazón Blanquiazul", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 gr", code: "BH08M3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-8.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-blanquiazul-8-2.png') },
    { id: 216, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 3 Unidades", unit_weight: "12.5 gr", code: "H03G3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-crema-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-crema-3-2.png') },
    { id: 217, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 5 Unidades", unit_weight: "12.5 gr", code: "H05G3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-crema-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-crema-5-2.png') },
    { id: 218, name: "Monfer Corazón Crema", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Corazón x 8 Unidades", unit_weight: "12.5 gr", code: "H08G3-C", img_primary: getAssetUrl('chocolateria/monfer-corazon-crema-8.png'), img_secondary: getAssetUrl('chocolateria/monfer-corazon-crema-8-2.png') },

    // --- Chocolates y Trufas ---
    { id: 219, name: "Monfer Cuadro Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Cuadro x 5 Unidades", unit_weight: "12.5 g", code: "SD05G-C", img_primary: getAssetUrl('chocolateria/monfer-cuadro-dorado-5.png'), img_secondary: getAssetUrl('chocolateria/monfer-cuadro-dorado-5-2.png') },
    { id: 220, name: "Monfer Cuadro Dorado", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Cuadro x 8 Unidades", unit_weight: "12.5 g", code: "RTD08G-C", img_primary: getAssetUrl('chocolateria/monfer-cuadro-dorado-8.png'), img_secondary: getAssetUrl('chocolateria/monfer-cuadro-dorado-8-2.png') },
    { id: 221, name: "Monfer Regalo con Lazo", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Regalo x 8 Unidades", unit_weight: "12.5 g", code: "DO8GF-C", img_primary: getAssetUrl('chocolateria/monfer-regalo-con-lazo.png'), img_secondary: getAssetUrl('chocolateria/monfer-regalo-con-lazo-2.png') },
    { id: 222, name: "Monfer Cuadro x 11 UNDS", category: "chocolateria", subcategory: "Bombones Granel", brand: "Monfer", presentation: "Cuadro x 11 Unidades", unit_weight: "12.5g", code: "RTD11G-G", img_primary: getAssetUrl('chocolateria/monfer-cuadro-11.png'), img_secondary: getAssetUrl('chocolateria/monfer-cuadro-11-2.png') },
    { id: 223, name: "Monfer Pack 3 UNDS", category: "chocolateria", subcategory: "Bombones Regalo", brand: "Monfer", presentation: "Pack x 16 Packs", unit_weight: "12.5 g x3", code: "EM03G-C", img_primary: getAssetUrl('chocolateria/monfer-pack-3.png'), img_secondary: getAssetUrl('chocolateria/monfer-pack-3-2.png') },
    { id: 224, name: "Truffete (Pote)", category: "chocolateria", subcategory: "Trufas", brand: "Deyelli", presentation: "Pote x 100 Unidades", unit_weight: "N/A", code: "TRU-002", img_primary: getAssetUrl('chocolateria/truffete-pote.png'), img_secondary: getAssetUrl('chocolateria/truffete-pote-2.png') },
    { id: 225, name: "Truffete (Bolsa)", category: "chocolateria", subcategory: "Trufas", brand: "Deyelli", presentation: "Bolsa x 100 Unidades", unit_weight: "N/A", code: "TRU-001", img_primary: getAssetUrl('chocolateria/truffete-bolsa.png'), img_secondary: getAssetUrl('chocolateria/truffete-bolsa-2.png') },
    { id: 226, name: "Carilokis (Pote)", category: "chocolateria", subcategory: "Barras/Copas", brand: "Deyelli", presentation: "Pote x 200 Unidades", unit_weight: "4 Gramos", code: "G-99003", img_primary: getAssetUrl('chocolateria/carilokis-pote.png'), img_secondary: getAssetUrl('chocolateria/carilokis-pote-2.png') },
    { id: 227, name: "Snack Turrón", category: "chocolateria", subcategory: "Barras", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "TA-005", img_primary: getAssetUrl('chocolateria/snack-turron.png'), img_secondary: getAssetUrl('chocolateria/snack-turron-2.png') },
    { id: 228, name: "Cocobum (Barra de Coco)", category: "chocolateria", subcategory: "Barras", brand: "Deyelli", presentation: "Display x 24 Unidades", unit_weight: "20 Gramos", code: "TA-001", img_primary: getAssetUrl('chocolateria/cocobum-barra-de-coco.png'), img_secondary: getAssetUrl('chocolateria/cocobum-barra-de-coco-2.png') },

    // ==============================================
    // 3. BEBIDAS (1 Producto)
    // ==============================================
    {id: 301, name: "Bebida Aloe Vera D'Loe", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe", presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0001", img_primary: getAssetUrl('bebidas/bebida-aloe-vera-dloe.png'), img_secondary: getAssetUrl('bebidas/bebida-aloe-vera-dloe-2.png'),},
    { id: 302, name: "Bebida Aloe Vera Piña", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe", presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0002", img_primary: getAssetUrl('bebidas/bebida-aloe-vera-pina.png'), img_secondary: getAssetUrl('bebidas/bebida-aloe-vera-pina-2.png') },
    { id: 303, name: "Bebida Aloe Vera Arándano", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe", presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0003", img_primary: getAssetUrl('bebidas/bebida-aloe-vera-arandano.png'), img_secondary: getAssetUrl('bebidas/bebida-aloe-vera-arandano-2.png') },
    { id: 304, name: "Bebida Aloe Vera Fresa", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe", presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0004", img_primary: getAssetUrl('bebidas/bebida-aloe-vera-fresa.png'), img_secondary: getAssetUrl('bebidas/bebida-aloe-vera-fresa-2.png') },
    { id: 305, name: "Bebida Aloe Vera Coco", category: "bebidas", subcategory: "Aloe Vera", brand: "D'Loe", presentation: "Caja x 24 Botellas", unit_weight: "500 ml", code: "DYL-0005", img_primary: getAssetUrl('bebidas/bebida-aloe-vera-coco.png'), img_secondary: getAssetUrl('bebidas/bebida-aloe-vera-coco-2.png') },

    // ==============================================
    // 4. CUIDADO DE HOGAR (3 Productos)
    // ==============================================
    {
        id: 401, name: "Detergente Huracán Limón", category: "cuidado-de-hogar", subcategory: "Detergentes", brand: "Huracán",
        presentation: "Saco x 15 KG", unit_weight: "15 KG", code: "DET-0002",
        img_primary: getAssetUrl('cuidado-de-hogar/detergente-huracan-limon.png'), img_secondary: getAssetUrl('cuidado-de-hogar/detergente-huracan-limon-2.png'),
    },
    {
        id: 402, name: "Detergente Huracán Floral", category: "cuidado-de-hogar", subcategory: "Detergentes", brand: "Huracán",
        presentation: "Saco x 15 KG", unit_weight: "15 KG", code: "DET-0001",
        img_primary: getAssetUrl('cuidado-de-hogar/detergente-huracan-floral.png'), img_secondary: getAssetUrl('cuidado-de-hogar/detergente-huracan-floral-2.png'),
    },
    {
        id: 403, name: "Esponja Alambrada", category: "cuidado-de-hogar", subcategory: "Esponjas", brand: "Huracán",
        presentation: "Plancha x 12 Unidades", unit_weight: "N/A", code: "ESP-001",
        img_primary: getAssetUrl('cuidado-de-hogar/esponja-alambrada.png'), img_secondary: getAssetUrl('cuidado-de-hogar/esponja-alambrada-2.png'),
    },

    // ==============================================
    // 5. ENLATADOS (1 Producto)
    // ==============================================
    {
        id: 501, name: "Gran Durazno en Almíbar", category: "enlatados", subcategory: "Frutas en Conserva", brand: "Delycorp",
        presentation: "Caja x 12 Latas", unit_weight: "820 Gramos", code: "D-00001",
        img_primary: getAssetUrl('enlatados/gran-durazno-en-almibar.png'), img_secondary: getAssetUrl('enlatados/gran-durazno-en-almibar-2.png'),
    },
    
    // ==============================================
    // 6. PRODUCTOS DE CAMPAÑA (3 Productos)
    // ==============================================
    {
        id: 601, name: "Ricotón Panetón Bolsa", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Bolsa x 800 gramos", unit_weight: "800 gramos", code: "PAN-0005",
        img_primary: getAssetUrl('productos-de-campana/ricoton-paneton-bolsa.png'), img_secondary: getAssetUrl('productos-de-campana/ricoton-paneton-bolsa-2.png'),
    },
    {
        id: 602, name: "Delitón Panetón Bolsa", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Bolsa x 800 gramos", unit_weight: "800 gramos", code: "PAN-0001",
        img_primary: getAssetUrl('productos-de-campana/deliton-paneton-bolsa.png'), img_secondary: getAssetUrl('productos-de-campana/deliton-paneton-bolsa-2.png'),
    },
    {
        id: 603, name: "Delitón Panetón Caja", category: "productos-de-campana", subcategory: "Panetones", brand: "Deyelli",
        presentation: "Caja x 6 Unidades", unit_weight: "750 gramos", code: "PAN-0004",
        img_primary: getAssetUrl('productos-de-campana/deliton-paneton-caja.png'), img_secondary: getAssetUrl('productos-de-campana/deliton-paneton-caja-2.png'),
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