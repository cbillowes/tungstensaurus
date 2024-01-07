// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Curious Programmer - Tungstensaurus',
  tagline:
    'A quest to fill the gap to becoming a full-stack senior software engineer.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://up.curiousprogrammer.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cbillowes', // Usually your GitHub org/user name.
  projectName: 'tungstensaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-Z376J20RNJ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/senior-developer.jpg',
      navbar: {
        title: 'Tungstensaurus',
        logo: {
          alt: 'Tungsten',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'questSidebar',
            position: 'left',
            label: 'Quest',
          },
          {
            type: 'docSidebar',
            sidebarId: 'skillsSidebar',
            position: 'left',
            label: 'Skills',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://curiousprogrammer.dev',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/cbillowes/tungstensaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Curious Programmer',
            items: [
              {
                label: 'Blog',
                href: 'https://curiousprogrammer.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cbillowes',
              },
            ],
          },
          {
            title: 'Tungstensaurus',
            items: [
              {
                label: 'Quest',
                to: '/docs/quest/introduction',
              },
              {
                label: 'Skills',
                to: '/docs/category/system-design',
              },
              {
                label: 'Resources',
                to: '/docs/resources/introduction',
              },
            ],
          },
          {
            title: 'Must GOTO',
            items: [
              {
                label: 'ByteByteGo',
                href: 'https://bytebytego.com/',
              },
              {
                label: 'roadmap.sh',
                href: 'https://roadmap.sh',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Curious Programmer - Tungstensaurus. Built with ❤ by Clarice Bouwer using Docusaurus and Chat GPT pleb 3.5.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
