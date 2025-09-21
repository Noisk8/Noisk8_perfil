export interface ShowcaseItem {
  title: string;
  url: string;
  summary: string;
  stack?: string[];
}

export const frontendShowcase: ShowcaseItem[] = [
  {
    title: 'El Rincón de la Privacidad',
    url: 'https://el-rincon-de-la-privacidad.vercel.app/',
    summary: 'Portal educativo sobre herramientas de privacidad digital con recursos descargables y testimonios.',
    stack: ['Next.js', 'Tailwind', 'i18n'],
  },
  {
    title: 'Doc App',
    url: 'https://doc-app.noisk8.xyz/',
    summary: 'Aplicación interna para documentar procesos creativos y compartir tutoriales en comunidades híbridas.',
    stack: ['Astro', 'Markdown'],
  },
  {
    title: 'Power to Commons',
    url: 'https://platohedro.github.io/powertocommons/',
    summary: 'Experiencia narrativa que conecta prácticas de código abierto con relatos comunitarios.',
    stack: ['Vue', 'Storytelling'],
  },
  {
    title: 'Curating Common Wellbeing',
    url: 'https://curatingcommonwellbeing.platohedro.org/',
    summary: 'Micrositio para la residencia Curating Common Wellbeing con agenda, documentación y streaming integrado.',
    stack: ['HTML', 'CSS', 'Netlify'],
  },
  {
    title: 'Hablar a Plantas',
    url: 'https://residencias.platohedro.org/hablaraplantas/index.html',
    summary: 'Landing liviana para residencia artística con galería multimedia y call to action para participar.',
    stack: ['Vanilla JS', 'Responsive design'],
  },
  {
    title: 'Infografía de datos',
    url: 'https://charts-impacto.vercel.app/',
    summary: 'Dashboard interactivo con visualizaciones de datos comunitarios y métricas de impacto.',
    stack: ['React', 'ApexCharts'],
  },
  {
    title: 'Rincón del Café',
    url: 'https://rincondelcafe.noisk8.xyz/',
    summary: 'Prototipo de ecommerce artesanal con catálogo dinámico y pedidos por WhatsApp.',
    stack: ['Next.js', 'Design system'],
  },
  {
    title: 'Carpediem Santa Elena',
    url: 'https://carpediem-santa-elena.vercel.app/',
    summary: 'Sitio promocional para experiencias eco-turísticas con formularios y mapas integrados.',
    stack: ['Astro', 'Leaflet'],
  },
  {
    title: 'Galería con Lámpara',
    url: 'https://galeria-lampara.vercel.app/',
    summary: 'Galería de arte digital con layout flexible y experimentación visual con tipografías variables.',
    stack: ['Svelte', 'CSS Grid'],
  },
  {
    title: 'Taller AI Vartex',
    url: 'https://a-image-lab-vartex.vercel.app/',
    summary: 'Landing para taller creativo con inteligencia artificial, agenda y recursos descargables.',
    stack: ['Next.js', 'Serverless forms'],
  },
  {
    title: 'Nodos NYM',
    url: 'http://monitor.noisk8.xyz/',
    summary: 'Panel de monitoreo para nodos NYM con métricas en tiempo real y alertas visuales.',
    stack: ['Vue', 'Realtime'],
  },
  {
    title: 'Formulario con base de datos',
    url: 'https://nym-api.vercel.app/',
    summary: 'Formulario con persistencia en API serverless para incubar comunidades tecnológicas.',
    stack: ['Next.js', 'Prisma'],
  },
  {
    title: 'Daoariwas',
    url: 'https://daoariwas.xyz',
    summary: 'Portal para comunidad DAOariwas con onboarding guiado y repositorio documental.',
    stack: ['Next.js', 'Web3'],
  },
  {
    title: 'Wal2Wal',
    url: 'https://www.wal2wal.io/',
    summary: 'Landing corporativa enfocada en productos DeFi con copy estratégico y animaciones sutiles.',
    stack: ['React', 'Motion'],
  },
  {
    title: 'Sindicato Mujeres Perú',
    url: 'https://www.wal2wal.io/',
    summary: 'Interfaz de campaña para sindicato de trabajadoras con narrativa visual y componentes reutilizables.',
    stack: ['React', 'Design ops'],
  },
  {
    title: 'Campaña Navidad',
    url: 'https://regalos-navidad.vercel.app/',
    summary: 'Landing con contador en tiempo real e integración de formularios para donaciones.',
    stack: ['Astro', 'Animations'],
  },
  {
    title: 'Renardo en Español',
    url: 'https://www.renardo.org/es',
    summary: 'Localización al español del proyecto Renardo con documentación y tutoriales de instalación.',
    stack: ['Markdown', 'Localization'],
  },
];

export const creativeShowcase: ShowcaseItem[] = [
  {
    title: 'FoxDot + Processing',
    url: 'https://platohedro.github.io/powertocommons/',
    summary: 'Livecoding audiovisual que combina FoxDot con Processing para narrativas comunitarias.',
    stack: ['FoxDot', 'Processing'],
  },
  {
    title: 'GeniaLab Cinemateca Bogotá',
    url: 'https://curatingcommonwellbeing.platohedro.org/',
    summary: 'Residencia colaborativa con visuales generativos y documentación interactiva.',
    stack: ['Hydra', 'Creative writing'],
  },
  {
    title: 'El sueño de una pensión',
    url: 'https://residencias.platohedro.org/hablaraplantas/index.html',
    summary: 'Instalación inmersiva con videoarte y composición algorítmica en vivo.',
    stack: ['Video mapping', 'FoxDot'],
  },
  {
    title: 'Animaciones con Deforum',
    url: 'https://charts-impacto.vercel.app/',
    summary: 'Serie de visuales generadas con Deforum AI para performance audiovisual.',
    stack: ['Deforum', 'Stable Diffusion'],
  },
  {
    title: 'Script Din Is Noise',
    url: 'https://carpediem-santa-elena.vercel.app/',
    summary: 'Automatización para preparar entornos Din Is Noise en laboratorios itinerantes.',
    stack: ['Shell scripting', 'Automation'],
  },
  {
    title: 'Script FoxDot/Renardo',
    url: 'https://galeria-lampara.vercel.app/',
    summary: 'Instaladores rápidos para set-ups de livecoding en workshops y conciertos.',
    stack: ['Python', 'Livecoding'],
  },
];
