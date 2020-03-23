import PizzaLayout from "../widget/pizza_layout";
import MenuSection from "../widget/menu_section";

import React from "react";

const toppings = [
    {
        "id": "5e75ea95438f544fe2573aac",
        "name": "sausage",
        "isGlutenFree": true,
        "isPremium": false,
        "toppingType": "meat",
        "description": "This is sausage topping."
    },
    {
        "id": "5e75ea95438f544fe2573aad",
        "name": "chicken",
        "isGlutenFree": true,
        "isPremium": true,
        "toppingType": "meat",
        "description": "This is chicken topping."
    },
    {
        "id": "5e75ea95438f544fe2573aab",
        "name": "pepperoni",
        "isGlutenFree": true,
        "isPremium": false,
        "toppingType": "meat",
        "description": "This is pepperoni topping."
    },
    {
        "id": "5e75ea95438f544fe2573aae",
        "name": "peppers",
        "isGlutenFree": false,
        "isPremium": false,
        "toppingType": "vegetable",
        "description": "This is peppers topping."
    },
    {
        "id": "5e75ea95438f544fe2573aaf",
        "name": "onions",
        "isGlutenFree": true,
        "isPremium": false,
        "toppingType": "vegetable",
        "description": "This is onions topping."
    },
    {
        "id": "5e75ea95438f544fe2573ab0",
        "name": "mushroom",
        "isGlutenFree": false,
        "isPremium": true,
        "toppingType": "vegetable",
        "description": "This is mushroom topping."
    }
];

const categorizeToppings = (toppings) => {
    const res = [];
    const meat = [];
    const vege = [];
    toppings.map((item) => {
        if (item.toppingType === 'vegetable') {
            vege.push(item);
        }
        if (item.toppingType === 'meat') {
            meat.push(item);
        }
    });
    res.push({key: "Meat", toppings: meat});
    res.push({key: "Vegetable", toppings: vege});
    return res;
};

const Menu = (props) => {
    const categorized = categorizeToppings(toppings);
    return (
        <PizzaLayout>
            {
                categorized.map((item) => {
                    return <MenuSection toppings={item.toppings} key={item.key} title={item.key}/>
                })
            }
        </PizzaLayout>
    );
};

export default Menu;