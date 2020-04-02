import '../public/css/style.css';

import PizzaLayout from "../widget/pizza_layout";
import React, {useState} from "react";
import {fetcherWithToken, generateRedirectParams, pizzaGetRequest} from "../utils/pizza_url";
import Router from "next/router";
import CartBoard from "../widget/cart_board";
import { useCookies } from 'react-cookie'
import useSWR from "swr";
import {parseGetCartResponse} from "../utils/cart_paser";

const Cart = (props) => {
    const [cookies] = useCookies(['token']);
    const {data, error} = useSWR(["/cart", cookies.token], fetcherWithToken);
    let [updateCart, setUpdateCart] = useState(undefined);

    if (error) {
        console.error('fetching cart failed.');
        Router.push('/login?' + generateRedirectParams('/cart'));
        return <div/>
    }

    return (
        <PizzaLayout>
            <CartBoard cartData={parseGetCartResponse(data)} updateCart={updateCart} setUpdateCart={setUpdateCart}/>
        </PizzaLayout>
    );
};

export default Cart;