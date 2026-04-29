/* =============================================
   AgendaTur — app.js
   ============================================= */

// ---------- BASE DE CIUDADES MUNDIALES ----------
const worldCities = [
  // América Latina
  { city: "Bogotá",            country: "Colombia",          flag: "🇨🇴" },
  { city: "Medellín",          country: "Colombia",          flag: "🇨🇴" },
  { city: "Cartagena",         country: "Colombia",          flag: "🇨🇴" },
  { city: "Cancún",            country: "México",            flag: "🇲🇽" },
  { city: "Ciudad de México",  country: "México",            flag: "🇲🇽" },
  { city: "Guadalajara",       country: "México",            flag: "🇲🇽" },
  { city: "Buenos Aires",      country: "Argentina",         flag: "🇦🇷" },
  { city: "Bariloche",         country: "Argentina",         flag: "🇦🇷" },
  { city: "Lima",              country: "Perú",              flag: "🇵🇪" },
  { city: "Cusco",             country: "Perú",              flag: "🇵🇪" },
  { city: "Santiago",          country: "Chile",             flag: "🇨🇱" },
  { city: "São Paulo",         country: "Brasil",            flag: "🇧🇷" },
  { city: "Río de Janeiro",    country: "Brasil",            flag: "🇧🇷" },
  { city: "La Habana",         country: "Cuba",              flag: "🇨🇺" },
  { city: "Punta Cana",        country: "Rep. Dominicana",   flag: "🇩🇴" },
  { city: "Santo Domingo",     country: "Rep. Dominicana",   flag: "🇩🇴" },
  { city: "San José",          country: "Costa Rica",        flag: "🇨🇷" },
  { city: "Montevideo",        country: "Uruguay",           flag: "🇺🇾" },
  { city: "Quito",             country: "Ecuador",           flag: "🇪🇨" },
  { city: "Ciudad de Panamá",  country: "Panamá",            flag: "🇵🇦" },
  { city: "Caracas",           country: "Venezuela",         flag: "🇻🇪" },
  { city: "Asunción",          country: "Paraguay",          flag: "🇵🇾" },
  { city: "La Paz",            country: "Bolivia",           flag: "🇧🇴" },
  // América del Norte
  { city: "Miami",             country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Nueva York",        country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Los Ángeles",       country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Las Vegas",         country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Orlando",           country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "San Francisco",     country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Chicago",           country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Washington D.C.",   country: "Estados Unidos",    flag: "🇺🇸" },
  { city: "Toronto",           country: "Canadá",            flag: "🇨🇦" },
  { city: "Vancouver",         country: "Canadá",            flag: "🇨🇦" },
  { city: "Montreal",          country: "Canadá",            flag: "🇨🇦" },
  // Europa
  { city: "Madrid",            country: "España",            flag: "🇪🇸" },
  { city: "Barcelona",         country: "España",            flag: "🇪🇸" },
  { city: "Sevilla",           country: "España",            flag: "🇪🇸" },
  { city: "París",             country: "Francia",           flag: "🇫🇷" },
  { city: "Niza",              country: "Francia",           flag: "🇫🇷" },
  { city: "Marsella",          country: "Francia",           flag: "🇫🇷" },
  { city: "Londres",           country: "Reino Unido",       flag: "🇬🇧" },
  { city: "Edimburgo",         country: "Reino Unido",       flag: "🇬🇧" },
  { city: "Roma",              country: "Italia",            flag: "🇮🇹" },
  { city: "Florencia",         country: "Italia",            flag: "🇮🇹" },
  { city: "Venecia",           country: "Italia",            flag: "🇮🇹" },
  { city: "Milán",             country: "Italia",            flag: "🇮🇹" },
  { city: "Berlín",            country: "Alemania",          flag: "🇩🇪" },
  { city: "Múnich",            country: "Alemania",          flag: "🇩🇪" },
  { city: "Ámsterdam",         country: "Países Bajos",      flag: "🇳🇱" },
  { city: "Bruselas",          country: "Bélgica",           flag: "🇧🇪" },
  { city: "Lisboa",            country: "Portugal",          flag: "🇵🇹" },
  { city: "Oporto",            country: "Portugal",          flag: "🇵🇹" },
  { city: "Viena",             country: "Austria",           flag: "🇦🇹" },
  { city: "Praga",             country: "Rep. Checa",        flag: "🇨🇿" },
  { city: "Budapest",          country: "Hungría",           flag: "🇭🇺" },
  { city: "Varsovia",          country: "Polonia",           flag: "🇵🇱" },
  { city: "Cracovia",          country: "Polonia",           flag: "🇵🇱" },
  { city: "Atenas",            country: "Grecia",            flag: "🇬🇷" },
  { city: "Santorini",         country: "Grecia",            flag: "🇬🇷" },
  { city: "Estambul",          country: "Turquía",           flag: "🇹🇷" },
  { city: "Dubrovnik",         country: "Croacia",           flag: "🇭🇷" },
  { city: "Zúrich",            country: "Suiza",             flag: "🇨🇭" },
  { city: "Ginebra",           country: "Suiza",             flag: "🇨🇭" },
  { city: "Copenhague",        country: "Dinamarca",         flag: "🇩🇰" },
  { city: "Oslo",              country: "Noruega",           flag: "🇳🇴" },
  { city: "Estocolmo",         country: "Suecia",            flag: "🇸🇪" },
  { city: "Helsinki",          country: "Finlandia",         flag: "🇫🇮" },
  { city: "Moscú",             country: "Rusia",             flag: "🇷🇺" },
  { city: "San Petersburgo",   country: "Rusia",             flag: "🇷🇺" },
  // Asia
  { city: "Tokio",             country: "Japón",             flag: "🇯🇵" },
  { city: "Osaka",             country: "Japón",             flag: "🇯🇵" },
  { city: "Kyoto",             country: "Japón",             flag: "🇯🇵" },
  { city: "Pekín",             country: "China",             flag: "🇨🇳" },
  { city: "Shanghái",          country: "China",             flag: "🇨🇳" },
  { city: "Hong Kong",         country: "China",             flag: "🇭🇰" },
  { city: "Seúl",              country: "Corea del Sur",     flag: "🇰🇷" },
  { city: "Bangkok",           country: "Tailandia",         flag: "🇹🇭" },
  { city: "Phuket",            country: "Tailandia",         flag: "🇹🇭" },
  { city: "Chiang Mai",        country: "Tailandia",         flag: "🇹🇭" },
  { city: "Singapur",          country: "Singapur",          flag: "🇸🇬" },
  { city: "Bali",              country: "Indonesia",         flag: "🇮🇩" },
  { city: "Yakarta",           country: "Indonesia",         flag: "🇮🇩" },
  { city: "Kuala Lumpur",      country: "Malasia",           flag: "🇲🇾" },
  { city: "Manila",            country: "Filipinas",         flag: "🇵🇭" },
  { city: "Ho Chi Minh",       country: "Vietnam",           flag: "🇻🇳" },
  { city: "Hanói",             country: "Vietnam",           flag: "🇻🇳" },
  { city: "Siem Reap",         country: "Camboya",           flag: "🇰🇭" },
  { city: "Mumbai",            country: "India",             flag: "🇮🇳" },
  { city: "Nueva Delhi",       country: "India",             flag: "🇮🇳" },
  { city: "Dubái",             country: "EAU",               flag: "🇦🇪" },
  { city: "Abu Dabi",          country: "EAU",               flag: "🇦🇪" },
  { city: "Tel Aviv",          country: "Israel",            flag: "🇮🇱" },
  { city: "Riad",              country: "Arabia Saudita",    flag: "🇸🇦" },
  { city: "Doha",              country: "Catar",             flag: "🇶🇦" },
  // África y Oceanía
  { city: "El Cairo",          country: "Egipto",            flag: "🇪🇬" },
  { city: "Hurghada",          country: "Egipto",            flag: "🇪🇬" },
  { city: "Marrakech",         country: "Marruecos",         flag: "🇲🇦" },
  { city: "Casablanca",        country: "Marruecos",         flag: "🇲🇦" },
  { city: "Ciudad del Cabo",   country: "Sudáfrica",         flag: "🇿🇦" },
  { city: "Johannesburgo",     country: "Sudáfrica",         flag: "🇿🇦" },
  { city: "Nairobi",           country: "Kenia",             flag: "🇰🇪" },
  { city: "Sídney",            country: "Australia",         flag: "🇦🇺" },
  { city: "Melbourne",         country: "Australia",         flag: "🇦🇺" },
  { city: "Auckland",          country: "Nueva Zelanda",     flag: "🇳🇿" },
];

// ---------- DATOS DE HOTELES POR CIUDAD ----------
const H = {
  pool:    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
  resort:  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
  room:    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
  sky:     "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
  beach:   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
  dubai:   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
  paris:   "https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=400",
  japan:   "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=400",
  japan2:  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
  rome:    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400",
  ocean:   "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
  miami:   "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400",
  bog:     "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400",
  mde:     "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400",
  asia:    "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400",
  nature:  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  bali:    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
  africa:  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400",
};

