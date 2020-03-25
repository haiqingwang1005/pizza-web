import '../public/css/style.css';

import React from "react";

import PizzaLayout from "../widget/pizza_layout";
import MenuBoard from "../widget/menu_board";

import useSWR from "swr";
import pizza_backend_url from "../utils/pizza_url";

function toppingsFetcher(url) {
    return fetch(url).then(r => {
        return r.json();
    });
}


const Menu = (props) => {
    const {data, error} = useSWR(pizza_backend_url + "/toppings", toppingsFetcher);
    let toppingsInfo = data;
    if (error) {
        toppingsInfo = undefined;
    }
    return (
        <PizzaLayout>
            <MenuBoard toppingsInfo={toppingsInfo}/>
        </PizzaLayout>
    );
};

export default Menu;