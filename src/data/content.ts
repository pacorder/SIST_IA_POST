import { LatAmCountry, StepItem } from '../types';

export const LATAM_COUNTRIES: LatAmCountry[] = [
  { code: 'MX', name: 'México', currency: 'MXN', approxExchange: 17.5, flag: '🇲🇽' },
  { code: 'CO', name: 'Colombia', currency: 'COP', approxExchange: 4100, flag: '🇨🇴' },
  { code: 'CL', name: 'Chile', currency: 'CLP', approxExchange: 950, flag: '🇨🇱' },
  { code: 'AR', name: 'Argentina', currency: 'ARS', approxExchange: 980, flag: '🇦🇷' },
  { code: 'PE', name: 'Perú', currency: 'PEN', approxExchange: 3.75, flag: '🇵🇪' },
  { code: 'EC', name: 'Ecuador', currency: 'USD', approxExchange: 1, flag: '🇪🇨' },
  { code: 'UY', name: 'Uruguay', currency: 'UYU', approxExchange: 40, flag: '🇺🇾' },
  { code: 'CR', name: 'Costa Rica', currency: 'CRC', approxExchange: 520, flag: '🇨🇷' },
  { code: 'PA', name: 'Panamá', currency: 'USD', approxExchange: 1, flag: '🇵🇦' },
  { code: 'OTHER', name: 'Otro país de Latinoamérica', currency: 'USD', approxExchange: 1, flag: '🌎' },
];

export const WORKFLOW_STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Analiza la oportunidad',
    description: 'Entrega a ChatGPT la oferta de trabajo y tu CV.',
    detail: 'Identifica requisitos reales, prioridades implícitas, keywords críticas, competencias clave y lo que verdaderamente busca el empleador más allá del texto de la vacante.',
    iconName: 'Search',
  },
  {
    number: 2,
    title: 'Descubre tu fit',
    description: 'Compara tu experiencia contra las exigencias del cargo.',
    detail: 'Mapea con precisión tus fortalezas, detecta tu experiencia transferible y anticipa los gaps que deberás defender con solvencia en las entrevistas.',
    iconName: 'Scale',
  },
  {
    number: 3,
    title: 'Define tu posicionamiento',
    description: 'Decide qué parte de tu trayectoria debes poner en primer plano.',
    detail: 'Articula un ángulo profesional a la medida: cómo narrar tu trayectoria para que tus 10 o 15 años de carrera resuenen directamente con las prioridades de esta empresa.',
    iconName: 'Compass',
  },
  {
    number: 4,
    title: 'Adapta tu postulación',
    description: 'Alinea tu CV y cover letter con criterio estratégico.',
    detail: 'Utiliza el análisis previo para adaptar tus documentos sin recurrir a clichés sintéticos, sin sonar genérico y sin inventar jamás experiencia que no tienes.',
    iconName: 'FileText',
  },
  {
    number: 5,
    title: 'Prepárate para la entrevista',
    description: 'Genera el banco exacto de preguntas probables.',
    detail: 'Simula el interrogatorio cruzando: VACANTE × TU CV × TUS GAPS. Construye un banco de historias con metodología STAR basadas en hitos reales de tu carrera.',
    highlight: 'Fórmula: Vacante × Tu CV × Tus Gaps',
    iconName: 'BrainCircuit',
  },
  {
    number: 6,
    title: 'Practica hablando con ChatGPT Voice',
    description: 'Entrenamiento verbal interactivo en español o inglés.',
    detail: 'Usa la función de voz en tiempo real de ChatGPT. Responde a viva voz, enfrenta contrapreguntas no guionadas y desarróllate en situaciones de presión idénticas a la entrevista real.',
    highlight: 'Práctica de voz en tiempo real (ES / EN)',
    iconName: 'Mic',
  },
  {
    number: 7,
    title: 'Recibe feedback y vuelve a practicar',
    description: 'Ciclo continuo de perfeccionamiento.',
    detail: 'Analiza la precisión, estructura y concisión de tus respuestas. Corrige muletillas y debilidades argumentativas, y repite hasta dominar cada respuesta clave.',
    highlight: 'PRACTICA → FEEDBACK → MEJORA → PRACTICA',
    iconName: 'RotateCw',
  },
];

export const THE_PROBLEM_QUESTIONS = [
  '¿Realmente encajas con la vacante o vas a perder tu tiempo?',
  '¿Qué está buscando la empresa más allá de la descripción formal del cargo?',
  '¿Qué parte de tus 10 o 15 años de experiencia deberías destacar?',
  '¿Cómo explicar y defender experiencia transferible de otra industria?',
  '¿Qué gaps o ausencias de requisitos te van a cuestionar?',
  '¿Qué preguntas difíciles aparecerán inevitablemente en la entrevista?',
  '¿Qué historias estructuradas STAR deberías tener listas para contar?',
  '¿Cómo saber objetivamente si tus respuestas son persuasivas o mediocres?',
];

