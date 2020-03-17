function getAuthToken() {
    let res = undefined;
    console.log(document.cookie);
    document.cookie.split(";").map((item) => {
        let split = item.indexOf("=");
        let key = item.substring(0, split);
        let value = item.substring(split + 1)
        if (key === 'token') {
            console.log(value);
            res = value;
        }
    });
    return res;
}
function sanitize(string) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
        "`": "&grave;"
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}