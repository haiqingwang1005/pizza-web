const pizza_backend_url = "http://localhost:9080/haiqingpizza";
export const copy_right_url = "https://github.com/haiqingwang1005";
export default pizza_backend_url;

export function fetcher(url) {
    return fetch(url).then(r => {
        return r.json();
    });
}