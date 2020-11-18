import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ProjectionService from '../services/ProjectionService'
import '../styles/movie.css'

class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {},
            currentDate: "",
            projectionsInSelectedDate: []
        }
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }

    componentDidMount() {
        let current = this.getCurrentDay();
        this.setState({ movie: this.props.location.state.movie, currentDate: current })
    }


    getCurrentDay(index) {
        let date = new Date();
        let day = date.getDate() + index
        let month = date.getMonth() + 1
        let current = day + '/' + month
        return current;
    }
    getCurrentDate(index) {
        let date = new Date()
        let day = date.getDate() + index
        let month = date.getMonth() + 1
        let year = date.getFullYear();
        let current = year + '-' + month + '-' + day;
        return current;
    }
    getDayOfWeek(day) {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let day1 = weekday[day].toString();
        let returnDay = day1.substring(0, 3)
        return returnDay;

    }

    handleChangeDay(event) {
        const { value } = event.target

        ProjectionService.getProjectionsByDateAndMovie(value, this.state.movie)
            .then((response) => {
                this.setState({ projectionsInSelectedDate: response.data })
                console.log(this.state.projectionsInSelectedDate);
            })
    }



    render() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const items = []

        let date = new Date();
        let day = date.getDay()
        for (const [index, value] of days.entries()) {
            var realDay = day + index
            realDay = realDay % 7
            items.push(
                <div className="dateContainer">
                    <li>
                        <button
                            name={this.getCurrentDay(index)}
                            value={this.getCurrentDate(index)}
                            onClick={this.handleChangeDay}
                            className="date">{this.getDayOfWeek(realDay)} {this.getCurrentDay(index)}</button>
                    </li>
                </div>
            )
        }
        const projections = []
        for (const [index, value] of this.state.projectionsInSelectedDate.entries()) {
            projections.push(
                <div>
                    <h1>{this.state.projectionsInSelectedDate[index].time}</h1>
                </div>
            )
        }

        return (
            <div>
                <div className="leftContainer">
                    <img src={process.env.PUBLIC_URL + '/movies/default.jpg'} className="image" />
                    <p className="movieName">{this.state.movie.name}</p>
                </div>

                <div className="rightContainer">
                    <ul>{items}</ul>
                </div>

                <div className="projections">{projections}</div>

            </div>
        )
    }
}

export default withRouter(Movie)
