import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {Table} from "react-bootstrap";
import {Col, Container, Row} from "reactstrap";

const AmountPicker = (props) => {

    const [amount, setAmount] = useState(0);
    const minusOne = () => {
        if (amount === 0) {
            return;
        }
        setAmount(amount - 1);
    };

    const plusOne = () => {
        setAmount(amount + 1);
    };

    return (
        <Container className={props.className}>
            <Row>
                <Col xs="4">
                    <FontAwesomeIcon icon={faCaretLeft} size={"2x"}
                                     onClick={minusOne} className={"pizza-amount-picker-arrow"}/>
                </Col>
                <Col xs="4" className={"noselect"}>
                    {amount}
                </Col>
                <Col xs="4" className={"pizza-amount-picker-arrow"}>
                    <FontAwesomeIcon icon={faCaretRight} size={"2x"}
                                     onClick={plusOne}/>
                </Col>
            </Row>
        </Container>
    );
};
export default AmountPicker;