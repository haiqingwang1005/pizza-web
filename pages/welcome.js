import PizzaNav from "../widget/nav";
import React from "react";
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: 'images/pizza.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1 Delicious',
        header: 'Delicious',
        key: '1'
    },
    {
        src: 'images/vege_meat.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: 'images/dough.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
];

export default function Welcome() {
    return (
        <div>
            <PizzaNav/>
            <UncontrolledCarousel items={items}/>
        </div>
    );
}