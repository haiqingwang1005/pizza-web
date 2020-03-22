import React from "react";
import '../public/css/style.css'
import {
    Card,
    Col,
    Container,
    Row,
    CardTitle,
    CardBody,
    CardFooter,
    Form,
    Input,
    Button,
    FormGroup,
    Label} from "reactstrap";

const LoginPanel = (props) => {
    return (
        <Card className={"login-card"}>
            <CardTitle className="login-heading">Welcome back!</CardTitle>
            <Form id="login_form">
                <CardBody>
                    <Container>
                        <Row>
                            <Col sm={{size: 10, offset: 1}}>

                                <FormGroup className={"form-label-group"}>
                                    <Input type="text" id="inputUsername" className={"form-control"} placeholder=" "
                                           required/>
                                    <Label for="inputUsername">Username</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="password" id="inputPassword" className="form-control" placeholder=" "
                                           required/>
                                    <Label for="inputPassword">Password</Label>
                                </FormGroup>

                                <FormGroup className="custom-control custom-checkbox mb-3">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <Label className="custom-control-label" for="customCheck1">
                                        Remember password
                                    </Label>
                                </FormGroup>

                            </Col>
                        </Row>
                    </Container>
                </CardBody>
                <CardFooter>
                    <Container>
                        <Row>
                            <Col sm={{size: 10, offset: 1}}>
                                <Button
                                    color="primary"
                                    className="btn-block login-btn text-uppercase font-weight-bold mb-2"
                                    type="submit">
                                    Sign in
                                </Button>
                                <div className="text-center">
                                    <a className="small" href="/welcome">New Customer?</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </CardFooter>
            </Form>
        </Card>
    );
};

export default LoginPanel;