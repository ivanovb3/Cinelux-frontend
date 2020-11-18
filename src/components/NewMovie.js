import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../styles/NewMovie.css'
import MovieService from '../services/MovieService';

export default class NewMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            image: "/movies/default.jpg",
            runtime: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        let movie = {
            name: this.state.name,
            picture: this.state.image,
            runtime: this.state.runtime
        }
        console.log(this.state.name +" "+ this.state.image)
        MovieService.addMovie(movie) 
    }

    render() {
        if(this.props.isAdmin){
        return (
            <div className="wrapper">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col xs={7}>
                            <Form.Control
                                name="name"
                                value={this.state.name}
                                placeholder="Name of movie"
                                onChange={this.handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={7}>
                            <Form.Control
                                name="runtime"
                                value={this.state.runtime}
                                placeholder="Movie runtime(in minutes)"
                                onChange={this.handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.File
                        name="image"
                        id="moviePic"
                        label="Choose image"
                        onChange={this.handleChange}
                        custom
                    />
                    <Button variant="primary" type="submit">
                        Add movie
                    </Button>
                </Form>
            </div>
        )}
        else{
            return(<div></div>)
        }
    }
}
