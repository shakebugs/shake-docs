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
      additionalLanguages: ['groovy', 'kotlin', 'java', 'swift', 'dart', 'batch'],
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
              label: 'Overview',
              to: 'overview',
            },
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
            {
              label: 'Flutter',
              to: 'flutter/setup',
            },
            {
              label: 'Template Gallery',
              to: 'template-gallery/about',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Live demo',
              href: 'https://demo.shakebugs.com',
            },
            {
              label: 'Pricing',
              href: 'https://www.shakebugs.com/pricing',
            },
            {
              label: 'Integrations',
              href: 'https://www.shakebugs.com/integrations',
            },
            {
              label: 'Switch from Instabug',
              href: 'https://www.shakebugs.com/instabug-alternative',
            },
            {
              label: 'Security',
              href: 'https://www.shakebugs.com/security',
            },
            {
              label: 'Roadmap',
              href: 'https://feedback.shakebugs.com',
            }
          ],
        },
        {
          title: 'Shake for',
          items: [
            {
              label: 'App developers',
              href: 'https://www.shakebugs.com/app-developers',
            },
            {
              label: 'QA teams',
              href: 'https://www.shakebugs.com/qa-teams',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              href: 'https://www.shakebugs.com/docs',
            },
            {
              label: 'Blog',
              href: 'https://www.shakebugs.com/blog',
            },
            {
              label: 'Help center',
              href: 'https://help.shakebugs.com/',
            },
            {
              label: 'Terms of service',
              href: 'https://www.shakebugs.com/terms',
            },
            {
              label: 'Privacy policy',
              href: 'https://www.shakebugs.com/privacy',
            },
            {
              label: 'Data processing agreement',
              href: 'https://www.shakebugs.com/dpa',
            }
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
  plugins: [
      require.resolve('./src/plugins/inject-html-tags'),
      'docusaurus2-dotenv',
      {
        systemvars: true,
      },
  ],
};
