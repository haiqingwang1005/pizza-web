import '../public/css/style.css';

import React, {useEffect, useState} from 'react';
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
import {pizzaGetRequest} from "../utils/pizza_url";
import { useCookies } from "react-cookie";

const NamePlace = (props) => {
    const [name, setName] = useState('');
    useEffect(() => {
        pizzaGetRequest('/profile', props.token,
            (status, data) => {
                console.log(data.firstname);
                setName(data.firstname);
            },
            (status, data) => {
                console.error(`fail to get name ${data}`);
            },
            (error) => {
                console.error(error);
            });
    });

    return (
        <span>
            {`Hello, ${name}`}
        </span>
    );
};

const UserNav = (props) => {
    if (props.token) {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <NamePlace token={props.token}/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem onClick={() => {
                        console.log('sign out');
                        props.remove('token');
                    }}>
                        Sign out
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    } else {
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
    }
};

const PizzaNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(undefined);
    const toggle = () => setIsOpen(!isOpen);

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        setToken(cookies.token);
    });

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
                        <UserNav token={token} remove={removeCookie}/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default PizzaNav;