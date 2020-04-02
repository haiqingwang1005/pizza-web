import PizzaSpinner from "./spinner";
import EmptyCart from "./cart_empty";
import Router from "next/router";
import React from "react";
import CartPanel from "./cart_panel";

const CartBoard = (props) => {
    let data;
    if (props.updateCart) {
        data = props.updateCart;
    } else {
        data = props.cartData;
    }

    if (!data) {
        return (
            <PizzaSpinner/>
        );
    } else if (data === 'empty') {
        console.info('Empty cart.');
        return (
            <EmptyCart/>
        );
    } else if (data === 'need_auth') {
        console.info('Not authorized.');
        Router.push('/login');
        return <div/>
    } else if (data === 'error') {
        Router.push('/welcome');
        return <div/>
    } else {
        return <CartPanel cartItems={data} setUpdateCart={props.setUpdateCart}/>
    }
};

export default CartBoard;
