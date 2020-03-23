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
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import pizza_backend_url from "../utils/pizza_url";
import {GlutenFree} from '../icons/gluten-free';

const getImageUrl = (name) => {
    return pizza_backend_url + '/toppings/image?name=' + name;
};

const MenuItem = (props) => {
    return (
        <Card className={"pizza-menu-item"}>
            <CardHeader className={"text-uppercase"}>
                {props.topping.name}
            </CardHeader>
            <CardImg width="100%" src={getImageUrl(props.topping.name)} alt="Card image cap"/>
            <CardBody>
                <CardText>
                    {props.topping.description}

                </CardText>
            </CardBody>
            <CardFooter className={"text-right"}>
                <GlutenFree/>
                <FontAwesomeIcon icon={faCartPlus}  />
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

export default MenuSection;