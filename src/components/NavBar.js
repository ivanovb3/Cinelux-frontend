import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBar.css';
import '../services/UserService'
import UserService from '../services/UserService';
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            user: []
        }
        this.handleLogInOut = this.handleLogInOut.bind(this);
    }

    componentDidMount() {
        UserService.getUserById(1)
            .then((response) => {
                this.setState({ user: response.data })
            })
        //this.setState({ user: this.props.location.state.user })
    }
    handleLogInOut() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }
    render() {
        let logInOutText = this.state.isLoggedIn ? 'Log Out' : 'Log In'
        let profileLink = this.state.isLoggedIn ? <Nav.Link href="#link" className="links">Profile</Nav.Link> : null
        return (
            <div>
                <Navbar bg="black" expand="lg" className="navWrapper">
                    <Navbar.Brand href="/" className="header">CINELUX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-right" className="linksWrapper">
                            <Nav.Link href="#link" className="links">Now in cinema</Nav.Link>
                            <Nav.Link href="#link" className="links">Schedule</Nav.Link>
                            {profileLink}
                            <Nav.Link href="../login" className="links logout" onClick={this.handleLogInOut}>{logInOutText}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar)
