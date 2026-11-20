// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      description:
        "Documentation for the project: e.g. architecture, workflow, and the do’s and don’ts for new contributors.",
      lastUpdated: true,
      logo: {
        light: "./src/assets/logo.webp",
        dark: "./src/assets/logo-dark.webp",
        alt: "Project logo",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/YOUR-ORGANIZATION",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          translations: { de: "Erste Schritte" },
          items: [
            {
              label: "Overview",
              translations: { de: "Überblick" },
              slug: "getting-started/overview",
            },
          ],
        },
        {
          label: "Guides",
          translations: { de: "Anleitungen" },
          items: [
            {
              label: "Overview",
              translations: { de: "Meine Features" },
              slug: "guides/overview",
            },
          ],
        },
        {
          label: "Workflow",
          translations: { de: "Workflow" },
          items: [],
        },
        {
          label: "Reference",
          translations: { de: "Referenz" },
          items: [
            {
              label: "Glossary",
              translations: { de: "Glossar" },
              slug: "reference/glossary",
            },
          ],
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
      },
    }),
  ],
});
