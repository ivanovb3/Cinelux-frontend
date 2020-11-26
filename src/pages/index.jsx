import React from 'react'
import { Component } from 'react'

import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'
import NewMovie from '../components/NewMovie'
import NowInCinema from '../components/NowInCinema'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'



class MainPage extends Component {
     constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            user: [],
            isAdmin: false
        }
    }
    /* componentDidMount(){
        if(this.props.location.state.success){
            isLoggedIn = true
        }
    } */
    render() {
        return (
            <div>
                <NavBar isLoggedIn = {this.state.isLoggedIn}/> 
                <Carousel />
                <NewMovie isAdmin = {this.state.isAdmin}/>   
                <NowInCinema /> 
                <Footer />                           
            </div>

        )
    }
}

export default withRouter(MainPage)

