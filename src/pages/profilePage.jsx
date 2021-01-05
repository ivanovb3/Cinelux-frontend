import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

import AuthService from "../services/auth.service";
import Ticket from '../components/Ticket';
import '../styles/profile.css';

export default class ProfilePage extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        if(AuthService.getCurrentUser() == null){
            this.props.history.push({
                pathname: '../../'
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <Ticket user={AuthService.getCurrentUser()} />
                <Footer />
            </div>
        )
    }
}
