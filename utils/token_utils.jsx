import {useCookies} from 'react-cookie';

export default function getAuthToken() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    console.log('cookies');
    console.log(cookies);
    return cookies.token;
}
