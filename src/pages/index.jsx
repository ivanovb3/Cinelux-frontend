import React from 'react'
import { Component } from 'react'

import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'
import NewMovie from '../components/NewMovie'
import NowInCinema from '../components/NowInCinema'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Helmet from '../components/Helmet'

import AuthService from "../services/auth.service";


class MainPage extends Component {
     constructor(props) {
        super(props)
        this.state = {
            isAdmin: false
        }
    }
    componentDidMount(){
        if(AuthService.getCurrentUser() != null){
            if(AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")){
                this.setState({isAdmin: true})
            }
        }
    }
    render() {
        return (
            <div>
                <NavBar isLoggedIn = {this.state.isLoggedIn}/> 
                <Carousel />
                <NewMovie isAdmin = {this.state.isAdmin}/>   
                <NowInCinema isAdmin = {this.state.isAdmin}/> 
                <Footer />  
                <Helmet />                         
            </div>

        )
    }
}

export default withRouter(MainPage)

