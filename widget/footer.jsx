import '../public/css/style.css';
import React from "react";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    Navbar,
    NavLink,
    NavItem, Nav
} from 'reactstrap';

const PizzaFooter = () => {
    return (
        <Navbar color="dark" variant="dark" sticky="bottom" >
            <Nav className="mx-auto" navbar>
                <NavItem>
                    <NavLink href={"https://github.com/haiqingwang1005"} style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faCopyright}/>
                        <span className={"footer-text"}>
                            {new Date().getFullYear()} Copyright: Haiqing Wang
                        </span>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default PizzaFooter;