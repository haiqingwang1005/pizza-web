function getAuthToken() {
    let res = undefined;
    document.cookie.split(";").map((item) => {
        let content = item.split("=");
        if (content[0] === 'token') {
            res = content[1];
        }
    });
    return res;
}