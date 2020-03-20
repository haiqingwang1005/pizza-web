import PizzaNav from "../widget/nav";
import React from "react";
import { UncontrolledCarousel } from 'reactstrap';
import '../public/css/style.css'
import {Carousel} from "react-bootstrap";

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
            <Carousel>
                <Carousel.Item style={{"background-image": "url(images/pizza.jpg)"}}>
                    <Carousel.Caption className={"d-none d-md-block"}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"images/vege_meat.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption className={"d-none d-md-block"}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"images/dough.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption className={"d-none d-md-block"}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}