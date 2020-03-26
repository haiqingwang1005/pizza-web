import '../public/css/style.css';

import React, {useState} from 'react';
import Link from 'next/link';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import getAuthToken from "../utils/token_utils";

const isCookiesAvailable = () => {
    const token = getAuthToken();
    return !!token;
};

const UserNav = (props) => {
    if (props.isSignedIn) {
        console.log('Not sign in');
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Please sign in
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <Link href="/login">
                            <a>Sign in</a>
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/signup">
                            <a>Sign up</a>
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    } else {
        console.log('already sign in');
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
};

const PizzaNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">
                    <FontAwesomeIcon icon={faPizzaSlice}/>
                </NavbarBrand>

                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/welcome" passHref>
                                <NavLink>Home</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/menu" passHref>
                                <NavLink>Menu</NavLink>
                            </Link>
                        </NavItem>
                        <UserNav isSignedIn={props.isSignedIn}/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

PizzaNav.getInitialProps = async function() {
    const isSignedIn = isCookiesAvailable();

    return {
        isSignedIn: isSignedIn
    };
};


export default PizzaNav;