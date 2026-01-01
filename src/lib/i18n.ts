import type { Language } from "@/contexts/language-provider";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      contact: "Contact",
      config: "Config",
    },
    hero: {
      title: "Eliseo",
      subtitle: "Computer Science student at UTEC (Peru)",
      tags: "· Backend · Machine Learning · Systems",
      description: "Building reliable software with a focus on backend architectures and applied ML.",
      viewProjects: "View Projects",
      github: "GitHub",
    },
    about: {
      intro:
        "I'm Jireh Eliseo Cervantes Ordóñez, though most people call me Eliseo. I'm a 21-year-old Computer Science student at UTEC (Peru) with a strong interest in building practical, well-designed software systems.",
      skills:
        "My main strengths are Machine Learning, full-stack software development, and cloud computing. I enjoy working across the stack, from designing data-driven models to implementing scalable backend services and clean, usable frontends.",
      experience:
        "Over time, I've worked on projects involving web applications, APIs, data analysis, and deployment workflows. I'm particularly interested in applying machine learning to real problems and in understanding how systems behave in production environments.",
    },
    sections: {
      projects: "Projects",
      contact: "Contact",
    },
    config: {
      theme: "Theme",
      themeLight: "Light",
      themeDark: "Dark",
      themeSystem: "System",
      language: "Language",
      languageEnglish: "English",
      languageSpanish: "Spanish",
      languagePortuguese: "Portuguese",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      contact: "Contacto",
      config: "Config",
    },
    hero: {
      title: "Eliseo",
      subtitle: "Estudiante de Ciencias de la Computación en UTEC (Perú)",
      tags: "· Backend · Machine Learning · Sistemas",
      description:
        "Construyendo software confiable con enfoque en arquitecturas backend y ML aplicado.",
      viewProjects: "Ver Proyectos",
      github: "GitHub",
    },
    about: {
      intro:
        "Soy Jireh Eliseo Cervantes Ordóñez, aunque la mayoría me llama Eliseo. Soy un estudiante de Ciencias de la Computación de 21 años en UTEC (Perú) con un gran interés en construir sistemas de software prácticos y bien diseñados.",
      skills:
        "Mis principales fortalezas son Machine Learning, desarrollo full-stack y computación en la nube. Disfruto trabajar en todo el stack, desde diseñar modelos basados en datos hasta implementar servicios backend escalables y frontends limpios y usables.",
      experience:
        "Con el tiempo, he trabajado en proyectos que involucran aplicaciones web, APIs, análisis de datos y flujos de despliegue. Estoy particularmente interesado en aplicar machine learning a problemas reales y en entender cómo se comportan los sistemas en entornos de producción.",
    },
    sections: {
      projects: "Proyectos",
      contact: "Contacto",
    },
    config: {
      theme: "Tema",
      themeLight: "Claro",
      themeDark: "Oscuro",
      themeSystem: "Sistema",
      language: "Idioma",
      languageEnglish: "Inglés",
      languageSpanish: "Español",
      languagePortuguese: "Portugués",
    },
  },
  pt: {
    nav: {
      projects: "Projetos",
      contact: "Contato",
      config: "Config",
    },
    hero: {
      title: "Eliseo",
      subtitle: "Estudante de Ciência da Computação na UTEC (Peru)",
      tags: "· Backend · Machine Learning · Sistemas",
      description:
        "Construindo software confiável com foco em arquiteturas backend e ML aplicado.",
      viewProjects: "Ver Projetos",
      github: "GitHub",
    },
    about: {
      intro:
        "Eu sou Jireh Eliseo Cervantes Ordóñez, embora a maioria das pessoas me chame de Eliseo. Sou um estudante de Ciência da Computação de 21 anos na UTEC (Peru) com um forte interesse em construir sistemas de software práticos e bem projetados.",
      skills:
        "Minhas principais forças são Machine Learning, desenvolvimento full-stack e computação em nuvem. Gosto de trabalhar em toda a pilha, desde projetar modelos baseados em dados até implementar serviços backend escaláveis e frontends limpos e usáveis.",
      experience:
        "Ao longo do tempo, trabalhei em projetos envolvendo aplicações web, APIs, análise de dados e fluxos de implantação. Estou particularmente interessado em aplicar machine learning a problemas reais e em entender como os sistemas se comportam em ambientes de produção.",
    },
    sections: {
      projects: "Projetos",
      contact: "Contato",
    },
    config: {
      theme: "Tema",
      themeLight: "Claro",
      themeDark: "Escuro",
      themeSystem: "Sistema",
      language: "Idioma",
      languageEnglish: "Inglês",
      languageSpanish: "Espanhol",
      languagePortuguese: "Português",
    },
  },
} as const;

export function useTranslations(language: Language) {
  return translations[language];
}
