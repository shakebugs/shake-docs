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
                        'android/screenshot-and-description',
                        'android/screen-recording',
                        'android/permissions',
                        'android/activity',
                        'android/essentials',
                        'android/attachments',
                        'android/black-box',
                        'android/metadata',
                        'android/quick-facts',
                    ],
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
                        'ios/setup-carthage',
                        'ios/setup-manually',
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
                        'ios/screenshot-and-description',
                        'ios/permissions',
                        'ios/activity',
                        'ios/essentials',
                        'ios/attachments',
                        'ios/black-box',
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
                        'react/inspect',
                        'react/screenshot-and-description',
                        'react/permissions',
                        'react/activity',
                        'react/essentials',
                        'react/attachments',
                        'react/quick-facts',
                        'react/black-box',
                    ],
                },
                'react/react-releases',
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
                        'template-gallery/git',
                        'template-gallery/shopping-retail',
                        'template-gallery/realtime-communication',
                        'template-gallery/iot',
                    ],
                },
            ],
        },
    ],
};
