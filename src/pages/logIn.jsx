import React, { Component } from 'react'
import LogIn from '../components/LogIn'
import NavBar from '../components/NavBar'
import Register from '../components/Register'

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
            </div>
        )
    }
}
