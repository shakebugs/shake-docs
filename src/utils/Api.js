const API_URL = process.env.API_URL;

export const fetchVersion = async (platform, os) => {
    let response = await fetch(API_URL + '/api/1.0/issue_tracking/platforms');
    if (response.ok) {
        let json = await response.json();
        return json.find((item)=> item.name === platform && item.os === os)?.latest_version;
    } else {
        return '';
    }
};
