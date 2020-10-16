const API_URL = process.env.API_URL;

export const fetchVersion = async (platform, os) => {
    let response = await fetch(API_URL + '/api/1.0/issue_tracking/platforms');
    if (response.ok) {
        let json = await response.json();

        return _parseVersion(json, platform, os);
    } else {
        return '';
    }
};

const _parseVersion = (json, platform, os) => {
    let version = '';

    json.forEach((item) => {
        if (item.name === platform && item.os === os) {
            version = item.latest_version;
        }
    });

    return version;
}
