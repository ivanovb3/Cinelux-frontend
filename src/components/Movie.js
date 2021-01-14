import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/movie.css'
import Card from 'react-bootstrap/Card'

class Movie extends Component {

    getStart(){
        return this.props.projection.time.substring(0,5)
    }
    render() {
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
            </div>
        )
    }
}

export default withRouter(Movie)
