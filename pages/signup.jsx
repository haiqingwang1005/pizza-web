import '../public/css/style.css'
import React from "react";
import PizzaLayout from "../widget/pizza_layout";
import SignUpPanel from "../widget/signup_panel";
import {Col, Row} from "reactstrap";

const LoginPage = (props) => {
    return (
        <PizzaLayout style={{"backgroundImage": "url(images/rye.jpg)"}} className={"login-background"}>
            <Row>
                <Col className={"text-center"} sm={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <SignUpPanel/>
                </Col>
            </Row>
        </PizzaLayout>
    );
};

export default LoginPage;