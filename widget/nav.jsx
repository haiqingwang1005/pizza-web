import '../public/css/style.css';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

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
import {fetcherWithToken} from "../utils/pizza_url";
import useSWR from "swr";
import Router from "next/router";

const signOut = () => {
    console.log('sign out');
    Cookies.remove('token');
    Router.push('/');
};

const getFirstName = () => {
    const {data, error} = useSWR('/profile', fetcherWithToken);
    if (error) {
        return undefined;
    }
    if (data && data.status === 200) {
        return data.response.firstname;
    } else {
        return undefined;
    }
};

const UserDropdown = (props) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                <span>
                    {`Hello, ${props.name}`}
                </span>
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <Link href={"/cart"}>
                        <a className={"nav-drop-link"}>Shop Cart</a>
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link href={"/"}>
                        <a className={"nav-drop-link"}>My Orders</a>
                    </Link>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={signOut}>
                    Sign out
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

const AnonymousDropdown = (props) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Please sign in
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <Link href="/login">
                        <a className={"nav-drop-link"}>Sign in</a>
                    </Link>
                </DropdownItem>
                <DropdownItem>
                    <Link href="/signup">
                        <a className={"nav-drop-link"}>Sign up</a>
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

const PizzaNavDropdown = (props) => {
    const [name, setName] = useState();

    const firstname = getFirstName();
    useEffect(() => {
        setName(firstname);
    });

    if (name) {
        return (
            <UserDropdown name={name}/>
        );
    } else {
        return (
            <AnonymousDropdown/>
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
                        <PizzaNavDropdown/>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default PizzaNav;