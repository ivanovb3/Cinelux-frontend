import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Movie from '../components/Movie'
import { withRouter } from 'react-router-dom'
import Footer from '../components/Footer'

class MoviePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Movie />
                {/* <Footer />  */}
            </div>

        )
    }
}

export default withRouter(MoviePage)
