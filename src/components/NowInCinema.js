import React, { Component } from 'react'
import { FixedSizeGrid as Grid } from 'react-window';
import MovieService from '../services/MovieService';
import '../styles/NowInCinema.css'
import { Link, withRouter } from 'react-router-dom'


 class NowInCinema extends Component {

    constructor() {
        super()
        this.state = {
            moviesList: [{ name: "" }]
        }

        this.deleteMovie = this.deleteMovie.bind(this)

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

    deleteMovie(e){
        const btnValue = e.currentTarget.value;
        MovieService.deleteMovie(btnValue); 
        window.location.reload()        
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
                    <button onClick={this.deleteMovie} value={d.id} style={{ marginRight: '2%', border: 'none', width: '6%', backgroundColor: 'transparent', padding: '0', outline: 'none' }}>
                    {this.props.isAdmin ? <i class="fas fa-trash-alt" style={{color:'red'}}></i> : null}
                    </button>
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
