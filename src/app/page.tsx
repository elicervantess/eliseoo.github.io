"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-provider";
import { useTranslations } from "@/lib/i18n";
import { ConfigMenu } from "@/components/config-menu";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen">
      <header className="px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <nav className="flex items-center gap-16">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-fg-stronger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-link focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {t.hero.title}
            </a>
            <div className="flex items-center gap-14 text-lg">
              <a
                href="#projects"
                className="text-fg transition-colors hover:text-fg-stronger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-link focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                className="text-fg transition-colors hover:text-fg-stronger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-link focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>

          <ConfigMenu />
        </div>
      </header>

      <main className="px-6 pb-24 pt-10">
        <section className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-bg-dark/80 p-10 shadow-soft ring-1 ring-bg-light">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <div className="overflow-hidden rounded-2xl bg-bg-light ring-1 ring-bg-light">
                  <Image
                    src="/assets/me.jpg"
                    alt="Foto de perfil"
                    width={150}
                    height={150}
                    priority
                    className="h-[150px] w-[150px] object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <h1 className="text-5xl leading-none tracking-tight">{t.hero.title}</h1>

                <p className="mt-5 text-base text-fg-muted">{t.hero.subtitle}</p>

                <p className="mt-3 text-sm text-fg-muted">{t.hero.tags}</p>

                <p className="mt-9 max-w-2xl text-base leading-7">{t.hero.description}</p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-bg-light px-6 text-sm text-fg transition-colors hover:bg-bg-light/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-link focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    {t.hero.viewProjects}
                  </a>
                  <a
                    href="https://github.com/elicervantess"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-bg-light px-6 text-sm text-fg transition-colors hover:bg-bg-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg-link focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    {t.hero.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl">
          <div className="prose text-[18px] text-fg">
            <p>
              {t.about.intro.split("Eliseo")[0]}
              <span className="text-fg-stronger">Eliseo</span>
              {t.about.intro.split("Eliseo")[1]}
            </p>
            <p>{t.about.skills}</p>
            <p>{t.about.experience}</p>
          </div>
        </section>

        <section id="projects" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
          <h2 className="text-2xl text-fg-stronger">{t.sections.projects}</h2>
        </section>

        <section id="contact" className="mx-auto mt-24 max-w-4xl scroll-mt-24">
          <h2 className="text-2xl text-fg-stronger">{t.sections.contact}</h2>
        </section>
      </main>
    </div>
  );
}
