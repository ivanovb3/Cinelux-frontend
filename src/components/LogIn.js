import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/LogIn.css'
import { Link, withRouter } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

class LogIn extends Component {


    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            message: "",
            loading: false
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

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push({
                        pathname: '/',
                        state: { isLoggedIn: true, success: true }
                    })
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        return (
            <div className="wrapperLogIn">
                <Form className="formContainer" onSubmit={this.handleSubmit} ref={c => { this.form = c; }}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    </div>
                    <br></br>
                    <Link to="register" className="registerLink">Now account? Regiser Now!</Link>
                    <br></br>
                    {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                    </div>
                </Form>
            </div >
        )
    }
}


export default withRouter(LogIn)


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

