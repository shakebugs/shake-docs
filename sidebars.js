module.exports = {
    someSidebar: {
        /*Overview: [
            'overview',
        ], */
        Android: [
            'android/setup',
            {
                "type": "category",
                "label": "SDK",
                "items": [
                    'android/invoke',
                    'android/disable',
                    'android/silent-reports',
                    'android/email',
                    'android/inspect',
                    'android/screenshot',
                    'android/screen-recording',
                    'android/permissions',
                    'android/activity',
                    'android/essentials',
                    'android/attachments',
                    'android/blackbox',
                    'android/metadata',
                    'android/quick-facts',
                ]
            },
            'android/android-releases'
        ],
        iOS: [
            {
                "type": "category",
                "label": "Install Shake",
                "items": [
                    'ios/setup-cocoapods',
                    'ios/setup-carthage',
                    'ios/setup-manually',
                ]
            },
            {
                "type": "category",
                "label": "SDK",
                "items": [
                    'ios/invoke',
                    'ios/disable',
                    'ios/silent-reports',
                    'ios/inspect',
                    'ios/screenshot',
                    'ios/permissions',
                    'ios/activity',
                    'ios/essentials',
                    'ios/attachments',
                    'ios/blackbox',
                    'ios/quick-facts'
                ]
            },
            'ios/ios-releases'
        ],
        "React Native": [
            'react/setup',
            {
                "type": "category",
                "label": "SDK",
                "items": [
                    'react/invoke',
                    'react/disable',
                    'react/silent-reports',
                    'react/inspect',
                    'react/screenshot',
                    'react/permissions',
                    'react/activity',
                    'react/essentials',
                    'react/attachments',
                    'react/quick-facts',
                    'react/blackbox'
                ]
            },
            'react/react-releases'
        ],
        "Flutter": [
            "flutter/setup",
            {
                "type": "category",
                "label": "SDK",
                "items": [
                    'flutter/invoke',
                    'flutter/disable',
                    'flutter/inspect',
                    'flutter/screenshot',
                    'flutter/permissions',
                    'flutter/activity',
                    'flutter/essentials',
                    'flutter/attachments',
                    'flutter/quick-facts',
                    'flutter/black-box',
                    'flutter/silent-reports'
                ]
            },
            'flutter/flutter-releases'
        ],
        /*"Template Gallery": [
            'template-gallery/template-gallery',
            {
                "type": "category",
                "label": "Gallery",
                "items": [
                    'template-gallery/account-details',
                    'template-gallery/git',
                    'template-gallery/shopping-retail',
                    'template-gallery/realtime-communication',
                    'template-gallery/iot',
                ]
            },
        ],*/
    },
};
