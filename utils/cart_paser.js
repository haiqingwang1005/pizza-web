export function getCartSize(cartData) {
    let num = 0;
    if (cartData.pizzas) {
        cartData.pizzas.map(item => {
            num = num + item.number;
        });
    }
    console.log('amount of items in cart: ' + num);
    return num;
}

export function parseGetCartResponse (data) {
    if (!data) {
        return undefined;
    }
    if (data.status === 404) {
        return 'empty';
    } else if (data.status === 401 || data.status === 403) {
        return 'need_auth';
    } else if (data.status === 200) {
        console.log('get');
        console.log(data.response);

        if (isCartEmpty(data.response)) {
            return 'empty';
        }
        return data.response;
    } else {
        return 'error';
    }
}

export function isCartEmpty(cartData) {
    return !cartData.pizzas || cartData.pizzas.length === 0;

}