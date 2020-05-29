module.exports = {
  title: 'We focus on one thing only. Bug reporting.',
  tagline: 'And that dedication is why teams put us in their apps time and time again.',
  url: 'https://www.shakebugs.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'shakebugs', // Usually your GitHub org/user name.
  projectName: 'shake-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['groovy', 'kotlin', 'java', 'swift'],
    },
    navbar: {
      title: 'Shake',
      logo: {
        alt: 'Shake logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://bitbucket.org/decodehq/shake-docs/src/master/',
          label: 'Bitbucket',
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
              to: 'docs/android/setup',
            },
            {
              label: 'iOS',
              to: 'docs/ios/setup',
            },
            {
              label: 'React Native',
              to: 'docs/react/setup',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Demo',
              href: 'https://demo.shakebugs.com/shyp-agency/772GYQPA/5',
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
              label: 'Documentation',
              href: '#',
            },
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'setup',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://bitbucket.org/decodehq/shake-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
