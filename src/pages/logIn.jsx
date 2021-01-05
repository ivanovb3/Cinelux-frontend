import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import NavBar from '../components/NavBar'
import Register from '../components/Register'
import Footer from '../components/Footer'
import Helmet from '../components/Helmet'
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom'

export default class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            path: ""
        }
    }   
    /* componentDidMount() {
        if(AuthService.getCurrentUser() != null){
            <Redirect to="../"/>
        }
    }  */
    render() {
        return (
            <div>
                <NavBar />
                {this.props.location.pathname == "/login" ? <LogIn /> : <Register />}  
                <Footer /> 
                <Helmet />              
            </div>
        )
    }
}
