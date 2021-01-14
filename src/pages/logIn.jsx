import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import NavBar from '../components/NavBar'
import Register from '../components/Register'
import Footer from '../components/Footer'
import Helmet from '../components/Helmet'

export default class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            path: ""
        }
    }   
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
