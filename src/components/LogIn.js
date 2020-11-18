import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/LogIn.css'
import { Link, withRouter } from 'react-router-dom'
import UserService from '../services/UserService';

class LogIn extends Component {


    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { history } = this.props;
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        UserService.logInUser(this.state.email, this.state.password)

            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    if (!Object.keys(res.data).length) {
                        console.log("wrong info");
                    }
                    else {
                         this.props.history.push({
                            pathname: '/',
                            state: { user: res.data }
                        }) 
                    }
                }
            })
    }


    render() {
        return (
            <div className="wrapperLogIn">
                <Form className="formContainer" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            value={this.state.email}
                            type="email"
                            placeholder="Enter email"
                            onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <br></br>
                    <Link to="register" className="registerLink">Now account? Regiser Now!</Link>
                </Form>
            </div>
        )
    }
}

export default withRouter(LogIn)
