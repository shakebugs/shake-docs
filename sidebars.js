module.exports = {
    someSidebar: [
        {
            type: 'category',
            label: 'Getting started',
            items: [
                'getting-started/overview',
                'getting-started/installation'
            ]
        },
        {
            type: 'category',
            label: 'Screens',
            items: [
                'screens/home-screen',
                'screens/inspect-screen',
                'screens/new-ticket-screen'
            ]
        },
        {
            type: 'category',
            label: 'Products',
            items: [
                {
                    type: 'category',
                    label: 'Customer feedback',
                    items: [
                        'customer-feedback/introduction',
                        'customer-feedback/enabling-disabling',
                        'customer-feedback/feedback-type',
                        'customer-feedback/silent-reports',
                        'customer-feedback/invoke'
                    ]
                },
                {
                    type: 'category',
                    label: 'Crash reports',
                    items: [
                        'crash-reports/introduction',
                        'crash-reports/enabling-disabling',
                        'crash-reports/handling-error',
                        'crash-reports/deobfuscation',
                        'crash-reports/test-it-out'
                    ]
                },
                {
                    type: 'category',
                    label: 'Users',
                    items: [
                        'users/introduction',
                        'users/enabling-disabling'
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Configuration & Data',
            items: [
                'configuration-&-data/introduction',
                'configuration-&-data/essentials',
                'configuration-&-data/email',
                'configuration-&-data/inspect',
                'configuration-&-data/description-and-screenshot',
                'configuration-&-data/automatic-screen-recording',
                'configuration-&-data/permissions',
                'configuration-&-data/activity-history-data',
                'configuration-&-data/attachments',
                'configuration-&-data/black-box',
                'configuration-&-data/metadata',
                'configuration-&-data/intro-message',
                'configuration-&-data/manage-sensitive-data',
                'configuration-&-data/data-privacy-disclosure'
            ]
        },
    ],
};
