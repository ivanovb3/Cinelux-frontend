import React from 'react'
import { Component } from 'react'

import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'
import NewMovie from '../components/NewMovie'
import NowInCinema from '../components/NowInCinema'
import Footer from '../components/Footer'


class MainPage extends Component {
     constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            user: [],
            isAdmin: false
        }
    }
    /* componentDidMount() {
        this.setState({ user: this.props.location.state.user })
    } */ 
    render() {
        return (
            <div>
                <NavBar /> 
                <NewMovie isAdmin = {this.state.isAdmin}/>   
                <NowInCinema /> 
                <Footer />                           
            </div>

        )
    }
}

export default withRouter(MainPage)

