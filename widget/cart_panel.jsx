import React, {useState} from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Col,
    ListGroup,
    ListGroupItem,
    Container,
    Row,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag, faDollarSign, faTrash} from '@fortawesome/free-solid-svg-icons'
import {useCookies} from 'react-cookie'
import {pizzaDeleteWithToken, pizzaPutWithToken} from "../utils/pizza_url";
import {isCartEmpty, parseGetCartResponse} from "../utils/cart_paser";
import Link from "next/link";
import Hover from "./hover";

const PizzaItem = (props) => {
    const pizza = props.item.pizza;
    const [cookies] = useCookies(['token']);
    const [isOpen, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(props.item.number);
    const toggle = () => setOpen(!isOpen);

    const onPick = (val, pizza) => {
        setQuantity(val);
        console.log(pizza);

        const body = {
            "pizzaList":
                [
                    {
                        "pizzaId": pizza.id,
                        'number': val
                    },
                ]
        };

        pizzaPutWithToken('/cart',
            body,
            cookies.token,
            (status, data) => {
                console.log('update');
                console.log(data);
                if (isCartEmpty(data)) {
                    props.setUpdateCart('empty');
                } else {
                    props.setUpdateCart(data);
                }

            },
            (status, data) => {
                console.log('add fail');
                console.log(data);
            },
            (error) => {
                console.log('add error');
            }
        );
    };
    return (
        <ListGroupItem>
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col className={"text-left"}>
                        {pizza.displayName}
                    </Col>

                    <Col className={"text-right"}>
                        <div className={"float-right"}>
                            <FontAwesomeIcon icon={faDollarSign}/>
                            {pizza.price}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={"text-right"}>
                        <div className={"float-right"}>
                            <ButtonDropdown isOpen={isOpen} toggle={toggle} className={"pizza-shop-cart-amount-picker"}>
                                <DropdownToggle caret size="sm">
                                    Qty: {quantity}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => onPick(0, pizza)}>0 (Delete)</DropdownItem>
                                    {
                                        Array.from(Array(9).keys()).map((item) => {
                                            const num = item + 1;
                                            return <DropdownItem onClick={() => onPick(num, pizza)}>{num}</DropdownItem>
                                        })
                                    }
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ListGroupItem>
    );
};
const PizzaPanel = (props) => {
    const pizzas = props.pizzas;
    return (
        <div>
            <ListGroup flush>
                <ListGroupItem color={"warning"} className={"text-left"}>Pizzas</ListGroupItem>
                {
                    pizzas.map((item) => {
                        if (item.number > 0) {
                            return <PizzaItem key={item.pizza.id} item={item} setUpdateCart={props.setUpdateCart}/>
                        }
                    })
                }
            </ListGroup>
        </div>
    );
};


const CartPanel = (props) => {
    const [cookies] = useCookies(['token']);

    const deleteAll = () => {
        pizzaDeleteWithToken('/cart', cookies.token,
            () => {
                props.setUpdateCart('empty');
            },
            () => {
                console.log('delete fail');
            },
            () => {
                console.log('delete error');
            });
    };

    return (
        <Row>
            <Col className={"text-center"} xs={{size: 10, offset: 1}}>
                <Card className={"pizza-shop-card-card"}>
                    <CardHeader>
                        <FontAwesomeIcon icon={faShoppingBag}/>{' '}My Shopping Cart
                        <span className={"float-right pizza-shop-cart-trash"} onClick={deleteAll}>
                            <Hover words={"Clear Cart"}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </Hover>
                        </span>
                    </CardHeader>
                    <CardBody>
                        <PizzaPanel pizzas={props.cartItems.pizzas} setUpdateCart={props.setUpdateCart}/>
                    </CardBody>
                    <CardFooter>
                        <Link href={"/checkout"}>
                            <Button className={"float-center"}>
                                Checkout
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
    );
};

export default CartPanel;