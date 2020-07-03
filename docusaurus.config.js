module.exports = {
  title: 'We focus on one thing only. Bug reporting.',
  tagline: 'And that dedication is why teams put us in their apps time and time again.',
  url: 'https://www.shakebugs.com/',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'shakebugs', // Usually your GitHub org/user name.
  projectName: 'shake-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['groovy', 'kotlin', 'java', 'swift'],
    },
    algolia: {
      apiKey: '0a7f58d03fe8cc9d31b51d69d009654f',
      indexName: 'shakebugs',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Shake',
      logo: {
        alt: 'Shake logo',
        src: 'img/logo.svg',
        href: 'https://www.shakebugs.com/',
      },
      links: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://app.shakebugs.com/',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Android',
              to: 'android/setup',
            },
            {
              label: 'iOS',
              to: 'ios/setup-cocoapods',
            },
            {
              label: 'React Native',
              to: 'react/setup',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Demo',
              href: 'https://demo.shakebugs.com',
            },
            {
              label: 'Plans',
              href: 'https://www.shakebugs.com/pricing',
            },
            {
              label: 'Integrations',
              href: 'https://www.shakebugs.com/integrations',
            },
            {
              label: 'Security',
              href: 'https://www.shakebugs.com/security',
            },
          ],
        },
        {
          title: 'Features',
          items: [
            {
              label: 'Why Shake',
              href: 'https://www.shakebugs.com/why-shake',
            },
            {
              label: 'Roadmap',
              href: 'https://www.shakebugs.com/roadmap',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Help center',
              href: 'https://help.shakebugs.com/',
            },
            {
              label: 'Legal',
              href: 'https://app.shakebugs.com/legal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shake, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('./src/plugins/inject-html-tags')],
};
