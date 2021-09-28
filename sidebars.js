module.exports = {
    someSidebar: [
        {
            type: 'doc',
            id: 'overview',
        },

        {
            type: 'category',
            label: 'Android',
            items: [
                'android/setup',
                {
                    type: 'category',
                    label: 'Screens',
                    items: [
                        'android/home-screen',
                        'android/new-ticket-screen',
                        'android/inspect-screen',
                    ]
                },
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'android/invoke',
                        'android/disable',
                        'android/silent-reports',
                        'android/email',
                        'android/inspect',
                        'android/feedback-type',
                        'android/intro-message',
                        'android/screenshot',
                        'android/automatic-screen-recording',
                        'android/crash-reporting',
                        'android/users',
                        'android/permissions',
                        'android/activity',
                        'android/essentials',
                        'android/attachments',
                        'android/blackbox',
                        'android/metadata',
                        'android/manage-sensitive-data',
                    ]
                },
                'android/android-releases',
            ],
        },
        {
            type: 'category',
            label: 'iOS',
            items: [
                {
                    type: 'category',
                    label: 'Install Shake',
                    items: [
                            'ios/setup-cocoapods',
                            'ios/setup-spm',
                            'ios/setup-manually'
                    ]
                },
                {
                    type: 'category',
                    label: 'Screens',
                    items: [
                        'ios/home-screen',
                        'ios/new-ticket-screen',
                        'ios/inspect-screen',
                    ]
                },
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'ios/invoke',
                        'ios/disable',
                        'ios/silent-reports',
                        'ios/email',
                        'ios/inspect',
                        'ios/feedback-type',
                        'ios/intro-message',
                        'ios/screenshot',
                        'ios/automatic-screen-recording',
                        'ios/crash-reporting',
                        'ios/users',
                        'ios/permissions',
                        'ios/network-request-reporting',
                        'ios/activity',
                        'ios/essentials',
                        'ios/attachments',
                        'ios/blackbox',
                        'ios/metadata',
                        'ios/manage-sensitive-data',
                    ]
                },
                'ios/ios-releases',
            ],
        },
        {
            type: 'category',
            label: 'React Native',
            items: [
                {
                    type: 'category',
                    label: 'Install Shake',
                    items: [
                        'react/setup',
                        'react/manual-linking',
                        'react/upgrading-version'
                    ]
                },
                {
                    type: 'category',
                    label: 'Screens',
                    items: [
                        'react/home-screen',
                        'react/new-ticket-screen',
                        'react/inspect-screen'
                    ]
                },
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'react/invoke',
                        'react/disable',
                        'react/silent-reports',
                        'react/email',
                        'react/inspect',
                        'react/feedback-type',
                        'react/intro-message',
                        'react/screenshot',
                        'react/automatic-screen-recording',
                        'react/users',
                        'react/permissions',
                        'react/activity',
                        'react/essentials',
                        'react/attachments',
                        'react/blackbox',
                        'react/metadata',
                        'react/manage-sensitive-data',
                    ],
                },
                'react/react-releases',
            ],
        },
        {
            type: 'category',
            label: 'Flutter',
            items: [
                {
                    type: 'category',
                    label: 'Install Shake',
                    items: [
                        'flutter/setup',
                        'flutter/upgrading-version'
                    ]
                },
                {
                    type: 'category',
                    label: 'Screens',
                    items: [
                        'flutter/home-screen',
                        'flutter/new-ticket-screen',
                        'flutter/inspect-screen'
                    ]
                },
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'flutter/invoke',
                        'flutter/disable',
                        'flutter/silent-reports',
                        'flutter/email',
                        'flutter/inspect',
                        'flutter/feedback-type',
                        'flutter/intro-message',
                        'flutter/screenshot',
                        'flutter/automatic-screen-recording',
                        'flutter/users',
                        'flutter/permissions',
                        'flutter/activity',
                        'flutter/essentials',
                        'flutter/attachments',
                        'flutter/blackbox',
                        'flutter/metadata',
                        'flutter/manage-sensitive-data',
                    ],
                },
                'flutter/flutter-releases',
            ],
        },
        {
            type: 'category',
            label: 'Template Gallery',
            items: [
                'template-gallery/about',
                {
                    type: 'category',
                    label: 'Gallery',
                    items: [
                        'template-gallery/account-details',
                        'template-gallery/shopping-retail',
                        'template-gallery/realtime-communication',
                        'template-gallery/iot',
                        'template-gallery/git',
                    ],
                },
            ],
        },
        {
            type: 'doc',
            id: 'captured-data-privacy',
        },
    ],
};
