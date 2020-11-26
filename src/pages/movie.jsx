import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Movie from '../components/Movie'
import { withRouter } from 'react-router-dom'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'

class MoviePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                 <Movie />  
                {/* <Calendar /> */}
                 <Footer /> 
            </div>

        )
    }
}

export default withRouter(MoviePage)
