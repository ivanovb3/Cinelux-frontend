import React, { Component } from 'react'
import { FixedSizeGrid as Grid } from 'react-window';
import MovieService from '../services/MovieService';
import '../styles/NowInCinema.css'
import { Link, withRouter } from 'react-router-dom'



let movieListArray = [[{ name: "" }]];

 class NowInCinema extends Component {

    constructor() {
        super()
        this.state = {
            moviesList: [{ name: "" }]
        }


    }

    componentDidMount() {
        let movies = MovieService.getAllMovies()

        movies.then(movie => {
            /* const name = movie.data[0].name; */
            this.setState({ moviesList: movie.data })
            console.log(this.state.moviesList)
           // console.log(this.state.moviesList[0].name)
        })
    }

    render() {
        let moviesListItem = this.state.moviesList.map((d) => {
            return (
                <div className="movieWrapper">
                    <Link
                        to={{
                            pathname: 'film/' + d.name,
                            state: {
                                movie: d
                            }                            
                        }}
                            >
                            <div className="movieWrapperContent">
                                <img src={`data:image/png;base64,${d.picture}`} className="imageNow" />
                                <p className="movieName">{d.name}</p>
                            </div>
                    </Link>
                </div>

            )
        });


        return (
            <div className="wrapper">
                {moviesListItem}
            </div>
        )
    }
}

export default withRouter(NowInCinema)
