const productos = [
  // Laptops (400x400)
  {
    id: 1,
    title: "Laptop Gamer Xtreme",
    category: "Laptops",
    price: 1899.99,
    img: "https://placehold.co/400x400/FF5733/FFFFFF?text=Laptop+Gamer",
    stock: 15,
    description: "Potente laptop para juegos con procesador i7 de última generación y tarjeta gráfica RTX 4070."
  },
  {
    id: 2,
    title: "Laptop Ultra Slim Pro",
    category: "Laptops",
    price: 1250.00,
    img: "https://placehold.co/400x400/33FF57/000000?text=Laptop+Slim",
    stock: 25,
    description: "Diseño elegante y ligero, ideal para profesionales y trabajo en movimiento. Pantalla 4K."
  },
  {
    id: 3,
    title: "Laptop Básico Home",
    category: "Laptops",
    price: 599.99,
    img: "https://placehold.co/400x400/3357FF/FFFFFF?text=Laptop+Basica",
    stock: 40,
    description: "Rendimiento confiable para tareas diarias, navegación y estudio."
  },
  // PCs de Escritorio
  {
    id: 4,
    title: "PC Gaming Elite",
    category: "PC Escritorio",
    price: 2499.00,
    img: "https://placehold.co/400x400/FF33A1/FFFFFF?text=PC+Gaming",
    stock: 10,
    description: "Máximo rendimiento para juegos AAA y streaming. Refrigeración líquida."
  },
  {
    id: 5,
    title: "PC Mini Torre Office",
    category: "PC Escritorio",
    price: 750.50,
    img: "https://placehold.co/400x400/33FFF6/000000?text=PC+Office",
    stock: 30,
    description: "Compacta y eficiente, perfecta para entornos de oficina y productividad."
  },
  {
    id: 6,
    title: "PC Workstation Pro",
    category: "PC Escritorio",
    price: 3100.00,
    img: "https://placehold.co/400x400/FFB833/000000?text=PC+Workstation",
    stock: 7,
    description: "Diseñada para edición de video, modelado 3D y desarrollo de software pesado."
  },
  // Monitores
  {
    id: 7,
    title: "Monitor Curvo 32\" 144Hz",
    category: "Monitores",
    price: 350.99,
    img: "https://placehold.co/400x400/9933FF/FFFFFF?text=Monitor+Curvo",
    stock: 50,
    description: "Inmersión total para juegos con alta tasa de refresco y baja latencia."
  },
  {
    id: 8,
    title: "Monitor Profesional 27\" 4K",
    category: "Monitores",
    price: 480.00,
    img: "https://placehold.co/400x400/33FF99/000000?text=Monitor+4K",
    stock: 20,
    description: "Colores precisos y resolución ultra HD, ideal para diseñadores gráficos y fotógrafos."
  },
  {
    id: 9,
    title: "Monitor Básico LED 24\"",
    category: "Monitores",
    price: 150.99,
    img: "https://placehold.co/400x400/FF3333/FFFFFF?text=Monitor+24",
    stock: 60,
    description: "Económico y funcional para el uso diario y tareas básicas."
  },
  // Periféricos
  {
    id: 10,
    title: "Teclado Mecánico RGB",
    category: "Periféricos",
    price: 85.00,
    img: "https://placehold.co/400x400/337DFF/FFFFFF?text=Teclado+Mec",
    stock: 75,
    description: "Switches táctiles, iluminación personalizable y reposamuñecas ergonómico."
  },
  {
    id: 11,
    title: "Ratón Gaming Inalámbrico",
    category: "Periféricos",
    price: 60.00,
    img: "https://placehold.co/400x400/F0FF33/000000?text=Mouse+Gaming",
    stock: 90,
    description: "Sensor de alta precisión (25000 DPI) y peso ajustable para eSports."
  },
  {
    id: 12,
    title: "Combo Teclado y Ratón Oficina",
    category: "Periféricos",
    price: 35.50,
    img: "https://placehold.co/400x400/E333FF/FFFFFF?text=Combo+Office",
    stock: 120,
    description: "Set silencioso y duradero, conexión USB plug-and-play."
  },
  // Componentes Internos
  {
    id: 13,
    title: "Disco SSD NVMe 1TB",
    category: "Componentes",
    price: 99.99,
    img: "https://placehold.co/400x400/33FFD1/000000?text=SSD+NVMe+1TB",
    stock: 150,
    description: "Velocidades de lectura/escritura ultrarrápidas para máxima eficiencia."
  },
  {
    id: 14,
    title: "Memoria RAM DDR5 32GB (2x16GB)",
    category: "Componentes",
    price: 145.00,
    img: "https://placehold.co/400x400/FF8833/FFFFFF?text=RAM+DDR5+32GB",
    stock: 80,
    description: "Aumenta el rendimiento y la multitarea de tu sistema."
  },
  {
    id: 15,
    title: "Tarjeta Gráfica RTX 4080",
    category: "Componentes",
    price: 1299.00,
    img: "https://placehold.co/400x400/FF3333/FFFFFF?text=RTX+4080",
    stock: 12,
    description: "El máximo poder gráfico para rendering y juegos en 4K y Ray Tracing."
  },
  {
    id: 16,
    title: "Fuente de Poder 850W Certificada",
    category: "Componentes",
    price: 110.00,
    img: "https://placehold.co/400x400/3391FF/FFFFFF?text=Fuente+850W",
    stock: 45,
    description: "Fuente de alimentación modular con certificación 80+ Gold."
  },
  // Accesorios
  {
    id: 17,
    title: "Webcam Full HD 1080p",
    category: "Accesorios",
    price: 45.00,
    img: "https://placehold.co/400x400/A1FF33/000000?text=Webcam+1080p",
    stock: 100,
    description: "Claridad de imagen y micrófono incorporado, perfecta para videollamadas."
  },
  {
    id: 18,
    title: "Auriculares Gaming 7.1",
    category: "Accesorios",
    price: 79.99,
    img: "https://placehold.co/400x400/FF33F6/FFFFFF?text=Audifonos+7.1",
    stock: 85,
    description: "Sonido envolvente 7.1, micrófono con cancelación de ruido y gran comodidad."
  },
  {
    id: 19,
    title: "Hub USB-C Multipuerto",
    category: "Accesorios",
    price: 30.00,
    img: "https://placehold.co/400x400/33FF57/000000?text=Hub+USB+C",
    stock: 110,
    description: "Expande la conectividad de tu laptop con puertos HDMI, USB 3.0 y lector SD."
  },
  {
    id: 20,
    title: "Mochila para Laptop 15.6\"",
    category: "Accesorios",
    price: 55.00,
    img: "https://placehold.co/400x400/5733FF/FFFFFF?text=Mochila+Laptop",
    stock: 65,
    description: "Diseño antirrobo, resistente al agua y compartimentos acolchados."
  }
];
export default productos;