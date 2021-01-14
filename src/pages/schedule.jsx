import React, { Component } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Calendar from '../components/Calendar'
import Projections from '../components/Projections'
import NewProjection from '../components/NewProjection'
import Helmet from '../components/Helmet'

import '../styles/Schedule.css'

import ProjectionService from '../services/ProjectionService'
import Movie from '../components/Movie'
import AuthService from "../services/auth.service";

export default class SchedulePage extends Component {
    constructor() {
        super()
        this.state = {
            movie: {},
            projectionsInSelectedDate: [],
            firstDate: false,
            isAdmin: false
        }
        this.handleChangeDay = this.handleChangeDay.bind(this);
        this.getMovieProjections = this.getMovieProjections.bind(this)
    }
    componentDidMount(){
        if(AuthService.getCurrentUser() != null){
            if(AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")){
                this.setState({isAdmin: true})
            }
        }
    }

    handleChangeDay(event) {
        const { value } = event

        ProjectionService.getProjectionsByDate(event)
            .then((response) => {
                this.setState({ projectionsInSelectedDate: response.data })
            })
        if (!this.state.firstDate) {
            this.setState({ firstDate: true })
        }

    }

    // SEPARETES PROJECTIONS BY MOVIE------------------------------------------------------
    getMovieProjections(name) {
        let screens = []
        for (const [index, value] of this.state.projectionsInSelectedDate.entries()) {
            if (this.state.projectionsInSelectedDate[index].movie.name == name) {
                screens.push(this.state.projectionsInSelectedDate[index])
            }
        }
        screens.sort((a, b) => parseFloat(a.time) - parseFloat(b.time))   //sorts projections by time
        return screens;
    }
    //=====================================================================================

    render() {

        // GETS EVERY MOVIE THAT HAS A SCREEN TIME ON CHOSEN DATE------------------------------------------
        let moviesThatDay = []

        if (this.state.projectionsInSelectedDate.length > 0) {
            moviesThatDay.push(this.state.projectionsInSelectedDate[0].movie.name)
            moviesThatDay.push(this.state.projectionsInSelectedDate[0].movie)
        }
        for (const [index, value] of this.state.projectionsInSelectedDate.entries()) {
            if (!moviesThatDay.includes(this.state.projectionsInSelectedDate[index].movie.name)) {
                moviesThatDay.push(this.state.projectionsInSelectedDate[index].movie)
            }
        }
        moviesThatDay.shift();
        //=================================================================================================


        //RENDERS A MOVIE AND IT'S PROJECTIONS---------------------------------------------------------
        const schedule = []
        if (moviesThatDay.length > 0) {
            for (const [index, value] of moviesThatDay.entries()) {
                schedule.push(
                    <div>
                        <div className="scheduleMovie">
                            <Movie movie={moviesThatDay[index]} />
                            <div className="scheduleProjections">
                                <Projections projectionsInSelectedDate={this.getMovieProjections(moviesThatDay[index].name)} movie={moviesThatDay[index]} />
                            </div>                        
                        </div>
                        <ColoredLine color='white' />
                    </div>
                )
            }
        }
        else {
            schedule.push(
                <div className="scheduleMovie">
                    <h1 className="instruction">There are currently no projections scheduled on this date</h1>
                </div>
            )
        }
        //============================================================================================

        return (
            <div>
                <NavBar />
                <NewProjection isAdmin = {this.state.isAdmin} />
                <div className="scheduleCalendar">
                    <Calendar handleChangeDay={this.handleChangeDay} />
                </div>
                {schedule}
                {this.state.projectionsInSelectedDate.length == 0 ? <div><br /><br /><br /><br /></div> : null }
                <Footer />
                <Helmet />
            </div>
        )
    }
}


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: '90%',
            marginLeft: '5%',
            marginBottom: 4
        }}
/>
);