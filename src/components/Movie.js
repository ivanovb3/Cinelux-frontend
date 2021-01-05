import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ProjectionService from '../services/ProjectionService'
import '../styles/movie.css'
import Card from 'react-bootstrap/Card'
import Calendar from '../components/Calendar'
import Projections from '../components/Projections'

class Movie extends Component {

    /* constructor(props) {
        super(props)
        this.state = {
            movie: {},
             projectionsInSelectedDate: [] 
        }
         this.handleChangeDay = this.handleChangeDay.bind(this); 
    } */

    /* componentDidMount() {
        this.setState({ movie: this.props.location.state.movie })
    } */
    /* handleChangeDay(event) {
        console.log(event)
        const { value } = event

        ProjectionService.getProjectionsByDateAndMovie(event, this.state.movie)
            .then((response) => {
                this.setState({ projectionsInSelectedDate: response.data })
                console.log(this.state.projectionsInSelectedDate);
            })
    } */

    getStart(){
        return this.props.projection.time.substring(0,5)
    }
    render() {
        /* screenTime = screenTime.substring(0, 5) */
        /* let endTime = this.props.projection.time.getTime() */
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`data:image/png;base64,${this.props.movie.picture}`} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.name}</Card.Title>
                        <Card.Text>
                            Runtime: {this.props.movie.runtime} minutes
                            {this.props.projection != undefined ? <div>Projection time:  {this.props.projection.time}</div> : null}
                            </Card.Text>
                    </Card.Body>
                </Card>





                {/* <div className="rightContainer">
                    <Calendar handleChangeDay={this.handleChangeDay} />
                    <div className="projections">
                        <Projections projectionsInSelectedDate={this.state.projectionsInSelectedDate} />
                    </div>
                </div> */}

            </div>
        )
    }
}

export default withRouter(Movie)
