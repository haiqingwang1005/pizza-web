import '../public/css/style.css';

import PizzaLayout from "../widget/pizza_layout";
import React from "react";
import useSWR from "swr";
import {fetcherWithToken} from "../utils/pizza_url";
import Router from "next/router";
import CartBoard from "../widget/cart_board";

const Cart = (props) => {
    const {data, error} = useSWR("/cart", fetcherWithToken);
    console.log(data);

    if (error) {
        console.error('fetching cart failed.');
        console.log(error);
        Router.push('/welcome');
        return <div/>
    }
    return (
        <PizzaLayout>
            <CartBoard cartData={data}/>
        </PizzaLayout>
    );
};

export default Cart;