import '../public/css/style.css';
import React from "react";
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
import pizza_backend_url from "../utils/pizza_url";
import SizeIcon from "./size_icon";
import AmountPicker from "./amount_picker";

const crust = [
    {
        "id": "5e7abaa6438f549d5374bb75",
        "isGlutenFree": true,
        "name": "hand_toasted",
        "description": "This is hand toasted dough."
    },
    {
        "id": "5e7abaa6438f549d5374bb76",
        "isGlutenFree": false,
        "name": "whole_wheat",
        "description": "This is whole wheat dough."
    },
    {
        "id": "5e7abaa6438f549d5374bb77",
        "isGlutenFree": false,
        "name": "thin_crisp",
        "description": "This is thin crispy dough."
    },
    {
        "id": "5e7abaa6438f549d5374bb74",
        "isGlutenFree": true,
        "name": "original_pan",
        "description": "This is original pan dough."
    }
];

const sizeData = [
    {
        "id": "5e7aba2d438f5493af7ae39d",
        "tag": "small",
        "inch": 11,
        "numberOfSlices": 8,
        "caloriesPerSlice": 190
    },
    {
        "id": "5e7aba2d438f5493af7ae39e",
        "tag": "regular",
        "inch": 13,
        "numberOfSlices": 8,
        "caloriesPerSlice": 280
    },
    {
        "id": "5e7aba2d438f5493af7ae39f",
        "tag": "large",
        "inch": 17,
        "numberOfSlices": 12,
        "caloriesPerSlice": 290
    }
];
const getImageUrl = (name) => {
    return pizza_backend_url + '/crusts/image?name=' + name;
};

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
                        <Form.Check name="radio_crust" type="radio" label={props.crust.name.replace('_', ' ')}/>
                    </div>
                    {
                        props.crust.isGlutenFree &&
                        <GlutenFree className={"float-right"} words={"Gluten Free"}/>
                    }
                </CardHeader>
                <CardImg width="100%" src={getImageUrl(props.crust.name)} alt="Card image cap"/>
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
    return (
        <MenuAccordion headText={"Choose Crust"}>
            {
                crust.map((item) => {
                    return (
                        <CrustItem crust={item} key={item.name}/>
                    );
                })
            }
        </MenuAccordion>
    );
};

const SizeItem = (props) => {
    return (
        <Col md="12" lg="4">
            <Form.Check>
                <Form.Check.Input type={"radio"} name="radio_size"/>
                <Form.Check.Label>
                    <SizeIcon sizeData={props.sizeData}/>
                </Form.Check.Label>
            </Form.Check>
        </Col>
    );
};

const MenuSize = (props) => {
    return (
        <MenuAccordion headText={"Choose Size"}>
            {
                sizeData.map((item) =>
                    <SizeItem sizeData={item} key={item.tag}/>
                )
            }
        </MenuAccordion>
    );
};

const MenuNumber = (props) => {
    return (
        <MenuAccordion headText={"Choose Quantity"}>
            <AmountPicker className={"pizza-amount-picker-body"}/>
        </MenuAccordion>
    );
};

const MenuModal = (props) => {
    let show = props.show;
    const onHide = props.onHide;
    return (
        <div>
            <Modal show={show} onHide={onHide} size={"xl"}>
                <Modal.Header onHide={onHide}>Let's Choose the Crust and Size </Modal.Header>
                <Modal.Body>
                    <MenuCrust/>
                    <MenuSize/>
                    <MenuNumber/>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="primary" onClick={onHide}>Add to Chart</Button>{' '}
                    <Button color="secondary" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MenuModal;
