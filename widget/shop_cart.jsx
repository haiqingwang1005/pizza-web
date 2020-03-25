import '../public/css/style.css';

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const PizzaChart = (props) => {
    return (
        <div className={"pizza-shop-cart"}>
            <div className={"pizza-shop-cart-content"}>
                <FontAwesomeIcon icon={faShoppingCart} size={"lg"} color={"orange"}/>
            </div>
        </div>
    );
};

export default PizzaChart;