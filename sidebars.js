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
                    label: 'SDK',
                    items: [
                        'android/invoke',
                        'android/disable',
                        'android/silent-reports',
                        'android/email',
                        'android/inspect',
                        'android/feedback_type',
                        'android/intro-message',
                        'android/screenshot',
                        'android/screen-recording',
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
                    label: 'SDK',
                    items: [
                        'ios/invoke',
                        'ios/disable',
                        'ios/silent-reports',
                        'ios/inspect',
                        'ios/intro-message',
                        'ios/screenshot',
                        'ios/permissions',
                        'ios/activity',
                        'ios/essentials',
                        'ios/attachments',
                        'ios/blackbox',
                        'ios/metadata',
                        'ios/quick-facts'
                    ]
                },
                'ios/ios-releases',
            ],
        },
        {
            type: 'category',
            label: 'React Native',
            items: [
                'react/setup',
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'react/invoke',
                        'react/disable',
                        'react/silent-reports',
                        'react/inspect',
                        'react/screenshot',
                        'react/permissions',
                        'react/activity',
                        'react/essentials',
                        'react/attachments',
                        'react/blackbox',
                        'react/quick-facts',
                    ],
                },
                'react/react-releases',
            ],
        },
        {
            type: 'category',
            label: 'Flutter',
            items: [
                'flutter/setup',
                {
                    type: 'category',
                    label: 'SDK',
                    items: [
                        'flutter/invoke',
                        'flutter/disable',
                        'flutter/silent-reports',
                        'flutter/inspect',
                        'flutter/screenshot',
                        'flutter/permissions',
                        'flutter/activity',
                        'flutter/essentials',
                        'flutter/attachments',
                        'flutter/blackbox',
                        'flutter/quick-facts',
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
    ],
};
