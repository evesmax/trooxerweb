import hero from "../assets/hero.jpg";
import kitchenImage from "../assets/kitchen.jpg";
import bathroomImage from "../assets/bathroom.jpg";
import livingRoomImage from "../assets/living-room.avif";

import portfolio1 from "../assets/portafolio1.webp";
import portfolio2 from "../assets/portafolio2.png";
import portfolio3 from "../assets/portafolio3.png";
import portfolio4 from "../assets/portfolio4.webp";
import portfolio5 from "../assets/portfolio5.webp";
import portfolio6 from "../assets/portfolio6.webp";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import user6 from "../assets/user6.webp";

export const LINKS = [
  {
    name: "Servicio",
    link: "#services",
  },
  {
    name: "Nosotros",
    link: "#about",
  },
  {
    name: "Reseñas",
    link: "#reviews",
  },
  {
    name: "Contacto",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "TROOXER",
  subtitle: "TRANSPORTE DE CARGA AL MOMENTO",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Publicación y asignación de Carga.",
    description:
      "- Alta de Viajes desde el portal de asignaciones. - Aplicación Android, iOS y web para que los transportistas oferten su servicio. - Asignación manual y automática de viajes a transportistas. - Asignación de viajes en modo subasta con tarifas variables",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Tablero de Control de Viajes",
    description:
      "- Indicadores generales de los estatus en tiempo real de la carga. - Monitoreo del avance de cada fase de cada uno de los viajes entránsito. (Conexión con GPS de Transportistas que tengan acceso weba rastrep). - Aplicación de transportista para subir evidencias en fotografías. - Tablero de Control de Viajes. - Personalización de políticas de asignación. - Personalización de modo subasta - Integración con GPS de Transportistas",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Seguridad",
    description:
      "- Botón de pánico desde las aplicaciones para informar en Vempo real cualquier incidente. - Comunicación directa con los operadores desde la mensajería",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Mes 1",
    description:
      "Personalización.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Mes 2",
    description:
      "Inicio pruebas piloto.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Mes 3",
    description:
      "Puesta en marcha.",
    image: portfolio3,
    link: "#",
  },/*
  {
    id: 4,
    name: "Elegant Living Room Update",
    description:
      "Updated a living room with new flooring, stylish lighting, and custom-built shelving units.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Basement Conversion",
    description:
      "Converted an unused basement into a modern, multi-functional space including a home theater, gym, and guest bedroom.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Home Office Transformation",
    description:
      "Created a sleek and functional home office, optimizing space with ergonomic furniture, ample storage, and modern decor.",
    image: portfolio6,
    link: "#",
  },*/
];

export const REVIEWS = {
  text: "Escucha lo que nuestros clientes tienen que decir sobre nosotros.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Homeowner",
      review:
        "VastuSpaze transformed our outdated kitchen into a modern masterpiece. The team was professional, attentive to our needs, and delivered beyond our expectations. We couldn't be happier with the results!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Homeowner",
      review:
        "Our bathroom renovation was seamless, thanks to VastuSpaze. They took care of everything from design to execution, and the attention to detail was impeccable. Highly recommended!",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Homeowner",
      review:
        "VastuSpaze helped us create the perfect outdoor living space. Their creativity and craftsmanship turned our backyard into a beautiful oasis. It's now our favorite place to relax and entertain guests.",
      image: user3,
    },/*
    {
      name: "David Lee",
      title: "Homeowner",
      review:
        "The living room update exceeded our expectations. VastuSpaze's team was skilled and communicative, ensuring a smooth renovation process. The new design has brought a fresh, modern look to our home.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Homeowner",
      review:
        "From start to finish, VastuSpaze was a pleasure to work with. They listened to our vision and brought it to life with expert craftsmanship. Our home office is now a stylish and functional space.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Homeowner",
      review:
        "VastuSpaze did an amazing job on our basement conversion. They created a cozy, multi-functional space that our family loves. The team was professional and delivered on time and within budget.",
      image: user6,
    },*/
  ],
};

export const CONTACT_INFO = {
  text: "¿Más preguntas? Contactanos por cualquiera de las siguientes opciones.",
  phone: {
    label: "Telefono",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@trooxer.com",
  },
  address: {
    label: "Direccion",
    value: "1234 Renovation Ave, Suite 100, Zapopan, ST 56789",
  },
};
