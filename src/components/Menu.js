import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Menu() {
    //const handleSelect = eventKey => alert(`selected ${eventKey}`);

    return (
        <Nav activeKey="1" className="navbar navbar-expand-lg navbar-light bg-dark">
            <Navbar.Brand><Nav.Link eventKey="1" href="/">
                REHEM
            </Nav.Link></Navbar.Brand>

            <Nav.Item>
                <Nav.Link href ="/donate"  title="Item">
                    Donate
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href ="/about"  title="Item">
                    About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href ="/contact"  title="Item">
                    Contact
                </Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default Menu;