import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/LogIn.css'
import Axios from 'axios'
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'

export default class Register extends Component {


    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){        
        event.preventDefault()
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            isAdmin: 0
        }
        UserService.addUser(user)/* .then(res =>{

        } )*/  
        
    }


    render() {
        return (
            <div className="wrapperRegister">
                <Form className="formContainer" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name and Surname</Form.Label>
                        <Form.Control
                            name="name"
                            value={this.state.name}
                            type="text"
                            placeholder="Enter name"
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            value={this.state.email}
                            type="email"
                            placeholder="Enter email"
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={this.state.password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            type="password"
                            placeholder="Confirm Password" 
                            onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                    <br></br>
                    <Link to="login" className="registerLink">Already have account? Log In Now!</Link>
                </Form>
            </div>
        )
    }
}
