require('dotenv').config()

module.exports = {
    title: 'Documentation',
    tagline: 'Explore guides and examples to integrate Shake into your app.',
    url: 'https://docs.shakebugs.com',
    baseUrl: '/docs/',
    favicon: 'img/favicon.png',
    trailingSlash: true,
    organizationName: 'shakebugs', // Usually your GitHub org/user name.
    projectName: 'shake-docs', // Usually your repo name.
    themeConfig: {
        inkeepConfig: {
            baseSettings: {
                apiKey: process.env.INKEEP_KEY || '',
                integrationId: 'clrhxn3th00stvmh08mx2o9as',
                organizationId: 'org_8oLDuGb1oVIA7GB3',
                primaryBrandColor: '#6551FF',
            },
            aiChatSettings: {
                chatSubjectName: 'Shake',
                botAvatarSrcUrl: 'https://www.shakebugs.com/wp-content/themes/shake/public/shake-banner-image.svg',
                quickQuestions: [
                    'Can I provide my own internationalization strings?',
                    'How do I customize the theme on iOS?',
                    'Where can I view user feedback and what information does it include?',
                ],
                getHelpCallToActions: [
                    {
                        url: 'https://shk.sh/join-slack',
                        name: 'Slack Community',
                        icon: {
                            builtIn: 'FaSlack',
                        },
                    },
                ],
            },
        },
        docs: {
            sidebar: {
                hideable: false
            }
        },
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: false,
        },
        scrollToTop: false,
        scrollToTopOptions: false,
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
            additionalLanguages: ['groovy', 'kotlin', 'java', 'swift', 'dart', 'batch'],
        },
        // algolia: {
        //   appId: 'Q6FOQ6DC6Q',
        //   apiKey: '3ebbb9c4424c458a83683abfb66e7bb6',
        //   indexName: 'shakebugs',
        // },
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
                        {to: 'ios/overview', label: 'iOS', activeBasePath: '/ios'},
                        {to: 'android/overview', label: 'Android', activeBasePath: '/android'},
                        {to: 'react/overview', label: 'React Native', activeBasePath: '/react'},
                        {to: 'flutter/overview', label: 'Flutter', activeBasePath: '/flutter'},
                        {to: 'web/overview', label: 'Web', activeBasePath: '/web'},
                        {to: 'chrome-extension/overview', label: 'Chrome extension', activeBasePath: '/chrome-extension'}
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
            'docusaurus-plugin-dotenv',
            {
                path: "./.env",
                systemvars: true,
            }
        ]
    ],
    themes: ['@inkeep/docusaurus/searchBar'],
};
