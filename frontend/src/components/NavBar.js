import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component{
    render(){
        return(
        <Navbar bg="primary" variant='dark'>
            <Navbar.Brand href="#home">Boast-Roast</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/newpost">New Post</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavBar
