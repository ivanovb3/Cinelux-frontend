import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBar.css';
import '../services/UserService'
import { withRouter } from 'react-router-dom'

import AuthService from "../services/auth.service";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentDidMount() {
        console.log(AuthService.getCurrentUser());
        if (AuthService.getCurrentUser() != null) {
            this.setState({ isLoggedIn: true })
        }
    }
    handleLogOut() {
        AuthService.logout()
        window.location.reload();
    }
    render() {
        let profileLink = this.state.isLoggedIn ? <Nav.Link href="../../tickets" className="links">Tickets</Nav.Link> : null
        let logInOutLink = this.state.isLoggedIn ? <Nav.Link href="" className="links logout" onClick={this.handleLogOut}>Log out</Nav.Link> : <Nav.Link href="../../login" className="links logout">Log in</Nav.Link>
        return (
            <div>
                <Navbar bg="black" expand="lg" className="navWrapper" /* fixed="top" */>
                    <Navbar.Brand href="../../../" className="header">CINELUX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-right" className="linksWrapper">
                            <Nav.Link href="../../" className="links">Now in cinema</Nav.Link>
                            <Nav.Link href="../../movies-schedule" className="links">Schedule</Nav.Link>
                            {profileLink}
                            {logInOutLink}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar variant="tabs" activeKey="/ne" className="secondNav">
                    <Nav.Item>
                    <Nav.Link className="secondNavLink">What's on</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="secondNavLink">Gifts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="secondNavLink">COVID-19</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="secondNavLink">IMAX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="secondNavLink">4DX</Nav.Link>
                    </Nav.Item>
                    
                </Navbar>  
            </div>
        )
    }
}

export default withRouter(NavBar)