const hotelData = {
  default: [
    { name: "Grand Central Hotel",  stars: 5, price: 189, img: H.pool,   desc: "Hotel de lujo con todas las comodidades en el centro." },
    { name: "Boutique Suites",      stars: 4, price: 120, img: H.resort, desc: "Boutique encantador con servicio personalizado." },
    { name: "City View Inn",        stars: 3, price: 75,  img: H.room,   desc: "Cómodo y accesible, ideal para viajeros." },
    { name: "Skyline Residence",    stars: 4, price: 155, img: H.sky,    desc: "Vistas panorámicas y servicio de primera." },
  ],
  // ── COLOMBIA ───────────────────────────────────────────────────────
  "bogota": [
    { name: "Hotel Casa Medina",          stars: 5, price: 180, img: H.bog,   desc: "Hotel boutique histórico en el exclusivo barrio Chapinero." },
    { name: "JW Marriott Bogotá",         stars: 5, price: 230, img: H.pool,  desc: "Lujo y confort en el centro financiero de la ciudad." },
    { name: "Hotel Click Clack",          stars: 4, price: 110, img: H.sky,   desc: "Diseño vanguardista con vistas al Parque de la 93." },
    { name: "GHL Hotel Capital",          stars: 4, price: 90,  img: H.room,  desc: "Ubicación estratégica cerca del Centro Internacional." },
    { name: "Hotel de la Opera",          stars: 3, price: 65,  img: H.bog,   desc: "Encanto colonial a pasos de la Plaza de Bolívar." },
  ],
  "medellin": [
    { name: "Hotel Dann Carlton Medellín",stars: 5, price: 160, img: H.mde,   desc: "Referente de elegancia en El Poblado." },
    { name: "Intercontinental Medellín",  stars: 5, price: 195, img: H.pool,  desc: "Vistas panorámicas y piscina con vista a la ciudad." },
    { name: "Diez Hotel Categoría Colombia",stars:4,price: 120, img: H.sky,   desc: "Diseño contemporáneo en pleno corazón de Laureles." },
    { name: "Hotel Nutibara",             stars: 3, price: 70,  img: H.room,  desc: "Clásico hotel en el Centro de Medellín desde 1945." },
  ],
  "cartagena": [
    { name: "Hotel Sofitel Legend Santa Clara", stars: 5, price: 320, img: H.ocean, desc: "Convento del siglo XVII convertido en hotel de lujo." },
    { name: "Hyatt Regency Cartagena",          stars: 5, price: 280, img: H.pool,  desc: "Frente al mar en el exclusivo barrio Manga." },
    { name: "Hotel Capilla del Mar",            stars: 4, price: 150, img: H.beach, desc: "Frente a la playa de Bocagrande." },
    { name: "Hotel Casa la Fe",                 stars: 4, price: 130, img: H.room,  desc: "Casa colonial en el corazón de la Ciudad Amurallada." },
    { name: "Hotel Boutique Quadrifolio",       stars: 3, price: 85,  img: H.resort,desc: "Encanto caribeño en el Centro Histórico." },
  ],
  "cali": [
    { name: "Hotel Dann Carlton Cali",   stars: 5, price: 140, img: H.pool,  desc: "El hotel más prestigioso de la sucursal del cielo." },
    { name: "GHL Hotel Spiwak Chipichape",stars:4, price: 100, img: H.sky,   desc: "Moderno hotel junto al centro comercial Chipichape." },
    { name: "Hotel Stein Hacienda Bello Horizonte",stars:4,price:90,img:H.nature,desc:"Hacienda campestre a minutos del centro de Cali."},
    { name: "Hotel Intercontinental Cali",stars: 5, price: 170, img: H.room, desc: "Icónico hotel frente al Parque de la Caña." },
  ],
  "barranquilla": [
    { name: "Hotel El Prado",            stars: 5, price: 130, img: H.pool,  desc: "Legendario hotel con historia desde 1930." },
    { name: "GHL Grand Hotel Barranquilla",stars:4,price: 95,  img: H.sky,   desc: "Moderno hotel en el corredor empresarial." },
    { name: "NH Barranquilla Urban",     stars: 4, price: 110, img: H.room,  desc: "Diseño urbano en zona rosa de la ciudad." },
  ],
  // ── MÉXICO ─────────────────────────────────────────────────────────
  "cancun": [
    { name: "Moon Palace Golf & Spa",    stars: 5, price: 290, img: H.resort, desc: "Todo incluido con golf y spa de clase mundial." },
    { name: "Nizuc Resort & Spa",        stars: 5, price: 380, img: H.pool,   desc: "Exclusivo resort frente a la laguna de Nichupté." },
    { name: "Iberostar Selection Cancún",stars: 5, price: 245, img: H.beach,  desc: "Playa privada, piscinas y entretenimiento incluido." },
    { name: "Hyatt Ziva Cancún",         stars: 5, price: 310, img: H.ocean,  desc: "Todo incluido en la punta de la zona hotelera." },
    { name: "Oasis Palm Hotel",          stars: 4, price: 180, img: H.resort, desc: "Familiar y animado en la zona hotelera de Cancún." },
  ],
  "ciudad de mexico": [
    { name: "Four Seasons México",       stars: 5, price: 340, img: H.pool,   desc: "Jardín colonial en el corazón de Reforma." },
    { name: "Hotel Presidente InterContinental",stars:5,price:260,img:H.sky,  desc: "Ícono de lujo en Polanco con vistas al bosque." },
    { name: "W Mexico City",             stars: 5, price: 230, img: H.room,   desc: "Diseño vanguardista en Polanco." },
    { name: "Hotel Histórico Central",   stars: 3, price: 75,  img: H.resort, desc: "En el Centro Histórico frente a la Plaza de la Constitución." },
  ],
  "guadalajara": [
    { name: "Hilton Guadalajara Midtown",stars: 5, price: 160, img: H.pool,  desc: "Lujo moderno en el corazón de la ciudad tapatía." },
    { name: "Hotel Demetria",            stars: 5, price: 195, img: H.sky,   desc: "Boutique de lujo en la exclusiva colonia Providencia." },
    { name: "Casa Fayette",              stars: 4, price: 120, img: H.room,  desc: "Diseño contemporáneo en el barrio americano." },
  ],
  // ── CARIBE ─────────────────────────────────────────────────────────
  "punta cana": [
    { name: "Hard Rock Hotel Punta Cana",stars: 5, price: 310, img: H.resort, desc: "Todo incluido con casino, spa y playa privada." },
    { name: "Barceló Bávaro Palace",     stars: 5, price: 275, img: H.beach,  desc: "Complejo de lujo frente a la playa de Bávaro." },
    { name: "Royalton Splash Punta Cana",stars: 5, price: 290, img: H.pool,   desc: "Parque acuático incluido, ideal para familias." },
    { name: "Iberostar Grand Bávaro",    stars: 5, price: 340, img: H.ocean,  desc: "Solo adultos, frente a la mejor playa del Caribe." },
  ],
  "la habana": [
    { name: "Hotel Nacional de Cuba",    stars: 5, price: 180, img: H.pool,  desc: "Monumento nacional frente al Malecón habanero." },
    { name: "Melia Habana",              stars: 5, price: 155, img: H.sky,   desc: "Hotel moderno en Miramar con piscina olímpica." },
    { name: "Saratoga Hotel",            stars: 5, price: 200, img: H.resort,desc: "Joya art déco en pleno Centro Histórico de La Habana." },
    { name: "Hotel Florida",             stars: 4, price: 110, img: H.room,  desc: "Colonial y elegante a pasos de la Plaza de Armas." },
  ],
  "santo domingo": [
    { name: "Hilton Santo Domingo",      stars: 5, price: 190, img: H.pool,  desc: "Frente al Malecón con vistas al mar Caribe." },
    { name: "Hotel Catalonia Santo Domingo",stars:4,price:120, img: H.resort,desc: "En la Zona Colonial, Patrimonio de la Humanidad." },
    { name: "Renaissance Santo Domingo", stars: 5, price: 170, img: H.sky,   desc: "Moderno hotel en el exclusivo sector de Piantini." },
  ],
  // ── SURAMÉRICA ─────────────────────────────────────────────────────
  "buenos aires": [
    { name: "Alvear Palace Hotel",       stars: 5, price: 280, img: H.pool,  desc: "El palacio hotelero más lujoso de la Recoleta." },
    { name: "Palacio Duhau Park Hyatt",  stars: 5, price: 310, img: H.sky,   desc: "Mansión histórica en la avenida Alvear." },
    { name: "Faena Hotel Buenos Aires",  stars: 5, price: 340, img: H.resort,desc: "Arte, lujo y cultura en el barrio Puerto Madero." },
    { name: "Hotel Madero",              stars: 5, price: 190, img: H.room,  desc: "Diseño contemporáneo frente al Río de la Plata." },
    { name: "Home Hotel",                stars: 4, price: 120, img: H.nature,desc: "Boutique encantador en el barrio de Palermo." },
  ],
  "bariloche": [
    { name: "Llao Llao Hotel & Resort",  stars: 5, price: 420, img: H.nature,desc: "Icónico resort rodeado de lagos y montañas patagónicas." },
    { name: "Design Suites Bariloche",   stars: 4, price: 180, img: H.sky,   desc: "Vistas al lago Nahuel Huapi desde cada habitación." },
    { name: "Hotel Cacique Inacayal",    stars: 4, price: 140, img: H.pool,  desc: "Frente al lago con acceso directo a la playa." },
  ],
  "lima": [
    { name: "Belmond Miraflores Park",   stars: 5, price: 290, img: H.ocean, desc: "Vistas al Pacífico desde los acantilados de Miraflores." },
    { name: "JW Marriott Lima",          stars: 5, price: 260, img: H.pool,  desc: "Lujo frente al mar en el corazón de Miraflores." },
    { name: "Casa Andina Premium Lima",  stars: 5, price: 150, img: H.sky,   desc: "Confort moderno en pleno San Isidro." },
    { name: "Hotel B Barranco",          stars: 4, price: 130, img: H.room,  desc: "Boutique cultural en el bohemio distrito de Barranco." },
  ],
  "cusco": [
    { name: "Belmond Hotel Monasterio",  stars: 5, price: 480, img: H.resort,desc: "Convento del siglo XVI en el corazón del Cusco." },
    { name: "Palacio del Inka",          stars: 5, price: 320, img: H.pool,  desc: "Palacio inca restaurado frente al Templo del Sol." },
    { name: "Inkaterra La Casona",       stars: 5, price: 400, img: H.room,  desc: "Mansión colonial en la Plaza de las Nazarenas." },
    { name: "Hotel Ruinas",              stars: 3, price: 80,  img: H.nature,desc: "Económico y bien ubicado cerca de la Plaza Mayor." },
  ],
  "santiago": [
    { name: "The Singular Santiago",     stars: 5, price: 270, img: H.pool,  desc: "Diseño industrial convertido en hotel de lujo en Lastarria." },
    { name: "Hotel Bidasoa",             stars: 5, price: 230, img: H.sky,   desc: "Clásico y elegante en Vitacura, frente a Las Condes." },
    { name: "Noi Casa Morada",           stars: 5, price: 290, img: H.resort,desc: "Boutique íntimo en la exclusiva zona de Lastarria." },
    { name: "Hotel Plaza San Francisco", stars: 4, price: 120, img: H.room,  desc: "Clásico hotel céntrico frente a la iglesia San Francisco." },
  ],
  "sao paulo": [
    { name: "Unique Hotel São Paulo",    stars: 5, price: 300, img: H.sky,   desc: "Arquitectura icónica en forma de barco en Jardins." },
    { name: "Fasano São Paulo",          stars: 5, price: 350, img: H.pool,  desc: "El hotel más exclusivo de Brasil en Jardim Paulista." },
    { name: "Renaissance São Paulo",     stars: 5, price: 220, img: H.resort,desc: "Clásico lujo en el barrio Jardins." },
    { name: "Hotel Emiliano",            stars: 5, price: 280, img: H.room,  desc: "Boutique de alto diseño en la Rua Oscar Freire." },
  ],
  "rio de janeiro": [
    { name: "Belmond Copacabana Palace", stars: 5, price: 480, img: H.beach, desc: "El palacio blanco frente a la playa de Copacabana." },
    { name: "Hotel Fasano Rio de Janeiro",stars:5, price: 420, img: H.ocean, desc: "Diseño sofisticado en la playa de Ipanema." },
    { name: "Windsor Atlântica",         stars: 5, price: 250, img: H.pool,  desc: "Frente al mar en Copacabana con vistas al Pão de Açúcar." },
    { name: "Santa Teresa Hotel",        stars: 5, price: 310, img: H.resort,desc: "Boutique en el bohemio barrio de Santa Teresa." },
  ],
  "ciudad de panama": [
    { name: "Trump Ocean Club Panamá",   stars: 5, price: 250, img: H.sky,   desc: "Rascacielos de lujo con vistas al canal y al Pacífico." },
    { name: "Sortis Hotel & Casino",     stars: 5, price: 190, img: H.pool,  desc: "Lujo y entretenimiento en pleno Punta Pacífica." },
    { name: "Bristol Panama",            stars: 5, price: 170, img: H.room,  desc: "Elegancia clásica en el exclusivo barrio Marbella." },
    { name: "Hotel Miramar",             stars: 4, price: 120, img: H.resort,desc: "Frente al mar en el Casco Antiguo de Ciudad de Panamá." },
  ],
  "montevideo": [
    { name: "Hyatt Centric Montevideo",  stars: 5, price: 160, img: H.pool,  desc: "Moderno hotel en pleno Centro Histórico." },
    { name: "Esplendor Montevideo",      stars: 4, price: 120, img: H.sky,   desc: "Boutique de diseño en el corazón de la ciudad." },
    { name: "Hotel Cottage",             stars: 4, price: 100, img: H.room,  desc: "Encantador hotel en el barrio de Pocitos." },
  ],
  "quito": [
    { name: "Casa Gangotena",            stars: 5, price: 220, img: H.resort,desc: "Mansion histórica en la Plaza de San Francisco." },
    { name: "JW Marriott Quito",         stars: 5, price: 180, img: H.pool,  desc: "Lujo moderno en el sector financiero de La Carolina." },
    { name: "Hotel Patio Andaluz",       stars: 4, price: 110, img: H.room,  desc: "Casa colonial restaurada en el Centro Histórico." },
  ],
  // ── NORTEAMÉRICA ───────────────────────────────────────────────────
  "nueva york": [
    { name: "The Plaza Hotel",           stars: 5, price: 680, img: H.pool,  desc: "Ícono histórico frente a Central Park." },
    { name: "The St. Regis New York",    stars: 5, price: 750, img: H.sky,   desc: "Lujo neoyorkino definitivo en la Quinta Avenida." },
    { name: "Hilton Midtown",            stars: 4, price: 245, img: H.resort,desc: "Gran ubicación en el Midtown de Manhattan." },
    { name: "Pod Times Square",          stars: 3, price: 130, img: H.room,  desc: "Moderno y céntrico, ideal para mochileros." },
  ],
  "miami": [
    { name: "Faena Hotel Miami Beach",   stars: 5, price: 420, img: H.miami, desc: "Arte, lujo y playa en South Beach." },
    { name: "1 Hotel South Beach",       stars: 5, price: 380, img: H.beach, desc: "Eco-lujo frente al Atlántico en Miami Beach." },
    { name: "The EDITION Miami Beach",   stars: 5, price: 350, img: H.pool,  desc: "Ian Schrager y Marriott crean magia en la playa." },
    { name: "Fontainebleau Miami Beach", stars: 5, price: 290, img: H.resort,desc: "Ícono de Miami Beach con spa y nightclub." },
    { name: "Hampton Inn Miami Downtown",stars: 3, price: 120, img: H.sky,   desc: "Cómodo y accesible en el Downtown de Miami." },
  ],
  "orlando": [
    { name: "Disney's Grand Floridian",  stars: 5, price: 480, img: H.resort,desc: "El hotel flagship de Walt Disney World." },
    { name: "Universal's Hard Rock Hotel",stars:5, price: 320, img: H.pool,  desc: "Rock & roll a pasos de los parques Universal." },
    { name: "Loews Sapphire Falls",      stars: 4, price: 230, img: H.ocean, desc: "Caribeño y animado en Universal Orlando." },
    { name: "Rosen Inn International",   stars: 3, price: 90,  img: H.room,  desc: "Económico y bien ubicado en International Drive." },
  ],
  "las vegas": [
    { name: "Bellagio Las Vegas",        stars: 5, price: 280, img: H.pool,  desc: "Las fuentes más famosas del mundo en el Strip." },
    { name: "The Venetian Resort",       stars: 5, price: 250, img: H.resort,desc: "Venecia en el desierto con canales y góndolas." },
    { name: "MGM Grand Las Vegas",       stars: 4, price: 160, img: H.sky,   desc: "El hotel más grande de Las Vegas con casino espectacular." },
    { name: "Park MGM",                  stars: 4, price: 130, img: H.room,  desc: "Moderno y elegante en el corazón del Strip." },
  ],
  "los angeles": [
    { name: "The Beverly Hills Hotel",   stars: 5, price: 590, img: H.pool,  desc: "El palacio rosado de las estrellas de Hollywood." },
    { name: "Shutters on the Beach",     stars: 5, price: 480, img: H.beach, desc: "Frente al Pacífico en Santa Mónica." },
    { name: "Hotel Bel-Air",             stars: 5, price: 640, img: H.nature,desc: "Santuario secreto en las colinas de Bel Air." },
    { name: "W Los Angeles",             stars: 4, price: 250, img: H.sky,   desc: "Diseño vanguardista en West Beverly Hills." },
  ],
  "san francisco": [
    { name: "The St. Regis San Francisco",stars:5, price: 380, img: H.pool,  desc: "Lujo contemporáneo en el barrio SoMa." },
    { name: "Fairmont San Francisco",    stars: 5, price: 320, img: H.sky,   desc: "Palacio histórico en la cima de Nob Hill." },
    { name: "Hotel Nikko",               stars: 4, price: 200, img: H.room,  desc: "Elegante hotel en el distrito de Union Square." },
  ],
  // ── EUROPA ─────────────────────────────────────────────────────────
  "madrid": [
    { name: "Mandarin Oriental Ritz",    stars: 5, price: 420, img: H.pool,  desc: "El gran palacio hotelero del Paseo del Prado." },
    { name: "Four Seasons Madrid",       stars: 5, price: 490, img: H.sky,   desc: "Majestuoso hotel en el centro histórico de Madrid." },
    { name: "NH Collection Gran Via",    stars: 4, price: 165, img: H.resort,desc: "En plena Gran Vía, en el corazón de Madrid." },
    { name: "Hotel Urban",               stars: 5, price: 280, img: H.room,  desc: "Boutique de lujo con arte africano y asiático." },
    { name: "Petit Palace Posada del Peine",stars:3,price:90,  img: H.rome,  desc: "Histórico hotel en pleno Madrid de los Austrias." },
  ],
  "barcelona": [
    { name: "Hotel Arts Barcelona",      stars: 5, price: 380, img: H.resort,desc: "Torre frente al mar Mediterráneo." },
    { name: "W Barcelona",               stars: 5, price: 290, img: H.pool,  desc: "Diseño vanguardista en la Barceloneta." },
    { name: "Mandarin Oriental Barcelona",stars:5, price: 450, img: H.sky,   desc: "Lujo absoluto en el Paseo de Gracia." },
    { name: "Casa Camper",               stars: 4, price: 190, img: H.room,  desc: "Boutique minimalista en el barrio del Raval." },
  ],
  "sevilla": [
    { name: "Hotel Alfonso XIII",        stars: 5, price: 380, img: H.pool,  desc: "El palacio mudéjar más emblemático de Sevilla." },
    { name: "Mercer Sevilla",            stars: 5, price: 290, img: H.resort,desc: "Boutique de lujo en el corazón del casco histórico." },
    { name: "Hotel Doña María",          stars: 4, price: 140, img: H.rome,  desc: "A metros de la Giralda con vistas privilegiadas." },
  ],
  "paris": [
    { name: "Four Seasons George V",     stars: 5, price: 890, img: H.paris, desc: "El hotel más lujoso del barrio dorado parisino." },
    { name: "Le Meurice",                stars: 5, price: 750, img: H.pool,  desc: "Palacio frente a los Jardines de las Tullerías." },
    { name: "Paris Marriott Champs Élysées",stars:5,price:320,img:H.sky,     desc: "En plenos Campos Elíseos, icónico y elegante." },
    { name: "Hotel des Arts Montmartre", stars: 3, price: 98,  img: H.room,  desc: "Pequeño hotel con carácter en Montmartre." },
    { name: "Hôtel du Louvre",           stars: 4, price: 210, img: H.resort,desc: "Frente al museo más visitado del mundo." },
  ],
  "londres": [
    { name: "The Ritz London",           stars: 5, price: 680, img: H.pool,  desc: "El hotel más famoso de Piccadilly desde 1906." },
    { name: "Claridge's",                stars: 5, price: 740, img: H.sky,   desc: "Art déco atemporal en el corazón de Mayfair." },
    { name: "The Savoy",                 stars: 5, price: 590, img: H.resort,desc: "Ícono del lujo británico a orillas del Támesis." },
    { name: "citizenM London Shoreditch",stars: 4, price: 160, img: H.room,  desc: "Hotel tech y moderno en el vibrante East London." },
  ],
  "roma": [
    { name: "Hotel Hassler Roma",        stars: 5, price: 580, img: H.rome,  desc: "En la cima de la escalinata de la Plaza de España." },
    { name: "St. Regis Rome",            stars: 5, price: 560, img: H.pool,  desc: "Palacio histórico cerca de la Fontana di Trevi." },
    { name: "Hotel Eden Roma",           stars: 5, price: 490, img: H.sky,   desc: "Vistas a la cúpula de San Pedro desde la terraza." },
    { name: "Hotel Colosseum",           stars: 4, price: 190, img: H.resort,desc: "A 200 metros del Coliseo romano." },
  ],
  "milan": [
    { name: "Bulgari Hotel Milano",      stars: 5, price: 680, img: H.pool,  desc: "Joya de diseño en los jardines de Brera." },
    { name: "Four Seasons Milano",       stars: 5, price: 590, img: H.sky,   desc: "Convento del siglo XV en el barrio de moda." },
    { name: "Armani Hotel Milano",       stars: 5, price: 540, img: H.room,  desc: "El estilo Armani hecho hotel cerca de la Scala." },
    { name: "Hotel Viu Milan",           stars: 5, price: 290, img: H.resort,desc: "Diseño contemporáneo en Porta Volta." },
  ],
  "florencia": [
    { name: "Hotel Savoy Firenze",       stars: 5, price: 420, img: H.pool,  desc: "Frente a la Piazza della Repubblica." },
    { name: "Borgo Pitti Palace",        stars: 4, price: 180, img: H.rome,  desc: "Palacio histórico en el barrio de Oltrarno." },
    { name: "AdAstra Firenze",           stars: 5, price: 380, img: H.sky,   desc: "Boutique exclusivo con vistas al Duomo." },
  ],
  "berlin": [
    { name: "Hotel Adlon Kempinski",     stars: 5, price: 380, img: H.pool,  desc: "El gran hotel de Berlín junto a la Puerta de Brandeburgo." },
    { name: "Das Stue",                  stars: 5, price: 290, img: H.sky,   desc: "Boutique de diseño junto al zoológico de Berlín." },
    { name: "NH Collection Berlin Mitte",stars: 4, price: 150, img: H.room,  desc: "Moderno y céntrico en el corazón de Mitte." },
    { name: "Soho House Berlin",         stars: 4, price: 220, img: H.resort,desc: "Club privado y hotel en el histórico Mitte." },
  ],
  "amsterdam": [
    { name: "Pulitzer Amsterdam",        stars: 5, price: 320, img: H.pool,  desc: "25 casas del canal reconvertidas en hotel boutique." },
    { name: "Hotel V Nesplein",          stars: 4, price: 180, img: H.sky,   desc: "Diseño boutique en pleno centro histórico." },
    { name: "Conservatorium Hotel",      stars: 5, price: 380, img: H.room,  desc: "Conservatorio de música transformado en hotel de lujo." },
    { name: "The Dylan Amsterdam",       stars: 5, price: 290, img: H.resort,desc: "Boutique elegante frente al canal Keizersgracht." },
  ],
  "lisboa": [
    { name: "Bairro Alto Hotel",         stars: 5, price: 280, img: H.pool,  desc: "Boutique de lujo con vistas al Tajo y al Castillo." },
    { name: "Bela Vista Hotel & Spa",    stars: 5, price: 260, img: H.sky,   desc: "Mansión histórica en el barrio de Campolide." },
    { name: "Hotel do Chiado",           stars: 4, price: 160, img: H.rome,  desc: "En el barrio más literario de Lisboa." },
    { name: "Lisboa Carmo Hotel",        stars: 4, price: 140, img: H.room,  desc: "Elegante hotel frente al convento del Carmo." },
  ],
  "viena": [
    { name: "Hotel Sacher Wien",         stars: 5, price: 390, img: H.pool,  desc: "La joya histórica de Viena frente a la Ópera." },
    { name: "The Ritz-Carlton Vienna",   stars: 5, price: 360, img: H.sky,   desc: "Gran lujo en el bulevar del Ring." },
    { name: "Hotel Imperial Wien",       stars: 5, price: 410, img: H.resort,desc: "Palacio imperial a metros de la Musikverein." },
    { name: "25hours Hotel Wien",        stars: 4, price: 150, img: H.room,  desc: "Diseño creativo en el vibrante barrio de Naschmarkt." },
  ],
  "praga": [
    { name: "Four Seasons Prague",       stars: 5, price: 340, img: H.pool,  desc: "Frente al río Moldava con vistas al Castillo de Praga." },
    { name: "Mandarin Oriental Prague",  stars: 5, price: 310, img: H.sky,   desc: "Monasterio del siglo XIV convertido en hotel de lujo." },
    { name: "Hotel Josef Prague",        stars: 4, price: 160, img: H.room,  desc: "Diseño minimalista en el barrio judío." },
  ],
  "budapest": [
    { name: "Four Seasons Gresham Palace",stars:5, price: 360, img: H.pool,  desc: "Obra maestra art nouveau frente al Puente de las Cadenas." },
    { name: "Kempinski Hotel Corvinus",  stars: 5, price: 290, img: H.sky,   desc: "Lujo contemporáneo en la avenida principal." },
    { name: "Hotel Rum Budapest",        stars: 4, price: 130, img: H.resort,desc: "Boutique con carácter en el barrio judío." },
  ],
  "estambul": [
    { name: "Çırağan Palace Kempinski",  stars: 5, price: 450, img: H.pool,  desc: "Palacio otomano del siglo XIX a orillas del Bósforo." },
    { name: "Four Seasons Sultanahmet",  stars: 5, price: 380, img: H.rome,  desc: "Antigua prisión otomana frente a Santa Sofía." },
    { name: "Soho House Istanbul",       stars: 5, price: 290, img: H.sky,   desc: "Club boutique en las orillas del Bósforo." },
    { name: "Sura Hagia Sophia Hotel",   stars: 4, price: 140, img: H.room,  desc: "A metros de la Mezquita Azul y Santa Sofía." },
  ],
  "atenas": [
    { name: "Hotel Grande Bretagne",     stars: 5, price: 380, img: H.pool,  desc: "El gran palacio de Atenas frente al Parlamento." },
    { name: "King George Athens",        stars: 5, price: 320, img: H.sky,   desc: "Vistas a la Acrópolis desde la terraza rooftop." },
    { name: "Athens Capital Hotel",      stars: 4, price: 160, img: H.room,  desc: "Boutique en Syntagma con vista al Partenón." },
  ],
  "zurich": [
    { name: "The Dolder Grand",          stars: 5, price: 590, img: H.pool,  desc: "Castillo de lujo con spa y vistas al lago de Zúrich." },
    { name: "Baur au Lac",               stars: 5, price: 620, img: H.sky,   desc: "El hotel más exclusivo de Suiza desde 1844." },
    { name: "Hotel Storchen",            stars: 5, price: 380, img: H.room,  desc: "A orillas del río Limmat en el casco antiguo." },
  ],
  "dubrovnik": [
    { name: "Villa Dubrovnik",           stars: 5, price: 390, img: H.ocean, desc: "Cliffside boutique con vistas directas al Adriático." },
    { name: "Hotel Excelsior Dubrovnik", stars: 5, price: 320, img: H.pool,  desc: "Vistas al casco antiguo amurallado y al mar." },
    { name: "Hilton Imperial Dubrovnik", stars: 5, price: 280, img: H.resort,desc: "A metros de la Puerta Pile de la Ciudad Amurallada." },
  ],
  // ── ASIA / ORIENTE MEDIO ───────────────────────────────────────────
  "dubai": [
    { name: "Burj Al Arab",              stars: 5, price: 890, img: H.dubai, desc: "El hotel más icónico y lujoso del mundo." },
    { name: "Atlantis The Palm",         stars: 5, price: 430, img: H.resort,desc: "Megacomplejo resort en la Palm Jumeirah." },
    { name: "Armani Hotel Dubai",        stars: 5, price: 520, img: H.pool,  desc: "Diseño exclusivo de Armani en el Burj Khalifa." },
    { name: "Address Downtown Dubai",    stars: 5, price: 310, img: H.sky,   desc: "Frente al Burj Khalifa y los Dubái Mall." },
    { name: "Rove Downtown Dubai",       stars: 3, price: 95,  img: H.room,  desc: "Moderno y accesible cerca del Burj Khalifa." },
  ],
  "tokio": [
    { name: "Aman Tokyo",                stars: 5, price: 750, img: H.japan, desc: "La máxima expresión del lujo japonés en Otemachi." },
    { name: "Park Hyatt Tokyo",          stars: 5, price: 420, img: H.japan2,desc: "Legendario hotel inmortalizado en Lost in Translation." },
    { name: "The Peninsula Tokyo",       stars: 5, price: 560, img: H.pool,  desc: "Frente al Palacio Imperial y al foso del Palacio." },
    { name: "Shinjuku Granbell Hotel",   stars: 4, price: 160, img: H.sky,   desc: "Diseño moderno en el animado barrio de Shinjuku." },
  ],
  "osaka": [
    { name: "Conrad Osaka",              stars: 5, price: 380, img: H.sky,   desc: "En la cima de una torre con vistas a 360° de Osaka." },
    { name: "Cross Hotel Osaka",         stars: 4, price: 130, img: H.room,  desc: "Bien ubicado en Shinsaibashi, zona de compras." },
    { name: "Swissôtel Nankai Osaka",    stars: 5, price: 260, img: H.pool,  desc: "Frente al canal Dotonbori en el corazón de Osaka." },
  ],
  "seul": [
    { name: "Four Seasons Seoul",        stars: 5, price: 380, img: H.pool,  desc: "Lujo contemporáneo junto al Palacio Gyeongbokgung." },
    { name: "The Shilla Seoul",          stars: 5, price: 320, img: H.sky,   desc: "El hotel más prestigioso de Corea del Sur." },
    { name: "Hotel Naru Seoul",          stars: 4, price: 150, img: H.room,  desc: "Moderno boutique en la isla de Yeouido." },
  ],
  "hong kong": [
    { name: "The Peninsula Hong Kong",   stars: 5, price: 580, img: H.pool,  desc: "La Grande Dame de Kowloon desde 1928." },
    { name: "Mandarin Oriental HK",      stars: 5, price: 490, img: H.sky,   desc: "Vistas a la bahía Victoria desde el Central." },
    { name: "Hotel ICON",                stars: 5, price: 280, img: H.resort,desc: "Boutique de diseño en el vibrante Tsim Sha Tsui." },
  ],
  "bangkok": [
    { name: "Mandarin Oriental Bangkok", stars: 5, price: 380, img: H.pool,  desc: "Leyenda hotelera a orillas del río Chao Phraya." },
    { name: "Capella Bangkok",           stars: 5, price: 420, img: H.resort,desc: "Ultra-lujo ribereño con jardines tropicales." },
    { name: "Anantara Riverside Bangkok",stars: 5, price: 240, img: H.ocean, desc: "Resort tropical en la orilla del río Chao Phraya." },
    { name: "The Sukhothai Bangkok",     stars: 5, price: 290, img: H.sky,   desc: "Santuario tranquilo de arte Thai en Sathorn." },
    { name: "Ibis Bangkok Sukhumvit",    stars: 3, price: 55,  img: H.room,  desc: "Moderno y económico en la animada Sukhumvit." },
  ],
  "bali": [
    { name: "Four Seasons Jimbaran Bay", stars: 5, price: 480, img: H.bali,  desc: "Villas con piscina privada frente al Índico." },
    { name: "COMO Uma Ubud",             stars: 5, price: 380, img: H.nature,desc: "Retiro de lujo rodeado de arrozales y selva en Ubud." },
    { name: "The Mulia Bali",            stars: 5, price: 420, img: H.beach, desc: "Mega-resort de lujo en la playa de Nusa Dua." },
    { name: "Komaneka at Bisma",         stars: 5, price: 290, img: H.pool,  desc: "Villas con vistas al valle del río Wos en Ubud." },
    { name: "Alaya Resort Ubud",         stars: 4, price: 140, img: H.resort,desc: "Boutique encantador en el corazón cultural de Ubud." },
  ],
  "singapur": [
    { name: "Marina Bay Sands",          stars: 5, price: 380, img: H.asia,  desc: "La icónica infinity pool sobre los tres rascacielos." },
    { name: "Capella Singapore",         stars: 5, price: 520, img: H.pool,  desc: "Colonial resort en la isla de Sentosa." },
    { name: "Raffles Hotel Singapore",   stars: 5, price: 680, img: H.sky,   desc: "La gran dama blanca de los hoteles coloniales asiáticos." },
    { name: "The Fullerton Hotel",       stars: 5, price: 350, img: H.room,  desc: "Neoclásico monumento nacional frente a Marina Bay." },
  ],
  "kuala lumpur": [
    { name: "Mandarin Oriental KL",      stars: 5, price: 220, img: H.pool,  desc: "Frente a las Torres Petronas en KLCC." },
    { name: "The Ritz-Carlton KL",       stars: 5, price: 250, img: H.sky,   desc: "Lujo atemporal en el corazón de Kuala Lumpur." },
    { name: "Hotel Stripes Kuala Lumpur",stars: 4, price: 120, img: H.room,  desc: "Boutique estilizado cerca de Jalan Bukit Bintang." },
  ],
  "nueva delhi": [
    { name: "The Leela Palace New Delhi",stars: 5, price: 290, img: H.pool,  desc: "Palacio contemporáneo en Chanakyapuri." },
    { name: "The Imperial New Delhi",    stars: 5, price: 260, img: H.resort,desc: "Leyenda colonial en Janpath desde 1931." },
    { name: "The Oberoi New Delhi",      stars: 5, price: 310, img: H.sky,   desc: "Lujo contemporáneo frente al Campo de Golf de Delhi." },
  ],
  "mumbai": [
    { name: "Taj Mahal Palace Mumbai",   stars: 5, price: 350, img: H.pool,  desc: "Ícono histórico frente a la Puerta de la India." },
    { name: "The Oberoi Mumbai",         stars: 5, price: 290, img: H.ocean, desc: "Lujo moderno frente al Mar Arábigo en Marine Drive." },
    { name: "ITC Maratha Mumbai",        stars: 5, price: 240, img: H.resort,desc: "Inspirado en la arquitectura maratha, cerca del aeropuerto." },
  ],
  "doha": [
    { name: "Mandarin Oriental Doha",    stars: 5, price: 380, img: H.pool,  desc: "Arte islámico y lujo moderno en el West Bay." },
    { name: "Kempinski Residences & Suites",stars:5,price:320,img:H.sky,     desc: "Frente al perfil del horizonte de Doha." },
    { name: "W Doha Hotel",              stars: 5, price: 280, img: H.room,  desc: "Diseño vanguardista en el West Bay de Doha." },
  ],
  // ── ÁFRICA / OCEANÍA ───────────────────────────────────────────────
  "el cairo": [
    { name: "Marriott Mena House Cairo", stars: 5, price: 290, img: H.africa,desc: "Histórico hotel con vistas directas a las Pirámides de Giza." },
    { name: "Four Seasons Cairo at The First Residence",stars:5,price:310,img:H.pool,desc:"Lujo a orillas del Nilo en Giza."},
    { name: "Sofitel Cairo Nile El Gezirah",stars:5,price:200,img:H.sky,     desc: "Impresionantes vistas al Nilo desde la isla Gezira." },
  ],
  "marrakech": [
    { name: "Royal Mansour Marrakech",   stars: 5, price: 680, img: H.africa,desc: "Palacio real con 53 riads privados en la Medina." },
    { name: "La Mamounia",               stars: 5, price: 520, img: H.pool,  desc: "El hotel más legendario de Marruecos desde 1923." },
    { name: "Four Seasons Marrakech",    stars: 5, price: 380, img: H.resort,desc: "Paraíso de jardines y piscinas a las puertas de la Medina." },
    { name: "Es Saadi Marrakech",        stars: 5, price: 290, img: H.nature,desc: "Resort-palacio con jardines de palmeras centenarias." },
  ],
  "ciudad del cabo": [
    { name: "Ellerman House",            stars: 5, price: 480, img: H.ocean, desc: "Villa de lujo con vistas a Table Mountain y el Atlántico." },
    { name: "One&Only Cape Town",        stars: 5, price: 420, img: H.pool,  desc: "Resort urbano frente al waterfront con vistas a la Montaña." },
    { name: "The Silo Hotel",            stars: 5, price: 390, img: H.sky,   desc: "Arte y lujo en un elevador de grano reconvertido." },
  ],
  "nairobi": [
    { name: "Hemingways Nairobi",        stars: 5, price: 320, img: H.africa,desc: "Boutique de lujo en el exclusivo barrio de Karen." },
    { name: "The Sankara Nairobi",       stars: 5, price: 230, img: H.pool,  desc: "Moderno y elegante en el cosmopolita Westlands." },
    { name: "Villa Rosa Kempinski",      stars: 5, price: 250, img: H.sky,   desc: "El gran hotel de referencia en Nairobi desde 2013." },
  ],
  "sidney": [
    { name: "Park Hyatt Sydney",         stars: 5, price: 480, img: H.ocean, desc: "Vistas directas a la Ópera y al Harbour Bridge." },
    { name: "Four Seasons Sydney",       stars: 5, price: 420, img: H.pool,  desc: "Lujo en el corazón del CBD frente al puerto." },
    { name: "QT Sydney",                 stars: 5, price: 290, img: H.sky,   desc: "Boutique de arte y diseño en el Teatro Estatal." },
    { name: "Ovolo Woolloomooloo",       stars: 4, price: 200, img: H.room,  desc: "Almacén histórico reconvertido junto al famoso Finger Wharf." },
  ],
  "melbourne": [
    { name: "The Langham Melbourne",     stars: 5, price: 360, img: H.pool,  desc: "Elegancia clásica a orillas del río Yarra." },
    { name: "Crown Metropol Melbourne",  stars: 5, price: 290, img: H.sky,   desc: "Diseño contemporáneo en el complejo Crown." },
    { name: "Hotel Windsor Melbourne",   stars: 5, price: 240, img: H.room,  desc: "Grand hotel victoriano frente al Parlamento." },
  ],
  "auckland": [
    { name: "The Grand by SkyCity",      stars: 5, price: 280, img: H.sky,   desc: "Lujo cosmopolita junto a la icónica Sky Tower." },
    { name: "Sofitel Auckland Viaduct Harbour",stars:5,price:320,img:H.ocean,desc:"Vistas al puerto y al puente Harbour desde los pisos altos."},
    { name: "Hotel DeBrett",             stars: 4, price: 170, img: H.room,  desc: "Boutique histórico en el corazón del CBD de Auckland." },
  ],
};

// Normalizar texto (quitar tildes, minúsculas)
function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// ---------- TABS DEL BUSCADOR ----------
document.querySelectorAll('.sr-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sr-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sr-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ---------- AUTOCOMPLETADO DE CIUDADES ----------
const cityInput = document.getElementById('hotel-city');
const autocomplete = document.getElementById('hotel-autocomplete');

if (cityInput) {
  cityInput.addEventListener('input', () => {
    const val = cityInput.value.trim();
    autocomplete.innerHTML = '';
    if (val.length < 2) { autocomplete.classList.remove('open'); return; }

    const valN = normalize(val);
    const matches = worldCities.filter(c =>
      normalize(c.city).includes(valN) || normalize(c.country).includes(valN)
    ).slice(0, 9);

    if (!matches.length) { autocomplete.classList.remove('open'); return; }

    matches.forEach(m => {
      const li = document.createElement('li');
      const re = new RegExp(`(${val.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
      const hi = m.city.replace(re, '<strong>$1</strong>');
      li.innerHTML = `${m.flag}&nbsp; ${hi} <span style="color:#94a3b8;font-size:.8rem;margin-left:auto">— ${m.country}</span>`;
      li.addEventListener('click', () => {
        cityInput.value = m.city;
        autocomplete.classList.remove('open');
      });
      autocomplete.appendChild(li);
    });
    autocomplete.classList.add('open');
  });

  cityInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') autocomplete.classList.remove('open');
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('#tab-hoteles')) autocomplete && autocomplete.classList.remove('open');
});

// ---------- HOTELES EN TIEMPO REAL (AMADEUS) ----------

// Ciudad escrita → código IATA para Amadeus Hotel API
const CITY_IATA_HOTEL = {
  // Colombia
  'bogotá':'BOG','medellín':'MDE','cartagena':'CTG','cali':'CLO','barranquilla':'BAQ','bucaramanga':'BGA',
  // LatAm
  'cancún':'CUN','ciudad de méxico':'MEX','guadalajara':'GDL','buenos aires':'BUE','bariloche':'BRC',
  'lima':'LIM','cusco':'CUZ','santiago':'SCL','são paulo':'SAO','río de janeiro':'RIO',
  'la habana':'HAV','punta cana':'PUJ','santo domingo':'SDQ','san josé':'SJO',
  'montevideo':'MVD','quito':'UIO','ciudad de panamá':'PTY','caracas':'CCS','asunción':'ASU','la paz':'LPB',
  // USA/Canada
  'miami':'MIA','nueva york':'NYC','los ángeles':'LAX','las vegas':'LAS','orlando':'ORL',
  'san francisco':'SFO','chicago':'CHI','washington d.c.':'WAS','toronto':'YTO','vancouver':'YVR','montreal':'YMQ',
  // Europa
  'madrid':'MAD','barcelona':'BCN','sevilla':'SVQ',
  'parís':'PAR','niza':'NCE','marsella':'MRS',
  'londres':'LON','edimburgo':'EDI',
  'roma':'ROM','florencia':'FLR','venecia':'VCE','milán':'MIL',
  'berlín':'BER','múnich':'MUC',
  'ámsterdam':'AMS','bruselas':'BRU','lisboa':'LIS','oporto':'OPO',
  'viena':'VIE','praga':'PRG','budapest':'BUD','varsovia':'WAW','cracovia':'KRK',
  'atenas':'ATH','santorini':'JTR','estambul':'IST','dubrovnik':'DBV',
  'zúrich':'ZRH','ginebra':'GVA','copenhague':'CPH','oslo':'OSL','estocolmo':'STO','helsinki':'HEL',
  // Asia/Medio Oriente
  'dubái':'DXB','abu dabi':'AUH','tokio':'TYO','osaka':'OSA','kyoto':'UKY',
  'pekín':'BJS','shanghái':'SHA','hong kong':'HKG','seúl':'SEL',
  'bangkok':'BKK','phuket':'HKT','chiang mai':'CEI','singapur':'SIN',
  'bali':'DPS','yakarta':'JKT','kuala lumpur':'KUL','manila':'MNL',
  'ho chi minh':'SGN','hanói':'HAN','siem reap':'REP',
  'mumbai':'BOM','nueva delhi':'DEL','doha':'DOH','tel aviv':'TLV','riad':'RUH',
  // África/Oceanía
  'el cairo':'CAI','hurghada':'HRG','marrakech':'RAK','casablanca':'CAS',
  'ciudad del cabo':'CPT','johannesburgo':'JNB','nairobi':'NBO',
  'sídney':'SYD','melbourne':'MEL','auckland':'AKL',
};

// Foto representativa por código de ciudad
const CITY_HOTEL_IMG = {
  BOG:'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
  MDE:'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400',
  CTG:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
  CUN:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
  MAD:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
  BCN:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
  PAR:'https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=400',
  LON:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400',
  ROM:'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400',
  DXB:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
  TYO:'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=400',
  BKK:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
  NYC:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
  MIA:'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400',
  SIN:'https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=400',
  default:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
};

async function amadeusHotelSearch(cityCode, checkIn, checkOut, guests) {
  const token = await amadeusGetToken();

  // Paso 1: lista de hoteles de la ciudad
  const listRes  = await fetch(
    `${AMADEUS.host}/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}&radius=10&radiusUnit=KM&ratings=3,4,5&hotelSource=ALL`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const listData = await listRes.json();
  if (!listRes.ok || !listData.data?.length) throw new Error('Ciudad sin hoteles en Amadeus');

  const hotelIds = listData.data.slice(0, 15).map(h => h.hotelId).join(',');

  // Paso 2: ofertas con precios reales
  const offRes  = await fetch(
    `${AMADEUS.host}/v3/shopping/hotel-offers?hotelIds=${hotelIds}&checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${guests}&currency=COP&bestRateOnly=true`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const offData = await offRes.json();
  if (!offRes.ok || !offData.data?.length) throw new Error('Sin disponibilidad en las fechas seleccionadas');

  return offData.data;
}

function parseAmadeusHotels(offers, cityCode) {
  const fallbackImg = CITY_HOTEL_IMG[cityCode] || CITY_HOTEL_IMG.default;
  const boardMap = { ROOM_ONLY:'Solo habitación', BREAKFAST:'Desayuno incluido', ALL_INCLUSIVE:'Todo incluido', HALF_BOARD:'Media pensión', FULL_BOARD:'Pensión completa' };
  return offers.map(o => {
    const hotel  = o.hotel;
    const offer  = o.offers[0];
    const nights = Math.max(1, Math.round((new Date(offer.checkOutDate) - new Date(offer.checkInDate)) / 86400000));
    const total  = Math.round(parseFloat(offer.price.total));
    const room   = (offer.room?.typeEstimated?.category || 'STANDARD').replace(/_/g,' ').toLowerCase();
    const roomLabel = room.charAt(0).toUpperCase() + room.slice(1);
    return {
      name:     hotel.name,
      stars:    parseInt(hotel.rating) || 3,
      priceCOP: Math.round(total / nights / 1000) * 1000,
      img:      fallbackImg,
      desc:     `${roomLabel} · ${boardMap[offer.boardType] || 'Solo habitación'}`,
      source:   'amadeus',
    };
  }).sort((a, b) => a.priceCOP - b.priceCOP);
}

// ---------- BUSCAR HOTELES ----------
async function searchHotels() {
  const city = cityInput ? cityInput.value.trim() : '';
  if (!city) {
    showModal('⚠️ Campo requerido', 'Por favor escribe una ciudad para buscar hoteles.');
    return;
  }

  const checkin  = document.getElementById('hotel-checkin')?.value  || '';
  const checkout = document.getElementById('hotel-checkout')?.value || '';
  const guests   = parseInt(document.getElementById('hotel-guests')?.value) || 2;

  if (!checkin || !checkout) {
    showModal('⚠️ Fechas requeridas', 'Selecciona las fechas de entrada y salida para consultar disponibilidad.');
    return;
  }

  const section = document.getElementById('results-section');
  const grid    = document.getElementById('results-grid');
  const title   = document.getElementById('results-title');

  // Mostrar carga inmediata
  grid.innerHTML = `
    <div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:#64748b;">
      <div style="font-size:2.5rem;margin-bottom:14px;">🔍</div>
      <p style="font-weight:600;font-size:1rem;margin:0 0 6px;">Buscando hoteles disponibles en <strong>${city}</strong>…</p>
      <p style="font-size:.85rem;margin:0;">Consultando disponibilidad</p>
    </div>`;
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const key      = normalize(city);
  const cityCode = CITY_IATA_HOTEL[key];
  let hotels = [];
  let source = 'estimated';

  // Intentar Amadeus si hay claves y código de ciudad
  if (cityCode && AMADEUS.clientId !== 'PEGA_TU_CLIENT_ID_AQUI') {
    try {
      const offers = await amadeusHotelSearch(cityCode, checkin, checkout, guests);
      hotels = parseAmadeusHotels(offers, cityCode);
      source = 'amadeus';
    } catch (e) {
      console.warn('Amadeus hotel falló, usando simulación:', e.message);
    }
  }

  // Fallback: datos simulados en COP
  if (!hotels.length) {
    const simData = hotelData[key] || hotelData['default'];
    hotels = simData.map(h => ({
      name:     h.name,
      stars:    h.stars,
      priceCOP: Math.round(h.price * copRate / 1000) * 1000,
      img:      h.img,
      desc:     h.desc,
      source:   'estimated',
    }));
  }

  let dateStr = '';
  if (checkin)  dateStr += ' · Entrada: ' + formatDate(checkin);
  if (checkout) dateStr += ' · Salida: '  + formatDate(checkout);

  title.textContent = `🏨 ${hotels.length} hotel${hotels.length !== 1 ? 'es' : ''} en ${city}${dateStr}`;
  grid.innerHTML = '';

  hotels.forEach(h => {
    const stars = '★'.repeat(h.stars) + '☆'.repeat(5 - h.stars);
    const card  = document.createElement('div');
    card.className = 'result-card';
    const safeName = h.name.replace(/'/g, "\\'");
    card.innerHTML = `
      <div style="height:170px;background:url('${h.img}') center/cover no-repeat;"></div>
      <div class="card-body">
        <div class="stars" style="color:#f59e0b;font-size:.88rem;margin-bottom:4px;">${stars}</div>
        <h4>${h.name}</h4>
        <p>${h.desc}</p>
        <div class="product-price-row">
          <div style="font-size:.8rem;color:#64748b;font-weight:600;">Consulta precio con un asesor</div>
          <button class="btn btn-primary-sm" onclick="openHotelBooking('${safeName}','${city.replace(/'/g,"\\'")}')">Solicitar precio</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ---------- MODAL RESERVA HOTEL ----------
let selectedHotel = null;

/* ---- PASO 1: modal de búsqueda ---- */
function openHotelSearch(name, city) {
  selectedHotel = { name, city };
  document.getElementById('hs-hotel-name').textContent = name;
  document.getElementById('hs-hotel-city').textContent = city ? '📍 ' + city : '';
  document.getElementById('hs-msg').innerHTML = '';
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('hs-checkin').min  = today;
  document.getElementById('hs-checkin').value = '';
  document.getElementById('hs-checkout').min = today;
  document.getElementById('hs-checkout').value = '';
  document.getElementById('hs-guests').value = '';
  document.getElementById('hs-room').value   = '';
  document.getElementById('modal-hotel-search').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeHotelSearch() {
  document.getElementById('modal-hotel-search').classList.remove('open');
  document.body.style.overflow = '';
}

function proceedToBooking(e) {
  e.preventDefault();
  const checkin  = document.getElementById('hs-checkin').value;
  const checkout = document.getElementById('hs-checkout').value;
  const guests   = document.getElementById('hs-guests').value;
  const room     = document.getElementById('hs-room').value;
  const msgEl    = document.getElementById('hs-msg');

  if (new Date(checkout) <= new Date(checkin)) {
    msgEl.innerHTML = '<p style="color:#dc2626;font-size:.85rem;margin-top:4px;">⚠️ La fecha de salida debe ser posterior a la de ingreso.</p>';
    return;
  }

  selectedHotel = { ...selectedHotel, checkin, checkout, guests, room };
  closeHotelSearch();
  openHotelBooking(selectedHotel.name, selectedHotel.city, selectedHotel);
}

/* ---- PASO 2: modal de contacto ---- */
function openHotelBooking(name, city, searchData) {
  selectedHotel = searchData || { name, city };
  const summary = document.getElementById('bk-hotel-summary');
  const fmt = d => d ? new Date(d + 'T12:00:00').toLocaleDateString('es-CO', { day:'2-digit', month:'short', year:'numeric' }) : '';
  summary.innerHTML = `
    <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:10px;padding:14px 18px;margin-bottom:18px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:${searchData?.checkin ? '10px' : '0'}">
        <span style="font-size:1.5rem;">🏨</span>
        <div>
          <strong style="color:#1e3a8a;font-size:1rem;">${name}</strong>
          ${city ? `<div style="font-size:.85rem;color:#64748b;margin-top:2px;">📍 ${city}</div>` : ''}
        </div>
      </div>
      ${searchData?.checkin ? `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.83rem;color:#374151;border-top:1px solid #c7d2fe;padding-top:10px;margin-top:4px;">
        <div><span style="color:#64748b;">Ingreso:</span><br><strong>${fmt(searchData.checkin)}</strong></div>
        <div><span style="color:#64748b;">Salida:</span><br><strong>${fmt(searchData.checkout)}</strong></div>
        <div><span style="color:#64748b;">Personas:</span><br><strong>${searchData.guests}</strong></div>
        <div><span style="color:#64748b;">Habitación:</span><br><strong>${searchData.room}</strong></div>
      </div>` : ''}
    </div>`;

  const savedUser = localStorage.getItem('agt_user');
  if (savedUser) document.getElementById('hbk-name').value = savedUser;

  document.getElementById('hbk-msg').innerHTML = '';
  document.getElementById('hbk-btn').disabled    = false;
  document.getElementById('hbk-btn').textContent = '📩 Solicitar reserva';

  document.getElementById('modal-hotel-booking').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeHotelBooking() {
  document.getElementById('modal-hotel-booking').classList.remove('open');
  document.body.style.overflow = '';
}

async function submitHotelBooking(e) {
  e.preventDefault();
  const btn    = document.getElementById('hbk-btn');
  const msgEl  = document.getElementById('hbk-msg');
  const hName  = document.getElementById('hbk-name').value.trim();
  const hEmail = document.getElementById('hbk-email').value.trim();
  const hPhone = document.getElementById('hbk-phone').value.trim();
  const hNotes = document.getElementById('hbk-notes').value.trim();
  const now    = new Date().toLocaleString('es-CO');

  const searchInfo = [
    selectedHotel.checkin  ? `Ingreso: ${selectedHotel.checkin}`   : '',
    selectedHotel.checkout ? `Salida: ${selectedHotel.checkout}`   : '',
    selectedHotel.guests   ? `Personas: ${selectedHotel.guests}`   : '',
    selectedHotel.room     ? `Habitación: ${selectedHotel.room}`   : '',
  ].filter(Boolean).join(' | ');

  const templateParams = {
    nombre:    `[SOLICITUD PRECIO HOTEL] ${hName}`,
    cedula:    `${selectedHotel.name} · ${selectedHotel.city || ''}`,
    telefono:  hPhone,
    correo:    hEmail,
    fecha_nac: `Hotel: ${selectedHotel.name}${selectedHotel.city ? ' en ' + selectedHotel.city : ''}${searchInfo ? ' — ' + searchInfo : ''}`,
    fecha_reg: `Solicitud: ${now}${hNotes ? ' | Notas: ' + hNotes : ''}`,
  };

  btn.disabled    = true;
  btn.textContent = '⏳ Enviando...';
  msgEl.innerHTML = '';

  try {
    emailjs.init(EJS.publicKey);
    await emailjs.send(EJS.serviceId, EJS.templateAdmin, templateParams);
    closeHotelBooking();
    showNotif(`✅ ¡Solicitud enviada, ${hName.split(' ')[0]}! Un asesor te enviará el precio pronto. 🏨`);
    document.getElementById('form-hotel-booking').reset();
  } catch (err) {
    console.error('EmailJS hotel error:', err);
    msgEl.innerHTML = `<p style="color:#dc2626;font-size:.85rem;margin-top:6px;">⚠️ No se pudo enviar. Intenta de nuevo.</p>`;
  } finally {
    btn.disabled    = false;
    btn.textContent = '📩 Solicitar reserva';
  }
}

function closeResults() {
  document.getElementById('results-section').style.display = 'none';
}

// Llenar campo de búsqueda desde tarjeta de destino
function fillHotelSearch(city) {
  if (!cityInput) return;
  cityInput.value = city;
  scrollToSearch('tab-hoteles');
}

function scrollToSearch(tabId) {
  document.querySelectorAll('.sr-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sr-panel').forEach(p => p.classList.remove('active'));
  const tab   = document.querySelector(`[data-tab="${tabId}"]`);
  const panel = document.getElementById(tabId);
  if (tab)   tab.classList.add('active');
  if (panel) panel.classList.add('active');
  document.getElementById('searcher').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ---------- RESERVAR ITEM ----------
function bookItem(name) {
  openHotelSearch(name, '');
}

// ---------- FORMULARIO CONTACTO ----------
function submitContact(e) {
  e.preventDefault();
  showModal('✅ Mensaje enviado', 'Gracias por escribirnos. Un asesor te contactará en menos de 24 horas.');
  e.target.reset();
}

// ---------- MODAL ----------
function showModal(title, msg) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-msg').textContent   = msg;
  document.getElementById('modal').classList.add('open');
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}
function showComingSoon() {
  showModal('🚀 Próximamente', 'Estamos trabajando en esta función. Mientras tanto, nuestros asesores pueden ayudarte vía chat o teléfono.');
}

/* =============================================
   BUSCADOR DE VUELOS — conectado a Kayak
   ============================================= */

// Base de aeropuertos con código IATA
const airports = [
  // Colombia
  { name:'Bogotá',            country:'Colombia',        iata:'BOG', emoji:'🇨🇴' },
  { name:'Medellín',          country:'Colombia',        iata:'MDE', emoji:'🇨🇴' },
  { name:'Cartagena',         country:'Colombia',        iata:'CTG', emoji:'🇨🇴' },
  { name:'Cali',              country:'Colombia',        iata:'CLO', emoji:'🇨🇴' },
  { name:'Barranquilla',      country:'Colombia',        iata:'BAQ', emoji:'🇨🇴' },
  { name:'Bucaramanga',       country:'Colombia',        iata:'BGA', emoji:'🇨🇴' },
  // América Latina
  { name:'Ciudad de México',  country:'México',          iata:'MEX', emoji:'🇲🇽' },
  { name:'Cancún',            country:'México',          iata:'CUN', emoji:'🇲🇽' },
  { name:'Guadalajara',       country:'México',          iata:'GDL', emoji:'🇲🇽' },
  { name:'Buenos Aires',      country:'Argentina',       iata:'EZE', emoji:'🇦🇷' },
  { name:'Lima',              country:'Perú',            iata:'LIM', emoji:'🇵🇪' },
  { name:'Cusco',             country:'Perú',            iata:'CUZ', emoji:'🇵🇪' },
  { name:'Santiago',          country:'Chile',           iata:'SCL', emoji:'🇨🇱' },
  { name:'São Paulo',         country:'Brasil',          iata:'GRU', emoji:'🇧🇷' },
  { name:'Río de Janeiro',    country:'Brasil',          iata:'GIG', emoji:'🇧🇷' },
  { name:'Punta Cana',        country:'Rep. Dominicana', iata:'PUJ', emoji:'🇩🇴' },
  { name:'La Habana',         country:'Cuba',            iata:'HAV', emoji:'🇨🇺' },
  { name:'Ciudad de Panamá',  country:'Panamá',          iata:'PTY', emoji:'🇵🇦' },
  { name:'San José',          country:'Costa Rica',      iata:'SJO', emoji:'🇨🇷' },
  { name:'Quito',             country:'Ecuador',         iata:'UIO', emoji:'🇪🇨' },
  { name:'Montevideo',        country:'Uruguay',         iata:'MVD', emoji:'🇺🇾' },
  { name:'Caracas',           country:'Venezuela',       iata:'CCS', emoji:'🇻🇪' },
  { name:'Asunción',          country:'Paraguay',        iata:'ASU', emoji:'🇵🇾' },
  { name:'La Paz',            country:'Bolivia',         iata:'LPB', emoji:'🇧🇴' },
  // América del Norte
  { name:'Miami',             country:'Estados Unidos',  iata:'MIA', emoji:'🇺🇸' },
  { name:'Nueva York',        country:'Estados Unidos',  iata:'JFK', emoji:'🇺🇸' },
  { name:'Los Ángeles',       country:'Estados Unidos',  iata:'LAX', emoji:'🇺🇸' },
  { name:'Orlando',           country:'Estados Unidos',  iata:'MCO', emoji:'🇺🇸' },
  { name:'Las Vegas',         country:'Estados Unidos',  iata:'LAS', emoji:'🇺🇸' },
  { name:'Chicago',           country:'Estados Unidos',  iata:'ORD', emoji:'🇺🇸' },
  { name:'San Francisco',     country:'Estados Unidos',  iata:'SFO', emoji:'🇺🇸' },
  { name:'Washington',        country:'Estados Unidos',  iata:'IAD', emoji:'🇺🇸' },
  { name:'Toronto',           country:'Canadá',          iata:'YYZ', emoji:'🇨🇦' },
  { name:'Vancouver',         country:'Canadá',          iata:'YVR', emoji:'🇨🇦' },
  // Europa
  { name:'Madrid',            country:'España',          iata:'MAD', emoji:'🇪🇸' },
  { name:'Barcelona',         country:'España',          iata:'BCN', emoji:'🇪🇸' },
  { name:'París',             country:'Francia',         iata:'CDG', emoji:'🇫🇷' },
  { name:'Londres',           country:'Reino Unido',     iata:'LHR', emoji:'🇬🇧' },
  { name:'Roma',              country:'Italia',          iata:'FCO', emoji:'🇮🇹' },
  { name:'Milán',             country:'Italia',          iata:'MXP', emoji:'🇮🇹' },
  { name:'Berlín',            country:'Alemania',        iata:'BER', emoji:'🇩🇪' },
  { name:'Múnich',            country:'Alemania',        iata:'MUC', emoji:'🇩🇪' },
  { name:'Ámsterdam',         country:'Países Bajos',    iata:'AMS', emoji:'🇳🇱' },
  { name:'Lisboa',            country:'Portugal',        iata:'LIS', emoji:'🇵🇹' },
  { name:'Oporto',            country:'Portugal',        iata:'OPO', emoji:'🇵🇹' },
  { name:'Viena',             country:'Austria',         iata:'VIE', emoji:'🇦🇹' },
  { name:'Praga',             country:'Rep. Checa',      iata:'PRG', emoji:'🇨🇿' },
  { name:'Budapest',          country:'Hungría',         iata:'BUD', emoji:'🇭🇺' },
  { name:'Estambul',          country:'Turquía',         iata:'IST', emoji:'🇹🇷' },
  { name:'Atenas',            country:'Grecia',          iata:'ATH', emoji:'🇬🇷' },
  { name:'Zúrich',            country:'Suiza',           iata:'ZRH', emoji:'🇨🇭' },
  { name:'Bruselas',          country:'Bélgica',         iata:'BRU', emoji:'🇧🇪' },
  { name:'Copenhague',        country:'Dinamarca',       iata:'CPH', emoji:'🇩🇰' },
  { name:'Estocolmo',         country:'Suecia',          iata:'ARN', emoji:'🇸🇪' },
  { name:'Oslo',              country:'Noruega',         iata:'OSL', emoji:'🇳🇴' },
  // Asia / Oriente Medio
  { name:'Dubái',             country:'EAU',             iata:'DXB', emoji:'🇦🇪' },
  { name:'Tokio',             country:'Japón',           iata:'NRT', emoji:'🇯🇵' },
  { name:'Osaka',             country:'Japón',           iata:'KIX', emoji:'🇯🇵' },
  { name:'Seúl',              country:'Corea del Sur',   iata:'ICN', emoji:'🇰🇷' },
  { name:'Pekín',             country:'China',           iata:'PEK', emoji:'🇨🇳' },
  { name:'Shanghái',          country:'China',           iata:'PVG', emoji:'🇨🇳' },
  { name:'Hong Kong',         country:'China',           iata:'HKG', emoji:'🇭🇰' },
  { name:'Bangkok',           country:'Tailandia',       iata:'BKK', emoji:'🇹🇭' },
  { name:'Singapur',          country:'Singapur',        iata:'SIN', emoji:'🇸🇬' },
  { name:'Bali',              country:'Indonesia',       iata:'DPS', emoji:'🇮🇩' },
  { name:'Kuala Lumpur',      country:'Malasia',         iata:'KUL', emoji:'🇲🇾' },
  { name:'Mumbai',            country:'India',           iata:'BOM', emoji:'🇮🇳' },
  { name:'Nueva Delhi',       country:'India',           iata:'DEL', emoji:'🇮🇳' },
  { name:'Doha',              country:'Catar',           iata:'DOH', emoji:'🇶🇦' },
  // África / Oceanía
  { name:'El Cairo',          country:'Egipto',          iata:'CAI', emoji:'🇪🇬' },
  { name:'Marrakech',         country:'Marruecos',       iata:'RAK', emoji:'🇲🇦' },
  { name:'Nairobi',           country:'Kenia',           iata:'NBO', emoji:'🇰🇪' },
  { name:'Ciudad del Cabo',   country:'Sudáfrica',       iata:'CPT', emoji:'🇿🇦' },
  { name:'Sídney',            country:'Australia',       iata:'SYD', emoji:'🇦🇺' },
  { name:'Melbourne',         country:'Australia',       iata:'MEL', emoji:'🇦🇺' },
  { name:'Auckland',          country:'Nueva Zelanda',   iata:'AKL', emoji:'🇳🇿' },
];

// Autocompletado de aeropuertos
function flightAC(input, listId) {
  const val  = input.value.trim();
  const list = document.getElementById(listId);
  const codeId = listId === 'ac-origin' ? 'v-origin-code' : 'v-dest-code';
  list.innerHTML = '';
  document.getElementById(codeId).value = '';

  if (val.length < 2) { list.classList.remove('open'); return; }

  const q = normalize(val);
  const matches = airports.filter(a =>
    normalize(a.name).includes(q) ||
    normalize(a.country).includes(q) ||
    a.iata.toLowerCase().includes(q)
  ).slice(0, 7);

  if (!matches.length) { list.classList.remove('open'); return; }

  matches.forEach(a => {
    const li = document.createElement('li');
    li.innerHTML = `${a.emoji} <strong>${a.name}</strong> <span style="color:#94a3b8;font-size:.8rem;">${a.iata} — ${a.country}</span>`;
    li.addEventListener('click', () => {
      input.value = `${a.name} (${a.iata})`;
      document.getElementById(codeId).value = a.iata;
      list.classList.remove('open');
    });
    list.appendChild(li);
  });
  list.classList.add('open');
}

// Cerrar autocomplete al hacer clic fuera
document.addEventListener('click', e => {
  if (!e.target.closest('#tab-vuelos')) {
    document.getElementById('ac-origin') && document.getElementById('ac-origin').classList.remove('open');
    document.getElementById('ac-dest')   && document.getElementById('ac-dest').classList.remove('open');
  }
});

// Intercambiar origen y destino
function swapAirports() {
  const oInput = document.getElementById('v-origin');
  const dInput = document.getElementById('v-dest');
  const oCode  = document.getElementById('v-origin-code');
  const dCode  = document.getElementById('v-dest-code');
  [oInput.value, dInput.value] = [dInput.value, oInput.value];
  [oCode.value,  dCode.value]  = [dCode.value,  oCode.value];
}

// Mostrar/ocultar fecha de regreso según tipo de viaje
function toggleReturnDate(radio) {
  const field = document.getElementById('return-date-field');
  if (field) field.style.display = radio.value === 'oneway' ? 'none' : 'flex';
}

// Datos de aerolíneas
const airlines = [
  { name:'Avianca',           logo:'🔴' },
  { name:'LATAM Colombia',    logo:'🔵' },
  { name:'Wingo',             logo:'🟠' },
  { name:'EasyFly',           logo:'🟡' },
  { name:'Satena',            logo:'🟢' },
  { name:'Ultra Air',         logo:'🟣' },
  { name:'Copa Airlines',     logo:'🔷' },
  { name:'American Airlines', logo:'🔷' },
  { name:'United Airlines',   logo:'🔵' },
  { name:'JetBlue',           logo:'🩵' },
  { name:'Spirit Airlines',   logo:'💛' },
  { name:'Iberia',            logo:'🟠' },
  { name:'Air France',        logo:'🔹' },
  { name:'KLM',               logo:'🔵' },
  { name:'Lufthansa',         logo:'⬛' },
  { name:'Emirates',          logo:'🟢' },
  { name:'Qatar Airways',     logo:'🟤' },
  { name:'Turkish Airlines',  logo:'🔴' },
  { name:'Sky Airline',       logo:'🩵' },
  { name:'Aeromexico',        logo:'🔵' },
];

// ---------- TASA DE CAMBIO EN TIEMPO REAL ----------
let copRate = 4200; // fallback mientras carga

(async function fetchCOPRate() {
  try {
    const res  = await fetch('https://api.frankfurter.app/latest?from=USD&to=COP');
    const data = await res.json();
    if (data.rates && data.rates.COP) copRate = data.rates.COP;
  } catch (e) { /* usa el valor por defecto */ }
})();

// Formatea un valor ya en COP
function formatCOP(cop) {
  return '$ ' + (Math.round(cop / 1000) * 1000).toLocaleString('es-CO');
}

/* =============================================
   AMADEUS API — Precios reales de vuelos
   ─────────────────────────────────────────────
   PASOS PARA ACTIVAR:
   1. Regístrate gratis en: developers.amadeus.com
   2. Entra a "My Self-Service Workspace" → New App
   3. Copia el Client ID y Client Secret
   4. Pégalos abajo y guarda el archivo
   ============================================= */
const AMADEUS = {
  clientId:     'PEGA_TU_CLIENT_ID_AQUI',
  clientSecret: 'PEGA_TU_CLIENT_SECRET_AQUI',
  host:         'https://test.api.amadeus.com', // Cambiar a https://api.amadeus.com para producción
};

let _amToken = null, _amExpiry = 0;

async function amadeusGetToken() {
  if (_amToken && Date.now() < _amExpiry) return _amToken;
  const res  = await fetch(`${AMADEUS.host}/v1/security/oauth2/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    `grant_type=client_credentials&client_id=${AMADEUS.clientId}&client_secret=${AMADEUS.clientSecret}`,
  });
  const d = await res.json();
  if (!d.access_token) throw new Error('Token inválido');
  _amToken  = d.access_token;
  _amExpiry = Date.now() + (d.expires_in - 60) * 1000;
  return _amToken;
}

const AM_NAMES = {
  AV:'Avianca', LA:'LATAM Colombia', P5:'Wingo', EJ:'EasyFly', '9R':'Satena',
  CM:'Copa Airlines', AA:'American Airlines', UA:'United Airlines', B6:'JetBlue',
  NK:'Spirit Airlines', IB:'Iberia', AF:'Air France', KL:'KLM', LH:'Lufthansa',
  EK:'Emirates', QR:'Qatar Airways', TK:'Turkish Airlines', BA:'British Airways',
  DL:'Delta Air Lines', JL:'Japan Airlines', CX:'Cathay Pacific', SQ:'Singapore Airlines',
  AM:'Aeromexico', H2:'Sky Airline',
};
const AM_LOGOS = {
  AV:'🔴', LA:'🔵', P5:'🟠', EJ:'🟡', '9R':'🟢', CM:'🔷', AA:'🔷', UA:'🔵',
  B6:'🩵', NK:'💛', IB:'🟠', AF:'🔹', KL:'🔵', LH:'⬛', EK:'🟢', QR:'🟤',
  TK:'🔴', BA:'🔵', DL:'🔵', JL:'🔵', CX:'🔵', SQ:'🟢', AM:'🔵', H2:'🩵',
};

async function amadeusSearch(orig, dest, depDate, retDate, adults, cabin) {
  const cabins = { e: 'ECONOMY', b: 'BUSINESS', f: 'FIRST' };
  const token  = await amadeusGetToken();
  let url = `${AMADEUS.host}/v2/shopping/flight-offers`
    + `?originLocationCode=${orig}&destinationLocationCode=${dest}`
    + `&departureDate=${depDate}&adults=${adults}`
    + `&travelClass=${cabins[cabin] || 'ECONOMY'}&max=6&currencyCode=COP`;
  if (retDate) url += `&returnDate=${retDate}`;
  const res  = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  if (!res.ok || !Array.isArray(data.data) || data.data.length === 0)
    throw new Error('Sin resultados en Amadeus');
  return data.data;
}

function amadeusParseOffers(offers) {
  return offers.map(o => {
    const it   = o.itineraries[0];
    const seg  = it.segments[0];
    const last = it.segments[it.segments.length - 1];
    const dep  = seg.departure.at.split('T')[1].slice(0, 5);
    const arr  = last.arrival.at.split('T')[1].slice(0, 5);
    const dm   = it.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    const durH = parseInt(dm?.[1] || 0);
    const durM = parseInt(dm?.[2] || 0);
    const code = seg.carrierCode;
    const stops = it.segments.length - 1;
    return {
      airline:  AM_NAMES[code]  || code,
      logo:     AM_LOGOS[code]  || '✈',
      dep, arr,
      duration: `${durH}h ${String(durM).padStart(2, '0')}m`,
      stops,
      priceCOP: Math.round(parseFloat(o.price.grandTotal)),
      source:   'amadeus',
      tags: stops === 0 ? ['Directo', 'Equipaje de mano'] : stops === 1 ? ['1 escala'] : [`${stops} escalas`],
    };
  });
}

// ---------- AEROLÍNEAS Y PRECIOS POR RUTA ----------
const CO_CODES  = ['BOG','MDE','CTG','CLO','BAQ','BGA','PEI','SMR','EOH','LET'];
const USA_CODES = ['JFK','LAX','MIA','ORD','LAS','MCO','SFO','IAD','YYZ','YVR'];
const EUR_CODES = ['MAD','CDG','LHR','FCO','BCN','BER','AMS','LIS','VIE','IST','ATH','ZRH','BRU','CPH','ARN','OSL'];
const ASIA_CODES= ['DXB','NRT','KIX','ICN','PEK','PVG','HKG','BKK','SIN','DPS','KUL','BOM','DEL','DOH','SYD','MEL','AKL','CAI','NBO','CPT'];

function getAirlinesForRoute(orig, dest) {
  const isOrigCO = CO_CODES.includes(orig), isDestCO = CO_CODES.includes(dest);
  if (isOrigCO && isDestCO)
    return ['Avianca','LATAM Colombia','Wingo','EasyFly','Satena','Ultra Air'];
  const other = isOrigCO ? dest : orig;
  if (USA_CODES.includes(other))
    return ['Avianca','LATAM Colombia','American Airlines','United Airlines','JetBlue','Spirit Airlines'];
  if (EUR_CODES.includes(other))
    return ['Avianca','LATAM Colombia','Iberia','Air France','KLM','Lufthansa'];
  if (ASIA_CODES.includes(other))
    return ['Emirates','Lufthansa','Air France','Qatar Airways','Turkish Airlines','KLM'];
  return ['Avianca','LATAM Colombia','Copa Airlines','Wingo','Aeromexico','Sky Airline'];
}

function getBasePriceUSD(orig, dest) {
  const isOrigCO = CO_CODES.includes(orig), isDestCO = CO_CODES.includes(dest);
  if (isOrigCO && isDestCO) return 48;   // ~$200.000 COP
  const other = isOrigCO ? dest : (isDestCO ? orig : dest);
  if (USA_CODES.includes(other)) return 430; // ~$1.800.000 COP
  if (EUR_CODES.includes(other)) return 780; // ~$3.200.000 COP
  if (ASIA_CODES.includes(other)) return 920;// ~$3.800.000 COP
  return 260;                                 // LatAm ~$1.000.000 COP
}

function getDuration(orig, dest, i) {
  const isOrigCO = CO_CODES.includes(orig), isDestCO = CO_CODES.includes(dest);
  if (isOrigCO && isDestCO) return { h: 1 + Math.floor(i/3), m: [0,30,50,15,40,20][i] };
  const other = isOrigCO ? dest : (isDestCO ? orig : dest);
  if (EUR_CODES.includes(other) || ASIA_CODES.includes(other)) return { h: 10+i, m: [0,15,30,45,50,55][i] };
  if (USA_CODES.includes(other)) return { h: 4+i, m: [0,30,0,45,20,10][i] };
  return { h: 2+Math.floor(i/2), m: [0,20,40,15,35,50][i] };
}

let flightResultsData = [];

// Obtener vuelos: primero Amadeus (real), si falla usar simulación
async function fetchFlights(orig, dest, depDate, retDate, adults, cabin, tripType) {
  const keysConfigured = AMADEUS.clientId !== 'PEGA_TU_CLIENT_ID_AQUI';
  if (keysConfigured) {
    try {
      const offers = await amadeusSearch(orig, dest, depDate, retDate, adults, cabin);
      return amadeusParseOffers(offers);
    } catch (e) {
      console.warn('Amadeus falló, usando estimación:', e.message);
    }
  }
  return buildSimulatedFlights(orig, dest, adults);
}

function buildSimulatedFlights(orig, dest, adults) {
  const routeAirlines = getAirlinesForRoute(orig, dest);
  const baseUSD       = getBasePriceUSD(orig, dest);
  return routeAirlines.map((alName, i) => {
    const alObj    = airlines.find(a => a.name === alName) || { name: alName, logo: '✈' };
    const stops    = i < 2 ? 0 : i < 5 ? 1 : 2;
    const { h: dH, m: dM } = getDuration(orig, dest, i);
    const depHour  = [6, 8, 10, 13, 16, 19][i];
    const depMin   = [0, 30, 0, 45, 20, 10][i];
    const factor   = (1 + i * 0.10) * (stops === 0 ? 1.08 : stops === 1 ? 1 : 0.88);
    return {
      airline:  alObj.name, logo: alObj.logo,
      dep: `${String(depHour).padStart(2,'0')}:${String(depMin).padStart(2,'0')}`,
      arr: `${String((depHour+dH)%24).padStart(2,'0')}:${String((depMin+dM)%60).padStart(2,'0')}`,
      duration: `${dH}h ${String(dM).padStart(2,'0')}m`,
      stops,
      priceCOP: Math.round(baseUSD * copRate * factor / 1000) * 1000,
      source:   'estimated',
      tags: stops === 0 ? ['Directo','Equipaje de mano'] : stops === 1 ? ['1 escala'] : ['2 escalas'],
    };
  });
}

// Buscar vuelos — muestra resultados dentro de la página
async function searchFlights() {
  const originCode = document.getElementById('v-origin-code').value;
  const destCode   = document.getElementById('v-dest-code').value;
  const salida     = document.getElementById('vuelo-salida').value;
  const regreso    = document.getElementById('vuelo-regreso').value;
  const adults     = parseInt(document.getElementById('v-adults').value) || 1;
  const cabin      = document.getElementById('v-cabin').value;
  const tripType   = document.querySelector('input[name="trip"]:checked').value;
  const originName = document.getElementById('v-origin').value;
  const destName   = document.getElementById('v-dest').value;

  if (!originCode) { showNotif('⚠️ Selecciona el aeropuerto de origen de la lista.'); document.getElementById('v-origin').focus(); return; }
  if (!destCode)   { showNotif('⚠️ Selecciona el aeropuerto de destino de la lista.'); document.getElementById('v-dest').focus(); return; }
  if (!salida)     { showNotif('⚠️ Selecciona la fecha de salida.'); return; }

  // Mostrar overlay animado y lanzar búsqueda
  const overlay = document.getElementById('flight-overlay');
  document.getElementById('flight-overlay-route').textContent = `${originName} → ${destName}`;
  overlay.classList.add('open');

  // Esperar al menos 1.8s de animación y luego mostrar resultados
  const [results] = await Promise.all([
    fetchFlights(originCode, destCode, salida, regreso, adults, cabin, tripType),
    new Promise(r => setTimeout(r, 1800)),
  ]);
  overlay.classList.remove('open');
  renderFlightResults({ originCode, destCode, originName, destName, salida, regreso, adults, results });
}

// Contexto de búsqueda activo (para el modal de reserva)
let activeSearch = {};

function renderFlightResults({ originCode, destCode, originName, destName, salida, regreso, adults, results }) {
  activeSearch = { originCode, destCode, originName, destName, salida, regreso, adults };
  flightResultsData = results;

  document.getElementById('fr-origin-city').textContent = originCode;
  document.getElementById('fr-dest-city').textContent   = destCode;
  document.getElementById('fr-date-badge').textContent  = formatDate(salida) + (regreso ? ' → ' + formatDate(regreso) : '');
  document.getElementById('fr-pax-badge').textContent   = `👤 ${adults} pasajero${adults > 1 ? 's' : ''}`;

  renderCards(results);

  const section = document.getElementById('flight-results-section');
  section.style.display = 'block';
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentFlights = [];

function renderCards(data) {
  currentFlights = data;
  const list = document.getElementById('fr-list');
  list.innerHTML = '';
  if (!data.length) {
    list.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px;">No se encontraron vuelos para esa búsqueda.</p>';
    return;
  }
  const originCode = document.getElementById('fr-origin-city').textContent;
  const destCode   = document.getElementById('fr-dest-city').textContent;

  data.forEach((f, idx) => {
    const stopsLabel = f.stops === 0 ? '<span class="fr-stops direct">Directo</span>' : `<span class="fr-stops one">${f.stops} escala${f.stops>1?'s':''}</span>`;
    const tags = f.tags.map(t => `<span class="fr-tag ${t==='Directo'||t==='Equipaje incluido'?'fr-tag-green':'fr-tag-blue'}">${t}</span>`).join('');
    const div = document.createElement('div');
    div.className = `fr-card${f.stops===0?' fr-direct':f.stops===1?' fr-one':''}`;
    div.dataset.stops = f.stops;
    div.innerHTML = `
      <div class="fr-left">
        <div class="fr-airline">
          <div class="fr-airline-logo">${f.logo}</div>
          <div class="fr-airline-name">${f.airline}</div>
        </div>
        <div class="fr-times">
          <div class="fr-time-block"><div class="fr-time">${f.dep}</div><div class="fr-city-code">${originCode}</div></div>
          <div class="fr-line">
            <div class="fr-duration">${f.duration}</div>
            <div class="fr-line-bar"><span>✈</span></div>
            ${stopsLabel}
          </div>
          <div class="fr-time-block"><div class="fr-time">${f.arr}</div><div class="fr-city-code">${destCode}</div></div>
        </div>
        <div class="fr-tags">${tags}</div>
      </div>
      <div class="fr-right">
        <button type="button" onclick="openFlightBooking(${idx})" class="btn btn-primary fr-book-btn">Solicitar precio</button>
      </div>`;
    list.appendChild(div);
  });
}

function filterFlights(type, btn) {
  document.querySelectorAll('.fr-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = type === 'all'    ? flightResultsData :
                   type === 'direct' ? flightResultsData.filter(f => f.stops === 0) :
                                       flightResultsData.filter(f => f.stops === 1);
  renderCards(filtered);
}

function sortFlights(by) {
  const sorted = [...flightResultsData].sort((a,b) =>
    by === 'price'     ? a.price - b.price :
    by === 'duration'  ? a.duration.localeCompare(b.duration) :
                         a.dep.localeCompare(b.dep)
  );
  renderCards(sorted);
}

function closeFlightResults() {
  document.getElementById('flight-results-section').style.display = 'none';
  document.getElementById('searcher').scrollIntoView({ behavior: 'smooth' });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

// ---------- HAMBURGER ----------
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

// ---------- SUBHEADER: MARCAR LINK ACTIVO ----------
document.querySelectorAll('.sub-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.sub-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ---------- BACK TO TOP ----------
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
});

// ---------- FECHAS MÍNIMAS ----------
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => input.setAttribute('min', today));
});

// ---------- HELPERS ----------
function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(day)} ${months[parseInt(m) - 1]} ${y}`;
}

/* =============================================
   EMAILJS — CONFIGURACIÓN
   Reemplaza los 3 valores con los de tu cuenta
   emailjs.com → Account → API Keys
   ============================================= */
const EJS = {
  publicKey:       'D9H8jeo7_5AqeEHnR',
  serviceId:       'service_0cz54hb',
  templateAdmin:   'template_gi90ogw',   // correo a juanfelipe-156@hotmail.com
  templateBienven: 'template_l5ou447',   // correo de bienvenida al usuario
};

/* =============================================
   MODALES DE AUTENTICACIÓN
   ============================================= */

// ---- GESTIÓN DE SESIÓN ----

// Guardar nombre vinculado al correo (para recuperarlo al hacer login)
function saveUserData(nombre, correo) {
  const users = JSON.parse(localStorage.getItem('agt_users') || '{}');
  users[correo.toLowerCase()] = nombre;
  localStorage.setItem('agt_users', JSON.stringify(users));
}

// Buscar nombre por correo
function getNameByEmail(correo) {
  const users = JSON.parse(localStorage.getItem('agt_users') || '{}');
  return users[correo.toLowerCase()] || null;
}

// Obtener iniciales del nombre (primera letra nombre + primera letra apellido)
function getInitials(nombre) {
  const parts = nombre.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Activar sesión y mostrar iniciales en el icono de usuario
function setUserSession(nombre) {
  localStorage.setItem('agt_user', nombre);

  const btn        = document.getElementById('user-icon-btn');
  const svgEl      = document.getElementById('user-icon-svg');
  const initialsEl = document.getElementById('user-icon-initials');
  const nameDisp   = document.getElementById('uid-name-display');

  if (svgEl)      svgEl.style.display      = 'none';
  if (initialsEl) initialsEl.textContent   = getInitials(nombre);
  if (btn)        btn.classList.add('logged-in');
  if (nameDisp)   nameDisp.textContent     = nombre;

  closeLoginDropdown();
  document.getElementById('user-greeting').style.display = 'none';
  const navMobile = document.getElementById('nav-auth-mobile');
  if (navMobile) navMobile.style.display = 'none';
}

// Cerrar sesión
function logout() {
  localStorage.removeItem('agt_user');

  const btn        = document.getElementById('user-icon-btn');
  const svgEl      = document.getElementById('user-icon-svg');
  const initialsEl = document.getElementById('user-icon-initials');

  if (svgEl)      svgEl.style.display    = '';
  if (initialsEl) initialsEl.textContent = '';
  if (btn)        btn.classList.remove('logged-in');

  closeLoginDropdown();
  document.getElementById('user-greeting').style.display = 'none';
  const navMobile = document.getElementById('nav-auth-mobile');
  if (navMobile) navMobile.style.display = '';
  showNotif('👋 Hasta pronto — sesión cerrada correctamente.');
}

// Menú desplegable del usuario
function toggleUserMenu() {
  document.getElementById('user-drop-panel').classList.toggle('open');
}
function closeUserMenu() {
  const p = document.getElementById('user-drop-panel');
  if (p) p.classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.user-dropdown')) closeUserMenu();
  if (!e.target.closest('#auth-buttons')) closeLoginDropdown();
});

// ---------- LOGIN / USER DROPDOWN ----------
function toggleLoginDropdown() {
  const isLoggedIn = !!localStorage.getItem('agt_user');
  if (isLoggedIn) {
    const dd = document.getElementById('uid-menu');
    if (dd) dd.classList.toggle('open');
    const ld = document.getElementById('login-dropdown');
    if (ld) ld.classList.remove('open');
  } else {
    const dd = document.getElementById('login-dropdown');
    if (dd) dd.classList.toggle('open');
    const um = document.getElementById('uid-menu');
    if (um) um.classList.remove('open');
  }
}
function closeLoginDropdown() {
  const dd = document.getElementById('login-dropdown');
  if (dd) dd.classList.remove('open');
  const um = document.getElementById('uid-menu');
  if (um) um.classList.remove('open');
}
function submitDropdownLogin() {
  const emailVal = (document.getElementById('ld-email').value || '').trim().toLowerCase();
  if (!emailVal || !emailVal.includes('@')) {
    showNotif('⚠️ Por favor ingresa un correo válido.');
    return;
  }
  let nombre = getNameByEmail(emailVal);
  if (!nombre) {
    nombre = emailVal.split('@')[0];
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
  closeLoginDropdown();
  setUserSession(nombre);
  showNotif(`✅ ¡Bienvenido de vuelta, ${nombre.split(' ')[0]}! Has iniciado sesión.`);
}
function openRegFromDropdown() {
  closeLoginDropdown();
  openAuthModal('register');
}

// Restaurar sesión al cargar la página
window.addEventListener('load', () => {
  const saved = localStorage.getItem('agt_user');
  if (saved) setUserSession(saved);
});

// Notificación de barra (no modal) para login/logout
function showNotif(msg) {
  let bar = document.getElementById('notif-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'notif-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#2333c8;color:#fff;'
      + 'text-align:center;padding:12px 20px;font-size:.92rem;font-weight:600;'
      + 'box-shadow:0 2px 12px rgba(0,0,0,.2);transition:opacity .4s;';
    document.body.prepend(bar);
  }
  bar.textContent = msg;
  bar.style.opacity = '1';
  bar.style.display = 'block';
  setTimeout(() => {
    bar.style.opacity = '0';
    setTimeout(() => { bar.style.display = 'none'; }, 400);
  }, 3000);
}

function openAuthModal(type) {
  document.getElementById('modal-' + type).classList.add('open');
  document.body.style.overflow = 'hidden';
  if (nav) nav.classList.remove('open');
}

function closeAuthModal(type) {
  document.getElementById('modal-' + type).classList.remove('open');
  document.body.style.overflow = '';
}

function switchModal(from, to) {
  closeAuthModal(from);
  setTimeout(() => openAuthModal(to), 180);
}

// Cerrar al hacer clic fuera de la caja
['login', 'register'].forEach(type => {
  const overlay = document.getElementById('modal-' + type);
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeAuthModal(type);
    });
  }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAuthModal('login');
    closeAuthModal('register');
    closeBookingModal();
    closeHotelBooking();
  }
});

// Mostrar / ocultar contraseña
function togglePass(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

// Indicador de fuerza de contraseña
const regPassInput = document.getElementById('reg-pass');
if (regPassInput) {
  regPassInput.addEventListener('input', () => {
    const val = regPassInput.value;
    const el  = document.getElementById('pass-strength');
    if (!el) return;
    if (val.length === 0) { el.textContent = ''; el.className = 'pass-strength'; return; }
    const strong = val.length >= 10 && /[A-Z]/.test(val) && /[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val);
    const medium = val.length >= 6 && (/[A-Z]/.test(val) || /[0-9]/.test(val));
    if (strong) { el.textContent = '✅ Contraseña fuerte'; el.className = 'pass-strength strong'; }
    else if (medium) { el.textContent = '⚠️ Contraseña media — añade números y símbolos'; el.className = 'pass-strength medium'; }
    else { el.textContent = '❌ Contraseña débil — mínimo 6 caracteres'; el.className = 'pass-strength weak'; }
  });
}

// Revisar si el correo ingresado ya tiene nombre guardado
function checkLoginEmail(val) {
  const email      = val.trim().toLowerCase();
  const nombreReal = getNameByEmail(email);
  const campo      = document.getElementById('login-name-field');
  const inputNom   = document.getElementById('login-name');
  if (!campo) return;
  if (email.length < 5 || !email.includes('@')) {
    campo.style.display = 'none';
    return;
  }
  if (nombreReal) {
    campo.style.display = 'none';       // Ya está registrado, no pedir nombre
    if (inputNom) inputNom.required = false;
  } else {
    campo.style.display = 'block';      // No encontrado: pedir nombre
    if (inputNom) inputNom.required = true;
  }
}

// Enviar inicio de sesión
function submitLogin(e) {
  e.preventDefault();
  const emailVal = document.getElementById('login-email').value.trim().toLowerCase();

  // 1. Buscar nombre real guardado al registrarse en este dispositivo
  let nombre = getNameByEmail(emailVal);

  // 2. Si no está registrado aquí, usar el nombre que escribió en el campo extra
  if (!nombre) {
    const campoNom = document.getElementById('login-name');
    const nomEscrito = campoNom ? campoNom.value.trim() : '';
    if (nomEscrito) {
      nombre = nomEscrito;
      saveUserData(nombre, emailVal);   // Guardar para próximos logins
    } else {
      nombre = emailVal.split('@')[0];
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }
  }

  closeAuthModal('login');
  setUserSession(nombre);
  showNotif(`✅ ¡Bienvenido de vuelta, ${nombre.split(' ')[0]}! Has iniciado sesión.`);
}

// Enviar registro → EmailJS → juanfelipe-156@hotmail.com
// Verificador en tiempo real del correo en el formulario de registro
function checkRegEmail(val) {
  const email = val.trim().toLowerCase();
  const el    = document.getElementById('reg-email-msg');
  const btn   = document.getElementById('reg-btn');
  if (!el) return;

  if (!email || !email.includes('@') || email.length < 5) {
    el.innerHTML = '';
    if (btn) btn.disabled = false;
    return;
  }

  if (getNameByEmail(email)) {
    // Correo ya registrado
    el.innerHTML = `
      <div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;
                  padding:9px 13px;margin-top:6px;display:flex;align-items:center;gap:8px;">
        <span style="font-size:1.1rem;">🚫</span>
        <p style="color:#dc2626;font-size:.82rem;margin:0;line-height:1.4;">
          <strong>Este correo ya está registrado.</strong><br/>
          <button type="button" onclick="switchModal('register','login')"
            style="color:#2333c8;background:none;border:none;cursor:pointer;
                   font-weight:700;padding:0;font-size:.82rem;text-decoration:underline;">
            Inicia sesión aquí →
          </button>
        </p>
      </div>`;
    if (btn) btn.disabled = true;
  } else {
    // Correo disponible
    el.innerHTML = `<p style="color:#16a34a;font-size:.8rem;margin-top:5px;font-weight:600;">✅ Correo disponible</p>`;
    if (btn) btn.disabled = false;
  }
}

async function submitRegister(e) {
  e.preventDefault();

  const pass       = document.getElementById('reg-pass')  ? document.getElementById('reg-pass').value  : '';
  const pass2      = document.getElementById('reg-pass2') ? document.getElementById('reg-pass2').value : '';
  const strengthEl = document.getElementById('pass-strength');
  const msgEl      = document.getElementById('reg-msg');
  const btn        = document.getElementById('reg-btn');
  const form       = document.getElementById('form-register');
  const datos      = new FormData(form);
  const correoIngresado = (datos.get('correo') || '').trim().toLowerCase();

  // Bloquear si correo duplicado (doble verificación al enviar)
  if (getNameByEmail(correoIngresado)) {
    checkRegEmail(correoIngresado); // muestra el mensaje en el campo
    return;
  }

  // Validar contraseñas
  if (pass !== pass2) {
    strengthEl.textContent = '❌ Las contraseñas no coinciden';
    strengthEl.className   = 'pass-strength weak';
    return;
  }

  const now      = new Date();
  const fechaReg = now.toLocaleDateString('es-CO', { day:'2-digit', month:'2-digit', year:'numeric' })
                 + ' ' + now.toLocaleTimeString('es-CO', { hour:'2-digit', minute:'2-digit' });

  const templateParams = {
    nombre:    datos.get('nombre')    || '',
    cedula:    datos.get('cedula')    || '',
    telefono:  datos.get('telefono') || '',
    correo:    datos.get('correo')    || '',
    fecha_nac: datos.get('fecha_nac') || '',
    fecha_reg: fechaReg,
  };

  // Guardar en localStorage AHORA (antes de EmailJS, para que siempre quede registrado)
  saveUserData(templateParams.nombre, templateParams.correo);

  // UI: cargando
  btn.disabled    = true;
  btn.textContent = '⏳ Enviando...';
  if (msgEl) msgEl.innerHTML = '';

  try {
    emailjs.init(EJS.publicKey);

    // Enviar los dos correos al mismo tiempo
    await Promise.all([
      // 1️⃣ Aviso a juanfelipe-156@hotmail.com con todos los datos
      emailjs.send(EJS.serviceId, EJS.templateAdmin, templateParams),
      // 2️⃣ Bienvenida al correo del usuario que se registró
      emailjs.send(EJS.serviceId, EJS.templateBienven, templateParams),
    ]);

    const nombreRegistrado = templateParams.nombre;

    closeAuthModal('register');
    setUserSession(nombreRegistrado);
    showNotif(`🎉 ¡Bienvenido a AgendaTur, ${nombreRegistrado.split(' ')[0]}! Revisa tu correo. 🧳`);
    form.reset();

  } catch (err) {
    console.error('EmailJS error:', err);
    if (msgEl) msgEl.innerHTML = `<p style="color:#dc2626;font-size:.85rem;margin-top:6px;">⚠️ No se pudo enviar el correo. Intenta de nuevo.</p>`;
  } finally {
    btn.disabled    = false;
    btn.textContent = 'Crear mi cuenta';
  }
}

/* =============================================
   RESERVA DE VUELOS — modal interno
   ============================================= */

function openFlightBooking(idx) {
  const f = currentFlights[idx];
  if (!f) return;

  const s = activeSearch;
  const originCode = document.getElementById('fr-origin-city').textContent;
  const destCode   = document.getElementById('fr-dest-city').textContent;

  // Rellenar resumen del vuelo
  const summary = document.getElementById('bk-flight-summary');
  const stopsText = f.stops === 0 ? 'Directo' : `${f.stops} escala${f.stops > 1 ? 's' : ''}`;
  summary.innerHTML = `
    <div style="background:#f0f4ff;border:1px solid #c7d2fe;border-radius:10px;padding:14px 18px;margin-bottom:18px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <span style="font-size:1.4rem;">${f.logo}</span>
        <strong style="color:#1e3a8a;font-size:1rem;">${f.airline}</strong>
        <span style="background:#2333c8;color:#fff;font-size:.72rem;padding:2px 9px;border-radius:20px;font-weight:700;">${stopsText}</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;font-size:.92rem;color:#334155;">
        <span><strong>${originCode}</strong> ${f.dep}</span>
        <span style="color:#94a3b8;">──✈──</span>
        <span><strong>${destCode}</strong> ${f.arr}</span>
        <span style="color:#64748b;font-size:.82rem;">${f.duration}</span>
      </div>
      <div style="margin-top:8px;font-size:.88rem;color:#64748b;">
        Fecha: <strong>${document.getElementById('fr-date-badge').textContent}</strong>
        &nbsp;·&nbsp;
        ${document.getElementById('fr-pax-badge').textContent}
      </div>
    </div>`;

  // Pre-rellenar nombre y correo si hay sesión activa
  const savedUser = localStorage.getItem('agt_user');
  if (savedUser) {
    document.getElementById('bk-name').value = savedUser;
  }

  // Guardar referencia al vuelo seleccionado en el formulario
  document.getElementById('form-booking').dataset.flightIdx = idx;

  // Limpiar mensajes anteriores
  document.getElementById('bk-msg').innerHTML = '';
  document.getElementById('bk-btn').disabled    = false;
  document.getElementById('bk-btn').textContent = '📩 Enviar solicitud de reserva';

  document.getElementById('modal-booking').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('modal-booking').classList.remove('open');
  document.body.style.overflow = '';
}

async function submitFlightBooking(e) {
  e.preventDefault();

  const idx  = parseInt(document.getElementById('form-booking').dataset.flightIdx);
  const f    = currentFlights[idx];
  const btn  = document.getElementById('bk-btn');
  const msgEl = document.getElementById('bk-msg');

  const bkName  = document.getElementById('bk-name').value.trim();
  const bkEmail = document.getElementById('bk-email').value.trim();
  const bkPhone = document.getElementById('bk-phone').value.trim();
  const bkNotes = document.getElementById('bk-notes').value.trim();

  const originCode = document.getElementById('fr-origin-city').textContent;
  const destCode   = document.getElementById('fr-dest-city').textContent;
  const stopsText  = f.stops === 0 ? 'Directo' : `${f.stops} escala(s)`;
  const now        = new Date().toLocaleString('es-CO');

  const ruta = `${activeSearch.originName || originCode} (${originCode}) → ${activeSearch.destName || destCode} (${destCode})`;

  const templateParams = {
    nombre:    `[SOLICITUD DE PRECIO] ${bkName}`,
    cedula:    `${ruta} | ${f.airline} | ${stopsText}`,
    telefono:  bkPhone,
    correo:    bkEmail,
    fecha_nac: `Salida: ${f.dep} | Llegada: ${f.arr} | Duración: ${f.duration} | ${document.getElementById('fr-date-badge').textContent}`,
    fecha_reg: `Recibido: ${now}${bkNotes ? ' | Notas: ' + bkNotes : ''}`,
  };

  btn.disabled    = true;
  btn.textContent = '⏳ Enviando...';
  msgEl.innerHTML = '';

  try {
    emailjs.init(EJS.publicKey);
    await emailjs.send(EJS.serviceId, EJS.templateAdmin, templateParams);

    closeBookingModal();
    showNotif(`✅ ¡Solicitud enviada, ${bkName.split(' ')[0]}! Un asesor te enviará el precio pronto. 🧳`);
    document.getElementById('form-booking').reset();

  } catch (err) {
    console.error('EmailJS booking error:', err);
    msgEl.innerHTML = `<p style="color:#dc2626;font-size:.85rem;margin-top:6px;">⚠️ No se pudo enviar. Intenta de nuevo o contáctanos por WhatsApp.</p>`;
  } finally {
    btn.disabled    = false;
    btn.textContent = '📩 Enviar solicitud de reserva';
  }
}