export const WHAT_YOU_RECEIVE_ITEMS = [
  { text: 'Sistema completo para analizar ofertas de trabajo y descifrar prioridades ocultas', tag: 'Análisis' },
  { text: 'Metodología para evaluar tu fit real y detectar qué te falta antes de postular', tag: 'Diagnóstico' },
  { text: 'Mapeo estructurado para identificar y blindar tus gaps profesionales', tag: 'Estrategia' },
  { text: 'Guía de posicionamiento para destacar lo mejor de tu trayectoria senior', tag: 'Estrategia' },
  { text: 'Framework de adaptación de CV sin sonar genérico ni usar textos artificiales', tag: 'Documentación' },
  { text: 'Generador de preguntas probables personalizadas: Vacante × CV × Gaps', tag: 'Entrevistas' },
  { text: 'Matriz para construir y estructurar tu banco de historias STAR reales', tag: 'Historias' },
  { text: 'Protocolo de mock interview en vivo utilizando ChatGPT Voice (audio real)', tag: 'Simulación' },
  { text: 'Sistema de feedback estructurado para calibrar tus respuestas verbales', tag: 'Mejora' },
  { text: 'Guía de entrenamiento bilingüe para entrevistas en español e inglés', tag: 'Bilingüe' },
  { text: 'Guía para preparar preguntas estratégicas de follow-up y negociación de oferta', tag: 'Cierre' },
];

export const FOR_WHOM_ITEMS = [
  'Profesionales con más de 5 a 15 años de experiencia en búsqueda activa o pasiva.',
  'Llevas varios años sin participar en procesos de selección y el mercado ha cambiado.',
  'Quieres cambiar de empresa, saltar de industria o asumir un rol con mayor responsabilidad.',
  'Necesitas comunicar de forma convincente tu experiencia transferible entre sectores.',
  'Buscas prepararte con un método riguroso y sistemático para tus entrevistas clave.',
  'Quieres practicar entrevistas en inglés con fluidez y naturalidad antes del llamado real.',
  'Ya usas ChatGPT a diario, pero notas que en tu postulación solo obtienes respuestas genéricas.',
];

export const NOT_ITEMS = [
  {
    title: 'No es un generador automático de CV',
    desc: 'No reemplaza tu criterio ni produce documentos plásticos que los reclutadores descartan en 5 segundos.',
  },
  {
    title: 'No es un pack de 50 prompts sin contexto',
    desc: 'Los prompts sueltos no funcionan. Este es un workflow ordenado donde cada paso alimenta con rigor al siguiente.',
  },
  {
    title: 'No promete conseguirte trabajo por arte de magia',
    desc: 'Ninguna herramienta seria garantiza contratos. Te entrega un sistema para presentar tu experiencia real con máxima solidez.',
  },
];

export const CASE_STUDY = {
  title: 'De "no tengo experiencia directa" a una candidatura defendible',
  context:
    'Ejemplo real de un profesional senior proveniente del sector de energías renovables que postula a un cargo de Project Manager en una industria de tecnología y logística.',
  before: {
    tag: 'ANTES (El bloqueo común)',
    quote: '“No tengo experiencia directa en este sector... probablemente no me consideren frente a candidatos del rubro.”',
    result: 'Sensación de desventaja, CV genérico y vacilación ante preguntas sobre requisitos de la industria.',
  },
  aiAnalysis: {
    tag: 'ANÁLISIS DEL SISTEMA IA',
    formula: 'Experiencia real → Requisitos del cargo → Gaps → Capacidades transferibles',
    competencies: [
      'Project Management de gran escala',
      'Scope, cost & schedule control',
      'Risk management y planes de contingencia',
      'Procurement y negociación de contratos',
      'Gestión de contratistas y proveedores',
      'Liderazgo de equipos multidisciplinarios',
      'Stakeholder management a nivel ejecutivo',
      'Gestión de proyectos con estándares internacionales',
    ],
  },
  after: {
    tag: 'DESPUÉS (Posicionamiento ganador)',
    quote: '“Una propuesta profesional sólida basada en capacidades de gestión probadas que el candidato realmente posee y sabe defender.”',
    result: 'Narrativa impecable, historias STAR que demuestran resolución de problemas complejos y confianza total en la entrevista.',
  },
  coreTakeaway: 'La IA no inventa un candidato mejor. Ayuda a comunicar mejor la experiencia que realmente tienes.',
};
