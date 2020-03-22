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
    Label
} from "reactstrap";

const SignUpPanel = (props) => {
    return (
        <Card className={"login-card"}>
            <CardTitle className="login-heading">Sign Up</CardTitle>
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
                                    <Input type="email" id="inputEmail" className="form-control" placeholder=" "
                                           required/>
                                    <Label htmlFor="inputEmail">Email address</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="text" id="inputFirstName" className="form-control" placeholder=" "
                                           required/>
                                    <Label for="inputFirstName">First name</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="text" id="inputLastName" className="form-control" placeholder=" "
                                           required/>
                                    <Label for="inputLastName">Last name</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group">
                                    <Input type="password" id="inputPassword" className="form-control" placeholder=" "
                                           required/>
                                    <Label for="inputPassword">Password</Label>
                                </FormGroup>

                                <FormGroup className="form-label-group" id="verifyPasswordDiv">
                                    <Input type="password" id="verifyPassword" className="form-control" placeholder=" "
                                           required/>
                                    <Label for="verifyPassword">Verify Password</Label>
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
                                    Sign up
                                </Button>
                                <div className="text-center">
                                    <a className="small" href="/login">Already have an account?</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </CardFooter>
            </Form>
        </Card>
    );
};

export default SignUpPanel;