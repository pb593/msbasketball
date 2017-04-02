import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">MS-Basketball</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1}><Link to="/newEvent">Create Event</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/signup">Sign up</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavigationBar