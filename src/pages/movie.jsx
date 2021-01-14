import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Movie from '../components/Movie'
import { withRouter } from 'react-router-dom'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'
import Helmet from '../components/Helmet'
import ProjectionService from '../services/ProjectionService'
import Projections from '../components/Projections'

class MoviePage extends Component {
    constructor() {
        super()
        this.state = {
            movie: {},
            projectionsInSelectedDate: [],
            firstDate: false
        }
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }
    componentDidMount() {
        this.setState({ movie: this.props.location.state.movie })
    }

    handleChangeDay(event) {
        console.log(event)

        ProjectionService.getProjectionsByDateAndMovie(event, this.state.movie)
            .then((response) => {
                this.setState({ projectionsInSelectedDate: response.data })
                console.log(this.state.projectionsInSelectedDate);
            })
        if (!this.state.firstDate) {
            this.setState({ firstDate: true })
        }
    }
    render() {
        this.state.projectionsInSelectedDate.sort((a, b) => parseFloat(a.time) - parseFloat(b.time)) //sorts projections by time
        return (
            <div>
                <NavBar />
                <div className="leftContainer">
                <Movie movie={this.state.movie} />
                </div>
                <div className="rightContainer">
                    {this.state.firstDate ? null : <h2 className="instruction">Please choose a desired date and time for a projection</h2>}
                    <Calendar handleChangeDay={this.handleChangeDay} />
                    <div className="projections">
                        <Projections projectionsInSelectedDate={this.state.projectionsInSelectedDate} movie={this.state.movie}/>
                    </div>
                </div>
                <Footer />
                <Helmet />
            </div>

        )
    }
}

export default withRouter(MoviePage)
