module.exports = {
  title: 'Documentation',
  tagline: 'Explore guides and examples to integrate Shake into your app.',
  url: 'https://www.shakebugs.com',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'shakebugs', // Usually your GitHub org/user name.
  projectName: 'shake-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    hideableSidebar: false,
    scrollToTop: false,
    scrollToTopOptions: false,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['groovy', 'kotlin', 'java', 'swift', 'dart', 'batch'],
    },
    algolia: {
      apiKey: '0a7f58d03fe8cc9d31b51d69d009654f',
      indexName: 'shakebugs',
    },
    navbar: {
      
      logo: {
        alt: 'Shake logo',
        src: 'img/shake-full-logo.svg',
        href: 'https://www.shakebugs.com/',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          label: 'Platform',
          position: 'left',
          items: [
            {to: 'android/overview', label: 'Android', activeBasePath: '/android'},
            {to: 'ios/overview', label: 'iOS', activeBasePath: '/ios'},
            {to: 'flutter/overview', label: 'Flutter', activeBasePath: '/flutter'},
            {to: 'react/overview', label: 'React Native', activeBasePath: '/react'}
          ],
        },
        {
          href: 'https://app.shakebugs.com/',
          label: 'Dashboard',
          position: 'right',
        },
      ],
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
      [
        'docusaurus2-dotenv',
        {
          systemvars: true,
        },
      ],
  ],
};
