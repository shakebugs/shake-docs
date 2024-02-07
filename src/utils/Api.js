export const fetchVersion = async (platform, os) => {
    let response = await fetch('https://api.shakebugs.com/api/1.0/issue_tracking/platforms');
    if (response.ok) {
        let json = await response.json();
        return json.find((item)=> item.name === platform && item.os === os)?.latest_version;
    } else {
        return '';
    }
};
