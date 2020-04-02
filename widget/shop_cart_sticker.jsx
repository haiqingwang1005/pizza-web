import '../public/css/style.css';

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion';
import Link from "next/link";
import {useCookies} from "react-cookie";
import useSWR from "swr";
import {fetcherWithToken, generateRedirectParams} from "../utils/pizza_url";
import {getCartSize} from "../utils/cart_paser";

const PizzaCartAmount = (props) => {
    if (props.amount) {
        return (
            <span className={"pizza-shop-cart-sticker-digit"}>
                {props.amount}
            </span>
        );
    }
    const [cookies] = useCookies(['token']);
    const {data, error} = useSWR(["/cart", cookies.token], fetcherWithToken);

    if (!error && data && data.response) {
        let num = getCartSize(data.response);
        return (
            <span className={"pizza-shop-cart-sticker-digit"}>
                {num}
            </span>
        );

    } else {
        return <span/>
    }
};

const PizzaCartSticker = (props) => {
    return (
        <motion.div className={"pizza-shop-cart-sticker"}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
            <Link href={"/cart"}>
                <div className={"pizza-shop-cart-sticker-content"}>
                    <PizzaCartAmount amount={props.amount}/>
                    <FontAwesomeIcon icon={faShoppingCart} size={"lg"} color={"orange"}/>
                </div>
            </Link>
        </motion.div>
    );
};

export default PizzaCartSticker;
