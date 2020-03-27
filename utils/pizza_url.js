const pizza_backend_url = "http://localhost:9080/haiqingpizza";
export const copy_right_url = "https://github.com/haiqingwang1005";
export default pizza_backend_url;

export function fetcher(url) {
    return fetch(url).then(r => {
        return r.json();
    });
}

function pizzaRequest(path, verb, header, body, isCredential, handleSuccess, handleFail, handleError) {
    const initObj = {};
    initObj.method = verb;
    initObj.mode = 'cors';
    initObj.headers = header;
    if (body) {
        initObj.body = JSON.stringify(body);
    }
    if (isCredential) {
        initObj.credentials = 'include'
    }

    fetch(
        pizza_backend_url + path, initObj)
        .then((response) => {
            const statusPromise = new Promise((resolve, reject) => {
                resolve({status: response.status});
            });
            return Promise.all([statusPromise, response.text()]);
        })
        .then((response) => {
            const status = response[0].status;
            const text = response[1];
            const data = text.length === 0 ? {} : JSON.parse(text);
            if (status >= 200 && status < 300) {
                if (typeof handleSuccess === 'function') {
                    handleSuccess(status, data);
                }
            } else {
                if (typeof handleFail === 'function') {
                    handleFail(status, data);
                }
            }
            return data;
        })
        .catch((error) => {
            if (typeof handleError === "function") {
                handleError(error);
            }
        });
}

export function pizzaGetRequest(path, token, handleSuccess, handleFail, handleError) {
    pizzaRequest(path,
        'GET',
        {
            'Authorization': 'Bearer ' + token
        },
        undefined,
        false,
        handleSuccess,
        handleFail,
        handleError
    );
}

export function pizzaPostRequest(path, bodyObj, handleSuccess, handleFail, handleError) {
    pizzaRequest(path,
        'POST',
        {
            'Content-Type': "application/json"
        },
        bodyObj,
        true,
        handleSuccess,
        handleFail,
        handleError
    );
}
