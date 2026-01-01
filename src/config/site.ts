/**
 * Site configuration
 * Centralized configuration for the entire application
 */

export const siteConfig = {
  name: "Eliseo Page",
  description: "Un sitio web moderno construido con Next.js, TypeScript y Tailwind CSS",
  url: "https://eliseo.page",
  ogImage: "https://eliseo.page/og.jpg",
  links: {
    twitter: "https://twitter.com/eliseo",
    github: "https://github.com/eliseo",
  },
};

export type SiteConfig = typeof siteConfig;
