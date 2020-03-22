import PizzaNav from "./nav";
import PizzaFooter from "./footer";
import React from "react";
import {Container, Row} from "reactstrap";

const PizzaLayout = (props) => {
    return (
        <div style={props.style}>
            <PizzaNav/>
            <Container className={"pizza-body"}>
                {props.children}
            </Container>
            <PizzaFooter/>
        </div>
    );
};

export default PizzaLayout;