module.exports = {
    androidSidebar: [
        {
            type: 'category',
            label: 'Getting started',
            items: [
                'android/overview',
                'android/installation',
                'android/import-from-instabug'
            ]
        },
        {
            type: 'category',
            label: 'Shake UI',
            items: [
                'android/shake-ui/overview',
                'android/shake-ui/home-screen',
                'android/shake-ui/new-ticket-screen',
                'android/shake-ui/chat-screen',
                'android/shake-ui/drawing-screen',
                'android/shake-ui/inspect-section'
            ]
        },
        {
            type: 'category',
            label: 'Modules',
            items: [
                {
                    type: 'category',
                    label: 'User feedback',
                    items: [
                        'android/user-feedback/overview',
                        'android/user-feedback/enable',
                        'android/user-feedback/invoke',
                        'android/user-feedback/intro-message',
                        'android/user-feedback/silent-user-feedback'
                    ]
                },
                {
                    type: 'category',
                    label: 'Crash reports',
                    items: [
                        'android/crash-reports/overview',
                        'android/crash-reports/enable',
                        'android/crash-reports/ask-for-description',
                        'android/crash-reports/handling-error',
                        'android/crash-reports/deobfuscation',
                        'android/crash-reports/test-it-out'
                    ]
                },
                {
                    type: 'category',
                    label: 'App users',
                    items: [
                        'android/users/overview',
                        'android/users/register-user',
                        'android/users/chat',
                        'android/users/unregister-user',
                        'android/users/update-user-metadata',
                        'android/users/update-user-identifier',
                        'android/users/advanced-usage'
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Configuration and data',
            items: [
                'android/configuration-and-data/overview',
                'android/configuration-and-data/home-screen',
                'android/configuration-and-data/custom-forms',
                'android/configuration-and-data/custom-branding',
                'android/configuration-and-data/callbacks',
                'android/configuration-and-data/data-attached-by-default',
                'android/configuration-and-data/auto-screenshot',
                'android/configuration-and-data/auto-screen-recording',
                'android/configuration-and-data/activity-history',
                'android/configuration-and-data/black-box',
                'android/configuration-and-data/ticket-metadata',
                'android/configuration-and-data/auto-attach-files',
                'android/configuration-and-data/manage-sensitive-data',
                'android/configuration-and-data/data-privacy-disclosure'
            ]
        },
        'android/releases'
    ],
    iosSidebar: [
        {
            type: 'category',
            label: 'Getting started',
            items: [
                'ios/overview',
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'ios/install/spm',
                        'ios/install/cocoapods',
                        'ios/install/manually',
                    ]
                },
                'ios/import-from-instabug'
            ]
        },
        {
            type: 'category',
            label: 'Shake UI',
            items: [
                'ios/shake-ui/overview',
                'ios/shake-ui/home-screen',
                'ios/shake-ui/new-ticket-screen',
                'ios/shake-ui/chat-screen',
                'ios/shake-ui/drawing-screen',
                'ios/shake-ui/inspect-section',
            ]
        },
        {
            type: 'category',
            label: 'Modules',
            items: [
                {
                    type: 'category',
                    label: 'User feedback',
                    items: [
                        'ios/user-feedback/overview',
                        'ios/user-feedback/enable',
                        'ios/user-feedback/invoke',
                        'ios/user-feedback/intro-message',
                        'ios/user-feedback/silent-user-feedback',
                    ]
                },
                {
                    type: 'category',
                    label: 'Crash reports',
                    items: [
                        'ios/crash-reports/overview',
                        'ios/crash-reports/enable',
                        'ios/crash-reports/ask-for-description',
                        'ios/crash-reports/handling-error',
                        'ios/crash-reports/symbolicate',
                        'ios/crash-reports/test-it-out'
                    ]
                },
                {
                    type: 'category',
                    label: 'App users',
                    items: [
                        'ios/users/overview',
                        'ios/users/register-user',
                        'ios/users/chat',
                        'ios/users/unregister-user',
                        'ios/users/update-user-metadata',
                        'ios/users/update-user-identifier',
                        'ios/users/advanced-usage',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Configuration and data',
            items: [
                'ios/configuration-and-data/overview',
                'ios/configuration-and-data/home-screen',
                'ios/configuration-and-data/custom-forms',
                'ios/configuration-and-data/custom-branding',
                'ios/configuration-and-data/callbacks',
                'ios/configuration-and-data/data-attached-by-default',
                'ios/configuration-and-data/auto-screenshot',
                'ios/configuration-and-data/auto-screen-recording',
                'ios/configuration-and-data/activity-history',
                'ios/configuration-and-data/black-box',
                'ios/configuration-and-data/ticket-metadata',
                'ios/configuration-and-data/auto-attach-files',
                'ios/configuration-and-data/manage-sensitive-data',
                'ios/configuration-and-data/data-privacy-disclosure'
            ]
        },
        'ios/releases'
    ],
    flutterSidebar: [
        {
            type: 'category',
            label: 'Getting started',
            items: [
                'flutter/overview',
                'flutter/installation',
                'flutter/import-from-instabug'
            ]
        },
        {
            type: 'category',
            label: 'Shake UI',
            items: [
                'flutter/shake-ui/overview',
                'flutter/shake-ui/home-screen',
                'flutter/shake-ui/new-ticket-screen',
                'flutter/shake-ui/chat-screen',
                'flutter/shake-ui/drawing-screen',
                'flutter/shake-ui/inspect-section'
            ]
        },
        {
            type: 'category',
            label: 'Modules',
            items: [
                {
                    type: 'category',
                    label: 'User feedback',
                    items: [
                        'flutter/user-feedback/overview',
                        'flutter/user-feedback/enable',
                        'flutter/user-feedback/invoke',
                        'flutter/user-feedback/intro-message',
                        'flutter/user-feedback/silent-user-feedback',
                    ]
                },
                {
                    type: 'category',
                    label: 'App users',
                    items: [
                        'flutter/users/overview',
                        'flutter/users/register-user',
                        'flutter/users/chat',
                        'flutter/users/unregister-user',
                        'flutter/users/update-user-metadata',
                        'flutter/users/update-user-identifier',
                        'flutter/users/advanced-usage',

                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Configuration and data',
            items: [
                'flutter/configuration-and-data/overview',
                'flutter/configuration-and-data/custom-forms',
                'flutter/configuration-and-data/custom-branding',
                'flutter/configuration-and-data/data-attached-by-default',
                'flutter/configuration-and-data/auto-screenshot',
                'flutter/configuration-and-data/auto-screen-recording',
                'flutter/configuration-and-data/activity-history',
                'flutter/configuration-and-data/black-box',
                'flutter/configuration-and-data/ticket-metadata',
                'flutter/configuration-and-data/auto-attach-files',
                'flutter/configuration-and-data/manage-sensitive-data',
                'flutter/configuration-and-data/data-privacy-disclosure'
            ]
        },
        'flutter/releases'
    ],
    reactSidebar: [
        {
            type: 'category',
            label: 'Getting started',
            items: [
                'react/overview',
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'react/install/npm',
                        'react/install/manual-linking'
                    ]
                },
                'react/import-from-instabug'
            ]
        },
        {
            type: 'category',
            label: 'Shake UI',
            items: [
                'react/shake-ui/overview',
                'react/shake-ui/home-screen',
                'react/shake-ui/new-ticket-screen',
                'react/shake-ui/chat-screen',
                'react/shake-ui/drawing-screen',
                'react/shake-ui/inspect-section',
            ]
        },
        {
            type: 'category',
            label: 'Modules',
            items: [
                {
                    type: 'category',
                    label: 'User feedback',
                    items: [
                        'react/user-feedback/overview',
                        'react/user-feedback/enable',
                        'react/user-feedback/invoke',
                        'react/user-feedback/intro-message',
                        'react/user-feedback/silent-user-feedback',
                    ]
                },
                {
                    type: 'category',
                    label: 'App users',
                    items: [
                        'react/users/overview',
                        'react/users/register-user',
                        'react/users/chat',
                        'react/users/unregister-user',
                        'react/users/update-user-metadata',
                        'react/users/update-user-identifier',
                        'react/users/advanced-usage',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Configuration and data',
            items: [
                'react/configuration-and-data/overview',
                'react/configuration-and-data/home-screen',
                'react/configuration-and-data/custom-forms',
                'react/configuration-and-data/custom-branding',
                'react/configuration-and-data/callbacks',
                'react/configuration-and-data/data-attached-by-default',
                'react/configuration-and-data/auto-screenshot',
                'react/configuration-and-data/auto-screen-recording',
                'react/configuration-and-data/activity-history',
                'react/configuration-and-data/black-box',
                'react/configuration-and-data/ticket-metadata',
                'react/configuration-and-data/auto-attach-files',
                'react/configuration-and-data/manage-sensitive-data',
                'react/configuration-and-data/data-privacy-disclosure'
            ]
        },
        'react/releases'
    ],
};
