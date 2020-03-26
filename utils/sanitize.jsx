export default function sanitize(str) {
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
    str = str.toLowerCase();
    return str.replace(reg, (match)=>(map[match]));
};