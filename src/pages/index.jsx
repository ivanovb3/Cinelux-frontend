import React from 'react'
import { Component } from 'react'

import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'

/* const MainPage = () => {
    return (
         <NavBar /> 
    )
}
export default MainPage; */

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            user: []
        }
    }
    componentDidMount() {
        this.setState({ user: this.props.location.state.user })
    }
    render() {
        return (
            <div>
                <NavBar />
                <h1>{this.state.user.name}</h1>
            </div>

        )
    }
}

export default withRouter(MainPage)

