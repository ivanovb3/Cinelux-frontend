import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBar.css';
import '../services/UserService'
import UserService from '../services/UserService';

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            user: []
        }
        this.handleLogInOut = this.handleLogInOut.bind(this);
    }

    componentDidMount() {
       /*  fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(response => {
                const { newUser } = response.data
                console.log("kur")
                this.setState({ users: newUser })
            }) */
            UserService.getUser()
            .then((response) => {
                this.setState({user : response.data})
            })
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
                            <Nav.Link href="login" className="links logout" onClick={this.handleLogInOut}>{logInOutText}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>   
        {/* <h1>{this.state.user.name}</h1> */}             
            </div>
        )
    }
}
