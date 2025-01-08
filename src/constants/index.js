import hero from "../assets/hero.png";

import plataforma1 from "../assets/plataforma1.png";
import plataforma2 from "../assets/plataforma2.png";
import plataforma3 from "../assets/plataforma3.png";

import portfolio1 from "../assets/portafolio1.png";
import portfolio2 from "../assets/portafolio2.png";
import portfolio3 from "../assets/portafolio3.png";
import portfolio4 from "../assets/portafolio4.png";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";

export const LINKS = [
  {
    name: "Plataforma",
    link: "#services",
  },
  {
    name: "Nosotros",
    link: "#about",
  },
  {
    name: "Paquetes",
    link: "#portfolio",
  },
  {
    name: "Contacto",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "",
  image: hero,
  subtitle: "Solicita una demostración y descubre cómo podemos ayudarte a optimizar tus operaciones de transporte.",
  buttonText: "Solicitar Demostración",
};

export const SERVICES_CONTENT = [
  {
    title: "",
    description: "",
    image: plataforma1,
    alt: "plataforma 1",
    list: [
      "Aplicación Web: Gestiona tus operaciones desde cualquier dispositivo, en cualquier momento.",
      "Optimizar tus operaciones de transporte desde el primer día.",
      "Obtener resultados inmediatos y un retorno de inversión tangible.",
    ],
  },
  {
    title: "Olvídate de las complicaciones y da el salto a la eficiencia con Trooxer.",
    description:"Nuestra plataforma tecnológica, resultado de la unión de la experiencia de más de 40 años en el sector logístico y la innovación de herramientas líderes a nivel mundial, te permite:",
    image: plataforma2,
    alt: "Bathroom Renovation",
    list: [
      "Integrar fácilmente Trooxer con tus sistemas actuales.",
      "Optimizar tus operaciones de transporte desde el primer día.",
      "Obtener resultados inmediatos y un retorno de inversión tangible.",
    ],
  },
  {
    title: "Suscríbete mensualmente y comienza a experimentar los beneficios de Trooxer hoy mismo.",
    description:"",
    image: plataforma3,
    alt: "Living Room Renovation",
    list: [
      "Reducción de costos operativos",
      "Mayor control y visibilidad de las rutas",
      "Mejora en la satisfacción del cliente",
      "Optimización de la planificación de rutas",
      "Aumento de la productividad",
    ],
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Gratis",
    description:
      "$200",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Standard",
    description:
      "$160",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "PRO",
    description:
      "$140",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Enterprice",
    description:
      "$140",
    image: portfolio4,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Escucha lo que nuestros clientes tienen que decir sobre nosotros.",
  reviews: [
    {
      name: "José Luis Vargas",
      title: "Presidente y Fundador de Intermerk, y actual Director del Programa de Relaciones con socios (México) de la Cusmex.",
      review:
        "Utilizar Trooxer en mis unidades de transporte marcó una diferencia muy importante. La plataforma ayudó a mi empresa a mejorar la comunicación con los operadores, optimizando la eficiencia de las entregas y generando beneficios cuantitativos en términos de cobranza.",
      image: user1,
    },/*
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
    },*/
  ],
};

export const CONTACT_INFO = {
  text: "¿Más preguntas? Contactanos por cualquiera de las siguientes opciones.",
  phone: {
    label: "Telefono",
    value: "(33)1940-8310",
  },
  email: {
    label: "Email",
    value: "contacto@trooxer.com",
  },
  address: {
    label: "Zapopan, Jalisco, México",
    value: "",
  },
};
