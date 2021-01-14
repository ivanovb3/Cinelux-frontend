import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'
import TimeInput from 'react-input-time';
import Dropdown from 'react-bootstrap/Dropdown'

import ProjectionService from '../services/ProjectionService'
import MovieService from '../services/MovieService'


export default class NewProjection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: 0,
            date: null,
            time: null,
            moviesList: [{ name: "" }]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDayChange = this.handleDayChange.bind(this)
        this.handleChangeMovie = this.handleChangeMovie.bind(this)
    }
    componentDidMount() {
        let movies = MovieService.getAllMovies()
        movies.then(movie => {
            this.setState({ moviesList: movie.data })
        })
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleChangeMovie(event) {
        this.setState({
            movie: event.target.name
        })
        console.log(event.target.name)
    }
    handleSubmit(event) {
        event.preventDefault()
        let projection = {
            movie: { id: this.state.movie },
            date: this.state.date,
            time: this.state.time + ':00',
            /* movie: { id: 3 }, */
            //date: '2021-01-15',
            /* time: '15:00:00' */
        }
        ProjectionService.addProjection(projection)
        /*  window.location.reload() */
    }
    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
        let date = input.value.slice(0, 5) + '0' + input.value.slice(5)
        this.setState({
            date: date
        });
        console.log(date)
    }
    render() {
        if (this.props.isAdmin) {
            let moviesListItem = this.state.moviesList.map((d) => {
                return (
                    <div>
                        <Dropdown.Item name={d.id} onClick={this.handleChangeMovie}>{d.name}</Dropdown.Item>
                    </div>
                )
            });
            /* console.log(this.state.moviesList)   */
            return (
                <div className="wrapperAddMovie">
                    <div className="instruction" style={{ textAlign: 'center' }}>Add a new projection</div>
                    <ColoredLine color='white' />
                    <Form onSubmit={this.handleSubmit}>
                        <div className="newProjection">
                            <Form.Row>
                                <Col xs={7}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Choose a movie
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {moviesListItem}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col xs={7}>
                                    <TimeInput
                                        name="time"
                                        placeholder="Select a time"
                                        className="input-time"
                                        /* initialTime="12:00" */
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col xs={7}>
                                    <DayPickerInput
                                        /* name="date"
                                        value={this.state.date}  */
                                        placeholder="Select a date"
                                        format="YYYY-MM-DD"
                                        onDayChange={this.handleDayChange}
                                        selectedDay={this.state.date}
                                    />
                                </Col>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Add projection
                    </Button>
                        </div>
                    </Form>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }
}
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: '90%',
            marginLeft: '5%',
        }}
    />
);
