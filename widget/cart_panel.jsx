import React from "react";
import {Card,
    CardBody,
    Col,
    Row} from "reactstrap";

const CartPanel = (props) => {

    return (
        <Row>
            <Col className={"text-center"} sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
                <Card>
                    <CardBody>

                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default CartPanel;