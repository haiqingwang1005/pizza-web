const pizza_backend_url = "http://localhost:9080/haiqingpizza";
export const copy_right_url = "https://github.com/haiqingwang1005";
export default pizza_backend_url;

export function fetcher(url) {
    return fetch(url).then(r => {
        return r.json();
    });
}

export function pizzaPostRequest(path, bodyObj, handleSuccess, handleFail, handleError) {
    fetch(
        pizza_backend_url + path,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(bodyObj)
        })
        .then((response) => {
            const statusPromise = new Promise((resolve, reject) => {
                resolve({status: response.status});
            });
            return Promise.all([statusPromise, response.text()]);
        })
        .then((response) => {
            const status = response[0].status;
            const text = response[1];
            const data = text.length === 0 ? {}: JSON.parse(text);
            if (status >= 200 && status < 300) {
                handleSuccess(status, data);
            } else {
                handleFail(status, data);
            }
        })
        .catch((error) => {
            handleError(error);
        });
}