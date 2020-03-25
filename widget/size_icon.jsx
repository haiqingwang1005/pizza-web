import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {PizzaIcon} from "../icons/pizza-icon";

const mapPizzaSizeToIconSize = (pizzaSize) => {
    let size;
    switch (pizzaSize) {
        case 'small':
            size = 'lg';
            break;
        case 'large':
            size = '3x';
            break;
        default:
            size = '2x';
    }
    return size;
};

const SizeIcon = (props) => {
    const sizeData = props.sizeData;
    const tag = sizeData.tag;

    return (
        <div>
            <PizzaIcon size={tag}/>{" "}
            {
                `${sizeData.tag}, ${sizeData.inch} inches`
            }
        </div>
    );
};

export default SizeIcon;

/*
 <FontAwesomeIcon icon={faCircleNotch} size={mapPizzaSizeToIconSize(tag)}/>

 <PizzaIcon size={tag}/>
* */