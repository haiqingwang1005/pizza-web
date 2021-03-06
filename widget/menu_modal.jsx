import '../public/css/style.css';
import React, {useState} from "react";
import {
    Button,
    Card,
    Container,
    Col,
    Row,
    CardHeader,
    CardBody,
    CardImg,
    CardText,
} from "reactstrap";

import {
    Form,
    Modal
} from "react-bootstrap";

import {GlutenFree} from "../icons/gluten-free";
import {Accordion} from "react-bootstrap";
import pizza_backend_url, {getImageUrl, fetcher, pizzaPostWithToken} from "../utils/pizza_url";
import SizeIcon from "./size_icon";
import AmountPicker from "./amount_picker";
import useSWR from "swr";
import PizzaSpinner from "./spinner";
import {useCookies} from "react-cookie";
import {getCartSize} from "../utils/cart_paser";

const MenuAccordion = (props) => {
    return (
        <Accordion defaultActiveKey="0">
            <Card className={"pizza-menu-picker-card"}>
                <Accordion.Toggle as={CardHeader} eventKey="0" className={"noselect"}>
                    {props.headText}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <CardBody>
                        <Container>
                            <Row>
                                {
                                    props.children
                                }
                            </Row>
                        </Container>
                    </CardBody>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

const CrustItem = (props) => {
    return (
        <Col md="12" lg="6">
            <Card className={"pizza-menu-item"}>
                <CardHeader className={"text-uppercase text-center"}>
                    <div className={"float-left"}>
                        <Form.Check
                            name="radio_crust"
                            type="radio"
                            onChange={() => {
                                console.log(props.crust.name);
                                props.setCrustName(props.crust.name);
                            }}
                            label={props.crust.title}/>
                    </div>
                    {
                        props.crust.isGlutenFree &&
                        <GlutenFree className={"float-right"} words={"Gluten Free"}/>
                    }
                </CardHeader>
                <CardImg width="100%" src={getImageUrl(props.crust.imagePath)} alt="Card image cap"/>
                <CardBody>
                    <CardText className={"text-left"}>
                        {props.crust.description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

const MenuCrust = (props) => {
    const {data: crustData, error: crustError} = useSWR(pizza_backend_url + "/crusts", fetcher);
    let crustInfo = crustData;
    if (crustError) {
        crustInfo = undefined;
    }
    if (!crustInfo) {
        return <PizzaSpinner/>
    } else {
        return (
            <MenuAccordion headText={"Choose Crust"}>
                {
                    crustInfo.map((item) => {
                        return (
                            <CrustItem crust={item} key={item.name} setCrustName={props.setCrustName}/>
                        );
                    })
                }
            </MenuAccordion>
        );
    }
};

const SizeItem = (props) => {
    return (
        <Col md="12" lg="4">
            <Form.Check>
                <Form.Check.Input
                    type={"radio"}
                    name="radio_size"
                    onChange={() => {
                        console.log(props.sizeData.name);
                        props.setSizeName(props.sizeData.name);
                    }}
                />
                <Form.Check.Label>
                    <SizeIcon sizeData={props.sizeData}/>
                </Form.Check.Label>
            </Form.Check>
        </Col>
    );
};

const MenuSize = (props) => {
    const {data: sizeData, error: sizeError} = useSWR(pizza_backend_url + "/pizzaSizes", fetcher);
    let sizeInfo = sizeData;
    if (sizeError) {
        sizeInfo = undefined;
    }

    if (!sizeInfo) {
        return <PizzaSpinner/>
    } else {
        return (
            <MenuAccordion headText={"Choose Size"}>
                {
                    sizeInfo.map((item) =>
                        <SizeItem sizeData={item} key={item.name} setSizeName={props.setSizeName}/>
                    )
                }
            </MenuAccordion>
        );
    }
};

const MenuNumber = (props) => {
    return (
        <MenuAccordion headText={"Choose Quantity"}>
            <AmountPicker className={"pizza-amount-picker-body"} onChange={(val) => {
                console.log(val);
                props.setAmount(val);
            }}/>
        </MenuAccordion>
    );
};


const postItemToCart = (item, token, handleSuccess) => {
    const body = {
        "pizzaList":
            [
                {
                    "crustName": item.crust,
                    "number": item.amount,
                    "sizeName": item.size,
                    "toppingName": item.topping
                },
            ]
    };

    pizzaPostWithToken('/cart',
        body,
        token,
        handleSuccess,
        (status, data) => {
            console.log('add fail');
            console.log(data);
        },
        (error) => {
            console.log('add error');
        }
    );
};

const MenuModal = (props) => {
    let show = props.show;
    const onHide = props.onHide;

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    let [crustName, setCrustName] = useState(undefined);
    let [sizeName, setSizeName] = useState(undefined);
    let [amount, setAmount] = useState(undefined);

    const addToCart = () => {
        console.log('topping: ' + props.topping.name);
        console.log('crust: ' + crustName);
        console.log('size' + sizeName);
        console.log('amount' + amount);

        if (crustName && sizeName && amount) {
            postItemToCart(
                {
                    topping: props.topping.name,
                    crust: crustName,
                    size: sizeName,
                    amount: amount,
                },
                cookies.token,
                (status, data) => {
                    const cartSize = getCartSize(data);
                    props.setCartSize(cartSize);
                    onHide();
                });
        }
    };

    return (
        <div>
            <Modal show={show} onHide={onHide} size={"xl"}>
                <Modal.Header onHide={onHide}>Let's Choose the Crust and Size </Modal.Header>
                <Modal.Body>
                    <MenuCrust setCrustName={setCrustName}/>
                    <MenuSize setSizeName={setSizeName}/>
                    <MenuNumber setAmount={setAmount}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" onClick={addToCart}>Add to Chart</Button>{' '}
                    <Button color="secondary" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

};

export default MenuModal;
