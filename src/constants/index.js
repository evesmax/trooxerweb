import hero from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import kitchenImage from "../assets/kitchen.jpg";
import bathroomImage from "../assets/bathroom.jpg";
import livingRoomImage from "../assets/living-room.avif";

import portfolio1 from "../assets/portafolio1.png";
import portfolio2 from "../assets/portafolio2.png";
import portfolio3 from "../assets/portafolio3.png";
import portfolio4 from "../assets/portafolio4.png";

import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";

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

export const SERVICES_CONTENT = [/*
  {
    title: "Publicación y asignación de Carga.",
    description:
      "",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Precio",
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
  },*/
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Gratis",
    description:
      "$200 pesos por operador por mes.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Standard",
    description:
      "$160 pesos por operador por mes.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "PRO",
    description:
      "$140 pesos por operador por mes.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Enterprice",
    description:
      "$140 pesos por operador por mes.",
    image: portfolio4,
    link: "#",
  },
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
    },
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
