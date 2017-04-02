import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="">MS-Basketball</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Create Event</NavItem>
                    <NavItem eventKey={1} href="#">Sign up</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavigationBar