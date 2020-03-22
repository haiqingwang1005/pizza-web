import '../public/css/style.css'
import React from "react";
import PizzaLayout from "../widget/pizza_layout";
import LoginPanel from "../widget/login_panel";
import {Col, Row} from "reactstrap";

const LoginPage = (props) => {
    return (
        <PizzaLayout style={{"backgroundImage": "url(images/pizza_login.jpg)"}}>
            <Row>
                <Col className={"text-center"} sm={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <LoginPanel/>
                </Col>
            </Row>
        </PizzaLayout>
    );
};

export default LoginPage;