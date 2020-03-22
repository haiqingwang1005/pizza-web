import PizzaNav from "../widget/nav";
import PizzaCarousel from "../widget/carousel";
import PizzaFooter from "../widget/footer";
import React from "react";
import StoreCards from "../widget/stores";
import useSWR from 'swr';
import pizza_backend_url from "../utils/pizza_url";
import {Container} from "reactstrap";

const items = [
    {
        src: 'images/pizza.jpg',
        caption: 'Our pizza is delicious',
        header: 'Delicious',
        key: '1'
    },
    {
        src: 'images/vege_meat.jpg',
        caption: 'Organic material, nutritious',
        header: 'Healthy',
        key: '2'
    },
    {
        src: 'images/dough.jpg',
        caption: 'Just out of oven',
        header: 'Fresh',
        key: '3'
    }
];

function storeFetcher(url) {
    return fetch(url).then(r => {
        return  r.json();
    });
}

export default function Welcome() {

    const { data, error } = useSWR(pizza_backend_url + "/stores", storeFetcher);

    return (
        <div>
            <PizzaNav/>
            <Container className={"welcome-body"}>
                <PizzaCarousel items={items}/>
                <StoreCards storesInfo={data}/>
            </Container>
            <PizzaFooter/>
        </div>
    );
}