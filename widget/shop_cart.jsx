import '../public/css/style.css';

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

const PizzaChart = (props) => {
    return (
        <motion.div className={"pizza-shop-cart"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
            <div className={"pizza-shop-cart-content"}>
                <FontAwesomeIcon icon={faShoppingCart} size={"lg"} color={"orange"}/>
            </div>
        </motion.div>
    );
};

export default PizzaChart;