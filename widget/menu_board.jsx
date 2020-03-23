import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardText,
    CardFooter
} from "reactstrap";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faStar} from '@fortawesome/free-solid-svg-icons'
import pizza_backend_url from "../utils/pizza_url";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import PizzaSpinner from "./spinner";

const getImageUrl = (name) => {
    return pizza_backend_url + '/toppings/image?name=' + name;
};

const MenuIcon = (props) => {
    return (
        <div>
            <OverlayTrigger key={"right"} placement={"right"} overlay={
                <Tooltip id={"tooltip-right"}>
                    {props.words}
                </Tooltip>
            }>
                <FontAwesomeIcon icon={props.iconSrc} className={props.position}/>
            </OverlayTrigger>
        </div>
    );
};

const MenuItem = (props) => {
    return (
        <Card className={"pizza-menu-item"}>
            <CardHeader className={"text-uppercase text-center"}>
                <div className={"float-left"}>
                    {props.topping.name}
                </div>
                {
                    props.topping.isPremium &&
                    <MenuIcon iconSrc={faStar} words={"Chief Recommends!"} position={"float-right"}/>
                }
            </CardHeader>
            <CardImg width="100%" src={getImageUrl(props.topping.name)} alt="Card image cap"/>
            <CardBody>
                <CardText>
                    {props.topping.description}
                </CardText>
            </CardBody>
            <CardFooter className={"text-center"}>
                <MenuIcon iconSrc={faCartPlus} words={"Add to Chart"} position={"float-right"}/>
            </CardFooter>
        </Card>
    );
};

const MenuSection = (props) => {
    return (
        <Container className={"pizza-menu-section"}>
            <Card>
                <CardHeader className={"text-center"}>
                    {props.title}
                </CardHeader>
                <CardBody>
                    <Container>
                        <Row>
                            {
                                props.toppings.map((item) => {
                                    return (
                                        <Col sm="12" md="6" lg="4" key={item.name}>
                                            <MenuItem topping={item}/>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </Container>
    );
};

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

const MenuBoard = (props) => {
    const toppingsInfo = props.toppingsInfo;
    if (!toppingsInfo) {
        return (<PizzaSpinner/>);
    } else {
        const categorized = categorizeToppings(toppingsInfo);
        return (
            categorized.map((item) => {
                return <MenuSection toppings={item.toppings} key={item.key} title={item.key}/>
            })
        );
    }
};

export default MenuBoard;