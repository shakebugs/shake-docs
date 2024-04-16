/**
 * Gets selected platform from url.
 */
const getSelectedPlatform = (url) => {
    const regexMatch = /\/docs\/(.*?)\//.exec(url);
    const rootName = regexMatch ? regexMatch[1] : '';

    const platforms = {
        android: "Android",
        ios: "iOS",
        react: "React Native",
        flutter: "Flutter",
        web: "Web",
    };

    return platforms[rootName] || "";
}

export {getSelectedPlatform}
